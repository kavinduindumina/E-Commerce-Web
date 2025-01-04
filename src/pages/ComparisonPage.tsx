import React from 'react';
import { Check, X } from 'lucide-react';
import { products } from '../data/mockData';
import { formatPrice } from '../lib/utils';

export const ComparisonPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Compare Products</h1>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left min-w-[200px]">Product</th>
              {products.map((product) => (
                <th key={product.id} className="p-4 text-center min-w-[200px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover mx-auto rounded-lg mb-2"
                  />
                  <h3 className="font-semibold">{product.name}</h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-4 font-medium">Price</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  <span className="font-semibold text-blue-600">
                    {formatPrice(product.price)}
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Rating</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.rating}/5
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">In Stock</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.stock > 0 ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Category</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.category}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};