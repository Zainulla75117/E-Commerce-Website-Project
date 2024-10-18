import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Layout from '../../components/Layout';

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_APP_API}/api/v1/auth/register`,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password,
                }
            );

            console.log('Registration successful:', res.data);
            alert("Registration Success Please Login")
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    console.log(import.meta.env.VITE_APP_API);
    return (
        <Layout title={"Welcome • Shopswifty"}>
            <div className="bg-image d-flex justify-content-center align-items-center">
               <div className="overlay"></div>
                <div className=" row w-100">
                    <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h2 className="card-title text-center mb-4">Create Account</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className="form-control"
                                            placeholder="Re-enter your password"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Register
                                    </button>
                                </form>

                                <div className="text-center mt-4">
                                    <p>
                                        Already have an account?{' '}
                                        <NavLink to="/login" className="text-primary">
                                            Login
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .bg-image {
                        background-image: url('/img/RegisterBG.jpg');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        height: 100vh;
                        width: 100vw;
                        position: relative;
                    }
                    
                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.3);
                        backdrop-filter: blur(2px); 
                    }

                    .card {
                        max-width: 500px;
                        width: 100%;
                        border-radius: 10px;
                        z-index: 1;
                    }

                    .card-body {
                        background-color: rgba(255, 255, 255, 0.9);
                        border-radius: 10px;
                    }
                `}</style>
            </div>
        </Layout>
    );
};

export default Register;
