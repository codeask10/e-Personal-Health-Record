const express= require('express')
const router = express.Router();
const CBC= require("../modals/CBC")
const fetchuser= require("../middleware/fetchuser")

// ROUTE 1: Get all the information in CBC: GET "/api/CBC/fetchalldata". login required
router.get('/fetchdata',fetchuser,async(req, res)=>{
    try {
        const cbc = await CBC.find({user:req.user.id});
        res.send(cbc);
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add all the information in home: POST "/api/CBC/addData". login required
router.post('/addData',fetchuser,async(req, res)=>{
    try {
        const {haemoglobin,totalWBCCount,neutrophils,lymphocytes,monocytes,eosinophils,absNeutrophisCount,absLymphocytesCount,absMonocytesCount,absEosinophilsCount,plateletCount,RBCCount,MCV,MCH,MCHC,RDWCV}=req.body;
        const cbcData= new CBC({
            user:req.user.id,haemoglobin,totalWBCCount,neutrophils,lymphocytes,monocytes,eosinophils,absNeutrophisCount,absLymphocytesCount,absMonocytesCount,absEosinophilsCount,plateletCount,RBCCount,MCV,MCH,MCHC,RDWCV
        })
        const savedData= await cbcData.save();
        res.json(savedData);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error"); 
    }
    
})

module.exports=router;