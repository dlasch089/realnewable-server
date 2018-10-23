'use strict';

const express = require('express');
const router = express.Router();

const request = require('request');

const parseString = require('xml2js').parseString;

/* GET home page. */
/* Request to Entsoe platform */
router.get('/', (req, res, next) => {
  request('https://transparency.entsoe.eu/api?securityToken=' + process.env.ENTSOE_KEY + '&documentType=A69&processType=A01&psrType=B16&in_Domain=10YDE-EON------1&periodStart=201810230000&periodEnd=201910230000', (err, response, body) => {
    if (response) {
      // Convert the xml-string with energy data to a json object
      let xml = body;
      parseString(xml, (error, result) => {
        // error handler
        if (error) {
          console.log('XML parse error:' + error);
        } else {
          // The time period of the generation is in GL_MarketDocument.TimeSeries[0].Period[0].Point --> Needs to be extracted for each object
          console.log(result.GL_MarketDocument.TimeSeries[0].Period[0].Point);
          res.send(result);
        }
      });
    } else {
      console.log(body.explanation);
      return console.log('Error message:', err.message);
    }
  });
});

module.exports = router;
