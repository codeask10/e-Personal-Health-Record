import LiverFTContext from "./LiverFTContext";
import { useState } from "react";

const LiveFTState = (props) => {
  const host = "http://localhost:5001";
  //Get All  a Home Data
  const [LFTData, setLFTData] = useState([]);
  const getLFTData = async () => {
    //To do API call
    const response = await fetch(`${host}/api/liverTest/fetchData`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setLFTData(json);
  }
  //adding Home Data 
  const addLFTData = async (liverTest) => {
    const response = await fetch(`${host}/api/liverTest/addData`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
        body: JSON.stringify({
          bilirubinTotal: liverTest.bilirubinTotal,
          bilirubinDirect: liverTest.bilirubinDirect,
          bilirubinIndirect: liverTest.bilirubinIndirect,
          sgptALT: liverTest.sgptALT,
          sgotAST: liverTest.sgotAST,
          alkalinePhosphates: liverTest.alkalinePhosphates,
          toatalProteins: liverTest.toatalProteins,
          albumin: liverTest.albumin
      })
    });
    // eslint-disable-next-line 
    const json = await response.json();
    setLFTData(json);
  }
  return (
    <LiverFTContext.Provider value={{ LFTData, setLFTData, getLFTData, addLFTData }}>
      {props.children}
    </LiverFTContext.Provider>
  )
}
export default LiveFTState;