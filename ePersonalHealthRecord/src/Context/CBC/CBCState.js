import CBCContext from "./CBCContext";
import { useState } from "react";

const CBCState = ( props) => {
    const host = "http://localhost:5001";
    const [CBCData, setCBCData] = useState([]);
    const getCBCData = async () => {
        const response = await fetch(`${host}/api/CBC/fetchData`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setCBCData(json);
    }
    const addCBCData = async (cbc) => {
        const response = await fetch(`${host}/api/CBC/addData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                haemoglobin: cbc.haemoglobin,
                totalWBCCount: cbc.totalWBCCount,
                neutrophils: cbc.neutrophils,
                lymphocytes: cbc.lymphocytes,
                monocytes: cbc.monocytes,
                eosinophils: cbc.eosinophils,
                absNeutrophisCount: cbc.absNeutrophisCount,
                absLymphocytesCount: cbc.absLymphocytesCount,
                absMonocytesCount: cbc.absMonocytesCount,
                absEosinophilsCount: cbc.absEosinophilsCount,
                plateletCount: cbc.plateletCount,
                RBCCount: cbc.RBCCount,
                MCV: cbc.MCV,
                MCH: cbc.MCH,
                MCHC: cbc.MCHC,
                RDWCV: cbc.RDWCV
            })
        });
        // eslint-disable-next-line 
      const json = await response.json();
      setCBCData(json);
    }
    return (
        <CBCContext.Provider value={{CBCData,getCBCData,addCBCData}}>
            {props.children}
        </CBCContext.Provider>
    );
}

export default CBCState;