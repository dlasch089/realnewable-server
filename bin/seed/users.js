'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../../data/users.js');

const User = require('../../models/user.js');

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
};
mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to Mongo!');
    return User.remove({});
  })
  .then((result) => {
    console.log('Empty db');
    return User.insertMany(data);
  })
  .then((results) => {
    console.log('You have new users', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
