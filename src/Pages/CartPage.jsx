import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { deletelogic } from '../Redux/Slice/CartSlice';
import { toast } from 'react-toastify';
import { increamentfuntion } from '../Redux/Slice/CartSlice';
import { decreamentfuntion } from '../Redux/Slice/CartSlice';
import { Link, useNavigate } from 'react-router-dom';
const CartPage = React.memo(() => {
    const Cartvalue = useSelector((state) => state.Cart.Cart)
    const dispatch = useDispatch()
    const TotalPrice = Cartvalue.reduce((a, b) => a + b.price * b.quantity, 0)

    function deletehandlebtn(id) {
        dispatch(deletelogic(id))
        toast.error("item delete from your cart")
    }

    function increasehanlde(id) {
        dispatch(increamentfuntion(id))
        toast.success("pizza item is increase")
    }
    function decreasehandle(id) {
        dispatch(decreamentfuntion(id))
        toast.success("pizza item is decrease")
    }

    const navigate = useNavigate()
    return (
        <>
            <div className='mt-20 text-center'>
                <h1 className='text-3xl font-mono font-bold'>My Cart</h1>
            </div>
            {Cartvalue.length > 0 ? (
                <>
                    <div className='mt-10 px-4 lg:px-32'>
                        {
                            Cartvalue.map((user, index) => (
                                <div key={index} className='mb-10'>
                                    {/* Scrollable Flex Container for Cart Item */}
                                    <div className='flex flex-row gap-6 overflow-x-auto sm:overflow-visible p-4 bg-white shadow-md rounded-lg'>
                                        <img className='w-32 h-32 object-cover rounded-lg flex-shrink-0' src={user.image} alt={user.name || "Item"} loading='lazy' />

                                        <div className='min-w-[200px]'>
                                            <h3 className='text-xl font-semibold'>{user.name}</h3>
                                            <p className='text-gray-600'>{user.description}</p>
                                            <h3 className='text-red-500 font-bold mt-1'>${user.price}</h3>
                                        </div>

                                        <div className='flex  justify-center gap-2   mb-10 '>
                                            <div className='flex items-center gap-4'>
                                                <button onClick={() => increasehanlde(user.id)} className='bg-amber-400 hover:bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center'>
                                                    +
                                                </button>
                                                <span className='text-lg font-semibold'>{user.quantity}</span>
                                                <button onClick={() => decreasehandle(user.id)} className='bg-amber-400 hover:bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center'>
                                                    -
                                                </button>
                                            </div>

                                            <button className='text-red-600 hover:text-red-800 mt-[30px] self-start'>
                                                <MdDelete onClick={() => deletehandlebtn(user.id)} size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Additional Info */}
                                    <div className='ml-4 mt-4 text-sm text-gray-700'>
                                        <h2 className='font-bold text-base mb-2'>With:</h2>
                                        <p>Crust: <span className='font-medium'>{user.crust}</span></p>
                                        <p>Topping: <span className='font-medium'>{user.topping}</span></p>
                                        <p>Sauce: <span className='font-medium'>{user.sauce}</span></p>
                                        <p>Drink: <span className='font-medium'>{user.drink}</span></p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            ) : (
                <div className='mt-10 text-center'>
                    <h1 className='text-3xl font-mono font-bold'>Your Cart is empty </h1>
                </div>
            )}


            <div className="lg:ml-28 lg:mt-20 mt-16 w-56 p-8  bg-amber-300 rounded-xl  text-gray-900 font-semibold space-y-3 border border-yellow-500">
                <h3 className="text-lg">Shipping: <span className="font-normal text-green-700">Free</span></h3>
                <h3 className="text-lg">Total: <span className="font-bold text-red-600">${TotalPrice.toFixed(2)}</span></h3>
                <h3 className="text-lg">Tax: <span className="font-normal text-green-700">Free</span></h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">

                <Link to="/">
                    <button
                        className="min-w-[180px] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition duration-300"
                    >
                        Continue to Buy
                    </button>
                </Link>

                {/* Continue to Checkout Button */}
                <button
                    onClick={() => navigate('/Checkout', { state: { cartitem: Cartvalue } })}
                    className="min-w-[180px] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition duration-300"
                >
                    Continue to Checkout
                </button>
            </div>


        </>
    )
})

export default CartPage
