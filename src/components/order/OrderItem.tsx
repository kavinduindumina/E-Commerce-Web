import React from 'react';
import { formatPrice } from '../../lib/utils';
import type { CartItem } from '../../types';

interface OrderItemProps {
  item: CartItem;
}

export const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">
          Qty: {item.quantity} × {formatPrice(item.price)}
        </p>
      </div>
    </div>
  );
};