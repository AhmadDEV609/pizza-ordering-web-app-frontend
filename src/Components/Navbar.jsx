import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrUserManager } from "react-icons/gr";
import InstallButton from './InstallButton';
import './Navbar.css'
const Navbar = React.memo(() => {
    const [toggle, settoggle] = useState(false)
    const [Mode, setMode] = useState(true)
    const Cartlenght = useSelector((state) => state.Cart.Cart)


    function Togglebtn() {

        settoggle(!toggle)

        if (Mode == true) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white"
            document.body.classList.add('dark-mode')
            setMode(!Mode)
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black"
            document.body.classList.remove('dark-mode')
            setMode(!Mode)
        }


    }
    return (
        <>
            {/* Top Navbar (always visible) */}
            <div className="bg-amber-300 h-16 flex items-center px-4 lg:ml-24 fixed top-0 w-full z-10">
                <img className="h-12 mr-4" src={logo} alt="Logo" />
                <InstallButton />
                <div className='fixed right-0 mr-7 text-4xl' >
                    <Link to='/Login' ><GrUserManager /></Link>
                </div>
            </div>

            {/* Side Navbar (left - visible on lg and up) */}
            <div className="bg-amber-300 w-20 lg:w-24 h-screen fixed top-0 left-0 hidden lg:flex flex-col items-center pt-16 shadow-lg z-10">
                <ul className="space-y-10 text-center text-lg font-bold  cursor ">
                    <li><IoMdMenu onClick={() => settoggle(!toggle)} className="mx-auto text-2xl  font-bold " /></li>
                    <li><Link to="/" >Order</Link></li>
                    <li className="relative flex items-center ml-4">
                        <Link to="/CartPage" >
                            Cart
                        </Link>

                        <span className="mb-4 inline-block bg-black text-white text-xs font-semibold rounded-full px-2 py-0.5">
                            {Cartlenght.length}
                        </span>
                    </li>


                    <li className='cursor'><Link to='/LocationPage' >Location</Link></li>
                    <li className='cursor'>  <Link to='/Profile' >Profile</Link></li>
                </ul>
            </div>
            {/* page that is visible on click (left - visible on lg and up) */}
            <div className={`transition-all duration-300 ${toggle ? "block" : "hidden"} bg-amber-300 w-52 h-screen fixed top-0 z-50`}>
                <RxCross1 className='text-4xl mt-3 ml-2' onClick={() => settoggle(!toggle)} />
                <div
                    className={`fixed top-0 left-0 h-screen w-64 bg-amber-300 shadow-lg z-50 transform transition-transform duration-300
      ${toggle ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 md:static md:h-auto md:w-52 md:shadow-none`}
                >
                    {/* Header with title and close button */}
                    <div className="flex justify-between items-center p-4 border-b border-amber-400">

                        <RxCross1
                            className="cursor-pointer text-gray-900 md:hidden"
                            size={24}
                            onClick={() => settoggle(false)}
                        />
                    </div>

                    {/* Navigation links */}
                    <nav className="flex flex-col p-4 space-y-4 text-gray-900">
                        <a
                            href="#about"
                            className="hover:bg-amber-400 px-3 py-2 rounded-md transition-colors duration-200"
                            onClick={() => settoggle(false)}
                        >
                            About Company
                        </a>
                        <a
                            href="#contact"
                            className="hover:bg-amber-400 px-3 py-2 rounded-md transition-colors duration-200"
                            onClick={() => settoggle(false)}
                        >
                            Contact Us
                        </a>
                        <a
                            href="#services"
                            className="hover:bg-amber-400 px-3 py-2 rounded-md transition-colors duration-200"
                            onClick={() => settoggle(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#faq"
                            className="hover:bg-amber-400 px-3 py-2 rounded-md transition-colors duration-200"
                            onClick={() => settoggle(false)}
                        >
                            FAQ
                        </a>
                        <a
                            href="#careers"
                            className="hover:bg-amber-400 px-3 py-2 rounded-md transition-colors duration-200"
                            onClick={() => settoggle(false)}
                        >
                            Careers
                        </a>
                        <a>
                            Dark Mode
                        </a>
                        <div>
                            <a
                                href="#careers"
                                className="hover:bg-amber-400 px-3 py-2 rounded-md transition-colors duration-200"
                                onClick={Togglebtn}
                            >
                                {Mode ? 'Switch to Dark' : 'Switch to Light'}
                            </a>
                        </div>
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto p-4 border-t border-amber-400 text-sm text-gray-700">
                        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Navbar (visible on sm and md only) */}
            <div className="bg-amber-300 h-16 fixed bottom-0 left-0 w-full flex justify-around items-center lg:hidden shadow-inner z-10">
                <ul className="flex justify-between w-full px-6 text-sm cursor ">
                    <li className="flex flex-col items-center">
                        <IoMdMenu onClick={() => settoggle(!toggle)} />

                    </li>

                    <li className="flex flex-col items-center">
                        <span><Link to="/" >Order</Link></span>
                    </li>
                    <li className="relative flex items-center ">
                        <Link to="CartPage">Cart</Link>

                        <span className="mb-4 inline-block bg-black text-white text-xs font-semibold rounded-full px-2 py-0.5">
                            {Cartlenght.length}
                        </span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span> <Link to='/LocationPage' >Location</Link></span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span> <Link to='/Profile' >Profile</Link></span>
                    </li>
                </ul>
            </div>
        </>
    )
});

export default Navbar
