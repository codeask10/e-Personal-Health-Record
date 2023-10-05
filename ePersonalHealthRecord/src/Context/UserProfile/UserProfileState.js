import UserProfileContext from "./UserProfileContext";
import { useState } from "react";

const UserProfileState = (props) => {
  const host = "http://localhost:5001";
  //Get All  a Home Data
  const [userProfileData, setUserProfileData] = useState([]);
  const getUserProfileData = async () => {
    //To do API call
    const response = await fetch(`${host}/api/userprofile/fetchdata`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setUserProfileData(json);
  }
  //adding Home Data 
  const addUserProfileData = async (userProfile) => {
    const response = await fetch(`${host}/api/userprofile/addData`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          firstName: userProfile.firstName, lastName: userProfile.lastName, dob: userProfile.dob, gender: userProfile.gender, phoneNo: userProfile.phoneNo, email: userProfile.email, address: userProfile.address, city: userProfile.city, pincode: userProfile.pincode, state: userProfile.state, country: userProfile.country
        })
      });
    // eslint-disable-next-line 
    const json = await response.json();
    setUserProfileData(json);
  }
  return (
    <UserProfileContext.Provider value={{ userProfileData, setUserProfileData, getUserProfileData, addUserProfileData }}>
      {props.children}
    </UserProfileContext.Provider>
  )
}
export default UserProfileState;