import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomeState><Home/></HomeState>}></Route>
            <Route exact path="/Prescription" element={<PrescriptionState><Prescription/></PrescriptionState>}></Route>           
            <Route exact path="/CBC" element={<CBCState><CBC/></CBCState>}></Route>
            <Route exact path="/Urine" element={<UrineTestState><Urine /> </UrineTestState>}></Route>
            <Route exact path="/Liver" element={<LiverFTState><LiverFT /></LiverFTState>}></Route>
            <Route exact path="/OtherTest" element={<OtherTestState><OtherTest /> </OtherTestState>}></Route>
            <Route exact path="/Userprofile" element={<UserProfileState><Userprofile/> </UserProfileState>}></Route>
            <Route exact path="/About" element={<About/>}></Route>
            <Route exact path="/Login" element={<Login/>}></Route>   
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
