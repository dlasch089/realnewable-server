'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const daySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  units: [{
    type: ObjectId,
    ref: 'Unit'
  }]
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
