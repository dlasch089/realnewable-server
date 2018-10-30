'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
/* Request to Entsoe platform */
router.get('/', (req, res, next) => {
  res.send('Hello there - this is the official realnewable API. You can find any information about usage at the TUM chair for renewable systems.');
});

module.exports = router;
