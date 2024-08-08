import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css'; // Import the CSS file

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const fetchResults = async () => {
        if (query.trim() !== '') {
            try {
                const response = await axios.get(`/api/search?query=${query}`);
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
    }, [query]);

    const handleBlur = () => {
        // Delay hiding results to allow click on result
        setTimeout(() => {
            setShowResults(false);
        }, 200);
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        fetchResults();
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search professionals by name or email..."
                    onBlur={handleBlur}
                    onFocus={() => setShowResults(true)}
                />
                <button type="button" onClick={handleSearchClick}>Search</button>
            </form>
            {showResults && results.length > 0 && (
                <div className="search-results-popup">
                    {results.map((user) => (
                        <div key={user._id} className="search-result-item">
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Profession: {user.profession}</p>
                            <p>Experience: {user.experience} years</p>
                            <img src={`http://localhost:5000/${user.profilePicture}`} alt="Profile" width="100" />
                            <a href={`http://localhost:5000/${user.previousJobFile}`} download>Download Previous Job File</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
