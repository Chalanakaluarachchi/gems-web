import React from 'react';

const AllProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-pink-600 text-sm font-bold">New arrivals</h2>
        <h1 className="text-4xl font-bold mb-8">All Products</h1>

        {/* Category Filter */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <button className="text-white bg-pink-600 rounded-full px-4 py-2 focus:outline-none">
            All
          </button>
          <button className="text-pink-600 hover:text-black px-4 py-2">Category name</button>
          <button className="text-pink-600 hover:text-black px-4 py-2">Category name</button>
          <button className="text-pink-600 hover:text-black px-4 py-2">Category name</button>
          <button className="text-pink-600 hover:text-black px-4 py-2">Category name</button>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-pink-600">
            <i className="fas fa-chevron-left text-2xl"></i>
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Card */}
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img src="/emerald.png" alt="Product" className="w-full mb-4" />
                <h3 className="text-pink-600 text-lg font-semibold">Item name</h3>
                <p className="text-black font-bold mb-1">Item name</p>
                <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e</p>
                <p className="font-bold text-lg mb-4">Rs. 2000.00</p>

                {/* Color Options */}
                <div className="flex justify-center space-x-2">
                  <span className="block w-4 h-4 rounded-full bg-pink-600"></span>
                  <span className="block w-4 h-4 rounded-full bg-cyan-600"></span>
                  <span className="block w-4 h-4 rounded-full bg-green-600"></span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-pink-600">
            <i className="fas fa-chevron-right text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
