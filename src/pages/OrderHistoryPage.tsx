import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { OrderCard } from '../components/order/OrderCard';
import type { Order } from '../types';

const orders: Order[] = [
  {
    id: '12345',
    date: '2024-03-15',
    status: 'Delivered',
    total: 299.99,
    items: [
      {
        id: '1',
        name: 'Wireless Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        quantity: 1,
        price: 99.99,
        description: 'High-quality wireless headphones',
        category: 'Electronics',
        rating: 4,
        stock: 10,
      },
    ],
  },
];

export const OrderHistoryPage: React.FC = () => {
  if (orders.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">No Orders Yet</h2>
        <p className="text-gray-600 mb-4">Start shopping to see your orders here</p>
        <Link to="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};