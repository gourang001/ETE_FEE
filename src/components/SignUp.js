import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Signup = ({func}) => {
    const nav = useNavigate();

    function validateSignupForm(name, email, password, confirmPassword, phoneNumber) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        if (!phoneRegex.test(phoneNumber)) {
            alert("Please enter a valid phone number (10 digits).");
            return false;
        }

        return true;
    }

    let verify = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        let email = e.target[1].value;
        let password = e.target[2].value;
        let confirmPassword = e.target[3].value;
        let phoneNumber = e.target[4].value;

        if (validateSignupForm(name, email, password, confirmPassword, phoneNumber)) {
            func({
                "LoginData":"LoginData"
              });
            alert("Signup successful!");
            nav("/");
        }
    }

    return (
        <div className='row'>
            <Navbar/>
            <form onSubmit={verify} className="flex flex-col items-center mt-5 my-36">
                <h1 className="text-3xl font-bold mb-5">Signup Form</h1>

                <label className="text-lg" htmlFor="name">Name:</label>
                <input type="text" className="border border-gray-300 p-2 mb-3 rounded-md w-64" name="name" id="name" placeholder="Enter your name" required />

                <label className="text-lg" htmlFor="email">Email:</label>
                <input type="email" className="border border-gray-300 p-2 mb-3 rounded-md w-64" name="email" id="email" placeholder="Enter email" required />

                <label className="text-lg" htmlFor="pass">Password:</label>
                <input type="password" className="border border-gray-300 p-2 mb-3 rounded-md w-64" name="password" id="pass" placeholder="Enter password" required />

                <label className="text-lg" htmlFor="confirmPass">Confirm Password:</label>
                <input type="password" className="border border-gray-300 p-2 mb-3 rounded-md w-64" name="confirmPassword" id="confirmPass" placeholder="Confirm password" required />

                <label className="text-lg" htmlFor="phone">Phone Number:</label>
                <input type="tel" className="border border-gray-300 p-2 mb-3 rounded-md w-64" name="phoneNumber" id="phone" placeholder="Enter phone number (10 digits)" required />

                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">Signup</button>
            </form>


        </div>
    )
}

export default Signup;
