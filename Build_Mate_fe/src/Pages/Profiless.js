import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import leftArrow from '../Components/Assets/left-arrow.png';
import linkedin from '../Components/Assets/linkedin.png';
import gps from '../Components/Assets/gps.png';
import web from '../Components/Assets/web.png';
import './ProfileCards.css';

const Profiless = () => {
    const [profiles, setProfiles] = useState([]);
    const [categorizedProfiles, setCategorizedProfiles] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/serviceSuppliers');
                const data = response.data;
                console.log("API Response:", data); // Debug: log the response data
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
            const { TypeOfService } = profile;
            if (!acc[TypeOfService]) {
                acc[TypeOfService] = [];
            }
            acc[TypeOfService].push(profile);
            return acc;
        }, {});

        setCategorizedProfiles(categories);
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProfiles = profiles.filter(profile =>
        (profile.ssded && profile.ssdet.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (profile.TypeOfService && profile.TypeOfService.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const displayedProfiles = selectedCategory === 'All'
        ? filteredProfiles
        : (categorizedProfiles[selectedCategory] || []).filter(profile =>
            (profile.name && profile.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (profile.TypeOfService && profile.TypeOfService.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="main-container">
            <div className="navbar-container" style={{ backgroundColor: '#FF6B00' }}>
                <Navbar />
            </div>
            <div className='pro-body01'>
                <div className='pro-st1'>Service Suppliers</div>

                <div className="search-bar2">
                    <input
                        type="text"
                        className="search-input2"
                        placeholder="Search by name or service 🔍"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>

                <div className='pro-line'></div>
                <div className='pro-tline'>{selectedCategory === 'All' ? 'All Service Suppliers' : selectedCategory}</div>
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
                    {Object.keys(categorizedProfiles).map((service) => (
                        <button
                            key={service}
                            onClick={() => handleCategoryChange(service)}
                            className={selectedCategory === service ? 'active' : ''}
                        >
                            {service}
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
                                            <h3 className="profile-name">{profile.ssdet}</h3>
                                            <p className="profile-role">{profile.TypeOfService}</p>
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
                                            onClick={() => window.location.href = `/serviceSupplier/${profile._id}`}
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

export default Profiless;
