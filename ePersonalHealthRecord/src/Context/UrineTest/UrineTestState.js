import UrineContext from "./UrineTestContext";
import { useState } from "react";

const UrineState = (props) => {
  const host = "http://localhost:5001";
  //Get All  a Home Data
  const [urineTestData, setUrineTestData] = useState([]);
  const getUrineTestData = async () => {
    //To do API call
    const response = await fetch(`${host}/api/Urine/fetchdata`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);
    setUrineTestData(json);
  }
  //adding Home Data 
  const addUrineTestData = async (urineTest) => {
    const response = await fetch("http://localhost:5001/api/Urine/addData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          urineColor: urineTest.urineColor,
          PHLevel: urineTest.PHLevel,
          gravity: urineTest.gravity,
          appearance: urineTest.appearance,
          albumin: urineTest.albumin,
          sugar: urineTest.sugar,
          acetone: urineTest.acetone,
          nitrate: urineTest.nitrate,
          keton: urineTest.keton,
          urobilinogen: urineTest.urobilinogen,
          bileSalt: urineTest.bileSalt,
          bilePigments: urineTest.bilePigments,
          WBC: urineTest.WBC,
          pusCells: urineTest.pusCells,
          RBC: urineTest.RBC,
          epithelialCells: urineTest.epithelialCells,
          crystals: urineTest.crystals,
          casts: urineTest.casts
        })
      });
    // eslint-disable-next-line 
    const json = await response.json();
    setUrineTestData(json);
  }
  return (
    <UrineContext.Provider value={{ urineTestData,setUrineTestData, getUrineTestData, addUrineTestData }}>
      {props.children}
    </UrineContext.Provider>
  )
}
export default UrineState;