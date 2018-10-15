'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Curriculum = require('../models/curriculum');

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  Curriculum.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(next);
});

// router.post('/create', (req, res, next) => {
//   // ----- TODO -----//
//   const { flavour, topping } = req.body;
//   if (!flavour || !topping) {
//     return res.status(422).json({ code: 'unprosessable-entity' });
//   }
//   const curriculum = new Curriculum(req.body);
//   Curriculum.save()
//     .then(() => {
//       res.status(200).json(curriculum);
//     })
//     .catch(next);
// });

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  const id = req.params.id;
  if (!id || !ObjectId.isValid(id)) {
    res.status(404).json({ code: 'not-found' });
  }
  Curriculum.findById(id)
    .populate('units')
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(next);
});

module.exports = router;
