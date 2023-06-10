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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Prescription" element={<Prescription/>}></Route>           
            <Route exact path="/CBR" element={<CBC/>}></Route>
            <Route exact path="/Urine" element={<Urine />}></Route>
            <Route exact path="/Liver" element={<LiverFT />}></Route>
            <Route exact path="/OtherTest" element={<OtherTest />}></Route>
            <Route exact path="/Userprofile" element={<Userprofile/>}></Route>
            <Route exact path="/About" element={<About/>}></Route>
            <Route exact path="/Login" element={<Login/>}></Route>   
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
