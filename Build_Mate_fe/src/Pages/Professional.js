//Professional.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Professional.css";
import addImage from "../Components/Assets/image.png";
import uploadImage from "../Components/Assets/cloud-computing.png";

function Professional({ userEmail }) {
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(addImage);
    const [previousJobFile, setPreviousJobFile] = useState(null);
    const [profileInfo, setProfileInfo] = useState({
        name: "",
        profession: "",
        address: "",
        phoneNumber: "",
        linkedin: "",
        weblink: "",
        experience: "",
        workPlace: "",
        bio: "",
        skillLevel: "",
        jobCost: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileInfo({ ...profileInfo, [name]: value });
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

    const handleButtonClick = (e) => {
        const { name, value } = e.target;
        setProfileInfo({ ...profileInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const registrationData = {
                email: userEmail,
                name: profileInfo.name,
                profession: profileInfo.profession,
                address: profileInfo.address,
                phoneNumber: profileInfo.phoneNumber,
                linkedin: profileInfo.linkedin,
                weblink: profileInfo.weblink,
                experience: profileInfo.experience,
                workPlace: profileInfo.workPlace,
                bio: profileInfo.bio,
                skillLevel: profileInfo.skillLevel,
                jobCost: profileInfo.jobCost,
            };
    
            console.log("Submitting registration data:", registrationData); // Add logging here
    
            const response = await axios.post("http://localhost:8000/registerProfessional", registrationData);
            console.log("Response from server:", response);
    
            if (response.data.message === "Registration details added and user status updated successfully") {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Information saved successfully",
                    confirmButtonText: "OK"
                }).then(() => {
                    // Conditional navigation based on userType
                    switch (profileInfo.userType) {
                        case "client":
                            navigate("/home");
                            break;
                        case "professional":
                            navigate("/professional");
                            break;
                        case "service supplier":
                            navigate("/serviceSup");
                            break;
                        case "material supplier":
                            navigate("/materialSup");
                            break;
                        default:
                            navigate("/home");
                            break;
                    }
                });
            } else {
                console.error("Error from server response:", response.data.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.data.message || "Error saving information",
                    confirmButtonText: "OK"
                });
            }
        } catch (error) {
            console.error("Error during registration:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error saving information",
                confirmButtonText: "OK"
            });
        }
    };
    

    const professions = [
        { value: "", label: "Select your profession" },
        { value: "Architectures", label: "Architectures" },
        { value: "Engineers", label: "Engineers" },
        { value: "Project Managers", label: "Project Managers" },
        { value: "Legal Advisors", label: "Legal Advisors" },
        { value: "Interior Designers", label: "Interior Designers" },
        { value: "Landscapers", label: "Landscapers" },
        { value: "Other", label: "Other" }
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
                                style={{ display: 'none' }}  // Hide the input element
                            />
                            <img
                                src={profilePicturePreview}
                                alt="Profile"
                                style={{ width: '40%', cursor: 'pointer' }}
                            />
                        </label>
                        <div className="pro-form-l1">
                            <label className="pro-form-l2">
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    value={profileInfo.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
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
                    <div className="pro-form-l3">
                        <label className="pro-form-l2">
                            E-mail<br />
                            <input
                                type="text"
                                name="email"
                                value={profileInfo.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="pro-form-l2" style={{ marginLeft: '20%' }}>
                            Contact Number <br />
                            <input
                                type="text"
                                name="phoneNumber"
                                value={profileInfo.phoneNumber}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="pro-form-l6">
                        <label>
                            Address<br />
                            <input
                                type="text"
                                name="address"
                                value={profileInfo.address}
                                onChange={handleChange}
                                required
                                className="pro-form-l4"
                            />
                        </label>
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
                                onClick={handleButtonClick}
                            >
                                Beginner
                            </button>
                            <button
                                type="button"
                                name="skillLevel"
                                value="Intermediate"
                                className={profileInfo.skillLevel === "Intermediate" ? "active" : ""}
                                onClick={handleButtonClick}
                            >
                                Intermediate
                            </button>
                            <button
                                type="button"
                                name="skillLevel"
                                value="Expert"
                                className={profileInfo.skillLevel === "Expert" ? "active" : ""}
                                onClick={handleButtonClick}
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
                                onClick={handleButtonClick}
                            >
                                $0-100
                            </button>
                            <button
                                type="button"
                                name="jobCost"
                                value="100-500"
                                className={profileInfo.jobCost === "100-500" ? "active" : ""}
                                onClick={handleButtonClick}
                            >
                                $100-500
                            </button>
                            <button
                                type="button"
                                name="jobCost"
                                value="500+"
                                className={profileInfo.jobCost === "500+" ? "active" : ""}
                                onClick={handleButtonClick}
                            >
                                $500+
                            </button>
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
                    </div>
                    <div className="pro-form-button1">
                        <button type="edit">Edit</button>
                        <button type="submit" style={{ marginLeft: '5%' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Professional;
