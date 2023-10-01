import React, { useState } from 'react'
import moment from 'moment';
import "../CSS/Prescription.css";
const Prescription = () => {
  let date = moment(new Date()).format('YYYY-MM-DD');

  const [prescription, setPrescription] = useState({ drName: '', H_CName: '', phoneNumber: '', date: '', symptoms: '', diagnosis: '', medicines: '', dosage: '' });
  const handleChange = (e) => {
    console.log(e.target.value)
    setPrescription({ ...prescription, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      const response = await fetch("http://localhost:5001/api/prescription/addData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          drName: prescription.drName, H_CName: prescription.H_CName, phoneNumber: prescription.phoneNumber, date: prescription.date, symptoms: prescription.symptoms, diagnosis: prescription.diagnosis, medicines: prescription.medicines, dosage: prescription.dosage
        })
      });
      // eslint-disable-next-line 
      const json = await response.json();
      console.log(json);
    };
  }
  return (
    <div className=" ui container mt-5">
      <form className="ui form large" onSubmit={handleSubmit}>
        <h2 className="ui dividing header">Prescription  Information</h2>
        <div className="ui stackable equal width grid  ">
          <div className="column field">
            <label htmlFor="drName">Docter name</label>
            <input type="text" id="drName" name="drName" value={prescription.drName} onChange={handleChange} pattern="[A-Za-z ]{1,20}" placeholder="DR Name" />
          </div>
          <div className="column field">
            <label htmlFor="H_CName">Hospital/Clinic Name</label>
            <input type="text" id="H_CName" name="H_CName" value={prescription.H_CName} onChange={handleChange} pattern="[A-Za-z ]{1,50}" placeholder="Hospital/clinic name..." />
          </div>
          <div className="column field">
            <label htmlFor="phoneNumber">Dr Phone-no</label>
            <div className="ui labeled input">
              <div className="input-group-text">+91</div>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={prescription.phoneNumber} onChange={handleChange} className="form-control" pattern="[6789][0-9]{9}" title="Please enter valid phone number" placeholder="Phone-no" />
            </div>
          </div>
          <div className="column field">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" max={date} value={prescription.date} onChange={handleChange} placeholder="DD-MM-YYYY" />
          </div>
        </div>
        <div className="ui stackable equal width  grid  ">
            <div className="column field">
              <label htmlFor="symptoms">Symptoms</label>
              <input type="text" id="symptoms" name="symptoms" value={prescription.symptoms} onChange={handleChange} pattern="[A-Za-z ,]{1,50}" placeholder="Headache, Fever, Rashes...." />
            </div>
            <div className="column field">
              <label htmlFor="diagnosis">Diagnosis:</label>
              <input type="text" id="diagnosis" name="diagnosis" value={prescription.diagnosis} onChange={handleChange} pattern="[A-Za-z ,]{1,50}" placeholder="Diabetes..." />
            </div>
        </div>
        <div className="ui stackable equal width  grid  ">
            <div className=" column field" >
              <label htmlFor="medicines">Medicines</label>
              <input type="text" id="medicines" name="medicines" pattern="[A-Za-z0-9 ]{1,50}" placeholder="Medicines..." title="enter value as Paracetamol, Ciprofloxacin and Dexamethasone etc" value={prescription.medicines} onChange={handleChange} />
            </div>
            <div className="column field" >
              <label htmlFor="dosage">Dosage</label>
              <input type="text" id="dosage" name="dosage" pattern="[A-Za-z0-9 .]{1,50}" placeholder="Dosage.." title="enter value as 2.5ml| 1 tablet for 3 times in a day" value={prescription.dosage} onChange={handleChange} />
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

export default Prescription;