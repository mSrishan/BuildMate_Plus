import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './Signup.css'
import si1 from "../Components/Assets/sign-img.jpg";

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFName] = useState("");
    const [lastname, setLName] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password,
                firstName,
                lastname,
            });

            const responseData = response.data;

            console.log(responseData==="exist")

            if (responseData === "notexist") {
                showSuccessMessage();
            } else if (responseData === "exist") {
                showErrorMessage("User already exists with this email.");
            } else {
                showErrorMessage("An error occurred while processing your request");
            }

        } catch (error) {
            showErrorMessage("An error occurred while processing your request");
            console.error("Error:", error);
        }
    }

    function showSuccessMessage() {
        Swal.fire({
            icon: 'success',
            title: 'Signup Successful!',
            text: 'You have successfully signed up.',
            confirmButtonText: 'OK'
        }).then(() => {
            history("/Pages/Login"); // Corrected route name to "/Pages/Login"
        });
    }

    function showErrorMessage(message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            confirmButtonText: 'OK'
        });
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
                    onChange={(e) => setFName(e.target.value)}
                    placeholder="First Name"
                    required
                />
                <input
                    className="signup-Lname"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLName(e.target.value)}
                    placeholder="Last Name"
                    required
                />
                <input
                    className="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    className="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />

                <button type="submit" className="btn">Signup</button>
            </form>
            <p className="signup-para2">Already a member ?</p>
            <Link to="/Pages/Login" className="signup-log">Login Page</Link>
        </div>
        </div>
    );
}

export default Signup;
