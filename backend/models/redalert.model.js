const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const redAlert = new Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Id: {
    type: Number,
  },
  Phone: {
    type: Number,
  },
  Address: {
    type: String,
  },
  City: {
    type: String,
  },
  AmountofWounded: {
    type: Number,
  },
  ReadingDescription: {
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

const redalert = mongoose.model('redalert', redAlert);

module.exports = redalert;