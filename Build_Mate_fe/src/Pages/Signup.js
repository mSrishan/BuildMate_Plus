import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css';

import si1 from "../Components/Assets/sign-img.jpg";

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    

    async function submit(e) {
        e.preventDefault();

       

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password,
                firstName,
                lastname
                
            });

            const responseData = response.data;

            console.log(responseData)

        } catch (error) {
            alert("An error occurred while processing your request");
            console.error("Error:", error);
        }
    }

    return (
        <div className="signup">
        <img className="sign-img" src={si1} alt="Background"/>
        <div className="signup-locate">
        <h1 className="head1">Create New Account</h1>
        <p className="par1">Please fill in your basic info</p>
            <form onSubmit={submit}>
                <input
                    className="signup-Fname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    className="signup-Lname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    className="signup-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    className="signup-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button className="btn" type="submit">CREATE ACCOUNT</button>
            </form>
            <p className="par2">Already A Member ?</p>
            <Link to="/">Log In</Link>
        </div>
           
        </div>
    );
}

export default Signup;
