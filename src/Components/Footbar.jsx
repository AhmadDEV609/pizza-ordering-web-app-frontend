import React from 'react';

const Footer = React.memo(() => {
    return (
        <footer className="bg-black  mt-12  text-white py-10 px-6 sm:px-10 lg:px-20 font-sans lg:ml-14  lg:mt-6 ">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">

                {/* Brand Section */}
                <div>
                    <h1 className="text-2xl font-bold text-yellow-400 mb-3">Broadway Pizza</h1>
                    <p className="text-sm text-gray-300 max-w-xs">
                        Bringing you the cheesiest, crispiest, and most delicious pizzas straight to your door.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Menu</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Order</a></li>
                        <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold text-yellow-400 mb-3">Contact Us</h2>
                    <p className="text-sm text-gray-300">📞 +1 234 567 890</p>
                    <p className="text-sm text-gray-300">✉️ support@pizzahub.com</p>
                    <p className="text-sm text-gray-300">📍 New York, USA</p>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
                &copy; {new Date().getFullYear()} PizzaHub. All rights reserved.
            </div>
        </footer>
    );
});

export default Footer;
