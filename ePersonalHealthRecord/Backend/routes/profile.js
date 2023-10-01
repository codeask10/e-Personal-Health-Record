const express= require('express')
const router = express.Router();
const USERPROFILE= require("../modals/Profile")
const fetchuser= require("../middleware/fetchuser")

// ROUTE 1: Get all the information in CBC: GET "/api/CBC/fetchalldata". login required
router.get('/fetchdata',fetchuser,async(req, res)=>{
    try {
        const userprofile = await USERPROFILE.find({user:req.user.id});
        res.send(userprofile);
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add all the information in home: POST "/api/userprofile/addData". login required
router.post('/addData',fetchuser,async(req, res)=>{
    try {
        const {firstName, lastName, dob,gender, phoneNo, email, address, city,pincode, state, country }=req.body;
        const userData= new USERPROFILE({
            user:req.user.id,firstName, lastName, dob,gender, phoneNo, email, address, city,pincode, state, country 
        })
        const savedData= await userData.save();
        res.json(savedData);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error"); 
    }
    
})

module.exports=router;