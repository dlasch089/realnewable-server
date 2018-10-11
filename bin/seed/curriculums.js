'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../../data/curriculums.js');

const Curriculum = require('../../models/curriculum.js');

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
};
mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to Mongo!');
    return Curriculum.remove({});
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
