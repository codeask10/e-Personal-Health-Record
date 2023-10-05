import HomeContext from "./HomeContext";
import { useState } from "react";

const HomeState = (props) => {
  const host = "http://localhost:5001";
  //Get All  a Home Data
  const [homeData, setHomeData] = useState([]);
  const getHomeData = async () => {
    //To do API call
    const response = await fetch(`${host}/api/home/fetchdata`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setHomeData(json);
  }
  //adding Home Data 
  const addHomeData = async (homeData) => {
    const response = await fetch("http://localhost:5001/api/home/addData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ age: homeData.age, bloodGroup: homeData.bloodGroup, height: homeData.height, weight: homeData.weight, temperature: homeData.temperature, bodyMassIndex: homeData.bodyMassIndex, bloodPressure: homeData.bloodPressure, pulseRate: homeData.pulseRate, cholesterol: homeData.cholesterol, bloodGlucose: homeData.bloodGlucose, bloodOxygen: homeData.bloodOxygen, respirationRate: homeData.respirationRate })
    });
    // eslint-disable-next-line 
    const json = await response.json();
    setHomeData(json);
  }
  return (
    <HomeContext.Provider value={{ homeData, setHomeData, getHomeData, addHomeData }}>
      {props.children}
    </HomeContext.Provider>
  )
}
export default HomeState;