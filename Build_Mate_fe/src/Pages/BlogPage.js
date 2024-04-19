import React, { useState } from 'react';
import './BlogPage.css';

import blogimg from '../Components/Assets/pexels-pixabay-276724.jpg';
import Navbar from '../Components/Navbar/Navbar';

const BlogPage = () => {
    return (
        <>
          <Navbar/>
         <div className='home'>
           <img className='wall' src={blogimg} alt='Background' />
           <div className='content'>
             <h1 className='topic'>Blogs</h1>
             <p className='subtopic'>Breaking Into Product design :<br></br>Advice from Untitled founder, james</p>
           </div>
     
         </div>
        </>
       );
}
export default BlogPage;