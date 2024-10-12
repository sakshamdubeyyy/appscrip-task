'use client'

import React from 'react';

function Filters({ filtersVisible }) {
    return (
        <div className={`transition-all duration-300 ease-in-out ${filtersVisible ? 'h-[846px]' : 'h-0'} w-[100%] mx-auto mt-6 flex-col justify-start items-start gap-6 inline-flex overflow-hidden border border-neutral-200 rounded-lg bg-white shadow-md`}>
            {/* Section Title */}
            <div className="flex justify-between items-center text-[#252020] text-lg font-bold uppercase border-b border-neutral-200 pb-2 px-4">
                <div>Customizable</div>
            </div>

            {/* Filter sections */}
            {['Ideal for', 'Occasion', 'Work', 'Fabric', 'Segment', 'Suitable for', 'Raw Materials', 'Pattern'].map((filter, index) => (
                <div key={index} className="filter-section px-4 py-4">
                    <div className="flex items-center justify-between text-lg font-bold text-[#252020] uppercase">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 border border-gray-500 rounded-sm"></div>
                            </div>
                            <span>{filter}</span>
                        </div>
                        <div className="w-4 h-4 relative">
                            <div className="w-4 h-4 left-0 top-0 absolute rotate-90">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a1 1 0 00-1 1v4a1 1 0 001 1 1 1 0 001-1V9a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                        <span>All</span>
                    </div>
                    <div className="border-b border-neutral-200 mt-2"></div>
                </div>
            ))}
        </div>
    );
}

export default Filters;
