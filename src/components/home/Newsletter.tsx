import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-8">
            Get updates about new products and special offers
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-md px-4 py-2 text-gray-900"
              required
            />
            <Button type="submit" variant="secondary">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};