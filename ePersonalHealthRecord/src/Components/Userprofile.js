import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import UserProfileContext from '../Context/UserProfile/UserProfileContext';
const Userprofile = () => {

  let date = moment(new Date()).format('YYYY-MM-DD')
  const [userProfile, setUserProfile] = useState({ firstName: "", lastName: "", dob: "", gender: "", phoneNo: "", email: "", address: "", city: "", pincode: "", state: "", country: "" });

  const navigate = useNavigate();
  const context=useContext(UserProfileContext);
  const {userProfileData, getUserProfileData, addUserProfileData }=context;

  useEffect(()=>{
    if(localStorage.getItem('token')){
      getUserProfileData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    if(userProfileData.length>0){
     setUserProfile({
      firstName: userProfileData[0].firstName,
       lastName: userProfileData[0].lastName,
       dob: userProfileData[0].dob,
       gender: userProfileData[0].gender,
       phoneNo: userProfileData[0].phoneNo,
       email: userProfileData[0].email,
       address: userProfileData[0].address,
       city: userProfileData[0].city,
       pincode: userProfileData[0].pincode,
       state: userProfileData[0].state,
       country: userProfileData[0].country
     })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userProfileData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
        addUserProfileData(userProfile);
    }
    else {
      navigate('/Login')
    }

  }
  const handleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  }
  return (
    <div className=" ui container mt-5">
      <h2 className="ui dividing header">User  Profile</h2>
      <form className=" ui large form  mb-0" onSubmit={onSubmit} >
        <div className="two fields ms-2">
          <div className="  field" >
            <label htmlFor="firstName">First name</label>
            <div className="ui  input">
              <input type="text" id="firstName" name="firstName" value={userProfile.firstName} onChange={handleChange} placeholder="First name" />
            </div>
          </div>
          <div className=" ui field" >
            <label htmlFor="lastName">Last name</label>
            <div className="ui  input">
              <input type="text" id="lastName" name="lastName" value={userProfile.lastName} onChange={handleChange} placeholder="Last name" />
            </div>
          </div>
        </div>
        <div className="two fields ms-2">
          <div className=" ui field" >
            <label className="" htmlFor="dob">Date of Birth</label>
            <div className="ui  input">
              <input type="date" id="dob" name="dob" max={date} value={userProfile.dob} onChange={handleChange} placeholder="Date of birth" />
            </div>
          </div>
          <div className="  field" >
            <label className="" htmlFor="gender">Gender</label>
            <div className="ui  input">
              <select id="gender" name="gender" value={userProfile.gender} onChange={handleChange}   >
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="two fields ms-2">
          <div className="  field" >
            <label className="" htmlFor="phoneNo">Phone No</label>
            <div className="ui labeled input">
              <div className="input-group-text">+91</div>
              <input type="tel" name="phoneNo" className="form-control" value={userProfile.phoneNo} onChange={handleChange} pattern="[6789][0-9]{9}" title="Please enter valid phone number" id="phoneNo" placeholder="Enter the Phone-no" />
            </div>
          </div>
          <div className="  field" >
            <label className="" htmlFor="email">Email</label>
            <div className="ui  input">
              <input type="email" name="email" id="email" value={userProfile.email} onChange={handleChange} pattern='[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$' placeholder="email@domain.com" required />
            </div>
          </div>
        </div>
        <div className=" wide field ms-3">
          <label htmlFor="address">Residence Address</label>
          <div className="ui  input">
            <input type="text" name="address" id="address" value={userProfile.address} onChange={handleChange} placeholder="Residence address... " />
          </div>
        </div>
        <div className="two fields ms-2">
          <div className="  field" >
            <label htmlFor="city">City</label>
            <div className="ui  input">
              <input type="text" name="city" id="city" value={userProfile.city} onChange={handleChange} placeholder="City...." />
            </div>
          </div>
          <div className="  field" >
            <label htmlFor="pincode">Pin Code</label>
            <div className="ui  input">
              <input type="text" id="pincode" name="pincode" value={userProfile.pincode} onChange={handleChange} pattern="[1-9]{1}[0-9]{5}" title="Six digit pin code" placeholder="Pin code....." />
            </div>
          </div>
        </div>
        <div className="two fields ms-2">
          <div className="  field" >
            <label htmlFor="state">State</label>
            <div className="ui  input">
              <input type="text" name="state" id="state" placeholder="State..." value={userProfile.state} onChange={handleChange} />
            </div>
          </div>
          <div className="  field" >
            <label htmlFor="country">Country</label>
            <div className="ui  input">
              <input type="text" name="country" id="country" value={userProfile.country} onChange={handleChange} placeholder="Country..." />
            </div>
          </div>
        </div>
        <div className="float-end ">
          <button type="submit" className="btn btn-primary btn-rounded"
            style={{ backgroundColor: "#0062CC" }}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default Userprofile