import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useCart } from '../../store/useCart';
import { processPayment } from '../../lib/payment';
import type { PaymentDetails } from '../../lib/payment';

export const PaymentForm: React.FC = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<PaymentDetails>({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    name: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await processPayment(formData, items);
      if (result.success) {
        clearCart();
        navigate(`/order/${result.orderId}/track`);
      }
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof PaymentDetails],
          [child]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="w-full rounded-md border p-2"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="rounded-md border p-2"
              required
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleInputChange}
              className="rounded-md border p-2"
              required
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full rounded-md border p-2"
            required
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="address.street"
            placeholder="Street Address"
            value={formData.address.street}
            onChange={handleInputChange}
            className="w-full rounded-md border p-2"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="address.city"
              placeholder="City"
              value={formData.address.city}
              onChange={handleInputChange}
              className="rounded-md border p-2"
              required
            />
            <input
              type="text"
              name="address.state"
              placeholder="State"
              value={formData.address.state}
              onChange={handleInputChange}
              className="rounded-md border p-2"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="address.zipCode"
              placeholder="ZIP Code"
              value={formData.address.zipCode}
              onChange={handleInputChange}
              className="rounded-md border p-2"
              required
            />
            <input
              type="text"
              name="address.country"
              placeholder="Country"
              value={formData.address.country}
              onChange={handleInputChange}
              className="rounded-md border p-2"
              required
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Processing...' : `Pay ${total.toFixed(2)}`}
      </Button>
    </form>
  );
};