import LoginContex from "./LoginContext";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginState = (props) => {
    const navigate = useNavigate();
    const [credential, setCredential] = useState();
    const host = 'http://localhost:5001'
    const userLogin = async (users) => {
        const response = await fetch(`${host}/api/user/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: users.email, password: users.password })
        });
        // eslint-disable-next-line
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            alert("Account logged in successfully  ", "success")
        }
        else {
            alert("Invalid credential ", "danger")

        }
        setCredential(json);
    }
    const userRegister = async (register) => {
        const response = await fetch(`http://localhost:5001/api/user/register`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: register.name, email: register.email, password: register.password })
        });
        // eslint-disable-next-line 
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            // navigate('/');
            alert(" Account created successfully ", "success");
        }
        else {
            alert("Sorry a user with this email already exists", "danger")
        }
    }
    return (
        <LoginContex.Provider value={{ credential, userLogin, userRegister }}>
            {props.children}
        </LoginContex.Provider>
    )
}
export default LoginState;