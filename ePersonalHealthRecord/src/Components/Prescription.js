import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import "../CSS/Prescription.css";
import PrescriptionContext from '../Context/prescription/PrescriptionContext';
import { useNavigate } from 'react-router-dom';

const Prescription = ({setProgress}) => {
  let date = moment(new Date()).format('YYYY-MM-DD');
  const [prescription, setPrescription] = useState({ drName: '', H_CName: '', phoneNumber: '', date: '', symptoms: '', diagnosis: '', medicines: '', dosage: '' });

  const context = useContext(PrescriptionContext);
  const { prescriptionData,getPrescriptionData,addPrescriptionData} = context;

  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      getPrescriptionData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    setProgress(100);
      if(prescriptionData.length>0){
        setPrescription({
          drName: prescriptionData[0].drName, 
          H_CName: prescriptionData[0].H_CName, 
          phoneNumber: prescriptionData[0].phoneNumber, 
          date: prescriptionData[0].date, 
          symptoms: prescriptionData[0].symptoms, 
          diagnosis: prescriptionData[0].diagnosis, 
          medicines: prescriptionData[0].medicines, 
          dosage: prescriptionData[0].dosage
        })
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[prescriptionData]);

  const handleChange = (e) => {
    setPrescription({ ...prescription, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(20)
    if (localStorage.getItem('token')) {
      addPrescriptionData(prescription);
      setProgress(70);
    }
    else {
      navigate('/Login')
    }
    setProgress(100);
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