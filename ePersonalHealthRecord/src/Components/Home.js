import React from 'react'
// import blood from '../Image/blood.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [home, setHome] = useState({
    age: "", bloodGroup: "", height: "", weight: "", temperature: "", bodyMassIndex: "",
    bloodPressure: "", pulseRate: "", cholesterol: "", bloodGlucose: "", bloodOxygen: "", respirationRate: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHome({ ...home, [e.target.name]: e.target.value });
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      const response = await fetch("http://localhost:5001/api/home/addData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ age: home.age, bloodGroup: home.bloodGroup, height: home.height, weight: home.weight, temperature: home.temperature, bodyMassIndex: home.bodyMassIndex, bloodPressure: home.bloodPressure, pulseRate: home.pulseRate, cholesterol: home.cholesterol, bloodGlucose: home.bloodGlucose, bloodOxygen: home.bloodOxygen, respirationRate: home.respirationRate })
      });
      // eslint-disable-next-line 
      const json = await response.json();
      console.log(json);
    }
    else {
      navigate('/Login')
    }
  }
return (
  <div className=' ui   container mt-5 mx-4'>
    <h2 className="ui dividing header">Genral Information</h2>
    <form className="ui large form mt-4" onSubmit={onSubmit}>
        <div className="ui stackable equal width grid">
          <div className="column field">
            <label htmlFor='age'>Age</label>
            <div className="ui  input">
              <input type="text" id="age" name="age" value={home.age} onChange={handleChange} pattern="^(1\d{2}|[1-9]\d|[1-9])$" title="Please enter a valid number between 0 and 200" placeholder="Age.." required />
            </div>
          </div>
          <div className="column field">
            <label htmlFor='bloodGroup'> Blood Group</label>
            <div className="ui input">
              {/* <img src={blood} alt="Blood icon" style={{ width: '50px', height: '35px', marginTop: '5px', paddingRight: "10px" }} /> */}
              <input type="text" id="bloodGroup" name="bloodGroup" value={home.bloodGroup} onChange={handleChange} pattern="(A|B|AB|O)[+-]" title="Please enter valid blood group A+" placeholder="Blood group.." />
            </div>
          </div>
          <div className="column field">
            <label htmlFor='height'> Height</label>
            <div className="ui  right labeled  input">
              <input type="text" id="height" name="height" value={home.height} onChange={handleChange} pattern="^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$" title="Please enter a valid height in cm (e.g. 170.5)" placeholder="Height(cm) .." required />
              <div className="ui basic label" >
                cm
              </div>
            </div>
          </div>
          <div className="column field">
            <label htmlFor='weight'> Weight</label>
            <div className="ui right labeled input">
              <input type="text" id="weight" name="weight" value={home.weight} onChange={handleChange} pattern="^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$" title="Please enter a valid weight in kg" placeholder="Weight.." required />
              <div className="ui basic label" >
                kg
              </div>
            </div>
          </div>
        </div>
        <div className="ui stackable equal width grid">
          <div className="column field">
            <label htmlFor='temperature'> Body Temperature</label>
            <div className="ui  right labeled  input">
              <input type="text" id="temperature" name="temperature" onChange={handleChange} value={home.temperature} pattern="9[0-9](\.[0-9]{1,2})?" title="Please enter a value between 90.0 to 109.99 " placeholder="Temperature..." required />
              <div className="ui basic label" >
                F
              </div>
            </div>
          </div>
          <div className="column field ">
            <label htmlFor='bodyMassIndex'> Body mass index (BMI) </label>
            <div className="ui right labeled input">
              <input type="text" id="bodyMassIndex" name="bodyMassIndex" value={home.bodyMassIndex} onChange={handleChange} placeholder='BMI value' />
              <div className="ui basic label px-1" >
                kg/m^2
              </div>
            </div>
          </div>
          <div className="column field">
            <label htmlFor='bloodPressure'> Blood Pressure</label>
            <div className="ui  right labeled  input">
              <input type="text" id="bloodPressure" name="bloodPressure" value={home.bloodPressure} onChange={handleChange} pattern="^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])\/([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$" title="Please enter blood pressure in the format of systolic/diastolic where each value is between 1 and 999" placeholder="BP(120/80) .." required />
              <div className="ui basic label px-1" >
                mm Hg
              </div>
            </div>
          </div>
          <div className="column field">
            <label htmlFor='pulseRate'> Pulse Rate </label>
            <div className="ui right labeled input">
              <input type="text" id="pulseRate" name="pulseRate" value={home.pulseRate} onChange={handleChange} pattern="^(1\d{2}|[1-9]\d|[1-9])$" title="Please enter pulse rate as a number between 1 and 200" placeholder="Pulse rate.." required />
              <div className="ui basic label" >
                bpm
              </div>
            </div>
          </div>
        </div>
        <div className="ui stackable equal width grid">
          <div className="column field">
            <label htmlFor='cholesterol'> Cholesterol</label>
            <div className="ui  right labeled  input">
              <input type="text" id="cholesterol" name="cholesterol" value={home.cholesterol} onChange={handleChange} pattern="^[1-9]\d{0,2}$" title="Please enter a cholesterol value between 1 and 999" min="1" max="999" placeholder="Enter cholesterol .." required />
              <div className="ui basic label" >
                mg/dl
              </div>
            </div>
          </div>
          <div className="column field">
            <label htmlFor='bloodGlucose'> Blood Glucose </label>
            <div className="ui right labeled input">
              <input type="text" id="bloodGlucose" name="bloodGlucose" value={home.bloodGlucose} onChange={handleChange} pattern="^([1-9]\d{0,2}(\.\d{2})?|500(\.00)?)$" title="Please enter a Blood Glucose value between 1.00 to 500.00" placeholder="Blood glucose.." required />
              <div className="ui basic label" >
                mg/dl
              </div>
            </div>
          </div>
          <div className="column field">
            <label htmlFor='bloodOxygen'> Blood Oxygen(SpO2)</label>
            <div className="ui  right labeled  input">
              <input type="text" id="bloodOxygen" name="bloodOxygen" value={home.bloodOxygen} onChange={handleChange} pattern="^([1-9]|[1-9][0-9]|100)$" title="Please enter a Blood Oxygen value between 1.00% and 100.00%" placeholder="Blood oxygen.." required />
              <div className="ui basic label" >
                %
              </div>
            </div>
          </div>
          <div className="column field">
            <label htmlFor='respirationRate'> Respiration rate (Breaths/min) </label>
            <div className="ui right labeled input">
              <input type="text" id="respirationRate" name="respirationRate" value={home.respirationRate} onChange={handleChange} pattern="(100|[1-9][0-9]?)" title="Please enter a Blood Oxygen value between 1 and 100" placeholder="Respiration rate." required />
              <div className="ui basic label" >
                BPM
              </div>
            </div>
          </div>
      </div>
      <div className=" my-5" style={{ textAlign: "center" }}>
        <button className="ui button me-3" type="submit">Save</button>
        <button className="ui button ms-3" type="submit">Update</button>
      </div>
    </form>
  </div>
)
}

export default Home