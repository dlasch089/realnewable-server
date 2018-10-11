'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Cohort = require('../models/cohort');

router.get('/', (req, res, next) => {
  Cohort.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

router.post('/create', (req, res, next) => {
  // ----- TODO -----//
  const { type, location, language, startDate } = req.body;
  if (!type || !location || !language || !startDate) {
    return res.status(422).json({ code: 'unprosessable-entity' });
  }
  const cohort = new Cohort(req.body);
  cohort.save()
    .then(() => {
      res.status(200).json(cohort);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  Cohort.findById(id)
    .then((cohort) => {
      res.json(cohort);
    })
    .catch(next);
});

// router.delete('/:id', (req, res, next) => {
//   const id = req.params.id;
//   if (!id || !ObjectId.isValid(id)) {
//     res.status(404).json({ code: 'not-found' });
//   }
//   Cohort.remove({ _id: id })
//     .then(() => {
//       res.json({ code: 'cohort deleted' });
//     })
//     .catch(next);
// });

module.exports = router;
