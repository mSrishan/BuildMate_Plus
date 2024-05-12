import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import googleimg from '../Components/Assets/pngegg.png';
import openeye from '../Components/Assets/openeye.png';
import closeeye from '../Components/Assets/closeeye.png';
import Swal from "sweetalert2";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/login", {
                email,
                password,                
        
            });
            Swal.fire({
                icon: 'success',
                title: 'Success',
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
        <div className="login_page">
            <div className="login">
                <div className="login1">
                    <h1>Member Login</h1>
                    <h6>Please fill in your basic info</h6>
                    <button className="googleLogin" style={{ fontSize: '20px' }}>
                        <img src={googleimg} alt="google logo" style={{ width: '30px', gap: '15px' }} />
                        Log in with Google
                    </button>
                    <div className="bracker" >
                        <p>OR LOGIN WITH EMAIL</p>
                    </div>
                    <div className="inputs">
                        <form action="POST">
                            <label>Email</label>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                            <label>Password</label>
                            <div className="input-container">
                            <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    style={{
                                        textAlign: 'center',
                                        backgroundImage: 'none', // Hide the eye icon
                                    }}
                                />

                                <img
                                    src={showPassword ? closeeye : openeye}
                                    alt="toggle password visibility"
                                    className="password-toggle"
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: 'pointer' , width:'30px'}}
                                />
                            </div>
                            <label style={{ fontSize: '15px', color: '#0D113E' }}>Forgot Password?</label>
                            <input type="submit" onClick={submit} style={{ marginTop: '20px' }} />
                        </form>
                    </div>
                    <label style={{ marginLeft: '12px',fontSize:'18px',fontWeight:'700' }}>
                        Or Create new account from <Link to="/Pages/signup"><span style={{ color: '#FF6B00' }}>here</span></Link>
                    </label>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;
