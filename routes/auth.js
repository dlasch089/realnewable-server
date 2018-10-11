'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../models/user');

router.get('/me', (req, res, next) => {
  if (req.session.currentUser) {
    res.json(req.session.currentUser);
  } else {
    res.status(404).json({ code: 'not-found' });
  }
});

router.post('/login', (req, res, next) => {
  if (req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).json({ code: 'validation' });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ code: 'not-found' });
      }
      if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        return res.json(user);
      } else {
        return res.status(404).json({ code: 'not-found' });
      }
    })
    .catch(next);
});

// router.post('/signup', (req, res, next) => {
//   if (req.session.currentUser) {
//     return res.status(401).json({ code: 'unauthorized' });
//   }

//   const email = req.body.email;
//   const password = req.body.password;

//   if (!email || !password) {
//     return res.status(422).json({ code: 'validation' });
//   }

//   User.findOne({ email }, 'email')
//     .then((userExists) => {
//       if (userExists) {
//         return res.status(422).json({ code: 'email-not-unique' });
//       }

//       const salt = bcrypt.genSaltSync(10);
//       const hashPass = bcrypt.hashSync(password, salt);

//       const newUser = User({
//         email,
//         password: hashPass
//       });

//       return newUser.save()
//         .then(() => {
//           req.session.currentUser = newUser;
//           res.json(newUser);
//         });
//     })
//     .catch(next);
// });

router.post('/logout', (req, res) => {
  req.session.currentUser = null;
  return res.status(204).send();
});

module.exports = router;
