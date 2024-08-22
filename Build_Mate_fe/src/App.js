import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Profiler } from 'react';

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Projects"; 
import BlogPage from "./Pages/BlogPage";
import Contact from "./Pages/Contact";
import Connect from "./Pages/Connect";
import Registration from "./Pages/Registration";
import Professional from "./Pages/Professional";
import MaterialSup from "./Pages/MaterialSup";
import ServiceSup from "./Pages/ServiceSup";
import Architecture from "./Pages/Architecture";
import Profile from "./Pages/Profile";
import Suppliers from "./Pages/Supplier";
import Chat from "./Pages/Chat"; 
import ChatApp from "./Components/ChatApp/App"
import ChatIcon from "./Pages/ChatIcon";
import ArchProfile from "./Pages/ArchProfile";
import ProfileCards from "./Pages/ProfileCards";
import Profiless from "./Pages/Profiless";
import Profilems from "./Pages/Profilems";
import Profileview from "./Pages/ProfileView";
import Privacy from "./Pages/PrivacyPolicy";
import ProfilePage from "./Pages/ProfilePage";
import ImageGeneration from "./Pages/ImageGeneration";

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
          <Route path="/Pages/Connect" element={<Connect />} />
          <Route path="/Pages/Registration" element={<Registration/>}/>
          <Route path="/Pages/Professional" element={<Professional />}/>
          <Route path="/Pages/MaterialSup" element={<MaterialSup />}/>
          <Route path="/Pages/ServiceSup" element={<ServiceSup />}/>
          <Route path="/Pages/Architecture" element={<Architecture />}/>
          <Route path="/Pages/profile/:id" element={<Profile />} />
          <Route path="/Pages/Supplier" element={<Suppliers/>}/>
          <Route path="/Pages/Chat" element={<Chat />} />
          <Route path="/Pages/profileCards" element={<ProfileCards />}/>
          <Route path="/Pages/profiless" element={<Profiless />}/>
          <Route path="/Pages/profilems" element={<Profilems />}/>
          <Route path="/Pages/ProfileView/:id" element={<Profileview />} />
          <Route path="/Pages/privacy-policy" element={<Privacy />} />
          <Route path="/Components/ChatApp/App" element={<ChatApp/>}/>
          <Route path="/Pages/ProfilePage" element={<ProfilePage />} />
          <Route path="/Pages/ImageGeneration" element={<ImageGeneration/>} />
        </Routes>
        <ChatIcon />
      </Router>
    </div>
  );
}

export default App;
