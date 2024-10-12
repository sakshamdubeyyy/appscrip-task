'use client'

import React, { useState } from 'react';
import ItemBar from './ItemBar';  // Importing the ItemBar component
import Filters from './Filters';  // Importing the Filters component
import ProductShowcase from './ProductShowcase';  // Importing the ProductShowcase component

function FilterSection() {
    const [filtersVisible, setFiltersVisible] = useState(true);  // State lifted here

    const toggleFilters = () => {
        setFiltersVisible(!filtersVisible);  // Toggle visibility on button click
    };

    return (
        <div className="w-full">
            {/* ItemBar with filter toggle */}
            <ItemBar toggleFilters={toggleFilters} filtersVisible={filtersVisible} />

            {/* Flexbox container for filters and products */}
            <div className="flex mt-2">
                {/* Filters section that shows/hides based on filtersVisible state */}
                <div className={`transition-all duration-300 ease-in-out ${filtersVisible ? 'w-[25%]' : 'w-0'} overflow-hidden`}>
                    <Filters filtersVisible={filtersVisible} />
                </div>

                {/* Product Showcase section */}
                <div className={`transition-all duration-300 ease-in-out ${filtersVisible ? 'w-[75%]' : 'w-full'}`}>
                    <ProductShowcase filtersVisible={filtersVisible} />
                </div>
            </div>
        </div>
    );
}

export default FilterSection;
