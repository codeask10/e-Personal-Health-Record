import React from 'react'
import img from '../Image/index.jpeg'

const About = () => {
  return (
    <div className=" ui container my-5">
      <div className="row">
        <div className="col-md-6" style={{fontSize:"18px"}}>
          <h2>About Health Record</h2>
          <p>
            Health Record is a digital tool designed to help individuals track and manage their personal health data.
          </p>
          <p>
            With Health Record, you can record and track your vital signs, monitor your medication schedule, keep a record of your medical history, and store and access your medical documents securely in one place.
          </p>
          <p>
            Our mission is to empower people to take control of their health by providing them with a simple and secure way to access and monitor their health information.
          </p>
        </div>
        <div className="col-md-6">
          <img src={img} alt="Health Record" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default About