const express= require('express')
const router = express.Router();
const OtherTest= require("../modals/OtherTest")
const fetchuser= require("../middleware/fetchuser")

// ROUTE 1: Get all the information in CBC: GET "/api/CBC/fetchalldata". login required
router.get('/fetchdata',fetchuser,async(req, res)=>{
    try {
        const othertest = await OtherTest.find({user:req.user.id});
        res.send(othertest);
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add all the information in home: POST "/api/CBC/addData". login required
router.post('/addData',fetchuser,async(req, res)=>{
    try {
        const {serumUrea, serumSodium, serumPotassium, serumUricAcid, eGFR, serumTechnology, typhoidIgm, typhoidIgg, typhoidTechnolgy }=req.body;
        const otherTestData= new OtherTest({
            user:req.user.id,serumUrea, serumSodium, serumPotassium, serumUricAcid, eGFR, serumTechnology, typhoidIgm, typhoidIgg, typhoidTechnolgy 
        })
        const savedData= await otherTestData.save();
        res.json(savedData);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error"); 
    }
})

module.exports=router;