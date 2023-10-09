import React, { useEffect } from 'react';
import { Link, useLocation,useNavigate } from "react-router-dom";
import img from '../Image/img13.jpg';
import "../CSS/Navbar.css";
const Navbar = ({setProgress}) => {
     // to show Active Components when i clicked on navbar components
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    //To set a navbar with a background image except for the login,signup & about pages
    const { pathname } = location;
    const myStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize:  "cover",
        backgroundPosition: "center",
        backgroundRepeat  : 'no-repeat',
        height: "90vh", 
    }
    
    const myStyle1 = {
        backgroundImage: 'none',
    }
    const bgImage = pathname !== '/Login' && pathname !== '/Signup' && pathname !== '/About'? myStyle: myStyle1;

    const navigate = useNavigate();
    
    const handleLogout=(e)=>{
        setProgress(40);
        localStorage.removeItem('token');
        location.reload();
        navigate('/')
        setProgress(100);
    }
    

    // transparent Background image  for Navbar
    return (
        <div className="img" style={bgImage}>
            <nav className=" ui container navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid mt-2">
                    <Link className="navbar-brand h1" to="/">MYHEALTH RECORD</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto ">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" onClick={() =>setProgress(100)} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Prescription" ? "active" : ""}`} onClick={() =>setProgress(100)}  to="/Prescription">Prescription</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/CBC" ? "active" : ""}`} onClick={() =>setProgress(100)} to="/CBC">CBC</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Urine" ? "active" : ""}`} onClick={() =>setProgress(100)} to="/Urine">Urine</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Liver" ? "active" : ""}`} onClick={() =>setProgress(100)} to="/Liver">Liver Function </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/OtherTest" ? "active" : ""}`} onClick={() =>setProgress(100)} to="/OtherTest">Other Test</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Userprofile" ? "active" : ""}`} onClick={() =>setProgress(100)} to="/Userprofile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} onClick={() =>setProgress(100)} to="/About">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?
                        <form className="d-flex navbar-nav  ms-auto ">
                            <Link onClick={() =>setProgress(100)} to="/Login" className=" nav-link ">Login</Link>
                        </form>:
                        <form className="d-flex navbar-nav  ms-auto ">
                        <Link className="nav-link"  onClick={handleLogout}> Logout</Link>
                        </form>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar