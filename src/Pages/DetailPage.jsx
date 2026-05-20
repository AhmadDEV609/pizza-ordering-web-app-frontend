import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { pizzas } from '../Data/Data.json';
import { crusts, sauces, toppings, drinks } from '../Data/Data.json';
import { useDispatch } from 'react-redux';
import { AddtoCart } from '../Redux/Slice/CartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Components/Navbar.css'
const DetailPage = React.memo(() => {
    const { id } = useParams();
    const DetailProduct = pizzas.find((element) => element.id == id);

    const dispatch = useDispatch()
    const [selectedCrusts, setSelectedCrusts] = useState([]);
    const [selectedSauces, setSelectedSauces] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [selectedDrinks, setSelectedDrinks] = useState([]);

    // Generic toggle handler
    const handleToggle = (item, setFunction, currentArray) => {
        if (currentArray.includes(item)) {
            setFunction(currentArray.filter(i => i !== item));
        } else {
            setFunction([...currentArray, item]);
        }
    };

    function handleCartbtn(product, crustCart, DrinkCart, saucecart, toppingcart) {
        if (selectedCrusts == '') {
            alert('Please select at least one   crust  item');
        } else if (selectedSauces == '') {
            alert('Please select at least one   Sauce  item');
        } else if (selectedToppings == '') {
            alert('Please select at least one   Topping  item');
        } else if (selectedDrinks == '') {
            alert('Please select at least one   Drink  item');
        } else {
            dispatch(AddtoCart({
                ...product,
                crust: crustCart,
                drink: DrinkCart,
                sauce: saucecart,
                topping: toppingcart
            }))
            toast.success("Pizza added in your Cart");
        }
    }

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-32 py-24 font-serif">
                {/* Pizza Details */}
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <img
                        className="w-full max-w-md rounded shadow-md object-cover"
                        src={DetailProduct.image}
                        alt={DetailProduct.name}
                        loading='lazy'
                    />
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">{DetailProduct.name}</h1>
                        <p className="mt-2 text-gray-600">{DetailProduct.description}</p>
                        <p className="mt-2 text-red-500 text-xl font-semibold">${DetailProduct.price}</p>
                    </div>
                </div>

                {/* Customization Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-center mb-6">Customize Your Pizza</h2>

                    {/* Crusts */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Choose Crust(s)</h3>
                        <div className="flex flex-wrap gap-4">
                            {crusts.map((item, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100"
                                >
                                    <input
                                        type="checkbox"
                                        name="crust"
                                        value={item}
                                        checked={selectedCrusts.includes(item)}
                                        onChange={() => handleToggle(item, setSelectedCrusts, selectedCrusts)}
                                        className="accent-red-500"
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Sauces */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Choose Sauce(s)</h3>
                        <div className="flex flex-wrap gap-4">
                            {sauces.map((item, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100"
                                >
                                    <input
                                        type="checkbox"
                                        name="sauce"
                                        value={item}
                                        checked={selectedSauces.includes(item)}
                                        onChange={() => handleToggle(item, setSelectedSauces, selectedSauces)}
                                        className="accent-red-500"
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Toppings */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Choose Toppings</h3>
                        <div className="flex flex-wrap gap-4">
                            {toppings.map((item, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100"
                                >
                                    <input
                                        type="checkbox"
                                        name="topping"
                                        value={item}
                                        checked={selectedToppings.includes(item)}
                                        onChange={() => handleToggle(item, setSelectedToppings, selectedToppings)}
                                        className="accent-red-500"
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Drinks */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Choose Drink(s)</h3>
                        <div className="flex flex-wrap gap-4">
                            {drinks.map((item, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100"
                                >
                                    <input
                                        type="checkbox"
                                        name="drink"
                                        value={item}
                                        checked={selectedDrinks.includes(item)}
                                        onChange={() => handleToggle(item, setSelectedDrinks, selectedDrinks)}
                                        className="accent-red-500"
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            {/* Summary */}
            <div className="mt-16 px-4 lg:px-32 font-serif">
                <h2 className="text-2xl font-semibold text-center mb-4">Your Selected Order</h2>
                <div className=" space-y-2">
                    <p><strong>Crusts:</strong> {selectedCrusts.join(', ') || 'None'}</p>
                    <p><strong>Sauces:</strong> {selectedSauces.join(', ') || 'None'}</p>
                    <p><strong>Toppings:</strong> {selectedToppings.join(', ') || 'None'}</p>
                    <p><strong>Drinks:</strong> {selectedDrinks.join(', ') || 'None'}</p>
                </div>
                <div>
                    <Link to='/CartPage'>  <button onClick={() => handleCartbtn(DetailProduct, selectedCrusts, selectedDrinks, selectedSauces, selectedToppings)} className='      addtocartcss         bg-red-500 rounded font-serif text-white p-2'>Add to Cart</button></Link>
                </div>
            </div>
        </>
    );
});

export default DetailPage;
