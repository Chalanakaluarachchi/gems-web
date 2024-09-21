// components/CategorySlider.tsx
"use client";
import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    imageUrl: '/Gems.jpg',
    category: 'Category Name 1',
  },
  {
    imageUrl: '/Gems.jpg',
    category: 'Category Name 2',
  },
  {
    imageUrl: '/images/category3.jpg',
    category: 'Category Name 3',
  },
  {
    imageUrl: '/images/category4.jpg',
    category: 'Category Name 4',
  },
];

const CategorySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  return (
    <div className="relative w-full flex items-center">
      <button
        className="absolute left-0 p-2 bg-pink-600 text-white rounded-full z-10"
        onClick={prevSlide}
      >
        &lt;
      </button>

      <div className="flex overflow-hidden w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <CategoryCard
              imageUrl={category.imageUrl}
              category={category.category}
            />
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 p-2 bg-pink-600 text-white rounded-full z-10"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default CategorySlider;
