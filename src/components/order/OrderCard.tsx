import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Package } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatPrice } from '../../lib/utils';
import { OrderItem } from './OrderItem';
import type { Order } from '../../types';

interface OrderCardProps {
  order: Order;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Order #{order.id}</p>
            <p className="text-sm text-gray-500">Placed on {order.date}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{formatPrice(order.total)}</p>
            <p className="text-sm text-green-600">{order.status}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {order.items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <Link to={`/order/${order.id}`}>
            <Button variant="secondary" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              View Details
            </Button>
          </Link>
          <Link to={`/order/${order.id}/track`}>
            <Button variant="secondary" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Track Order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};