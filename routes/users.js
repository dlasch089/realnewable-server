'use strict';

const express = require('express');
const router = express.Router();
// const ObjectId = require('mongoose').Types.ObjectId;

const User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

module.exports = router;
