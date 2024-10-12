'use client';

import React, { useState } from 'react';
import { FiMenu, FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi'; // Icons for hamburger, search, liked, cart
import { AiOutlineClose } from 'react-icons/ai'; // Close icon for mobile menu
import { BsGlobe } from 'react-icons/bs'; // Globe icon for language dropdown

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="w-full bg-white border-b border-neutral-200">
                {/* Top section with logo and icons */}
                <div className="flex justify-between items-center relative py-4 px-4 md:px-10">
                    {/* Hamburger Menu for mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <AiOutlineClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Centered Logo */}
                    <div className="text-black text-3xl font-extrabold tracking-wide mx-auto md:mx-0">
                        LOGO
                    </div>

                    {/* Icons on the right for mobile and desktop */}
                    <div className="flex items-center gap-4 absolute right-9 md:static">
                        <FiSearch className="w-6 h-6" title="Search" />
                        <FiHeart className="w-6 h-6" title="Liked Items" />
                        <FiShoppingCart className="w-6 h-6" title="Cart" />
                        {/* Language Dropdown */}
                        <div className="hidden md:block relative">
                            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                                <BsGlobe className="w-5 h-5" />
                                <span>ENG</span>
                                <div className="w-4 h-4 transform rotate-90">
                                    <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="dropdown" />
                                </div>
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 shadow-md z-50">
                                    <ul className="flex flex-col">
                                        {["ENG", "ESP", "FRA", "GER"].map((lang) => (
                                            <li key={lang} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                {lang}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation links for desktop */}
                <nav className="hidden md:flex justify-center gap-10 py-4 text-sm font-semibold text-black">
                    {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item) => (
                        <a key={item} href="#" className="hover:text-gray-500 transition-colors duration-200 cursor-pointer">
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-neutral-200">
                        <nav className="flex flex-col gap-4 p-4">
                            {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item) => (
                                <a key={item} href="#" className="text-black text-sm hover:text-gray-500 transition-colors duration-200 cursor-pointer">
                                    {item}
                                </a>
                            ))}
                            {/* Additional items inside the mobile menu */}
                            <div className="flex flex-col gap-2">
                                <a href="#" className="text-black text-sm hover:text-gray-500 cursor-pointer">
                                    Profile
                                </a>
                                <a href="#" className="text-black text-sm hover:text-gray-500 cursor-pointer">
                                    Language
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Discover Section */}
            <div className="flex flex-col items-center justify-center text-center mt-10">
                <h1 className="text-[#252020] text-6xl font-normal uppercase tracking-wide font-['Simplon Norm']">
                    DISCOVER OUR PRODUCTS
                </h1>
                <p className="text-[#252020] text-[22px] font-normal leading-10 font-['Simplon Norm'] mt-4 w-[80%] max-w-xl">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>
        </>
    );
}

export default Header;
