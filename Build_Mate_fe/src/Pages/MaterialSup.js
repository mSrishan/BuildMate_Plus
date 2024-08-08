import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Professional.css';
import addImage from '../Components/Assets/image.png';
import uploadImage from '../Components/Assets/cloud-computing.png';

function MaterialSup() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(addImage);
    const [previousJobFile, setPreviousJobFile] = useState(null);
    const [profileInfo, setProfileInfo] = useState({
        email: (location.state && location.state.email) || '',
        msdet: `${(location.state && location.state.firstName) || ''} ${(location.state && location.state.lastName) || ''}`,
        TypeOfMaterials: [],
        linkedin: '',
        weblink: '',
        coveringArea: '',
        companyName: '',
        bio: '',
        qualityOfMaterials: ''
    });

    useEffect(() => {
        const email = location.state && location.state.email;
        const firstName = location.state && location.state.firstName;
        const lastName = location.state && location.state.lastName;
        if (email && firstName && lastName) {
            setProfileInfo(prevData => ({
                ...prevData,
                email,
                msdet: `${firstName} ${lastName}`
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
        setProfileInfo(prevState => {
            const updatedValues = new Set(prevState[name]);
            updatedValues.has(value) ? updatedValues.delete(value) : updatedValues.add(value);
            return {
                ...prevState,
                [name]: Array.from(updatedValues)
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        
        formData.append('msdet', profileInfo.msdet);
        formData.append('email', profileInfo.email);
        formData.append('TypeOfMaterials', JSON.stringify(profileInfo.TypeOfMaterials));
        formData.append('linkedin', profileInfo.linkedin);
        formData.append('weblink', profileInfo.weblink);
        formData.append('coveringArea', profileInfo.coveringArea);
        formData.append('companyName', profileInfo.companyName);
        formData.append('bio', profileInfo.bio);
        formData.append('qualityOfMaterials', profileInfo.qualityOfMaterials);
        formData.append('profilePicture', profilePicture);
        formData.append('previousJobFile', previousJobFile);
        console.log(formData)
    
        try {
            const response = await axios.post('http://localhost:8000/api/registerMaterialSupplierDetails', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (response.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.data.message,
                    confirmButtonText: "OK",
                    footer: "Your profile has been updated successfully."
                }).then(() => {
                    navigate('../Pages/Profilems');
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
    
    

    const materials = [
        { value: 'Wood', label: 'Wood' },
        { value: 'Steel', label: 'Steel' },
        { value: 'Concrete', label: 'Concrete' },
        { value: 'Glass', label: 'Glass' },
        { value: 'Plastic', label: 'Plastic' },
        { value: 'Other', label: 'Other' }
    ];

    const qualities = [
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' }
    ];

    return (
        <div className="user_profile_form">
            <div className="pro-form">
                <div className="pro-form-h1"><h1>Material Supplier’s Account</h1></div>
                <div className="line" style={{ marginTop: '0', marginBottom: '3%' }}></div>
                <form onSubmit={handleSubmit}>
                    <div className="pro-form-l0">
                        <label className="pro-profilepic">
                            <input
                                type="file"
                                name="profilePicture"
                                onChange={handleFileChange}
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
                                        name="msdet"
                                        value={profileInfo.msdet}
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
                            Company Name<br />
                            <input
                                type="text"
                                name="companyName"
                                value={profileInfo.companyName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="pro-form-l2" style={{ marginLeft: '20%' }}>
                            Covering Area <br />
                            <input
                                type="text"
                                name="coveringArea"
                                value={profileInfo.coveringArea}
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
                    <label className="pro-form-l2">
                        Type of Materials<br />
                        <div className="pro-form-button">
                            {materials.map((material, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    name="TypeOfMaterials"
                                    value={material.value}
                                    className={profileInfo.TypeOfMaterials.includes(material.value) ? "active" : ""}
                                    onClick={() => handleButtonClick("TypeOfMaterials", material.value)}
                                >
                                    {material.label}
                                </button>
                            ))}
                        </div>
                    </label>
                    <div className="pro-form-l6">
                        <label>
                            Quality of Materials<br />
                            <div className="pro-form-button">
                                {qualities.map((quality, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        name="qualityOfMaterials"
                                        value={quality.value}
                                        className={profileInfo.qualityOfMaterials === quality.value ? "active" : ""}
                                        onClick={() => setProfileInfo(prevState => ({
                                            ...prevState,
                                            qualityOfMaterials: quality.value
                                        }))}
                                    >
                                        {quality.label}
                                    </button>
                                ))}
                            </div>
                        </label>
                    </div>
                    <div className="previousJob">
                        <h3>Previous Job</h3>
                        <label>Upload Files</label><br />
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
                    <div className="pro-form-button1">
                        <button type="reset">Edit</button>
                        <button type="submit" style={{ marginLeft: '5%' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MaterialSup;
