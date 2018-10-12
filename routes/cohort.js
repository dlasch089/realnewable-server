'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Cohort = require('../models/cohort');
const Day = require('../models/day');

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
  const days = [];
  for (let ix = 0; ix < 5; ix++) {
    const day = new Day(startDate + ix);
    day.save();
    days.push(day);
  }
  const cohort = new Cohort({
    teacher: req.body.teacher,
    tas: req.body.tas,
    students: req.body.students,
    type: req.body.type,
    language: req.body.language,
    days: days
  });
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
    .populate('students')
    .populate('tas')
    .populate('teacher')
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
