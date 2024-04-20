// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home.js";
import Connect from  "./Pages/Connect.js";
import Contact from "./Pages/Contact.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Pages/home" element={<Home/>}/>
          <Route path="/Pages/login" element={<Login/>}/>
          <Route path="/Pages/signup" element={<Signup/>}/>
          <Route path="/Pages/Connect" element={<Connect/>}/>
          <Route path="/Pages/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;