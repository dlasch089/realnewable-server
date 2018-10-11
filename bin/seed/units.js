'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../../data/units.js');

const Unit = require('../../models/unit.js');

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
};
mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to Mongo!');
    return Unit.remove({});
  })
  .then((result) => {
    console.log('Empty db');
    return Unit.insertMany(data);
  })
  .then((results) => {
    console.log('You have new units', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
