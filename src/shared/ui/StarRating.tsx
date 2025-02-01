import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; 
  maxStars?: number; 
}

export const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index}>
            {rating >= starValue ? (
              <FaStar />
            ) : rating >= starValue - 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      })}
    </div>
  );
};

