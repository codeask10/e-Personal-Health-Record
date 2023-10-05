const express=require('express');
const router = express.Router();
const fetchuser= require('../middleware/fetchuser');
const LiverTest = require('../modals/LiverFunction');

router.get('/fetchData',fetchuser,async(req,res)=>{
    try {
        const data= await LiverTest.find({user:req.user.id});
        res.send(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/addData',fetchuser,async(req, res)=>{
    try {
       const{bilirubinTotal,bilirubinDirect,bilirubinIndirect,sgptALT,sgotAST,alkalinePhosphates, toatalProteins,albumin} =req.body;
       const liverData= new LiverTest({
        user:req.user.id,bilirubinTotal,bilirubinDirect,bilirubinIndirect,sgptALT,sgotAST,alkalinePhosphates, toatalProteins,albumin
       })
       const savedData=await liverData.save();
       res.json(savedData);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports=router;