'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const curriculumSchema = new Schema({
  modules: {
    type: [ObjectId],
    ref: 'Unit'
  },
  type: {
    type: String,
    enum: ['webdev', 'ux-ui'],
    required: true
  }
});

const Curriculum = mongoose.model('Curriculum', curriculumSchema);

module.exports = Curriculum;
