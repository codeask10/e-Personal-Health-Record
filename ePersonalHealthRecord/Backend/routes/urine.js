const express= require('express')
const router = express.Router();
const Urine= require("../modals/Urine")
const fetchuser= require("../middleware/fetchuser");

// ROUTE 1: Get all the information in CBC: GET "/api/urine/fetchalldata". login required
router.get('/fetchdata',fetchuser,async(req, res)=>{
    try {
        const urine = await Urine.find({user:req.user.id});
        res.send(urine);
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add all the information in home: POST "/api/urine/addData". login required
router.post('/addData',fetchuser,async(req, res)=>{
    try {
        const {urineColor,PHLevel,gravity,appearance,albumin, sugar,acetone,nitrate,keton,urobilinogen, bileSalt,bilePigments, WBC,pusCells, RBC, epithelialCells,crystals,casts }=req.body;
        const urineData= new Urine({
            user:req.user.id,urineColor,PHLevel,gravity,appearance,albumin, sugar,acetone,nitrate,keton,urobilinogen, bileSalt,bilePigments, WBC,pusCells, RBC, epithelialCells,crystals,casts
        })
        const savedData= await urineData.save();
        res.json(savedData);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error"); 
    }
    
})

module.exports=router;
