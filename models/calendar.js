'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const calendarSchema = new Schema({
  classMaster: {
    type: ObjectId,
    ref: 'User'
  },
  week: {
    type: String,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    required: true
  },
  module: {
    type: String,
    enum: ['1', '2', '3'],
    required: true
  },
  days: [{
    type: ObjectId,
    ref: 'Day'
  }],
  adaptiveCurriculum: [{
    type: ObjectId,
    ref: 'Unit'
  }],
  parkingLot: [{
    type: ObjectId,
    ref: 'Unit'
  }],
  startDate: {
    type: Date,
    required: true
  },
  cohort: {
    type: ObjectId,
    ref: 'Cohort'
  }
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
