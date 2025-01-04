import { CartItem } from '../types';

export async function processPayment(paymentDetails: PaymentDetails, items: CartItem[]) {
  // This would integrate with a real payment processor in production
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, orderId: Math.random().toString(36).slice(2) });
    }, 1500);
  });
}

export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}