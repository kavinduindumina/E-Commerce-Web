import React from 'react';
import { Package, Check, Truck, Home } from 'lucide-react';

const steps = [
  { icon: Check, label: 'Order Confirmed', date: '2024-03-15', completed: true },
  { icon: Package, label: 'Packed', date: '2024-03-16', completed: true },
  { icon: Truck, label: 'Shipped', date: '2024-03-17', completed: true },
  { icon: Home, label: 'Delivered', date: 'Expected Mar 20', completed: false },
];

export const OrderTrackingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Track Order #12345</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-start mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.completed ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-0.5 h-16 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">{step.label}</h3>
                <p className="text-sm text-gray-500">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};