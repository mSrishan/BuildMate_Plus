import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css'; // Import the CSS file

axios.defaults.baseURL = 'http://localhost:8000';

const SearchBar = () => {
    const [searchType, setSearchType] = useState('Expert');
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const fetchResults = async () => {
        if (searchQuery.trim() !== '') {
            try {
                const response = await axios.get(`/api/search?query=${searchQuery}&type=${searchType}`);
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

    const handleBlur = () => {
        // Delay hiding results to allow click on result
        setTimeout(() => {
            setShowResults(false);
        }, 200);
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
                        onBlur={handleBlur}
                        onFocus={() => setShowResults(true)}
                    />
                    <button className="search-button" onClick={handleSearchClick}>
                        Search
                    </button>
                </div>
            </div>
            {showResults && results.length > 0 && (
                <div className="search-results-popup">
                    {results.map((user) => (
                        <div key={user._id} className="search-result-item">
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Profession: {user.profession}</p>
                            <p>Experience: {user.experience} years</p>
                            <img src={`http://localhost:8000/${user.profilePicture}`} alt="Profile" width="100" />
                            <a href={`http://localhost:8000/${user.previousJobFile}`} download>
                                Download Previous Job File
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
