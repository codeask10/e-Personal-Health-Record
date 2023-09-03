// prescription.js
const express = require('express');
const router = express.Router();
const Prescription = require('../modals/Prescription');
const fetchuser= require("../middleware/fetchuser")

// Route: POST /api/prescriptions
// Create a new prescription
router.post('/addPrescription', fetchuser, async (req, res) => {
  try {
    const { drName, H_CName, phoneNumber, date, symptoms, diagnosis, medications } = req.body;

    // Create a new prescription object
    const prescription = new Prescription({
      drName,
      H_CName,
      phoneNumber,
      date,
      symptoms,
      diagnosis,
      medications,
    });

    // Save the prescription to the database
    const savedPrescription = await prescription.save();

    res.json(savedPrescription);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
