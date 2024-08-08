import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import googleimg from '../Components/Assets/pngegg.png';
import openeye from '../Components/Assets/openeye.png';
import closeeye from '../Components/Assets/closeeye.png';
import Swal from "sweetalert2";
import closeIcon from "../Components/Assets/close.png"; // Import close icon

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/user/login", {
                email,
                password,
            });

            if (response.status === 200) {
                const { firstName } = response.data;

                // Store email and first name in local storage
                localStorage.setItem("userEmail", email);
                localStorage.setItem("firstName", firstName);

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'You have successfully logged in.',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate("/Pages/Home");
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Check Username and Password",
                    confirmButtonText: 'OK'
                });
            }
            sessionStorage.setItem('authToken',1234);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Check Username and Password",
                confirmButtonText: 'OK'
            });
        }
    }
    function handleClose() {
        navigate("/Pages/Home"); // Navigate to the home page
    }

    return (
        <div className="login_page"><img src={closeIcon} alt="Close" className="close-icon" onClick={handleClose} />
            <div className="login">
                <div className="login1">
                    <h1>Member Login</h1>
                    <h6>Please fill in your basic info</h6>
                    <button className="googleLogin" style={{ fontSize: '20px' }}>
                        <img src={googleimg} alt="google logo" style={{ width: '30px', gap: '15px' }} />
                        Log in with Google
                    </button>
                    <div className="bracker">
                        <p>OR LOGIN WITH EMAIL</p>
                    </div>
                    <div className="inputs">
                        <form onSubmit={submit}>
                            <label>Email</label>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} required />
                            <label>Password</label>
                            <div className="input-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                    style={{ textAlign: 'center' }}
                                />
                                <img
                                    src={showPassword ? closeeye : openeye}
                                    alt="toggle password visibility"
                                    className="password-toggle"
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: 'pointer', width: '30px' }}
                                />
                            </div>
                            <label style={{ fontSize: '15px', color: '#0D113E' }}>Forgot Password?</label>
                            <button className="login-button" type="submit" style={{ marginTop: '20px' }}>Login</button>
                        </form>
                    </div>
                    <label style={{ marginLeft: '12px', fontSize: '18px', fontWeight: '700' }}>
                        Or Create new account from <Link to="/pages/signup"><span style={{ color: '#FF6B00' }}>here</span></Link>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Login;