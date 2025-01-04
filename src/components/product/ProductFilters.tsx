import React from 'react';
import { Button } from '../ui/Button';

export const ProductFilters: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <div className="space-y-2">
          {['All', 'Electronics', 'Fashion', 'Home & Living'].map((category) => (
            <button
              key={category}
              className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <div className="space-y-2">
          <input type="range" className="w-full" min="0" max="1000" />
          <div className="flex justify-between">
            <span>LKR0</span>
            <span>LKR100000</span>
          </div>
        </div>
      </div>

      <Button className="w-full">Apply Filters</Button>
    </div>
  );
};