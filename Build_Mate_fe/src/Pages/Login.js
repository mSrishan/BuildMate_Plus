import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link ,Navigate} from "react-router-dom"
import "./Login.css"
function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/login", {
                email,
                password,
                
        
            });

            const responseData = response.data;

            console.log(responseData)

        } catch (error) {
            // alert("An error occurred while processing your request");
            console.error("Error:", error);
        }

        
       

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>Or Create new account from here</p>
            <br />

            <Link to="/Pages/signup">Signup Page</Link>

        </div>
    )
}

export default Login