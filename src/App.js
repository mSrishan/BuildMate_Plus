// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Pages/" element={<Login/>}/>
          <Route path="/Pages/signup" element={<Signup/>}/>
          <Route path="/Pages/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;