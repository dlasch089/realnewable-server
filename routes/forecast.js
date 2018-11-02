'use strict';

const express = require('express');
const router = express.Router();

const request = require('request');

const parseString = require('xml2js').parseString;

const domainIds = {
  germany: '10Y1001A1001A83F',
  tennet: '10YDE-EON------1',
  transnet: '10YDE-ENBW-----N',
  amprion: '10YDE-RWENET---I',
  hertz: '10YDE-VE-------2'
};

const psrTypes = {
  total: 'total',
  solar: 'B16',
  windOffshore: 'B18',
  windOnshore: 'B19'
};

const docTypes = {
  total: 'A71',
  solarWind: 'A69'
};

function fetchData (res, docType, psrType, domainId, periodStart, periodEnd) {
  let url = null;
  // validation of request to set the right url for the transparency platform
  if (psrType === 'total') {
    url = 'https://transparency.entsoe.eu/api?securityToken=' + process.env.ENTSOE_KEY + '&documentType=' + docType + '&processType=A01&in_Domain=' + domainIds[domainId] +
    '&periodStart=' + periodStart + '&periodEnd=' + periodEnd;
  } else {
    url = 'https://transparency.entsoe.eu/api?securityToken=' + process.env.ENTSOE_KEY + '&documentType=' + docType + '&processType=A01&in_Domain=' + domainIds[domainId] +
    '&periodStart=' + periodStart + '&periodEnd=' + periodEnd + '&psrType=' + psrType;
  }

  request(url, (err, response, body) => {
    if (response.statusCode === 200) {
    // Convert the xml-string with energy data to a json object
      let xml = body;
      parseString(xml, (error, result) => {
      // error handler of the parser method
        if (error || !result.GL_MarketDocument.TimeSeries) {
          console.log('XML parse error:' + error);
          return ({ message: 'No or unexpected answer from the api', result: result });
        } else {
          let resultArray = result.GL_MarketDocument.TimeSeries[0].Period[0].Point;
          let newResultArray = resultArray.map(el => {
            return parseInt(el.quantity);
          });
          res.json({ message: 'Total generation forecast for ' + periodStart + ' until ' + periodEnd + ' Position 0 = 00:00; resolution: Hour', result: newResultArray });
        }
      });
    // error-handler of the request method
    } else {
      res.json({ message: 'No or unexpected answer from the api', error: err, apiAnswer: body });
    }
  });
}

/*

TOTAL GENERATION FORECAST RETURNING AN ARRAY OF MW PER HOUR (POSITION 0 = 00:00 am, POSITION 24 = 23:00)

*/
router.get('/total-generation/:areaId', (req, res, next) => {
  let documentType = docTypes.total;

  // set the areaId from the get-request for the api-call
  let areaId = req.params.areaId;

  // create the periodStart and -End for the api-call; expected date format: yyyyMMddHHHH
  let today = new Date();
  let dateNow = today.toISOString().slice(0, 10).replace(/-/g, '') + '0000';
  let dateTomorrow = (new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)).toISOString().slice(0, 10).replace(/-/g, '') + '0000';

  fetchData(res, documentType, psrTypes.total, areaId, dateNow, dateTomorrow);
});

/*

SOLAR GENERATION FORECAST RETURNING AN ARRAY OF MW PER QUARTERHOUR (POSITION 0 = 00:00 am, POSITION 96 = 23:00)

*/
router.get('/solar/:areaId', (req, res, next) => {
  // expected date format: yyyyMMddHHHH
  let today = new Date();
  let dateNow = today.toISOString().slice(0, 10).replace(/-/g, '') + '0000';
  let dateTomorrow = (new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)).toISOString().slice(0, 10).replace(/-/g, '') + '0000';

  let areaId = req.params.areaId;

  fetchData(res, docTypes.solarWind, psrTypes.solar, areaId, dateNow, dateTomorrow);
});

/*

WIND OFFSHORE GENERATION FORECAST RETURNING AN ARRAY OF MW PER QUARTERHOUR (POSITION 0 = 00:00 am, POSITION 96 = 23:00)

MISSIG: validation, if it is transnet or hertz, as they do not have offshore-power-generation

*/
router.get('/wind-offshore/:areaId', (req, res, next) => {
  // expected date format: yyyyMMddHHHH
  let today = new Date();
  let dateNow = today.toISOString().slice(0, 10).replace(/-/g, '') + '0000';
  let dateTomorrow = (new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)).toISOString().slice(0, 10).replace(/-/g, '') + '0000';

  let areaId = req.params.areaId;

  fetchData(res, docTypes.solarWind, psrTypes.windOffshore, areaId, dateNow, dateTomorrow);
});

/*

WIND ONSHORE GENERATION FORECAST RETURNING AN ARRAY OF MW PER QUARTERHOUR (POSITION 0 = 00:00 am, POSITION 96 = 23:00)

*/
router.get('/wind-onshore/:areaId', (req, res, next) => {
  // expected date format: yyyyMMddHHHH
  let today = new Date();
  let dateNow = today.toISOString().slice(0, 10).replace(/-/g, '') + '0000';
  let dateTomorrow = (new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)).toISOString().slice(0, 10).replace(/-/g, '') + '0000';

  let areaId = req.params.areaId;

  fetchData(res, docTypes.solarWind, psrTypes.windOnshore, areaId, dateNow, dateTomorrow);
});

module.exports = router;
