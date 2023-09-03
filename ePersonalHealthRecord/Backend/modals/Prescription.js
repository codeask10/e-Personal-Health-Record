// models/prescription.js

const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  drName: {
    type: String,
    required: true,
  },
  H_CName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  medications: [
    {
      medicines: {
        type: String,
        required: true,
      },
      dosage: {
        type: String,
        required: true,
      },
    },
  ],
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
