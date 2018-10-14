'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Unit = require('../models/unit');
const Day = require('../models/day');

router.get('/', (req, res, next) => {
  Unit.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

// router.post('/create', (req, res, next) => {
//   // ----- TODO -----//
//   const { flavour, topping } = req.body;
//   if (!flavour || !topping) {
//     return res.status(422).json({ code: 'unprosessable-entity' });
//   }
//   const cohort = new Cohort(req.body);
//   cohort.save()
//     .then(() => {
//       res.status(200).json(cohort);
//     })
//     .catch(next);
// });

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  Unit.findById(id)
    .then((unit) => {
      res.json(unit);
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

router.put('/transfer/:id', (req, res, next) => {
  // const unitId = req.params.id;
  const mongoose = require('mongoose');
  const unitId = mongoose.mongo.ObjectID(req.params.id);
  const sourceList = req.body.from;
  const targetList = req.body.to;
  let newCard = true;
  Unit.findByIdAndUpdate(unitId, { $set: { list: targetList } }, { new: true })
    .then(unit => {
      Promise.all([
        Day.findByIdAndUpdate(sourceList, { $pull: { units: unitId } }).exec(),
        Day.findById(targetList)
          .then((result) => {
            result.units.forEach((unit) => {
              console.log(unit);
              console.log(unitId);
              if (unit.equals(unitId)) {
                newCard = false;
              }
            });
            if (newCard) {
              Day.findByIdAndUpdate(targetList, { $push: { units: unitId } }).exec();
            } else {
              res.status(422).json({ code: 'unprosessable-entity' });
            }
          })
      ])
        .then(list => res.status(200).json({ message: 'unit successfully updated', list: list }));
    })
    .catch(error => next(error));
});

router.put('/:id', (req, res, next) => {
  const unitId = req.params.id;
  const update = req.body;
  const options = { new: true };
  Unit.findByIdAndUpdate(unitId, update, options)
    .then(unit => {
      res.status(200).json(unit);
    })
    .catch(error => next(error));
});

module.exports = router;
