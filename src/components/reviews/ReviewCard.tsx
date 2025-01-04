import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import type { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold">{review.title}</h3>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              by {review.author}
            </span>
          </div>
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      
      <p className="text-gray-600 mb-4">{review.content}</p>
      
      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
        <ThumbsUp className="h-4 w-4" />
        Helpful ({review.helpful})
      </button>
    </div>
  );
};