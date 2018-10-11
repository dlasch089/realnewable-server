'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../../data/curriculums.js');

const Curriculum = require('../../models/curriculum.js');
const Unit = require('../../models/unit');

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
};

function updateUnits (unit, curriculum, index) {
  return Unit.findOne({ title: unit })
    .then((unit) => {
      if (!unit) {
        throw new Error('Unknown unit ' + unit);
      }
      curriculum.units[index] = unit._id;
    });
}

function updateUnitIds (curriculum) {
  const promisesOfUpdatingOwnerId = curriculum.units.map((unit, index) => updateUnits(unit, curriculum, index));
  return Promise.all(promisesOfUpdatingOwnerId);
}

mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to Mongo!');
    return Curriculum.remove({});
  })
  .then(() => {
    const promisesOfUpdatingUnitId = data.map((curriculum) => updateUnitIds(curriculum));
    return Promise.all(promisesOfUpdatingUnitId);
  })
  .then(() => {
    console.log('Empty db');
    return Curriculum.insertMany(data);
  })
  .then((results) => {
    console.log('You have new curriculums', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
