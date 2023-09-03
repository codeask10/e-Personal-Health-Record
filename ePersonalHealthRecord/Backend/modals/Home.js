const mongoose= require('mongoose');
const {Schema}= mongoose;

const HomeSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    age: {
        type: String,
        required: true,
        match: /^(1\d{2}|[1-9]\d|[1-9])$/,
        title: 'Please enter a valid number between 0 and 200',
        placeholder: 'Age..',
      },
      bloodGroup: {
        type: String,
        match: /^(A|B|AB|O)[+-]$/,
        title: 'Please enter valid blood group A+',
        placeholder: 'Blood group..',
      },
      height: {
        type: String,
        required: true,
        match: /^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$/,
        title: 'Please enter a valid height in cm (e.g. 170.5)',
        placeholder: 'Height(cm) ..',
      },
      weight: {
        type: String,
        required: true,
        match: /^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$/,
        title: 'Please enter a valid weight in kg',
        placeholder: 'Weight..',
      },
      temperature: {
        type: String,
        required: true,
        match: /^9[0-9](\.[0-9]{1,2})?$/,
        title: 'Please enter a value between 90.0 to 109.99',
        placeholder: 'Temperature...',
      },
      bodyMassIndex:{
        type:String,
        placeholder:'Body Mass Index'
      },
      bloodPressure: {
        type: String,
        required:true,
        match: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])\/([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
        title: 'Please enter blood pressure in the format of systolic/diastolic where each value is between 1 and 999',
        placeholder: 'BP(120/80) ..',
      },
      pulseRate: {
        type: String,
        required: true,
        match: /^(1\d{2}|[1-9]\d|[1-9])$/,
        title: 'Please enter pulse rate as a number between 1 and 200',
        placeholder: 'Pulse rate..',
      },
      cholesterol: {
        type: String,
        required: true,
        match: /^[1-9]\d{0,2}$/,
        title: 'Please enter a cholesterol value between 1 and 999',
        placeholder: 'Enter cholesterol ..',
      },
      bloodGlucose: {
        type: String,
        required: true,
        match: /^([1-9]\d{0,2}(\.\d{1,2})?|500(\.00)?)$/,
        title: 'Please enter a Blood Glucose value between 1.00 to 500.00',
        placeholder: 'Blood glucose..',
      },
      bloodOxygen: {
        type: String,
        required: true,
        match: /^([1-9]|[1-9][0-9]|100)$/,
        title: 'Please enter a Blood Oxygen value between 1.00% and 100.00%',
        placeholder: 'Blood oxygen..',
      },
      respirationRate: {
        type: String,
        required: true,
        match: /^(100|[1-9][0-9]?)$/,
        title: 'Please enter a Blood Oxygen value between 1 and 100',
        placeholder: 'Respiration rate.',
      },
    });
    
const Home= mongoose.model("home",HomeSchema)
module.exports=Home 

