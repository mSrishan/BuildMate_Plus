import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Professional.css';
import addImage from '../Components/Assets/image.png';
import uploadImage from '../Components/Assets/cloud-computing.png';

function Professional() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(addImage);
    const [previousJobFile, setPreviousJobFile] = useState(null);
    const [profileInfo, setProfileInfo] = useState({
        email: (location.state && location.state.email) || '',
        name: `${(location.state && location.state.firstName) || ''} ${(location.state && location.state.lastName) || ''}`,
        profession: '',
        linkedin: '',
        weblink: '',
        experience: '',
        workPlace: '',
        bio: '',
        skillLevel: '',
        jobCost: ''
    });

    useEffect(() => {
        const email = location.state && location.state.email;
        const firstName = location.state && location.state.firstName;
        const lastName = location.state && location.state.lastName;
        if (email && firstName && lastName) {
            setProfileInfo(prevData => ({
                ...prevData,
                email,
                name: `${firstName} ${lastName}`
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            if (name === 'profilePicture') {
                setProfilePicture(files[0]);
                setProfilePicturePreview(URL.createObjectURL(files[0]));
            } else if (name === 'previousJobFile') {
                setPreviousJobFile(files[0]);
            }
        } else {
            setProfileInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file);
            setProfilePicturePreview(URL.createObjectURL(file));
        }
    };

    const handlePreviousJobFileChange = (e) => {
        const file = e.target.files[0];
        setPreviousJobFile(file);
    };

    const handleButtonClick = (name, value) => {
        setProfileInfo({ ...profileInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', profileInfo.name);
        formData.append('email', profileInfo.email);
        formData.append('profession', profileInfo.profession);
        formData.append('linkedin', profileInfo.linkedin);
        formData.append('weblink', profileInfo.weblink);
        formData.append('experience', profileInfo.experience);
        formData.append('workPlace', profileInfo.workPlace);
        formData.append('bio', profileInfo.bio);
        formData.append('skillLevel', profileInfo.skillLevel);
        formData.append('jobCost', profileInfo.jobCost);
        formData.append('profilePicture', profilePicture);
        formData.append('previousJobFile', previousJobFile);
    
        try {
            const response = await axios.post('http://localhost:8000/api/registerProfessionalDetails', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Profile updated successfully',
                    confirmButtonText: 'OK',
                }).then(() => {
                    navigate(`/Pages/ProfileView/${response.data._id}`);
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.data.message || 'Error updating profile',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error in handleSubmit:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response?.data?.message || 'Error updating profile',
                confirmButtonText: 'OK',
            });
        }
    };
    

    const professions = [
        { value: '', label: 'Select your profession' },
        { value: 'Architectures', label: 'Architectures' },
        { value: 'Engineers', label: 'Engineers' },
        { value: 'Project Managers', label: 'Project Managers' },
        { value: 'Legal Advisors', label: 'Legal Advisors' },
        { value: 'Interior Designers', label: 'Interior Designers' },
        { value: 'Landscapers', label: 'Landscapers' },
        { value: 'Other', label: 'Other' }
    ];

    return (
        <div className="user_profile_form">
            <div className="pro-form">
                <div className="pro-form-h1"><h1>Professional’s Account</h1></div>
                <div className="line" style={{ marginTop: '0', marginBottom: '3%' }}></div>
                <form onSubmit={handleSubmit}>
                    <div className="pro-form-l0">
                        <label className="pro-profilepic">
                            <input
                                type="file"
                                name="profilePicture"
                                onChange={handleFileChange}
                                required
                                id="profilePictureInput"
                                style={{ display: 'none' }}
                            />
                            <img
                                src={profilePicturePreview}
                                alt="Profile"
                                style={{ width: '200px', height: '200px', cursor: 'pointer' }}
                            />
                        </label>
                        <div className="pro-form-l2">
                            <label className="pro-form-l1">
                                Name <br />
                                <input
                                    type="text"
                                    name="name"
                                    value={profileInfo.name}
                                    onChange={handleChange}
                                    readOnly
                                    required
                                />
                            </label>
                            <label className="pro-form-l1">
                                Email <br />
                                <input
                                    type="email"
                                    name="email"
                                    value={profileInfo.email}
                                    onChange={handleChange}
                                    readOnly
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <label className="pro-form-l2">
                        Your Profession<br />
                        <select
                            name="profession"
                            value={profileInfo.profession}
                            onChange={handleChange}
                            required
                        >
                            {professions.map((profession, index) => (
                                <option key={index} value={profession.value}>{profession.label}</option>
                            ))}
                        </select>
                    </label>
                    <div className="pro-form-l3">
                        <label className="pro-form-l2">
                            LinkedIn profile link<br />
                            <input
                                type="text"
                                name="linkedin"
                                value={profileInfo.linkedin}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="pro-form-l2" style={{ marginLeft: '20%' }}>
                            Website link<br />
                            <input
                                type="text"
                                name="weblink"
                                value={profileInfo.weblink}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="pro-form-l3">
                        <label className="pro-form-l2">
                            Current workplace<br />
                            <input
                                type="text"
                                name="workPlace"
                                value={profileInfo.workPlace}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="pro-form-l2" style={{ marginLeft: '20%' }}>
                            Working Experience <br />
                            <input
                                type="text"
                                name="experience"
                                value={profileInfo.experience}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="pro-form-l6">
                        <label>
                            Bio<br />
                            <textarea
                                name="bio"
                                value={profileInfo.bio}
                                onChange={handleChange}
                                required
                                className="pro-form-l5"
                            />
                        </label>
                    </div>
                    <div className="pro-button-group">
                        <h3>Professional Portfolio</h3>
                        <label>Skill Level</label>
                        <div className="pro-form-button">
                            <button
                                type="button"
                                name="skillLevel"
                                value="Beginner"
                                className={profileInfo.skillLevel === "Beginner" ? "active" : ""}
                                onClick={() => handleButtonClick("skillLevel", "Beginner")}
                            >
                                Beginner
                            </button>
                            <button
                                type="button"
                                name="skillLevel"
                                value="Intermediate"
                                className={profileInfo.skillLevel === "Intermediate" ? "active" : ""}
                                onClick={() => handleButtonClick("skillLevel", "Intermediate")}
                            >
                                Intermediate
                            </button>
                            <button
                                type="button"
                                name="skillLevel"
                                value="Expert"
                                className={profileInfo.skillLevel === "Expert" ? "active" : ""}
                                onClick={() => handleButtonClick("skillLevel", "Expert")}
                            >
                                Expert
                            </button>
                        </div>
                        <label>Job Cost</label>
                        <div className="pro-form-button">
                            <button
                                type="button"
                                name="jobCost"
                                value="0-100"
                                className={profileInfo.jobCost === "0-100" ? "active" : ""}
                                onClick={() => handleButtonClick("jobCost", "0-100")}
                            >
                                $0-100
                            </button>
                            <button
                                type="button"
                                name="jobCost"
                                value="100-500"
                                className={profileInfo.jobCost === "100-500" ? "active" : ""}
                                onClick={() => handleButtonClick("jobCost", "100-500")}
                            >
                                $100-500
                            </button>
                            <button
                                type="button"
                                name="jobCost"
                                value="500+"
                                className={profileInfo.jobCost === "500+" ? "active" : ""}
                                onClick={() => handleButtonClick("jobCost", "500+")}
                            >
                                $500+
                            </button>
                        </div>
                        <div className="previousJob">
                            <h3>Previous Job</h3>
                            <label>Upload Files</label><br/>
                            <div className="job-file-container">
                                <input
                                    type="file"
                                    name="previousJobFile"
                                    onChange={handlePreviousJobFileChange}
                                    id="previousJobFileInput"
                                    style={{ display: 'none' }}  // Hide the input element
                                />
                                <img
                                    src={uploadImage}
                                    alt="Upload"
                                    className="job-profile-image"
                                    onClick={() => document.getElementById('previousJobFileInput').click()}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pro-form-button1">
                        <button type="button">Edit</button>
                        <button type="submit" style={{ marginLeft: '5%' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Professional;
