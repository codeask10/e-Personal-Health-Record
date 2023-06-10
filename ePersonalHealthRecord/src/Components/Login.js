import React, { useState } from 'react'
import '../CSS/Login.css'
const Login = () => {
    // for login
    const [users, setUser]= useState({
        email:"",
        password:""
    });
    
    const handleChange=(e)=>{
        setUser({...users, [e.target.name]:[e.target.value]})
    }

    // For Registration
    const [register, setRegister]= useState({
        name:"",
        username:"",
        email:"",
        password:"",
        cPassword:""
    })
    const handleSubmit=(e)=>{
        setRegister({...register, [e.target.name]:[e.target.value]})
    }
    return (
        <div className='ui container mt-5'>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                        aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form className='form'>
                        <div className="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="bi bi-facebook"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="bi bi-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="bi bi-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="bi bi-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>


                        <div className=" ui form mb-4" style={{ width: '400px', height: '50px' }}>
                            <label className="form-label" htmlFor="loginEmail">Email address</label>
                            <input type="email" id="loginEmail" name="email" value={users.email} onChange={handleChange} placeholder="Email or Username..." className="form-control" />
                        </div>


                        <div className="ui form mb-4" style={{ width: '400px', height: '50px' }}>
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                            <input type="password" id="loginPassword" name="password" value={users.password} onChange={handleChange}placeholder="Password..." className="form-control" />
                        </div>


                        <div className="row mb-4" >
                            <div className="d-flex justify-content-center">

                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary mb-3 " >Sign in</button>
                        </div>


                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div className="text-center mb-3">
                            <p>Sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>
                        <div className="d-flex justify-content-center">
                            <div className="form mb-4 " style={{ width: '400px', height: '50px' }}>
                                <label className="form-label" htmlFor="registerName">Name</label>
                                <input type="text" name="name" value={register.name} onChange={handleSubmit} id="registerName" placeholder="Name..." className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="form mb-4" style={{ width: '400px', height: '50px' }}>
                                <label className="form-label"  htmlFor="registerEmail">Email</label>
                                <input type="email" name="email" value={register.email}  onChange={handleSubmit} id="registerEmail" placeholder="Email..." className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="form mb-4" style={{ width: '400px', height: '50px' }}>
                                <label className="form-label" htmlFor="registerPassword">Password</label>
                                <input type="password" name="password" value={register.password} onChange={handleSubmit} id="registerPassword" placeholder="Password..." className="form-control" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="form mb-4" style={{ width: '400px', height: '50px' }}>
                                <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                <input type="password" name="cPassword" value={register.cPassword} onChange={handleSubmit} id="registerRepeatPassword" placeholder="Repeat password..." className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary mb-3" >Register</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login