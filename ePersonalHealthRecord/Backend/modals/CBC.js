const mongoose=require('mongoose');
const {Schema}= mongoose;

const CBCSchema= new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    haemoglobin:{
        type:String,
        required:true,

    },
    totalWBCCount:{
        type:String,
        required:true,
    },
    neutrophils:{
        type:String,
        required:true,
    },
    lymphocytes:{
        type:String,
        required:true,
    },
    monocytes:{
        type:String,
        required:true,
    },
    eosinophils:{
        type:String,
        required:true,
    },
    absNeutrophisCount:{
        type:String,
        required:true,
    },
    absLymphocytesCount:{
        type:String,
        required:true,
    },
    absMonocytesCount:{
        type:String,
        required:true,
    },
    absEosinophilsCount:{
        type:String,
        required:true,
    },
    plateletCount:{
        type:String,
        required:true,
    },
    RBCCount:{
        type:String,
        required:true,
    },
    MCV:{
        type:String,
        required:true,
    },
    MCH:{
        type:String,
        required:true,
    },
    MCHC:{
        type:String,
        required:true,
    },
    RDWCV:{
        type:String,
        required:true,
    }
})

const CBC= mongoose.model("cbc",CBCSchema)
module.exports=CBC
