import { useState } from 'react';
import PrescriptionContext from './PrescriptionContext';

const PrescriptionState = (props) => {
    const [prescriptionData, setPrescriptionData] = useState([]);
    const host = "http://localhost:5001";
    const getPrescriptionData = async () => {
        //To do API call
        const response = await fetch(`${host}/api/prescription/fetchdata`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setPrescriptionData(json);
    }
    const addPrescriptionData = async (prescription) => {
        const response = await fetch(`${host}/api/prescription/addData`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ drName: prescription.drName, H_CName: prescription.H_CName, phoneNumber: prescription.phoneNumber, date: prescription.date, symptoms: prescription.symptoms, diagnosis: prescription.diagnosis, medicines: prescription.medicines, dosage: prescription.dosage })
        });
        const json = await response.json();
        setPrescriptionData(json);
    }
    return (
        <PrescriptionContext.Provider value={{ prescriptionData, getPrescriptionData, addPrescriptionData }}>
            {props.children}
        </PrescriptionContext.Provider>
    )
}
export default PrescriptionState;