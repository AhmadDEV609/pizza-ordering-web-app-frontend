import React, { useState } from 'react';
import { pizzas } from '../Data/Data.json';
import { Link } from 'react-router-dom';

const CollectionPage = React.memo(() => {
    const [filterbtn, setfilterbtn] = useState('');
    const [currentpage, setcurrentpage] = useState(1);
    const itemperpage = 15;

    // Filter first
    const filteredItems = filterbtn
        ? pizzas.filter((item) => item.category === filterbtn)
        : pizzas;

    // Pagination after filtering
    const totalpage = Math.ceil(filteredItems.length / itemperpage);
    const lastIndex = currentpage * itemperpage;
    const firstIndex = lastIndex - itemperpage;
    const currentItems = filteredItems.slice(firstIndex, lastIndex);

    const handleFilterChange = (e) => {
        setfilterbtn(e.target.value);
        setcurrentpage(1); // Reset to first page on filter change
    };

    return (
        <>
            {/* Filter Buttons */}
            <div className="lg:ml-40 lg:mt-20 mt-20 overflow-x-auto whitespace-nowrap px-4">
                <div className="flex gap-3">
                    {['', 'Vegetarian', 'Meat', 'Chicken', 'Gourmet', 'Non-Vegetarian', 'Vegan'].map((type) => (
                        <button
                            key={type || 'All'}
                            value={type}
                            onClick={handleFilterChange}
                            className="px-4 py-2 bg-amber-300 text-black rounded"
                        >
                            {type || 'All'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pizza Cards */}
            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-28 lg:mt-16 gap-6">
                    {currentItems.map((element, index) => (
                        <Link to={`/DetailPage/${element.id}`} key={element.id}>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                <img
                                    src={element.image}
                                    alt={element.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{element.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{element.description}</p>
                                    <h3 className="text-md font-bold text-red-600">${element.price}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Pagination Buttons */}
            {totalpage > 1 && (
                <div className="flex justify-center items-center mt-8 space-x-2">
                    {Array.from({ length: totalpage }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setcurrentpage(page)}
                            className={`px-4 py-2 rounded 
                ${currentpage === page ? 'bg-amber-300 text-black' : 'bg-gray-200 text-black'}
                hover:bg-amber-300 transition`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
});

export default CollectionPage;
