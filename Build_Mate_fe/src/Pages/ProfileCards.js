import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import leftArrow from '../Components/Assets/left-arrow.png';
import linkedin from '../Components/Assets/linkedin.png';
import gps from '../Components/Assets/gps.png';
import web from '../Components/Assets/web.png';
import './ProfileCards.css';

const ProfileCards = () => {
    const [profiles, setProfiles] = useState([]);
    const [categorizedProfiles, setCategorizedProfiles] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/professionals');
                const data = response.data;
                setProfiles(data);
                categorizeProfiles(data);
            } catch (error) {
                console.error('Error fetching profiles:', error);
                setError('Error fetching profiles. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfiles();
    }, []);

    const categorizeProfiles = (profiles) => {
        const categories = profiles.reduce((acc, profile) => {
            const { profession } = profile;
            if (!acc[profession]) {
                acc[profession] = [];
            }
            acc[profession].push(profile);
            return acc;
        }, {});

        setCategorizedProfiles(categories);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const displayedProfiles = selectedCategory === 'All'
        ? profiles
        : categorizedProfiles[selectedCategory] || [];

    return (
        <div className="main-container">
            <div className="navbar-container" style={{ backgroundColor: '#FF6B00' }}>
                <Navbar />
            </div>
            <div className='pro-body01'>
                <div className='pro-st1'>Professionals</div>
                <div className='pro-line'></div>
                <div className='pro-tline'>{selectedCategory === 'All' ? 'All Professionals' : selectedCategory}</div>
                <div className='pro-line'></div>
            </div>
            <div className="content-container">
                <button className="back-button" onClick={() => window.location.href = '/Pages/Home'}>
                    <img src={leftArrow} alt="Back" />
                </button>
                <div className="sidebar">
                    <button
                        onClick={() => handleCategoryChange('All')}
                        className={selectedCategory === 'All' ? 'active' : ''}
                    >
                        All
                    </button>
                    {Object.keys(categorizedProfiles).map((profession) => (
                        <button
                            key={profession}
                            onClick={() => handleCategoryChange(profession)}
                            className={selectedCategory === profession ? 'active' : ''}
                        >
                            {profession}
                        </button>
                    ))}
                </div>
                <div className="profile-cards-container">
                    {displayedProfiles.length === 0 ? (
                        <div>No profiles found for {selectedCategory}</div>
                    ) : (
                        <div className="profile-cards">
                            {displayedProfiles.map((profile) => (
                                <div key={profile._id} className="profile-card">
                                    <div className="profile-header">
                                        <img src={`http://localhost:8000/${profile.profilePicture}`} alt={profile.name} className="profile-image" />
                                        <div className="profile-info">
                                            <h3 className="profile-name">{profile.name}</h3>
                                            <p className="profile-role">{profile.profession}</p>
                                            <div className="profile-rating">
                                                <img src={gps} alt='location' className='pro-icon' onClick={() => window.location.href = profile.workPlace} />
                                                <img src={linkedin} alt='linkedin' className='pro-icon' onClick={() => window.location.href = profile.linkedin} />
                                                <img src={web} alt='website' className='pro-icon' onClick={() => window.location.href = profile.weblink} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-content">
                                        <p>{profile.bio}</p>
                                        <a href={`http://localhost:8000/${profile.previousJobFile}`} download>Download Portfolio</a>
                                        <button
                                            onClick={() => window.location.href = `/profile/${profile._id}`}
                                            className="view-profile-button"
                                        >
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
};

export default ProfileCards;
