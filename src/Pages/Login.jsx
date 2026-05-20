import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Logging in with email: ${formData.email}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100 flex items-center justify-center px-4  mt-14">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left side - form */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <h2 className="text-4xl font-extrabold text-yellow-700 mb-6">Welcome Back!</h2>
                    <p className="text-yellow-600 mb-12">Login to your pizza lover account and start ordering your favorites.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-yellow-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-yellow-300 px-4 py-3 text-yellow-900 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-yellow-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-yellow-300 px-4 py-3 text-yellow-900 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"
                                />
                                <span className="text-yellow-700 text-sm">Remember me</span>
                            </label>
                            <a href="#" className="text-yellow-600 hover:text-yellow-800 text-sm font-semibold">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-8 text-yellow-700 text-center text-sm">
                        Don’t have an account?{' '}
                        <Link to='/Signup' >Signup</Link>
                    </p>
                </div>

                {/* Right side - image */}
                <div className="hidden md:block md:w-1/2 relative">
                    <img
                        src="https://images.unsplash.com/photo-1601924928357-1a95d222c3ab?auto=format&fit=crop&w=800&q=80"
                        alt="Delicious pizza"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-yellow-900 bg-opacity-30"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
