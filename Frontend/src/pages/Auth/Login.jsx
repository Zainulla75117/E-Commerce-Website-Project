import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/Layout';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_APP_API}/api/v1/auth/login`,
                {
                    email: formData.email,
                    password: formData.password,
                }
            );

            console.log('Login successful:', res.data);
            navigate('/');
            alert("Login Successfully")
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Layout>
            <div className="bg-image d-flex justify-content-center align-items-center">
                <div className="overlay"></div>
                <div className="row w-100">
                    <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h2 className="card-title text-center mb-4">Welcome</h2>
                                <p className="text-center text-muted mb-4">Sign in to your account</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name='email'
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            required
                                        />  
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name='password'
                                            className="form-control"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <div className="form-check mb-4">
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            className="form-check-input"
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Remember Me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                </form>

                                <div className="text-center mt-4">
                                    <p>
                                        Don't have an account?{' '}
                                        <NavLink to="/signup" className="text-primary">
                                            Sign Up
                                        </NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/forgot-password" className="text-primary">
                                            Forgot Password?
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .bg-image {
                        background-image: url('/img/EntireBG.jpg');
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
                        background: rgba(0, 0, 0, 0.5);
                        backdrop-filter: blur(5px); /* Blur effect */
                    }

                    .card {
                        max-width: 400px;
                        width: 100%;
                        border-radius: 10px;
                        z-index: 1; /* Ensure it's above the background image */
                    }

                    .card-body {
                        background-color: rgba(255, 255, 255, 0.9); /* Transparent white for better readability */
                        border-radius: 10px;
                    }
                `}</style>
            </div>
        </Layout>
    );
};

export default Login;
