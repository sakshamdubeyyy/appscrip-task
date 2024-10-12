'use client';

import React, { useState } from 'react';

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className="w-full bg-white border-b border-neutral-200">
                {/* Top section with logo and icons */}
                <div className="flex justify-center items-center relative py-4">
                    {/* Centered Logo */}
                    <div className="text-black text-3xl font-extrabold tracking-wide">
                        LOGO
                    </div>

                    {/* Icons to the right of the logo */}
                    <div className="flex items-center gap-6 absolute right-4">
                        {/* Icon placeholders (replace with actual icons later) */}
                        <div className="w-6 h-6 bg-gray-300" title="Search"></div>
                        <div className="w-6 h-6 bg-gray-300" title="Liked Items"></div>
                        <div className="w-6 h-6 bg-gray-300" title="Cart"></div>
                        <div className="w-6 h-6 bg-gray-300" title="Profile"></div>

                        {/* Language Dropdown */}
                        <div className="relative">
                            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                                <span>ENG</span>
                                <div className="w-4 h-4 transform rotate-90">
                                    <div className="w-4 h-4 bg-gray-500"></div>
                                </div>
                            </div>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 shadow-md">
                                    <ul className="flex flex-col">
                                        {["ENG", "ESP", "FRA", "GER"].map(lang => (
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

                {/* Navigation links below the logo */}
                <nav className="flex justify-center gap-10 py-4 text-sm font-semibold text-black">
                    {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item) => (
                        <a key={item} href="#" className="hover:text-gray-500 transition-colors duration-200 cursor-pointer">
                            {item}
                        </a>
                    ))}
                </nav>
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
