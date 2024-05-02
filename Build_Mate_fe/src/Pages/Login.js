import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"
import Swal from "sweetalert2";

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/login", {
                email,
                password,                
        
            });
            Swal.fire({
                icon: 'success',
                title: 'LSuccess',
                text: "You have logged successfully...",
                confirmButtonText: 'Home'
            });

            history("/Pages/Home");

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Check Username and Password",
                confirmButtonText: 'OK'
            });
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <br />
            <p>Or Create new account from here</p>
            <br />
            <Link to="/Pages/signup">Signup Page</Link>
        </div>
    );
}

export default Login;
