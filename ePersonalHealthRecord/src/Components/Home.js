import React from 'react'
// import blood from '../Image/blood.png';

const Home = () => {


  return (
     <div className=' ui   container mt-5 mx-4'>
      <h2 className="ui dividing header">Genral Information</h2>
      <form className="ui large form mt-4">
        <div className="ui equal width grid">
          <div className="stackable four column row">
            <div className="column field">
              <label htmlFor='age'>Age</label>
              <div className="ui  input">
                <input type="text" id="age" name="age" pattern="[1-9][0-9]{0-3}"  title="Please enter up to 3 numeric digits" placeholder="Age.." required />
              </div>
            </div>
            <div className="column field">
              <label htmlFor='bloodgroup'> Blood Group</label>
              <div className="ui input">
                {/* <img src={blood} alt="Blood icon" style={{ width: '50px', height: '35px', marginTop: '5px', paddingRight: "10px" }} /> */}
                <input type="text" id="bloodgroup" name="bloodgroup" pattern="(A|B|AB|O)[+-]" title="Please enter valid blood group A+" placeholder="Blood group.." />
              </div>
            </div>
            <div className="column field">
              <label htmlFor='height'> Height</label>
              <div className="ui  right labeled  input">
                <input type="text" id="height" name="height" pattern="^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$" title="Please enter a valid height in cm (e.g. 170.5)" placeholder="Height(cm) .." required />
                <div className="ui basic label" >
                  cm
                </div>
              </div>
            </div>
            <div className="column field">
              <label htmlFor='weight'> Weight</label>
              <div className="ui right labeled input">
                <input type="text" id="weight" name="weight" pattern="^[1-9][0-9]{0,2}(\.[0-9]{1,2})?$" title="Please enter a valid weight in kg" placeholder="Weight.." required />
                <div className="ui basic label" >
                  kg
                </div>
              </div>
            </div>
          </div>
          <div className="stackable four column row">
            <div className="column field">
              <label htmlFor='temp'> Body Temperature</label>
              <div className="ui  right labeled  input">
                <input type="number" id="temp" name="temp"  pattern="9[0-9](\.[0-9]{1,2})?" title="Please enter a value between 90.0 to 109.99 "   placeholder="Temperature..." required />
                <div className="ui basic label" >
                  F
                </div>
              </div>
            </div>
            <div className="column field ">
              <label htmlFor='BMI'> Body mass index (BMI) </label>
              <div className="ui right labeled input">
                <input type="text" readOnly placeholder='BMI value' />
                <div className="ui basic label px-1" >
                  kg/m^2
                </div>
              </div>
            </div>
            <div className="column field">
              <label htmlFor='bp'> Blood Pressure</label>
              <div className="ui  right labeled  input">
                <input type="text" id="bp" name="bp"pattern="^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])\/([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$" title="Please enter blood pressure in the format of systolic/diastolic where each value is between 1 and 999"  placeholder="BP(120/80) .." required />
                <div className="ui basic label px-1" >
                  mm Hg
                </div>
              </div>
            </div>
            <div className="column field">
              <label htmlFor='pr'> Pulse Rate </label>
              <div className="ui right labeled input">
                <input type="text" id="pr" name="pr" pattern="[0-9]{1,3}" min="20" max="200" title="Please enter pulse rate as a number between 1 and 999"  placeholder="Pulse rate.." required />
                <div className="ui basic label" >
                  bpm
                </div>
              </div>
            </div>
          </div>
          <div className="stackable four column row">
            <div className="column field">
              <label htmlFor='cholesterol'> Cholesterol</label>
              <div className="ui  right labeled  input">
                <input type="text" id="cholesterol" name="cholesterol" pattern="^[1-9]\d{0,2}$" title="Please enter a cholesterol value between 1 and 999"  min="1" max="999" placeholder="Enter cholesterol .." required />
                <div className="ui basic label" >
                  mg/dl
                </div>
              </div>
            </div>
            <div className="column field">
              <label htmlFor='bloodGlucose'> Blood Glucose </label>
              <div className="ui right labeled input">
                <input type="number" id="bloodGlucose" name="bloodGlucose"  pattern="^[1-9]\d{0,2}$" title="Please enter a Blood Glucose value between 1 and 999" min="20" max="600" placeholder="Blood glucose.." required />
                <div className="ui basic label" >
                  mg/dl
                </div>
              </div>
            </div>
            <div className="column field">
              <label htmlFor='blood-Oxygen'> Blood Oxygen(SpO2)</label>
              <div className="ui  right labeled  input">
                <input type="text" id="blood-oxygen" name="blood-oxygen"  pattern="(?!(0\.0{1,2}%))" title="Please enter a Blood Oxygen value between 1.00% and 100.00%" placeholder="Blood oxygen.." required />
                <div className="ui basic label" >
                  %
                </div>
              </div>
            </div>
            <div className="column field">
              <label htmlFor='respiration-rate'> Respiration rate (Breaths/min) </label>
              <div className="ui right labeled input">
                <input type="text" id="respiration-rate" name="respiration-rate"  pattern="(100|[1-9][0-9]?)" title="Please enter a Blood Oxygen value between 1 and 100"  placeholder="Respiration rate." required />
                <div className="ui basic label" >
                  BPM
                </div>
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