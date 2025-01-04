import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '../ui/Button';

export const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= (hover || rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Review Title</label>
        <input
          type="text"
          className="w-full rounded-md border p-2"
          placeholder="Summarize your experience"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Review</label>
        <textarea
          className="w-full rounded-md border p-2 h-32"
          placeholder="Share your experience with this product"
        />
      </div>

      <Button type="submit">Submit Review</Button>
    </form>
  );
};