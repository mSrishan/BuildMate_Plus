import React, { useState } from 'react';
import './BlogPage.css'

import blogimg from '../Components/Assets/blogimg.jpg';
import Skyline from "../Components/Assets/Skyline.jpg";
import Contrends from "../Components/Assets/Contrends.jpg";
import Safety from "../Components/Assets/Safety.jpg";
import Conference from "../Components/Assets/Conference.jpg";
import Greenbuild from "../Components/Assets/Greenbuild.jpg";
import Innovation from "../Components/Assets/Innovation.jpg";

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';

const BlogPage = () => {
    return (
      <div>
       <Navbar/> 
      
      <img className='pro-mimg' src={blogimg} alt='Background'/>
      <div className='pro-content'>
        <h1 className='pro-topic'>Blogs</h1>
        <p className='pro-subtopic'>Breaking Into Product design :<br/>Advice from Untitled founder, james</p>
      </div>
      
               <div class="news-events-container">
            <div class="news-section">
                <h2>Latest News</h2>
                <div class="news-cards">
                    <div class="news-card" onclick="toggleDetails('news1')">
                    <img className='news1' src={Skyline} alt='news1' />
                        <div class="news-details" id="news1">
                            <h3>New Project Launched: Skyline Tower</h3>
                            <p>
                                BuildMate+ proudly launches its new project, Skyline Tower. 
                                Discover the state-of-the-art design and sustainable features.
                            </p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="news-card" onclick="toggleDetails('news2')">
                    <img className='news2' src={Contrends} alt='news2' />
                        <div class="news-details" id="news2">
                            <h3>Construction Industry Trends 2024</h3>
                            <p>
                                Join us for a webinar on the latest trends in the construction industry.
                                Learn about new technologies and methodologies.
                            </p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="news-card" onclick="toggleDetails('news3')">
                    <img className='news3' src={Safety} alt='news3' />
                        <div class="news-details" id="news3">
                            <h3>Safety First: New Safety Protocols</h3>
                            <p>
                                Learn about the new safety protocols implemented across all our sites 
                                to ensure the well-being of our workers.
                            </p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="events-section">
                <h2>Upcoming Events</h2>
                <div class="event-cards">
                    <div class="event-card" onclick="toggleDetails('event1')">
                    <img className='event1' src={Conference} alt='event1' />
                        <div class="event-details" id="event1">
                            <h3>Annual Builders Conference</h3>
                            <p>
                                Join us at the Annual Builders Conference to connect with industry leaders 
                                and explore new opportunities.
                            </p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="event-card" onclick="toggleDetails('event2')">
                    <img className='event2' src={Greenbuild} alt='event2' />
                        <div class="event-details" id="event2">
                            <h3>Green Building Workshop</h3>
                            <p>
                                Participate in our workshop on sustainable building practices and 
                                learn how to implement green solutions in your projects.
                            </p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="event-card" onclick="toggleDetails('event3')">
                    <img className='event3' src={Innovation} alt='event3' />
                        <div class="event-details" id="event3">
                            <h3>Innovation in Construction</h3>
                            <p>
                                Discover the latest innovations in construction technology at our upcoming 
                                seminar. Don't miss out!
                            </p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                  </div>
                  
        </div>
        </div>
      </div>
      <Footer/>
      </div>
       );
}
export default BlogPage;