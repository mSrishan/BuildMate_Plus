import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Registration.css";
import materialImg from '../Components/Assets/courier.png';
import profileImg from '../Components/Assets/profile.png';
import serviceImg from '../Components/Assets/team.png';
import profImg from '../Components/Assets/professional.png';

function Registration() {
    const navigate = useNavigate();

    const [profileInfo, setProfileInfo] = useState({
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        address: "",
        phoneNumber: "",
        country: "",
        birthdayDate: "",
        birthdayMonth: "",
        birthdayYear: "",
        userType: "",
        agreeTerms: false
    });

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        const firstName = localStorage.getItem("userFirstName");
        const lastName = localStorage.getItem("userLastName");
        if (email) {
            setProfileInfo(prevData => ({
                ...prevData,
                email,
                firstName,
                lastName
            }));
        }
    }, []);

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        console.log(token !== '1234');
    
        if (token !== '1234') {
            Swal.fire({
              icon: 'warning',
              title: 'Access denied',
              
              footer: "You have to log in first",
              confirmButtonText: 'OK'
          });
            navigate('/Pages/home');
          }
        }, [navigate]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProfileInfo(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!profileInfo.email || !profileInfo.firstName || !profileInfo.lastName || !profileInfo.gender || !profileInfo.address || !profileInfo.phoneNumber || !profileInfo.country || !profileInfo.birthdayDate || !profileInfo.birthdayMonth || !profileInfo.birthdayYear || !profileInfo.userType || !profileInfo.agreeTerms) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all required fields",
                confirmButtonText: "OK"
            });
            return;
        }

        let endpoint;
        let redirectPath;
        const userData = { ...profileInfo };  // Copy user details

        switch (profileInfo.userType) {
            case "client":
                endpoint = "http://localhost:8000/api/registerClient";
                redirectPath = "/Pages/Home";
                break;
            case "professional":
                endpoint = "http://localhost:8000/api/registerProfessional";
                redirectPath = "/Pages/professional";  // Update the redirect path
                break;
            case "service supplier":
                endpoint = "http://localhost:8000/api/registerServiceSupplier";
                redirectPath = "/Pages/ServiceSup";
                break;
            case "material supplier":
                endpoint = "http://localhost:8000/api/registerMaterialSupplier";
                redirectPath = "/Pages/MaterialSup";
                break;
            default:
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid user type selected",
                    confirmButtonText: "OK"
                });
                return;
        }

        try {
            const response = await axios.post(endpoint, profileInfo);

            if (response.status === 201 && response.data.message === "User registered successfully") {
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
                            footer: "Let's fill some of our details further..."
                        }).then(() => {
                            const { firstName, lastName, email } = profileInfo;
                            navigate(redirectPath, { state: { firstName, lastName, email } });
                        });
                    } else if (result.isDenied) {
                      Swal.fire("Changes are not saved", "", "info");
                    }
                  });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.data.message || "Error saving information",
                    confirmButtonText: "OK"
                });
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error saving information";
            if (errorMessage === "User with this email already exists") {
                Swal.fire({
                    icon: "warning",
                    title: "User Exists",
                    text: "A user with this email already exists. Please log in or use a different email.",
                    confirmButtonText: "Or",
                    footer: "Let's fill some of our details further..."
                }).then(() => {
                    const { firstName, lastName, email } = profileInfo;
                    navigate(redirectPath, { state: { firstName, lastName, email } });
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                    confirmButtonText: "OK"
                });
            }
        }
    };


    const handleEditClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = (new Date()).getFullYear();
    const pastYears = 50; 
    const years = Array.from(new Array(pastYears), (val, index) => currentYear - index);

    const months = [
        { value: "", label: "Select Month" },
        { value: "January", label: "January" },
        { value: "February", label: "February" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" }
    ];

    const genders = [
        { value: "", label: "Select Gender" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" }
    ];

    const days = Array.from(new Array(31), (val, index) => index + 1);

    return (
        <>
        <div className="reg_form">
            <div className="reg-form1">
                <h1 className="reg-formh1">User Account</h1>
                <div className="line"></div>
                <form onSubmit={handleSubmit} className="reg-form-label">
                    <label className="reg-form-l1">
                        Email <br/>
                        <input
                            type="email"
                            name="email"
                            value={profileInfo.email}
                            onChange={handleChange}
                            readOnly
                            required
                        />
                    </label>
                    <div className="reg-form-l3">
                        <label>
                        First Name <br/>
                        <input
                            type="text"
                            name="firstName"
                            value={profileInfo.firstName}
                            onChange={handleChange}
                            required
                        />
                        </label>
                        <label className="reg-form-l4">
                        Last Name <br/>
                        <input
                            type="text"
                            name="lastName"
                            value={profileInfo.lastName}
                            onChange={handleChange}
                            required
                        />
                        </label>
                    </div>
                    
                    <label className="reg-form-l2">
                        Birthday<br/>
                        <div className="reg-form-dropdown1">
                            <select
                                name="birthdayYear"
                                value={profileInfo.birthdayYear}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Year</option>
                                {years.map((year, index) => (
                                    <option key={index} value={year}>{year}</option>
                                ))}
                            </select>
                            <select
                                name="birthdayMonth"
                                value={profileInfo.birthdayMonth}
                                onChange={handleChange}
                                required
                            >
                                {months.map((month, index) => (
                                    <option key={index} value={month.value}>{month.label}</option>
                                ))}
                            </select>
                            <select
                                name="birthdayDate"
                                value={profileInfo.birthdayDate}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Date</option>
                                {days.map((day, index) => (
                                    <option key={index} value={day}>{day}</option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <div className="reg-form-l3">
                        <label>
                            Country<br/>
                            <input
                                type="text"
                                name="country"
                                value={profileInfo.country}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="reg-form-l4">
                            Phone Number<br/>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={profileInfo.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="reg-form-l3">
                        <label>
                            Address<br/>
                            <input
                                type="text"
                                name="address"
                                value={profileInfo.address}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="reg-form-l4">
                            Gender<br/>
                            <select
                                name="gender"
                                value={profileInfo.gender}
                                onChange={handleChange}
                                required
                            >
                                {genders.map((gender, index) => (
                                    <option key={index} value={gender.value}>{gender.label}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <h3 className="reg-formh3">Choose Your Profile Type</h3>
                    <div className="user-type-buttons">
                        <input
                            type="radio"
                            id="client"
                            name="userType"
                            value="client"
                            checked={profileInfo.userType === "client"}
                            onChange={handleChange}
                        />
                        <label htmlFor="client" className="reg-form-l5">
                            <img src={profileImg} alt="client" className="reg-image" />
                            Client
                        </label>

                        <input
                            type="radio"
                            id="professional"
                            name="userType"
                            value="professional"
                            checked={profileInfo.userType === "professional"}
                            onChange={handleChange}
                        />
                        <label htmlFor="professional" className="reg-form-l5">
                            <img src={profImg} alt="professional" className="reg-image" />
                            Professional
                        </label>

                        <input
                            type="radio"
                            id="serviceSupplier"
                            name="userType"
                            value="service supplier"
                            checked={profileInfo.userType === "service supplier"}
                            onChange={handleChange}
                        />
                        <label htmlFor="serviceSupplier" className="reg-form-l5">
                            <img src={serviceImg} alt="service supplier" className="reg-image" />
                            Service Supplier
                        </label>

                        <input
                            type="radio"
                            id="materialSupplier"
                            name="userType"
                            value="material supplier"
                            checked={profileInfo.userType === "material supplier"}
                            onChange={handleChange}
                        />
                        <label htmlFor="materialSupplier" className="reg-form-l5">
                            <img src={materialImg} alt="material supplier" className="reg-image" />
                            Material Supplier
                        </label>
                    </div>
                    <label className="reg-form-l6">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={profileInfo.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        I agree to the Terms and Conditions
                    </label>
                    <div className="reg-buttons">
                        <button type="button" onClick={handleEditClick}>Edit</button>
                        <button type="submit" className="reg-button-b1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Registration;
