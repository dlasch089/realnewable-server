'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
/* Request to Entsoe platform */
router.get('/', (req, res, next) => {
  res.send('Hello there - this is the official realnewable API. You can find more information on https://github.com/dlasch089/realnewable-server');
});

module.exports = router;
