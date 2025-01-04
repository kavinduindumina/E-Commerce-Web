import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../store/useCart';
import type { Product } from '../../types';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  quantity = 1 
}) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product });
  };

  return (
    <Button 
      onClick={handleAddToCart}
      className="flex items-center gap-2"
    >
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </Button>
  );
};