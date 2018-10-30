'use strict';

const express = require('express');
const router = express.Router();

const request = require('request');

const parseString = require('xml2js').parseString;

/* GET forecasts. */
/* Request to Entsoe platform */
router.get('/realnewable-time', (req, res, next) => {
  request('https://transparency.entsoe.eu/api?securityToken=' + process.env.ENTSOE_KEY + '&documentType=A69&processType=A01&psrType=B16&in_Domain=10YDE-EON------1&periodStart=201810230000&periodEnd=201910230000', (err, response, body) => {
    if (response) {
      // Convert the xml-string with energy data to a json object
      let xml = body;
      parseString(xml, (error, result) => {
        // error handler
        if (error) {
          console.log('XML parse error:' + error);
        } else {
          let resultArray = result.GL_MarketDocument.TimeSeries[0].Period[0].Point;
          // The time period of the generation is in GL_MarketDocument.TimeSeries[0].Period[0].Point --> Needs to be extracted for each object
          // console.log(result.GL_MarketDocument.TimeSeries[0].Period[0].Point);
          let newResultArray = resultArray.map(el => {
            console.log(el);
            parseInt(el.position);
            parseInt(el.quantity);
          });
          console.log(newResultArray);
          res.json(result.GL_MarketDocument.TimeSeries[0].Period[0].Point);
        }
      });
    } else {
      console.log(body.explanation);
      return console.log('Error message:', err.message);
    }
  });
});

// get the total-generation forecast for germany
router.get('/total-generation', (req, res, next) => {
  // expected date format: yyyyMMddHHHH
  let today = new Date();
  let dateNow = today.toISOString().slice(0, 10).replace(/-/g, '') + '0000';
  let dateTomorrow = (new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)).toISOString().slice(0, 10).replace(/-/g, '') + '0000';
  console.log(dateNow, dateTomorrow);
  request('https://transparency.entsoe.eu/api?securityToken=' + process.env.ENTSOE_KEY + '&documentType=A71&processType=A01&in_Domain=10Y1001A1001A83F&periodStart=201810230000&periodEnd=201910230000', (err, response, body) => {
    if (response) {
      // Convert the xml-string with energy data to a json object
      let xml = body;
      parseString(xml, (error, result) => {
        // error handler
        if (error) {
          console.log('XML parse error:' + error);
        } else {
          console.log(result);
          let resultArray = result.GL_MarketDocument;
          // The time period of the generation is in GL_MarketDocument.TimeSeries[0].Period[0].Point --> Needs to be extracted for each object
          console.log(resultArray);
          // let newResultArray = resultArray.map(el => {
          //   console.log(el);
          //   parseInt(el.position);
          //   parseInt(el.quantity);
          // });
          // console.log(newResultArray);
          res.json(resultArray);
        }
      });
    } else {
      console.log(body.explanation);
      return console.log('Error message:', err.message);
    }
  });
});

module.exports = router;
