import React, { useState } from 'react';

const Profile = () => {
    // Dummy user data, in real app this might come from API or redux
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 234 567 890',
        avatar: 'https://i.pravatar.cc/150?img=5', // Random avatar image
        favoriteCategories: ['Vegetarian', 'Gourmet', 'Vegan'],
    });

    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would update profile via API or redux action
        alert('Profile updated!');
        setUser(formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
                    {/* Avatar */}
                    <div className="flex flex-col items-center">
                        <img
                            src={user.avatar}
                            alt="User Avatar"
                            className="w-36 h-36 rounded-full border-4 border-yellow-400 shadow-md object-cover"
                        />
                        <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow transition">
                            Change Avatar
                        </button>
                    </div>

                    {/* User Info & Form */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-yellow-700 mb-6">My Profile</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-md shadow transition"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>

                {/* Favorite Categories */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold text-yellow-700 mb-4">Favorite Pizza Categories</h3>
                    <div className="flex flex-wrap gap-3">
                        {user.favoriteCategories.map((cat) => (
                            <span
                                key={cat}
                                className="inline-block bg-yellow-200 text-yellow-800 rounded-full px-4 py-1 font-medium shadow"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
