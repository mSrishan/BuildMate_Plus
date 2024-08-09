import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // Import the CSS file

axios.defaults.baseURL = 'http://localhost:8000';

const SearchBar = () => {
    const [searchType, setSearchType] = useState('Expert');
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const fetchResults = async () => {
        if (searchQuery.trim() !== '') {
            try {
                let endpoint = '';

                switch (searchType) {
                    case 'Expert':
                        endpoint = `/api/search?query=${searchQuery}`;
                        break;
                    case 'Supplier':
                        endpoint = `/api/serviceSuppliers/search?query=${searchQuery}`;
                        break;
                    case 'Material':
                        endpoint = `/api/materialSuppliers/search?query=${searchQuery}`;
                        break;
                    default:
                        return;
                }

                const response = await axios.get(endpoint);
                setResults(response.data);
                setShowResults(true);
            } catch (error) {
                console.error('Error fetching search results:', error.message);
            }
        } else {
            setResults([]);
            setShowResults(false);
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchResults();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, searchType]);

    const handleSearchTypeChange = (type) => {
        setSearchType(type);
        setResults([]); // Clear results when changing search type
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        fetchResults();
    };

    const handleViewProfile = (profile) => {
        navigate(`/Pages/ProfileView/${profile._id}`, { state: { profile } });
    };

    return (
        <div className="search-center">
            <div className="search-bar-container">
                <div className="switch-buttons">
                    <button
                        className={`switch-button-ex ${searchType === 'Expert' ? 'active' : ''}`}
                        onClick={() => handleSearchTypeChange('Expert')}
                    >
                        Expert
                    </button>
                    <button
                        className={`switch-button-su ${searchType === 'Supplier' ? 'active' : ''}`}
                        onClick={() => handleSearchTypeChange('Supplier')}
                    >
                        Supplier
                    </button>
                    <button
                        className={`switch-button-ma ${searchType === 'Material' ? 'active' : ''}`}
                        onClick={() => handleSearchTypeChange('Material')}
                    >
                        Material
                    </button>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder={`Search ${searchType.toLowerCase()}`}
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        onBlur={() => setShowResults(false)}
                        onFocus={() => setShowResults(true)}
                    />
                    <button className="search-button" onClick={handleSearchClick}>
                        Search
                    </button>
                </div>
            </div>
            {showResults && results.length > 0 && (
                <div className="search-results-popup">
                    {results.map((profile) => (
                        <div key={profile._id} className="search-result-item">
                            <div className="left-section">
                                <img 
                                    src={`http://localhost:8000/${profile.profilePicture}`} 
                                    alt={`${profile.name}'s Profile`} 
                                    onError={(e) => e.target.src = 'default-image-url.png'} 
                                    className="profile-image" 
                                />
                                <h2>{profile.name}</h2>
                            </div>
                            <div className="details">
                                <p>{profile.profession || profile.TypeOfService || profile.TypeOfMaterials}</p>
                            </div>
                            <button
                                onClick={() => handleViewProfile(profile)}
                                className="view-profile-button"
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
