'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Cohort = require('../models/cohort');
const Day = require('../models/day');
const Curriculum = require('../models/curriculum');
const Unit = require('../models/unit');

router.get('/', (req, res, next) => {
  Cohort.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

router.post('/create', (req, res, next) => {
  const { type, location, language, startDate, teacher } = req.body;
  if (!type || !location || !language || !startDate || !teacher) {
    return res.status(422).json({ code: 'unprosessable-entity' });
  }

  const days = [];

  let startDay = new Day({ date: req.body.startDate });
  let firstDayAm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 86400000) });
  firstDayAm.save();
  // .then((result) => {
  //   const promisesOfUpdatingUnitId = data.map((result.units) => updateUnitIds(days.units));
  //   return Promise.all(promisesOfUpdatingUnitId);
  // });
  days.push(firstDayAm);

  for (let ix = 0; ix < 4; ix++) {
    let nextDayAm = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 86400000) });
    nextDayAm.save();
    days.push(nextDayAm);
  }

  // let newDate1 = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 2 * 86400000) });

  // for (let ix = 0; ix < 5; ix++) {
  //   let nextDayAm = new Day({ date: newDate1.date.setTime(newDate1.date.getTime() + 1 * 86400000) });
  //   nextDayAm.save();
  //   days.push(nextDayAm);
  // }

  // for (let iy = 0; iy < 7; iy++) {
  //   let newDate2 = new Day({ date: startDay.date.setTime(startDay.date.getTime() + 7 * 86400000) });

  //   for (let ix = 0; ix < 5; ix++) {
  //     let nextDayAm = new Day({ date: newDate2.date.setTime(newDate2.date.getTime() + 1 * 86400000) });
  //     nextDayAm.save();
  //     days.push(nextDayAm);
  //   }
  // }

  const category = req.body.type;
  return Curriculum.findOne({ type: category })
    .then((result) => {
      const cohort = new Cohort({
        teacher: req.body.teacher,
        tas: req.body.tas,
        students: req.body.students,
        location: req.body.location,
        type: req.body.type,
        language: req.body.language,
        startDate: req.body.startDate,
        parkingLot: result.units,
        days: days
      });
      return cohort.save()
        .then(() => {
          return cohort.populate('days');
        })
        .then(() => {
          return Unit.find({ category: 'break' });
        })
        .then((results) => {
          console.log(results);
          console.log(results[1]._id);
          cohort.days.forEach((day) => {
            results.forEach((result) => {
              day.units.push(result._id);
              return day.save();
            });
          });
        })
        .then(() => {
          res.status(200).json(cohort);
        });
    })
    .catch(next);
});

// function updateUnits (unit, curriculum, index) {
//   return Unit.findOne({ title: unit })
//     .then((unit) => {
//       if (!unit) {
//         throw new Error('Unknown unit ' + unit);
//       }
//       curriculum.units[index] = unit._id;
//     });
// }
// function updateUnitIds (curriculum) {
//   const promisesOfUpdatingOwnerId = curriculum.units.map((unit, index) => updateUnits(unit, curriculum, index));
//   return Promise.all(promisesOfUpdatingOwnerId);
// }

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  Cohort.findById(id)
    .populate('students')
    .populate('tas')
    .populate('teacher')
    .populate({ path: 'days', populate: { path: 'units' } })
    .populate('parkingLot')
    .then((cohort) => {
      res.json(cohort);
    })
    .catch(next);
});

// router.put('/:id/add', (req, res, next) => {
//   const cohortId = req.params.id;
//   const update = req.body;
//   const options = { new: true };
//   Cohort.findByIdAndUpdate(cohortId, update, options)
//     .then(cohort => {
//       if (cohort) res.status(200).json(cohort);
//       else res.status(404).json({ message: 'cohort not found' });
//     })
//     .catch(error => next(error));
// });

// router.put('/:id/remove', (req, res, next) => {
//   const cohortId = req.params.id;
//   const update = req.body;
//   const options = { new: true };
//   Cohort.findByIdAndUpdate(cohortId, update, options)
//     .then(cohort => {
//       if (cohort) res.status(200).json(cohort);
//       else res.status(404).json({ message: 'cohort not found' });
//     })
//     .catch(error => next(error));
// });

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
