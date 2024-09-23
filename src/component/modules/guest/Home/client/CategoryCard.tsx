// components/CategoryCard.tsx
import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

interface CategoryCardProps {
  imageUrl: string;
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-2">
      <img
        src={imageUrl}
        alt={category}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-600">Category</h2>
        <h3 className="text-lg font-bold text-gray-900">{category}</h3>
        <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg w-full">
          Go To Categories <FaCartArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
