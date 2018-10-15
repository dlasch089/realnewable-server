'use strict';

const express = require('express');
const router = express.Router();
// const ObjectId = require('mongoose').Types.ObjectId;

const User = require('../models/user');

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  User.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

module.exports = router;
