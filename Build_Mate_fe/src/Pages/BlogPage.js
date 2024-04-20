import React, { useState } from 'react';
import './BlogPage.css';

import blogimg from '../Components/Assets/pexels-pixabay-276724.jpg';
import Navbar from '../Components/Navbar/Navbar';

const BlogPage = () => {
    return (
        <>
          <Navbar/>
         <div className='home'>
           <img className='wall1' src={blogimg} alt='Background' />
           <div className='content'>
             <h1 className='topic'>Blogs</h1>
             <p className='subtopic'>Breaking Into Product design :<br></br>Advice from Untitled founder, james</p>
             <p className='topic01'>Recent Blog Posts</p>
             <div className='filter'>
              <ul>
                <li className='li1'>Filter</li>
                <li className='li2'>Search</li>
              </ul>
              <p className='p1'>Filter</p>
              <p className='p2'>Search</p>
             </div>
           </div>
           
         </div>
        </>
       );
}
export default BlogPage;