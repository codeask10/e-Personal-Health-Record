const mongoose=require('mongoose');
const {Schema}= mongoose;

const LiverSchema= new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bilirubinTotal:{
        type:String,
        required:true,
    },
    bilirubinDirect:{
        type:String,
        required:true,
    },
    bilirubinIndirect:{
        type:String,
        required:true,
    },
    sgptALT:{
        type:String,
        required:true,
    },
    sgotAST:{
        type:String,
        required:true,
    },
    alkalinePhosphates:{
        type:String,
        required:true,
    },
     toatalProteins:{
        type:String,
        required:true,
     },
    albumin:{
        type:String,
        required:true,
    }
})

const liverTest= mongoose.model("livertest",LiverSchema);
module.exports= liverTest;