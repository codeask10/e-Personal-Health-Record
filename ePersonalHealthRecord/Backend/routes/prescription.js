// prescription.js
const express = require('express');
const router = express.Router();
const Prescription = require('../modals/Prescription');
const fetchuser= require("../middleware/fetchuser")

// ROUTE 1: Get all the information in prescription: GET "/api/prescription/fetchalldata". login required
router.get('/fetchdata',fetchuser,async(req, res)=>{
    try {
        const prescription = await Prescription.find({user:req.user.id});
        res.send(prescription);
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add all the information in home: POST "/api/prescription/addData". login required
router.post('/addData',fetchuser,async(req, res)=>{
  try {
      const {drName, H_CName, phoneNumber, date, symptoms, diagnosis, medicines, dosage }=req.body;
      const prescriptionData= new Prescription({
          user:req.user.id,drName, H_CName, phoneNumber, date, symptoms, diagnosis, medicines, dosage
      })
      const savedData= await prescriptionData.save();
      res.json(savedData);

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error"); 
  }
  
})
module.exports = router;
