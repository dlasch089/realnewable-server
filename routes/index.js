'use strict';

const express = require('express');
const router = express.Router();

const request = require('request');

let energyData = null;

/* GET home page. */
router.get('/', (req, res, next) => {
  request('https://transparency.entsoe.eu/api?securityToken=' + process.env.ENTSOE_KEY + '&documentType=A69&processType=A01&psrType=B16&in_Domain=10YDE-EON------1&periodStart=201810150000&periodEnd=201910150000', (err, res, body) => {
    if (err) { return console.log(err); }
    console.log('What is this?', body);
    console.log(body.explanation);
    this.energyData = body;
  });
  res.json({ code: 'Hello Ironhackerzzzzzzz XP' });
});

module.exports = router;
