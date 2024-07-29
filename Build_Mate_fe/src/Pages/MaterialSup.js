import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Professional.css';
import addImage from '../Components/Assets/image.png';
import uploadImage from '../Components/Assets/cloud-computing.png';

function MaterialSupplier() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(addImage);
    const [previousJobFile, setPreviousJobFile] = useState(null);
    const [profileInfo, setProfileInfo] = useState({
        email: (location.state && location.state.email) || '',
        msdet: `${(location.state && location.state.firstName) || ''} ${(location.state && location.state.lastName) || ''}`,
        serviceAreaCoverage: '',
        linkedin: '',
        weblink: '',
        experience: '',
        workPlace: '',
        bio: '',
        typeOfMaterialsOffered: '',
        materialQualityStandards: ''
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
        setProfileInfo({ ...profileInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('msdet', profileInfo.msdet);
        formData.append('email', profileInfo.email);
        formData.append('serviceAreaCoverage', profileInfo.serviceAreaCoverage);
        formData.append('linkedin', profileInfo.linkedin);
        formData.append('weblink', profileInfo.weblink);
        formData.append('experience', profileInfo.experience);
        formData.append('workPlace', profileInfo.workPlace);
        formData.append('bio', profileInfo.bio);
        formData.append('typeOfMaterialsOffered', profileInfo.typeOfMaterialsOffered);
        formData.append('materialQualityStandards', profileInfo.materialQualityStandards);
        formData.append('profilePicture', profilePicture);
        formData.append('previousJobFile', previousJobFile);
    
        try {
            const response = await axios.post('http://localhost:8000/api/registerMaterialSupplierDetails', formData, {
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
                    navigate('/Pages/ProfileCards');
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
                    <label className="pro-form-l2">
                        Service Area Coverage<br />
                        <input
                            type="text"
                            name="serviceAreaCoverage"
                            value={profileInfo.serviceAreaCoverage}
                            onChange={handleChange}
                            required
                        />
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
                            Experience<br />
                            <input
                                type="text"
                                name="experience"
                                value={profileInfo.experience}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="pro-form-l2" style={{ marginLeft: '20%' }}>
                            Work Place <br />
                            <input
                                type="text"
                                name="workPlace"
                                value={profileInfo.workPlace}
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
                        <h3>Type of Materials Offered</h3>
                        <div className="pro-form-button">
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Hardware"
                                className={profileInfo.typeOfMaterialsOffered.includes("Hardware") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Hardware")}
                            >
                                Hardware
                            </button>
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Plumbing"
                                className={profileInfo.typeOfMaterialsOffered.includes("Plumbing") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Plumbing")}
                            >
                                Plumbing
                            </button>
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Electrical"
                                className={profileInfo.typeOfMaterialsOffered.includes("Electrical") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Electrical")}
                            >
                                Electrical
                            </button>
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Construction"
                                className={profileInfo.typeOfMaterialsOffered.includes("Construction") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Construction")}
                            >
                                Construction
                            </button>
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Finishing"
                                className={profileInfo.typeOfMaterialsOffered.includes("Finishing") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Finishing")}
                            >
                                Finishing
                            </button>
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Paint"
                                className={profileInfo.typeOfMaterialsOffered.includes("Paint") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Paint")}
                            >
                                Paint
                            </button>
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Roofing"
                                className={profileInfo.typeOfMaterialsOffered.includes("Roofing") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Roofing")}
                            >
                                Roofing
                            </button>
                            <button
                                type="button"
                                name="typeOfMaterialsOffered"
                                value="Other"
                                className={profileInfo.typeOfMaterialsOffered.includes("Other") ? "active" : ""}
                                onClick={() => handleButtonClick("typeOfMaterialsOffered", "Other")}
                            >
                                Other
                            </button>
                        </div>
                    </div>
                    <div className="pro-button-group">
                        <h3>Material Quality Standards</h3>
                        <div className="pro-form-button">
                            <button
                                type="button"
                                name="materialQualityStandards"
                                value="ISO"
                                className={profileInfo.materialQualityStandards.includes("ISO") ? "active" : ""}
                                onClick={() => handleButtonClick("materialQualityStandards", "ISO")}
                            >
                                ISO
                            </button>
                            <button
                                type="button"
                                name="materialQualityStandards"
                                value="SLS"
                                className={profileInfo.materialQualityStandards.includes("SLS") ? "active" : ""}
                                onClick={() => handleButtonClick("materialQualityStandards", "SLS")}
                            >
                                SLS
                            </button>
                            <button
                                type="button"
                                name="materialQualityStandards"
                                value="EN"
                                className={profileInfo.materialQualityStandards.includes("EN") ? "active" : ""}
                                onClick={() => handleButtonClick("materialQualityStandards", "EN")}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                name="materialQualityStandards"
                                value="ASTM"
                                className={profileInfo.materialQualityStandards.includes("ASTM") ? "active" : ""}
                                onClick={() => handleButtonClick("materialQualityStandards", "ASTM")}
                            >
                                ASTM
                            </button>
                            <button
                                type="button"
                                name="materialQualityStandards"
                                value="BS"
                                className={profileInfo.materialQualityStandards.includes("BS") ? "active" : ""}
                                onClick={() => handleButtonClick("materialQualityStandards", "BS")}
                            >
                                BS
                            </button>
                        </div>
                    </div>
                    <div className="pro-form-l3">
                        <label className="pro-form-l4">
                            Upload Previous Job Files <br />
                            <input
                                type="file"
                                name="previousJobFile"
                                onChange={handlePreviousJobFileChange}
                            />
                            <img
                                src={uploadImage}
                                alt="Upload"
                                style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                            />
                        </label>
                    </div>
                    <div className="line" style={{ marginTop: '7%', marginBottom: '5%' }}></div>
                    <div className="pro-form-l7">
                        <button type="submit" className="btn-professional">Save Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MaterialSupplier;
