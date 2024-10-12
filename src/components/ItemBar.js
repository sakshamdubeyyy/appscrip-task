'use client'

import React, { useState } from 'react';

function ItemBar({ toggleFilters, filtersVisible }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="w-full h-[60px] bg-white border-b border-neutral-200 flex items-center justify-between px-4">
            {/* Left side with item count and filter toggle */}
            <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-[#252020] uppercase">3425 Items</span>
                <button 
                    className="text-base text-[#878691] underline"
                    onClick={toggleFilters}
                >
                    {filtersVisible ? "Hide Filters" : "Show Filters"}
                </button>
            </div>

            {/* Right side with dropdown for Recommended/Liked Products */}
            <div className="relative">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <span className="text-lg font-bold text-[#252020] uppercase">
                        Recommended
                    </span>
                    <div className="w-4 h-4 transform rotate-90">
                        <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" />
                    </div>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-md">
                        <ul className="flex flex-col">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Recommended
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Liked Products
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemBar;
