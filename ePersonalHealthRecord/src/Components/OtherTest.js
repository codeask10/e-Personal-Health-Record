import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OtherTest = () => {
  const [otherTest, setOtherTest] = useState({ serumUrea: "", serumSodium: "", serumPotassium: "", serumUricAcid: "", eGFR: "", serumTechnology: "", typhoidIgm: "", typhoidIgg: "", typhoidTechnolgy: "" });
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      const response = await fetch("http://localhost:5001/api/otherTest/addData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          serumUrea: otherTest.serumUrea,
          serumSodium: otherTest.serumSodium,
          serumPotassium: otherTest.serumPotassium,
          serumUricAcid: otherTest.serumUricAcid,
          eGFR: otherTest.eGFR,
          serumTechnology: otherTest.serumTechnology,
          typhoidIgm: otherTest.typhoidIgm,
          typhoidIgg: otherTest.typhoidIgg,
          typhoidTechnolgy: otherTest.typhoidTechnolgy
        })
      });
      // eslint-disable-next-line 
      const json = await response.json();
      console.log(json);
    }
    else {
      navigate('/Login');
    }
  }


  const handleChange = (e) => {
    console.log(e.target.value);
    setOtherTest({ ...otherTest, [e.target.name]: e.target.value });
  }
  return (
    <div className='ui container my-5 '>
      <form className="ui form" onSubmit={onSubmit}>
        <h2 className="ui dividing header">Other Test Report</h2>
        <h3 className='ui dividing header '>Serum Test</h3>
        <div className="ui stackable equal width grid">
          <div className="field column ">
            <label htmlFor='serumUrea'>Serum Urea:</label>
            <div className="ui right labeled input">
              <input type="text" id="serumUrea" name="serumUrea" value={otherTest.serumUrea} onChange={handleChange} placeholder="Serum-urea" />
              <div className="ui basic label px-1">
                mg/dl
              </div>
            </div>
          </div>
          <div className="field column myElement">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              <h5>15-45</h5>
            </div>
          </div>
          <div className="field column "  >
            <label htmlFor='serumSodium'>Serum Sodium:</label>
            <div className="ui right labeled input">
              <input type="text" id="serumSodium" name="serumSodium" value={otherTest.serumSodium} onChange={handleChange} placeholder="Enter a value" />
              <div className="ui basic label px-1">
                mEq/L
              </div>
            </div>
          </div>
          <div className="field column myElement">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              <h5>136-145</h5>
            </div>
          </div>
        </div>
        <div className="ui stackable equal width grid">
          <div className="field column "  >
            <label htmlFor='serumPotassium'>Serum Potassium:</label>
            <div className="ui right labeled input">
              <input type="text" id="serumPotassium" name="serumPotassium" value={otherTest.serumPotassium} onChange={handleChange} placeholder="Enter a value" />
              <div className="ui basic label px-1">
                mEq/L
              </div>
            </div>
          </div>
          <div className="field column myElement">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              <h5>3.50- 5.00</h5>
            </div>
          </div>
          <div className="field column "  >
            <label htmlFor='serumUricAcid'>Serum Uric Acid:</label>
            <div className="ui right labeled input">
              <input type="text" id="serumUricAcid" name="serumUricAcid" value={otherTest.serumUricAcid} onChange={handleChange} placeholder="Enter a value" />
              <div className="ui basic label px-1">
                mg/dl
              </div>
            </div>
          </div>
          <div className="field column myElement">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              <h5>2.6-6.0</h5>
            </div>
          </div>
        </div>
        <div className="ui stackable equal width grid">
          <div className=" six wide tablet six wide computer column field  "  >
            <label htmlFor='eGFR' >Estimated Glomerular Filtration Rate(eGFR):</label>
            <input type="text" id="eGFR" name="eGFR" onChange={handleChange} value={otherTest.eGFR} placeholder="eGFR ..." />
          </div>
          <div className=" six wide tablet six wide computer column field  ">
            <label htmlFor='serumTechnology'>Technology Name</label>
            <input type="text" id="serumTechnology" name="serumTechnology" value={otherTest.serumTechnology} onChange={handleChange} placeholder=" Technology Name..." />
          </div>
        </div>

        <h4 className='ui dividing header '>Typhoid Test  </h4>
          <div className="ui stackable equal width grid">
            <div className="field column "  >
              <label htmlFor='typhoidIgm'>Typhoid IGM:</label>
              <select id="typhoidIgm" name="typhoidIgm" value={otherTest.typhoidIgm} onChange={handleChange} className='ui dropdown'>
                <option value="" disabled>Select value</option>
                <option value="Negative">Negative </option>
                <option value="Positive">Positive</option>
              </select>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>Negative</h5>
              </div>
            </div>
            <div className="field column "  >
              <label htmlFor='typhoidIgg'>Typhoid IGG:</label>
              <select id="typhoidIgg" name="typhoidIgg" value={otherTest.typhoidIgg} onChange={handleChange} className='ui dropdown'>
                <option value="" disabled>Select value</option>
                <option value="Negative">Negative </option>
                <option value="Positive">Positive</option>
              </select>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>Negative</h5>
              </div>
            </div>
          </div>
          <div className="ui stackable equal width grid">
            <div className="eight wide tablet six wide computer  field column">
              <label htmlFor='typhoidTechnolgy'>Technology Name</label>
              <input type="text" id="typhoidTechnolgy" name="typhoidTechnolgy" value={otherTest.typhoidTechnolgy} onChange={handleChange} placeholder="Technology Name.." />
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

export default OtherTest