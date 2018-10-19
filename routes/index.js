'use strict';

const express = require('express');
const router = express.Router();

const request = require('request');

/* GET home page. */
/* Request to Entsoe platform */
router.get('/', (req, res, next) => {
  request('https://transparency.entsoe.eu/api?securityToken=' + process.env.ENTSOE_KEY + '&documentType=A69&processType=A01&psrType=B16&in_Domain=10YDE-EON------1&periodStart=201810180000&periodEnd=201910180000', (err, response, body) => {
    if (response) {
      console.log(body);
      res.send(body);
    } else {
      console.log(body.explanation);
      return console.log('What is this? An error?', err);
    }
  });
  // res.json({ code: 'Hello Ironhackerzzzzzzz XP' });
});

module.exports = router;
