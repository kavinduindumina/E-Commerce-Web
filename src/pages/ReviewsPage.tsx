import React from 'react';
import { ReviewCard } from '../components/reviews/ReviewCard';
import { ReviewForm } from '../components/reviews/ReviewForm';
import type { Review } from '../types';

const reviews: Review[] = [
  {
    id: '1',
    author: 'John Doe',
    rating: 5,
    title: 'Great Product!',
    content: 'Excellent quality and fast delivery. Would definitely buy again.',
    date: '2024-03-15',
    helpful: 12,
  },
];

export const ReviewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Reviews</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-bold mb-4">Write a Review</h2>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};