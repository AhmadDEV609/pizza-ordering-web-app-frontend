import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const cartItems = location.state?.cartitem || [];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'cash'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Order placed!\nName: ${formData.name}\nEmail: ${formData.email}\nAddress: ${formData.address}\nPayment: ${formData.paymentMethod === 'cash' ? 'Cash on Delivery' : 'Online Payment'
            }`
        );
    };

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-5xl mx-auto px-4 py-18">
            <h1 className="text-4xl font-bold mb-10 text-center">Checkout</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-lg text-gray-600">
                    Your cart is empty. Please add items before checkout.
                </p>
            ) : (
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Cart Summary */}
                    <div className="flex-1 bg-white shadow rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
                            Order Summary
                        </h2>
                        <div className="space-y-6 max-h-[400px] overflow-y-auto">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 border-b border-gray-200 pb-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                        <p className="text-gray-700 mt-1">
                                            Quantity: <span className="font-semibold">{item.quantity}</span>
                                        </p>
                                    </div>
                                    <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 border-t pt-4 text-right text-xl font-bold">
                            Total: ${totalPrice.toFixed(2)}
                        </div>
                    </div>

                    {/* User Info & Payment Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex-1 bg-white shadow rounded-lg p-6 max-w-md mx-auto"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-center">Your Details</h2>

                        <label className="block mb-4">
                            <span className="block mb-1 font-medium">Name</span>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </label>

                        <label className="block mb-4">
                            <span className="block mb-1 font-medium">Email</span>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </label>

                        <label className="block mb-6">
                            <span className="block mb-1 font-medium">Address</span>
                            <textarea
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Your delivery address"
                                rows="3"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            ></textarea>
                        </label>

                        <fieldset className="mb-6">
                            <legend className="font-medium mb-2">Payment Method</legend>
                            <div className="flex gap-6">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cash"
                                        checked={formData.paymentMethod === 'cash'}
                                        onChange={handleChange}
                                        className="form-radio text-amber-400"
                                    />
                                    <span className="ml-2">Cash on Delivery</span>
                                </label>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="online"
                                        checked={formData.paymentMethod === 'online'}
                                        onChange={handleChange}
                                        className="form-radio text-amber-400"
                                    />
                                    <span className="ml-2">Online Payment</span>
                                </label>
                            </div>
                        </fieldset>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded transition duration-300"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
