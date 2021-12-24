const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const audioredAlert = new Schema({
  blobURL: {
    type: String,
  },
  Police: {
    type: Boolean,
    required: false
  },
  Mada: {
    type: Boolean,
    required: false
  },
  Firefighters: {
    type: Boolean,
    required: false
  },
  Hfc: {
    type: Boolean,
    required: false
  },
  StatusOpen: {
    type: Boolean,
    required: true
  },
  StatusClose: {
    type: Boolean,
    required: false
  },
  Statustreatment: {
    type: Boolean,
    required: false
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  LongText: {
    type: String,
  },
}, {
  timestamps: true,
});

const audio = mongoose.model('audioredAlert', audioredAlert);

module.exports = audio;