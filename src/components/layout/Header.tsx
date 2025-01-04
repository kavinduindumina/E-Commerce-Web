import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../../store/useCart';

export const Header: React.FC = () => {
  const cartItems = useCart((state) => state.items);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ShopHub
          </Link>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-md border border-gray-300 py-2 pl-4 pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/account"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};