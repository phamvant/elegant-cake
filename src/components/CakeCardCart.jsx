import { Link } from "react-router-dom";

function CakeCardCart({ cake, isFeatured = false, updateQuantity }) {
  const totalPrice = (
    cake.sizes[cake.selectedSize].price * cake.quantity
  ).toFixed(2);

  return (
    <div>
      <div
        className={`group bg-white rounded-4xl shadow-lg overflow-hidden duration-300 ${
          isFeatured ? "md:flex items-stretch " : ""
        }`}
      >
        {/* Image container */}
        <div
          className={`relative overflow-hidden ${
            isFeatured ? "md:w-1/2 md:min-h-[100px]" : "h-[280px]"
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
                isFeatured ? "text-xl" : "text-md"
              }`}
            >
              {cake.name}
              <span className="text-sm text-gray-500">
                {" "}
                - {cake.selectedSize} - ${cake.sizes[cake.selectedSize].price}
              </span>
            </h4>
            <div className="hidden md:block w-16 h-0.5 bg-lavender mt-3 group-hover:w-full transition-all duration-300 mx-auto md:ml-0" />
          </div>

          {/* Price and CTA */}
          <div
            className={`flex items-center ${
              isFeatured ? "md:justify-start" : "justify-center"
            } gap-6`}
          >
            <span className="text-xl font-semibold text-gold">
              {/* ${cake.sizes[cake.selectedSize].price} */}${totalPrice}
            </span>
            <Link to={`/elegant-cake/cake/${cake.id}`}>
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
            </Link>
          </div>

          <div className="flex items-center space-x-4 mt-3">
            <button
              onClick={() =>
                updateQuantity(cake.id, cake.selectedSize, cake.quantity - 1)
              }
              className="w-8 h-8 border-[1px] border-gold/80 cursor-pointer bg-gray-100/50 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-medium"
            >
              -
            </button>
            <span className="text-gray-700 font-medium w-8 text-center">
              {cake.quantity}
            </span>
            <button
              onClick={() =>
                updateQuantity(cake.id, cake.selectedSize, cake.quantity + 1)
              }
              className="w-8 h-8 border-[1px] border-gold/80 cursor-pointer bg-gray-100/50 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-medium"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CakeCardCart;
