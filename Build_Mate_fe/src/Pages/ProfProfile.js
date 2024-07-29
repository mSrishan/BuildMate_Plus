import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProfProfile.css';

function ProfProfile() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/professionals/${id}`);
                setProfile(response.data);
            } catch (error) {
                setError(error.response?.data?.message || 'Error fetching profile');
            }
        };

        fetchProfile();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    src={`http://localhost:8000/${profile.profilePicture}`}
                    alt="Profile"
                    className="profile-picture"
                />
                <h1>{profile.name}</h1>
                <h2>{profile.profession}</h2>
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
                <p><strong>Website:</strong> <a href={profile.weblink} target="_blank" rel="noopener noreferrer">{profile.weblink}</a></p>
                <p><strong>Experience:</strong> {profile.experience}</p>
                <p><strong>Work Place:</strong> {profile.workPlace}</p>
                <p><strong>Bio:</strong> {profile.bio}</p>
                <p><strong>Skill Level:</strong> {profile.skillLevel}</p>
                <p><strong>Job Cost:</strong> {profile.jobCost}</p>
            </div>
            <div className="profile-portfolio">
                <h3>Previous Job File</h3>
                {profile.previousJobFile && (
                    <a href={`http://localhost:8000/${profile.previousJobFile}`} download>
                        Download Previous Job File
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProfProfile;
