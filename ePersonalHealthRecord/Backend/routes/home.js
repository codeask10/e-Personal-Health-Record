const express= require('express')
const router = express.Router();
const Home= require("../modals/Home")
const fetchuser= require("../middleware/fetchuser")

// ROUTE 1: Get all the information in home: GET "/api/home/fetchalldata". login required
router.get('/fetchdata',fetchuser,async(req, res)=>{
    try {
        const home = await Home.find({user:req.user.id});
        res.send(home);
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add all the information in home: POST "/api/home/fetchalldata". login required
router.post('/addData',fetchuser,async(req, res)=>{
    try {
        const {age,bloodGroup,height,weight,temperature,bodyMassIndex,bloodPressure,pulseRate,cholesterol,bloodGlucose,bloodOxygen,respirationRate}=req.body;
        const homeData= new Home({
            user:req.user.id,age,bloodGroup,height,weight,temperature,bodyMassIndex,bloodPressure,pulseRate,cholesterol,bloodGlucose,bloodOxygen,respirationRate
        })
        const savedData= await homeData.save();
        res.json(savedData);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error"); 
    }
    
})


module.exports=router;