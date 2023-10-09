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
import AppProvider from './Context/AppProvider';

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
        <AppProvider>
          <Navbar setProgress={setProgress} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home setProgress={setProgress} />}></Route>
              <Route exact path="/Prescription" element={<Prescription setProgress={setProgress} />}></Route>
              <Route exact path="/CBC" element={<CBC setProgress={setProgress} />}></Route>
              <Route exact path="/Urine" element={<Urine setProgress={setProgress} />}></Route>
              <Route exact path="/Liver" element={<LiverFT setProgress={setProgress} />}></Route>
              <Route exact path="/OtherTest" element={<OtherTest setProgress={setProgress} />}></Route>
              <Route exact path="/Userprofile" element={<Userprofile setProgress={setProgress} />}></Route>
              <Route exact  path="/About" element={<About />}></Route>
              <Route exact path="/Login" element={<Login setProgress={setProgress} />}></Route>
            </Routes>
          </div>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;
