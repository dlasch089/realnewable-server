'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unitSchema = new Schema({
  mandatory: {
    type: Boolean,
    required: true
  },
  category: {
    type: String,
    enum: ['lessons', 'rituals', 'practice&reviews', 'break'],
    required: true
  },
  subCategory: {
    type: String,
    enum: ['lecture', 'research', 'code-along', 'demo', 'practice', 'review', 'activity', 'pair-programming', 'daily-exercise', 'ritual', 'deck', 'break', 'talk'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  module: {
    type: String,
    enum: ['1', '2', '3'],
    required: true
  },
  links: {
    type: Array
  },
  learningObjectives: {
    type: String,
    enum: ['1', '2', '3']
  },
  duration: {
    type: Number,
    required: true
  },
  description: {
    type: String
  }
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;