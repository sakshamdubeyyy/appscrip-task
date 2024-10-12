'use client'

import React, { useState, useEffect } from 'react';

function ProductShowcase({ filtersVisible }) {
    const [products, setProducts] = useState([]);

    // Fetch products from the API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="p-4">
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
                {products.map((product) => (
                    <div key={product.id} className="border border-neutral-200 rounded-lg shadow-md bg-white overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold truncate">{product.title}</h3>
                            <p className="text-sm text-gray-500 truncate mt-2">{product.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-lg">${product.price}</span>
                                <span className="text-sm text-gray-400 uppercase">{product.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductShowcase;
