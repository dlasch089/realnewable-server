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

  let startDay = new Day({ date: req.body.startDate });
  let firstDayAm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 25200000) });
  let firstDayMid = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 14400000) });
  let firstDayPm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 18000000) });
  firstDayAm.save();
  firstDayMid.save();
  firstDayPm.save();
  days.push(firstDayAm);
  days.push(firstDayMid);
  days.push(firstDayPm);

  for (let ix = 0; ix < 4; ix++) {
    let nextDayAm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 54000000) });
    let nextDayMid = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 14400000) });
    let nextDayPm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 18000000) });
    nextDayAm.save();
    nextDayMid.save();
    nextDayPm.save();
    days.push(nextDayAm);
    days.push(nextDayMid);
    days.push(nextDayPm);
    console.log(ix);
  }

  let newDate1 = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 2 * 86400000) });

  for (let ix = 0; ix < 5; ix++) {
    let nextDayAm = new Day({ date: newDate1.date.setTime(newDate1.date.getTime() + 1 * 54000000) });
    let nextDayMid = new Day({ date: newDate1.date.setTime(newDate1.date.getTime() + 1 * 14400000) });
    let nextDayPm = new Day({ date: newDate1.date.setTime(newDate1.date.getTime() + 1 * 18000000) });
    nextDayAm.save();
    nextDayMid.save();
    nextDayPm.save();
    days.push(nextDayAm);
    days.push(nextDayMid);
    days.push(nextDayPm);
    console.log(ix);
  }

  for (let iy = 0; iy < 7; iy++) {
    let newDate2 = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 7 * 86400000) });

    for (let ix = 0; ix < 5; ix++) {
      let nextDayAm = new Day({ date: newDate2.date.setTime(newDate2.date.getTime() + 1 * 54000000) });
      let nextDayMid = new Day({ date: newDate2.date.setTime(newDate2.date.getTime() + 1 * 14400000) });
      let nextDayPm = new Day({ date: newDate2.date.setTime(newDate2.date.getTime() + 1 * 18000000) });
      nextDayAm.save();
      nextDayMid.save();
      nextDayPm.save();
      days.push(nextDayAm);
      days.push(nextDayMid);
      days.push(nextDayPm);
      console.log(ix);
    }
  }

  console.log(startDay);

  const cohort = new Cohort({
    teacher: req.body.teacher,
    tas: req.body.tas,
    students: req.body.students,
    location: req.body.location,
    type: req.body.type,
    language: req.body.language,
    startDate: req.body.startDate,
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
    .populate('days')
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
