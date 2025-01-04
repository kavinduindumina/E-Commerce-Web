import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4">
        <div className="relative flex h-full items-center">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-5xl font-bold">
              Spring Collection 2025
            </h1>
            <p className="mb-8 text-xl">
              Discover our latest arrivals and trending styles
            </p>
            <Link to="/products">
              <Button size="lg" className="font-semibold">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};