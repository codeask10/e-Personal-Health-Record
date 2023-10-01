const mongoose=require('mongoose');
const {Schema}= mongoose;

const otherTestSchema= new Schema({
    serumUrea:{
        type:String,
        required:true,
    }, serumSodium:{
        type:String,
        required:true,
    }, serumPotassium:{
        type:String,
        required:true,
    }, serumUricAcid:{
        type:String,
        required:true,
    }, eGFR:{
        type:String,
        required:true,
    }, serumTechnology:{
        type:String,
        required:true,
    }, typhoidIgm:{
        type:String,
        required:true,
    }, typhoidIgg:{
        type:String,
        required:true,
    }, typhoidTechnolgy:{
        type:String,
        required:true,
    } 
});

const otherTest= mongoose.model("othertest",otherTestSchema)
module.exports=otherTest