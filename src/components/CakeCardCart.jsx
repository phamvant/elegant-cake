import { Link } from "react-router-dom";

function CakeCardCart({ cake, isFeatured = false, updateQuantity }) {
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
            </h4>
            <div className="w-16 h-0.5 bg-lavender mt-3 group-hover:w-full transition-all duration-300 mx-auto md:ml-0" />
          </div>

          {/* Description */}
          <p
            className={`text-gray-600 mb-6 ${
              isFeatured ? "text-lg" : "line-clamp-2"
            }`}
          >
            {cake.selectedSize}
          </p>

          {/* Price and CTA */}
          <div
            className={`flex items-center ${
              isFeatured ? "md:justify-start" : "justify-center"
            } gap-6`}
          >
            <span className="text-xl font-semibold text-gold">
              ${cake.sizes["small"].price}
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
              onClick={() => updateQuantity(cake.id, cake.quantity - 1)}
              className="w-8 h-8 border-[1px] border-gold/80 cursor-pointer bg-gray-100/50 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-medium"
            >
              -
            </button>
            <span className="text-gray-700 font-medium w-8 text-center">
              {cake.quantity}
            </span>
            <button
              onClick={() => updateQuantity(cake.id, cake.quantity + 1)}
              className="w-8 h-8 border-[1px] border-gold/80 cursor-pointer bg-gray-100/50 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-medium"
            >
              +
            </button>
          </div>
        </div>
        {/* <button
          // onClick={() => handleRemove(item.id)}
          className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
}

export default CakeCardCart;
