import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Professional.css';
import addImage from '../Components/Assets/image.png';
import uploadImage from '../Components/Assets/cloud-computing.png';

function ServiceSupplier() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(addImage);
    const [previousJobFile, setPreviousJobFile] = useState(null);
    const [profileInfo, setProfileInfo] = useState({
        email: (location.state && location.state.email) || '',
        ssdet: `${(location.state && location.state.firstName) || ''} ${(location.state && location.state.lastName) || ''}`,
        TypeOfService: '',
        linkedin: '',
        weblink: '',
        FieldExperience: '',
        companyName: '',
        bio: '',
        numberOfWorkers: '',
        priceStructure: ''
    });

    useEffect(() => {
        const email = location.state && location.state.email;
        const firstName = location.state && location.state.firstName;
        const lastName = location.state && location.state.lastName;
        if (email && firstName && lastName) {
            setProfileInfo(prevData => ({
                ...prevData,
                email,
                ssdet: `${firstName} ${lastName}`
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
        formData.append('ssdet', profileInfo.ssdet);
        formData.append('email', profileInfo.email);
        formData.append('TypeOfService', profileInfo.TypeOfService);
        formData.append('linkedin', profileInfo.linkedin);
        formData.append('weblink', profileInfo.weblink);
        formData.append('FieldExperience', profileInfo.FieldExperience);
        formData.append('companyName', profileInfo.companyName);
        formData.append('bio', profileInfo.bio);
        formData.append('numberOfWorkers', profileInfo.numberOfWorkers);
        formData.append('priceStructure', profileInfo.priceStructure);
        formData.append('profilePicture', profilePicture);
        formData.append('previousJobFile', previousJobFile);

        try {
            const response = await axios.post('http://localhost:8000/api/registerServiceSupplierDetails', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                Swal.fire({
                    title: "Do you want to save the changes?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    denyButtonText: `Don't save`
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: "Information saved successfully",
                            confirmButtonText: "OK",
                            footer: "You are now registered Service Supplier..."
                        }).then(() => {
                           navigate('../Pages/Profiless')
                        });
                    } else if (result.isDenied) {
                      Swal.fire("Changes are not saved", "", "info");
                    }
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

    const services = [
        { value: '', label: 'Select your service' },
        { value: 'Plumbing', label: 'Plumbing' },
        { value: 'Electrical', label: 'Electrical' },
        { value: 'Cleaning', label: 'Cleaning' },
        { value: 'Landscaping', label: 'Landscaping' },
        { value: 'Carpentry', label: 'Carpentry' },
        { value: 'Painting', label: 'Painting' },
        { value: 'Other', label: 'Other' }
    ];

    return (
        <div className="user_profile_form">
            <div className="pro-form">
                <div className="pro-form-h1"><h1>Service Supplier’s Account</h1></div>
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
                                    name="ssdet"
                                    value={profileInfo.ssdet}
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
                        Type of Service<br />
                        <select
                            name="TypeOfService"
                            value={profileInfo.TypeOfService}
                            onChange={handleChange}
                            required
                        >
                            {services.map((service, index) => (
                                <option key={index} value={service.value}>{service.label}</option>
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
                            Field Experience <br />
                            <input
                                type="text"
                                name="FieldExperience"
                                value={profileInfo.FieldExperience}
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
                        <h3>Company Portfolio</h3>
                        <label>Number of Workers</label>
                        <div className="pro-form-button">
                            <button
                                type="button"
                                name="numberOfWorkers"
                                value="1-10"
                                className={profileInfo.numberOfWorkers === "1-10" ? "active" : ""}
                                onClick={() => handleButtonClick("numberOfWorkers", "1-10")}
                            >
                                1-10
                            </button>
                            <button
                                type="button"
                                name="numberOfWorkers"
                                value="11-50"
                                className={profileInfo.numberOfWorkers === "11-50" ? "active" : ""}
                                onClick={() => handleButtonClick("numberOfWorkers", "11-50")}
                            >
                                11-50
                            </button>
                            <button
                                type="button"
                                name="numberOfWorkers"
                                value="51-200"
                                className={profileInfo.numberOfWorkers === "51-200" ? "active" : ""}
                                onClick={() => handleButtonClick("numberOfWorkers", "51-200")}
                            >
                                51-200
                            </button>
                            <button
                                type="button"
                                name="numberOfWorkers"
                                value=">200"
                                className={profileInfo.numberOfWorkers === ">200" ? "active" : ""}
                                onClick={() => handleButtonClick("numberOfWorkers", ">200")}
                            >
                                &gt;200
                            </button>
                        </div>
                        <label>Price Structure</label>
                        <div className="pro-form-button">
                            <button
                                type="button"
                                name="priceStructure"
                                value="Hourly"
                                className={profileInfo.priceStructure === "Hourly" ? "active" : ""}
                                onClick={() => handleButtonClick("priceStructure", "Hourly")}
                            >
                                Hourly
                            </button>
                            <button
                                type="button"
                                name="priceStructure"
                                value="Per Day"
                                className={profileInfo.priceStructure === "Per Day" ? "active" : ""}
                                onClick={() => handleButtonClick("priceStructure", "Per Day")}
                            >
                                Per Day
                            </button>
                            <button
                                type="button"
                                name="priceStructure"
                                value="Contract"
                                className={profileInfo.priceStructure === "Contract" ? "active" : ""}
                                onClick={() => handleButtonClick("priceStructure", "Contract")}
                            >
                                Contract
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
                        <button type="reset">Edit</button>
                        <button type="submit" style={{ marginLeft: '5%' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ServiceSupplier;