import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CBC from './Components/CBC';
import Urine from './Components/Urine';
import Userprofile from './Components/Userprofile';
import About from './Components/About';
import OtherTest from './Components/OtherTest';
import Login from './Components/Login';
import Prescription from './Components/Prescription';
import LiverFT from './Components/LiverFT';
import HomeState from './Context/Home/HomeState';
import PrescriptionState from './Context/prescription/PrescriptionState'
import CBCState from './Context/CBC/CBCState';
import LiverFTState from './Context/LiverFunction/LiverFTState';
import UrineTestState from './Context/UrineTest/UrineTestState';
import OtherTestState from './Context/OthterTest/OtherTestState';
import UserProfileState from './Context/UserProfile/UserProfileState';

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)
        }
      />
        <Navbar  setProgress={setProgress}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomeState><Home setProgress={setProgress}/></HomeState>}></Route>
            <Route exact path="/Prescription" element={<PrescriptionState><Prescription setProgress={setProgress} /></PrescriptionState>}></Route>           
            <Route exact path="/CBC" element={<CBCState><CBC setProgress={setProgress} /></CBCState>}></Route>
            <Route exact path="/Urine" element={<UrineTestState><Urine setProgress={setProgress} /> </UrineTestState>}></Route>
            <Route exact path="/Liver" element={<LiverFTState><LiverFT  setProgress={setProgress}/></LiverFTState>}></Route>
            <Route exact path="/OtherTest" element={<OtherTestState><OtherTest setProgress={setProgress}/> </OtherTestState>}></Route>
            <Route exact path="/Userprofile" element={<UserProfileState><Userprofile setProgress={setProgress} /> </UserProfileState>}></Route>
            <Route exact path="/About" element={<About/>}></Route>
            <Route exact path="/Login" element={<Login setProgress={setProgress} />}></Route>   
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
