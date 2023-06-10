import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import "../CSS/Prescription.css";
const Prescription= () => {
  let date = moment(new Date()).format('YYYY-MM-DD')

  const [inputs, setInputs] = useState([{ id: uuidv4(),value1: '', value2: '' }]);
  const handleAddInput = () => {
    setInputs([...inputs, {id: uuidv4(), value1: '', value2: '' }]);
   
  };

    const handleRemoveInput = (id) => {
      const newInputs = inputs.filter((input) => input.id !== id);
      setInputs(newInputs);
    };

  const handleInputChange = (event, id, field) => {
    event.preventDefault();
    const newInputs = [...inputs];
    const inputIndex = newInputs.findIndex((input) => input.id === id);
    newInputs[inputIndex][field] = event.target.value;
    setInputs(newInputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // do something with the medications datae
  };
  return (
    <div className=" ui container mt-5">
      <form className="ui form large" onSubmit={handleSubmit}>
        <h2 className="ui dividing header">Prescription  Information</h2>
        <div className="ui stackable equal width grid  ">
          <div className="column field">
            <label htmlFor="drName">Docter name</label>
            <input type="text" id ="drName" name= "drName" pattern="[A-Za-z ]{1,20}" placeholder="DR Name" />
          </div>
          <div className="column field">
            <label htmlFor="H-CName">Hospital/Clinic Name</label>
            <input type="text" id ="H-CName" name= "H-CName" pattern="[A-Za-z ]{1,50}" placeholder="Hospital/clinic name..." />
          </div>
          <div className="column field">
            <label htmlFor="phoneNumber">Dr Phone-no</label>
            <div className="ui labeled input">
                <div className="input-group-text">+91</div>
                <input  type="tel" id="phoneNumber" name="phoneNumber" className="form-control" pattern="[6789][0-9]{9}" title="Please enter valid phone number" placeholder="Phone-no" />
            </div>
          </div>
          <div className="column field">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" max={date}  placeholder="DD/MM/YYYY" />
          </div>
        </div>
        <div className="ui grid  ">
          <div className="doubling two column row">
            <div className="column field">
              <label htmlFor="symptoms">Symptoms</label>
              <input type="text" id ="symptoms" name="symptoms" pattern="[A-Za-z ]{1,50}" placeholder="Headache, Fever, Rashes...." />
            </div>
            <div className="column field">
              <label htmlFor="diagnosis">Diagnosis:</label>
              <input type="text"  id="diagnosis" name="diagnosis" pattern="[A-Za-z ,]{1,50}" placeholder="Diabetes..." />
            </div>
          </div>
        </div>
        {
          inputs.map( (input)=>{
            return(
              <div className="ui equal width grid " key={input.id} >
                <div className=" seven wide mobile column field" >
                  <label htmlFor="medicines">Medicines</label>
                  <input type="text" id="medicines" name="medicines"  pattern="[A-Za-z0-9 ,.-]{1,50}" placeholder="Medicines..." title="enter value as Paracetamol, Ciprofloxacin and Dexamethasone etc" value={input.value1} onChange={(e) => handleInputChange(e, input.id,'value1')} />
                </div>
                <div className=" seven wide mobile column field" >
                  <label htmlFor="dosage">Dosage</label>
                  <input type="text" id="dosage" name="dosage" pattern="[A-Za-z0-9 ,.-]{1,50}" placeholder="Dosage.." title="enter value as 2.5ml| 1 tablet for 3 times in a day" value={input.value2} onChange={(e) => handleInputChange(e, input.id,'value2')} />
                </div>
                <div className=" two wide mobile column field mt-4 ">
                  { 
                    inputs.length!==1 &&
                    <button type="button" className="btn btn-danger btn-remove" onClick={() => handleRemoveInput(input.id)} onTouchEnd={() => handleRemoveInput(input.id)}>-</button>
                  }
                </div>
              </div>
            );
          } )}
        <button  type="button" className="btn btn-success" onClick={handleAddInput}>Add More</button>
          
          <div className=" my-5" style={{ textAlign: "center" }}>
            <button className="ui button me-3" type="submit">Save</button>
            <button className="ui button ms-3" type="submit">Update</button>
          </div>
      </form>
    </div>
  )
}

export default Prescription