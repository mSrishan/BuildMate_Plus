import React from 'react'
import './Architecture.css'

import Primg from "../Components/Assets/Pim1.jpg"
import prof from "../Components/Assets/prof-pic.jpeg"

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

const Architecture = () => {
  return (

<div>
<Navbar/>
      <div className='home'>
      <img className='wall1' src={Primg} alt='Background' />
           <div className='arch-content'>
             <h1 className='arch-topic'>Find the Professional <br/>For Your Maintenance Needs;</h1>
             <p className='arch-subtopic1'>Streamline your projects, empower your teams, and accelerate decision-making with our construction <br/>project management software.</p>
             <button class="button1">GET STARTED</button>
             <p className='arch-subtopic2'>We build, We craft :<br/><span class="larger">Building Dreams Through Construction</span></p>
            </div>
         </div>

         <div>
         <h1 className='arch1'>Architectures</h1>
         <p className='arch2'><span class="highlight">Home / Professionals / </span>Architecture</p>
         <h1 className='arch3'>Filters</h1>
         <button class="button-search">search</button>
         <h1 className='arch4'>Profession Types</h1>
         </div>

      <div class="container1">
      <button class="button-2">Architectures</button><br/>
      <button class="button2">Engineers</button><br/>
      <button class="button2">Project Managers</button><br/>
      <button class="button2">Legal Advisors</button><br/>
      <button class="button2">Interior Designers</button><br/>
      <button class="button2">Landscapers</button><br/>
      <button class="button2">Plumbers</button><br/>
      <button class="button2">Electricians</button>
      </div>

      <div class="vertical-line"></div>

         <div class="container2">
         <table className='archi-tab'>
         
          <tr>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  :<span class="larger2"> 5yr</span></p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

        </tr>

        <tr>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

        </tr>

        <tr>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

        </tr>

        <tr>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

            <td className='profile1'>
            <div className='pp-container'>
            <img className='pp' src={prof} alt='Background' />
            </div>
            <h2 class="profile-name">Vishwa Wijesekare</h2>
            <p class="profile-title">Architecture</p>
            <p class="profile-exp">Years of experience  : 5yr</p>
            <p class="profile-rate">5.4 k</p>
            <button class="button3">More Details</button>
            </td>

        </tr>

    </table>
  </div>
  <Footer/>
</div>
  )
}

export default Architecture;