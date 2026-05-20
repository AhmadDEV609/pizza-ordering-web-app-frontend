// LocationPage.jsx
import React from 'react';

const branches = [
    {
        id: 1,
        name: 'Lahore Branch',
        address: '123 Main Street, Lahore',
        phone: '042-12345678',
        hours: 'Mon-Sun: 11am - 11pm',
    },
    {
        id: 2,
        name: 'Karachi Branch',
        address: '45 Beach Road, Karachi',
        phone: '021-87654321',
        hours: 'Mon-Sun: 12pm - 12am',
    },
    {
        id: 3,
        name: 'Islamabad Branch',
        address: '78 Hillview Plaza, Islamabad',
        phone: '051-99887766',
        hours: 'Mon-Sun: 10am - 10pm',
    },
];

const LocationPage = () => {
    return (
        <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-8 md:px-20  mt-56">
            <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">📍 Our Branches</h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {branches.map(branch => (
                    <div
                        key={branch.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-yellow-700 mb-2">{branch.name}</h2>
                        <p className="text-gray-700 mb-1">📍 <span className="font-medium">{branch.address}</span></p>
                        <p className="text-gray-700 mb-1">📞 <span className="font-medium">{branch.phone}</span></p>
                        <p className="text-gray-700">🕒 <span className="font-medium">{branch.hours}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationPage;
