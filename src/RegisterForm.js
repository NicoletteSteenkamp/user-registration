
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import './RegisterForm.css'; // Import CSS file for styling
import 'react-phone-number-input/style.css'; // Import styles for PhoneInput component

function RegisterForm() {
    // States for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Print user data to console
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
        console.log('Bio:', bio);

        // Show alert for successful submission
        alert('Registration Successful!');
    };

    return (
        <div className="register-form-container">
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <div className="name-inputs">
                        <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username*</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <PhoneInput
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        defaultCountry="US"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Short Bio</label>
                    <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
                    Share a little information about yourself
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegisterForm;
