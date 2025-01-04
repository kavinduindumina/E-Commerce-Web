import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Plus, Minus } from 'lucide-react';
import { AddToCartButton } from '../components/product/AddToCartButton';
import { products } from '../data/mockData';
import { formatPrice } from '../lib/utils';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <p className="text-2xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </p>

          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button 
                className="p-2"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                className="p-2"
                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <AddToCartButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};