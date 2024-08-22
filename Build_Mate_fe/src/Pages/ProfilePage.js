import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ProfilePage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        const storedFirstName = localStorage.getItem('firstName');

        if (userEmail && storedFirstName) {
            setIsAuthenticated(true);
            setFirstName(storedFirstName);

            // URL encode the email to handle special characters like "@" and "."
            const encodedEmail = encodeURIComponent(userEmail);

            axios.get(`http://localhost:8000/api/profile/${encodedEmail}`)
                .then(response => {
                    setUser(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    Swal.fire('Error', 'Could not fetch user details', 'error');
                    console.error('Fetch error:', error.message);
                    setLoading(false);
                });
        } else {
            setIsAuthenticated(false);
            setLoading(false);
            Swal.fire('Error', 'No user email found in local storage', 'error');
        }
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
        return <p>You need to log in to view this page.</p>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {user.profilePicture && <img src={`http://localhost:8000/${user.profilePicture}`} alt="Profile" />}
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Birthday:</strong> {user.birthdayDate}/{user.birthdayMonth}/{user.birthdayYear}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            {user.weblink && <p><strong>Website:</strong> <a href={user.weblink}>{user.weblink}</a></p>}
            {user.linkedin && <p><strong>LinkedIn:</strong> <a href={user.linkedin}>{user.linkedin}</a></p>}
            <p><strong>Country:</strong> {user.country}</p>
            <p><strong>User Type:</strong> {user.userType}</p>
            {/* Add more fields if necessary based on the user type */}
        </div>
    );
}

export default ProfilePage;
