import OtherTestContext from "./OtherTestContext";
import { useState } from "react";

const OtherTestState = (props) => {
  const host = "http://localhost:5001";
  //Get All  a Home Data
  const [otherTestData, setOtherTestData] = useState([]);
  const getOtherTestData = async () => {
    //To do API call
    const response = await fetch(`${host}/api/otherTest/fetchdata`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();  
    setOtherTestData(json);
  }
  //adding Home Data 
  const addOtherTestData = async (otherTest) => {
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
    setOtherTestData(json);
  }
  return (
    <OtherTestContext.Provider value={{ otherTestData, setOtherTestData, getOtherTestData, addOtherTestData }}>
      {props.children}
    </OtherTestContext.Provider>
  )
}
export default OtherTestState;