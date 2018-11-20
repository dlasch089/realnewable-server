'use strict';

require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

const indexRouter = require('./routes/index');
const forecastRouter = require('./routes/forecast');

const app = express();

// Setup Mongoose - not used
// mongoose.connect(process.env.MONGODB_URI, {
//   keepAlive: true,
//   useNewUrlParser: true,
//   reconnectTries: Number.MAX_VALUE
// });

// Setup Sessions - not used
// app.use(session({
//   store: new MongoStore({
//     mongooseConnection: mongoose.connection,
//     ttl: 24 * 60 * 60 // 1 day
//   }),
//   secret: 'some-string',
//   resave: true,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 24 * 60 * 60 * 1000
//   }
// }));

// SETUP CORS
const whitelist = [process.env.CLIENT_URL];
const corsOptions = {
  origin: (origin, callback) => {
    console.log('ORIGIN OF REQUEST: ' + origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/forecast', forecastRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({ code: 'unexpected' });
  }
});

module.exports = app;
