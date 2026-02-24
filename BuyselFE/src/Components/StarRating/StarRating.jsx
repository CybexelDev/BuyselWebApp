import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star, index) => {
        const fillPercentage =
          rating >= star
            ? 100
            : rating >= star - 0.5
            ? 50
            : 0;

        return (
          <div key={index} className="relative">
            {/* Empty Star */}
            <Star size={13} className="text-gray-300" />

            {/* Filled Star */}
            {fillPercentage > 0 && (
              <Star
                size={13}
                className="absolute top-0 left-0 text-yellow-400 fill-yellow-400"
                style={{
                  clipPath:
                    fillPercentage === 50
                      ? "inset(0 50% 0 0)"
                      : "none",
                }}
              />
            )}
          </div>
        );
      })}

      <span className="text-sm text-gray-600 ml-1">{rating}</span>
    </div>
  );
};

export default StarRating;
