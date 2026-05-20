import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Handle signup logic here
        alert(`Account created for ${formData.name}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100 flex items-center justify-center px-4 mt-16">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left side – Form */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <h2 className="text-4xl font-extrabold text-yellow-700 mb-6">Create Your Account</h2>
                    <p className="text-yellow-600 mb-10">Join the pizza party and start ordering your favorites today!</p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-yellow-700 mb-1" htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-yellow-300 px-4 py-3 text-yellow-900 placeholder-yellow-400 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-yellow-700 mb-1" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full rounded-lg border border-yellow-300 px-4 py-3 text-yellow-900 placeholder-yellow-400 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-yellow-700 mb-1" htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full rounded-lg border border-yellow-300 px-4 py-3 text-yellow-900 placeholder-yellow-400 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-yellow-700 mb-1" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full rounded-lg border border-yellow-300 px-4 py-3 text-yellow-900 placeholder-yellow-400 focus:ring-yellow-400 focus:border-yellow-400"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-md transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-yellow-700">
                        Already have an account?{' '}
                        <a href="/login" className="text-yellow-600 hover:text-yellow-800 font-semibold">Login here</a>
                    </p>
                </div>

                {/* Right side – Pizza Image */}
                <div className="hidden md:block md:w-1/2 relative">
                    <img
                        src="https://images.unsplash.com/photo-1601924928357-1a95d222c3ab?auto=format&fit=crop&w=800&q=80"
                        alt="Pizza signup visual"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-yellow-900 bg-opacity-30" />
                </div>
            </div>
        </div>
    );
};

export default Signup;
