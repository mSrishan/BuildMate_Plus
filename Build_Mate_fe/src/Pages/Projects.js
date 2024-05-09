import React from 'react'
import './Projects.css'

import mimg1 from "../Components/Assets/login1.jpg"
import pp1 from "../Components/Assets/pro-p1.jpg"

export default function Projects() {
  return (
    <div>
      <img className='pro-mimg' src={mimg1} alt='Background'/>
      <div className='pro-content'>
             <h1 className='pro-topic'>Projects</h1>
             <p className='pro-subtopic'>We build, We craft :<br></br>Building Dreams Through Construction</p>
             
           </div>
           <div className='pro-st1'>Ongoing Projects</div>
           <div className='pro-line'>________________________________________________________________________________</div>
           <div className='pro-tline'>Home/Projects/Ongoing</div>
           <div className='pro-line'>________________________________________________________________________________</div>
           <div className='pro-fil'>Filters</div>
           <div className='pro-sea'>search</div>
           <div className='pro-st2'>Project Types</div>
           <button className='pro-con-t1'>
           <p className='pro-t1'>single family homes</p>
           </button>
           <br/>
           <button className='pro-con1-t1'>
           <p className='pro-t1'>Multi-unit dwellings</p>
           </button>
           <br/>
           <button className='pro-con1-t1'>
           <p className='pro-t1'>Retail spaces</p>
           </button>
           <br/>
           <button className='pro-con1-t1'>
           <p className='pro-t1'>Office spaces</p>
           </button>
           <br/>
           <button className='pro-con1-t1'>
           <p className='pro-t1'>Warehouses</p>
           </button>
           <div className='pro-con'>
           
            </div>
            <div className='pro-scon1'>
                <img className='pro-img' src={pp1}/>
                <p className='pro-date'>March 07, 2024</p>
                <p className='pro-head'>Modern Farmhouse Dream</p>
                <p className='pro-para'>MVIVO (PVT) Ltd</p>
                <p className='pro-prog'>Progress: <b>70%</b></p>
                <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                <button className='pro-md'>More Details</button>
           </div>
           <div className='pro-scon2'>
                <img className='pro-img' src={pp1}/>
                <p className='pro-date'>March 07, 2024</p>
                <p className='pro-head'>Modern Farmhouse Dream</p>
                <p className='pro-para'>MVIVO (PVT) Ltd</p>
                <p className='pro-prog'>Progress: <b>70%</b></p>
                <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                <button className='pro-md'>More Details</button>
           </div>
           <div className='pro-scon3'>
                <img className='pro-img' src={pp1}/>
                <p className='pro-date'>March 07, 2024</p>
                <p className='pro-head'>Modern Farmhouse Dream</p>
                <p className='pro-para'>MVIVO (PVT) Ltd</p>
                <p className='pro-prog'>Progress: <b>70%</b></p>
                <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                <button className='pro-md'>More Details</button>
           </div>
           <div className='pro-scon4'>
                <img className='pro-img' src={pp1}/>
                <p className='pro-date'>March 07, 2024</p>
                <p className='pro-head'>Modern Farmhouse Dream</p>
                <p className='pro-para'>MVIVO (PVT) Ltd</p>
                <p className='pro-prog'>Progress: <b>70%</b></p>
                <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                <button className='pro-md'>More Details</button>
           </div>
           <div className='pro-scon5'>
                <img className='pro-img' src={pp1}/>
                <p className='pro-date'>March 07, 2024</p>
                <p className='pro-head'>Modern Farmhouse Dream</p>
                <p className='pro-para'>MVIVO (PVT) Ltd</p>
                <p className='pro-prog'>Progress: <b>70%</b></p>
                <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                <button className='pro-md'>More Details</button>
           </div>
           <div className='pro-scon6'>
                <img className='pro-img' src={pp1}/>
                <p className='pro-date'>March 07, 2024</p>
                <p className='pro-head'>Modern Farmhouse Dream</p>
                <p className='pro-para'>MVIVO (PVT) Ltd</p>
                <p className='pro-prog'>Progress: <b>70%</b></p>
                <p className='pro-est'>Estimation Cost: <b>2.5Cr</b></p>
                <button className='pro-md'>More Details</button>
           </div>

           <button className='pro-sm'>see more</button>
           



           

           
    </div>
  )
}
