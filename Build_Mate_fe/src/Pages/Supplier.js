import React, { Component } from 'react'
import "./Suppliers.css"

import supimg from '../Components/Assets/supimg.jpg';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

export default function Suppliers() {
  return (
    
    <div>
    <Navbar/>
     <div className='home_sup'>
      <img className='wall_sup' src={supimg} alt='Background'/>
      <div className='sup-content'>
      <h1 className='sup-topic'>Discover Top Suppliers<br/> for Your Construction Essentials!</h1>
             <p className='sup-subtopic1'>Choose your path to construction excellence: select the best services,  materials, or both for your project <br/> with Buildmate+. Streamline your  decisions, empower your vision, and build with confidence</p>
             <button class="sbutton1">MATERIALS SUPPLIERS</button>
             <button class="sbutton2">SERVICE SUPPLIERS</button>
             <p className='sup-subtopic2'>Building Tomorrow Together:<br/><span class="larger">Empower Your Supply Chain with Buildmate+</span></p>
            </div>
         </div>

         <div className='frame1'>
       
         <h1 className='mat1'>Material Suppliers</h1>
         <p className='mat2'><span class="highlight">Home / Suppliers </span>/ Material Suppliers</p>
         <h1 className='mat3'>Filters</h1>
         <button class="button-mat">search</button>
         <h1 className='mat4'>Nearest Material Suppliers</h1>
        
         
          <div class="container1">
         <table className='sub-tab'>
         
          <tr>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

        </tr>

        <tr>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

        </tr>

    </table>
  </div>
  </div>

<div className='frame2'>
<h1 className='ser1'>Material Suppliers</h1>
         <p className='ser2'><span class="highlight">Home / Suppliers </span>/ Material Suppliers</p>
         <h1 className='ser3'>Filters</h1>
         <button class="button-ser">search</button>
   <h1 className='ser4'>Nearest Material Suppliers</h1>

         <div class="container1">
         <table className='sub-tab'>
         
          <tr>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

        </tr>

        <tr>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

            <td className='tab1'>
            <p class="rate">5.4 k</p>
            <h2 class="sup-name">CONMAT</h2>
            <p class="sup-title">CONMAT PVT LIMIT<br/><span class="small">Colombo 01</span></p>            
            <button class="button3">see more</button>
            </td>

        </tr>

    </table>
  </div>
</div>
<Footer/>
    </div>
  )
}