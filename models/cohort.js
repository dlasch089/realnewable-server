'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const cohortSchema = new Schema({
  teacher: [{
    type: ObjectId,
    ref: 'User'
  }],
  tas: [{
    type: ObjectId,
    ref: 'User'
  }],
  students: [{
    type: ObjectId,
    ref: 'User'
  }],
  type: {
    type: String,
    enum: ['webdev', 'ux-ui'],
    required: true
  },
  location: {
    type: String,
    enum: ['madrid', 'barcelona', 'berlin', 'paris', 'amsterdam', 'munich', 'bogota', 'mexico-city', 'miami', 'sao-paulo', 'lisbon'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  language: {
    type: String,
    enum: ['es', 'en'],
    required: true
  },
  nickname: {
    type: String
  }
});

const Cohort = mongoose.model('Cohort', cohortSchema);

module.exports = Cohort;
