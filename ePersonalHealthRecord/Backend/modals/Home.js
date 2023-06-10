const mongoose= require('mongoose');
const {Schema}= mongoose;

const HomeSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    Age:{
        type:String,
        required:true
    },
    BloodGroup:{
        type:String,
        required:true
    },
    Height:{
        type:String,
        required:true
    },
    Weight:{
        type:String,
        required:true
    },
    BodyTemperature:{
        type:String,
        required:true
    },
    BMI:{
        type:String,
        required:true
    },
    BloodPressure:{
        type:String,
        required:true
    },
    PulseRate:{
        type:String,
        required:true
    },
    Cholestrol:{
        type:String,
        required:true
    },
    BloodOxygen:{
        type:String,
        required:true
    },
    BloodGlucose:{
        type:String,
        required:true
    },
    RespirationRate:{
        type:String,
        required:true
    }

});

module.export= mongoose.model("home",HomeSchema);

