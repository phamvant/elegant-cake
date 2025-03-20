import { Link } from "react-router-dom";

function CakeCard({ cake, isFeatured = false }) {
  return (
    <Link to={`/elegant-cake/cake/${cake.id}`}>
      <div
        className={`group bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
          isFeatured
            ? "md:flex items-stretch border border-lavender"
            : "border-t-4 border-lavender"
        }`}
      >
        {/* Image container */}
        <div
          className={`relative overflow-hidden ${
            isFeatured ? "md:w-1/2 md:min-h-[400px]" : "h-[280px]"
          }`}
        >
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content container */}
        <div
          className={`p-8 flex flex-col ${
            isFeatured
              ? "md:w-1/2 md:justify-center md:text-left"
              : "text-center"
          }`}
        >
          {/* Name with decorative line */}
          <div className="mb-4">
            <h4
              className={`font-bold text-brown group-hover:text-gold transition-colors duration-300 ${
                isFeatured ? "text-3xl" : "text-2xl"
              }`}
            >
              {cake.name}
            </h4>
            <div className="w-16 h-0.5 bg-lavender mt-3 group-hover:w-full transition-all duration-300 mx-auto md:ml-0" />
          </div>

          {/* Description */}
          <p
            className={`text-gray-600 mb-6 ${
              isFeatured ? "text-lg" : "line-clamp-2"
            }`}
          >
            {cake.description}
          </p>

          {/* Price and CTA */}
          <div
            className={`flex items-center ${
              isFeatured ? "md:justify-start" : "justify-center"
            } gap-6`}
          >
            <span className="text-xl font-semibold text-gold">
              {cake.price}
            </span>
            <span className="inline-flex items-center text-gray-400 group-hover:text-gold transition-colors duration-300">
              View Details
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CakeCard;
