import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Projects"; // Corrected import D:\campus\Sem 4\BuildMate+ Project\BuildMate_Plus\Build_Mate_fe\src\Pages\Projects.js
import BlogPage from "./Pages/BlogPage";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Pages/Home" element={<Home />} />
          <Route path="/Pages/Login" element={<Login />} />
          <Route path="/Pages/Signup" element={<Signup />} />
          <Route path="/Pages/About" element={<About />} />
          <Route path="/Pages/Projects" element={<Project />} />
          <Route path="/Pages/BlogPage" element={<BlogPage />} />
          <Route path="/Pages/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
