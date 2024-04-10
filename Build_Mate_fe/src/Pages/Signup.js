import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    async function submit(e) {
        e.preventDefault();

       

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password,
                fullName,
                username,
                phoneNumber
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
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    required
                />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    required
                />
                <button type="submit">Signup</button>
            </form>
            <p>OR</p>
            <Link to="/">Login Page</Link>
        </div>
    );
}

export default Signup;
