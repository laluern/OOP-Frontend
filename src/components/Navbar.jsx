import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <nav className="bg-transparent">
        <div className="bg-transparent flex items-center justify-between mx-5 fixed">
            <div><img src="/src/assets/logo.svg" className="w-10"/></div>
            <ul>
                <li className="bg-orange-400 p-2 m-1 rounded-lg w-15">Login</li>
            </ul>

            {/* Menu Button */}
            {/* <div className="md:hidden">
                <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
                    <svg
                    fill="None"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
            </div>

            <ul className="hidden md:flex space-x-4">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Login</a></li>
  </ul>*/}
        </div>

        {/* Mobile Menu */}
        {/* {isMenuOpen ? (
            <ul className="flex-col md:hidden">
            <li className="py-3"><a href="#" className="text-white">Home</a></li>
            <li className="py-3"><a href="#" className="text-white">About</a></li>
            <li className="py-3"><a href="#" className="text-white">Login</a></li>
        </ul>
        ): null} */}
        
    </nav>
  )
}

export default Navbar