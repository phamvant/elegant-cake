import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "./PageTransition";

const cakes = [
  {
    id: 1,
    name: "Vanilla Dream",
    price: "$45",
    image: "/elegant-cake/images/cake1.webp",
    description: "A light, fluffy vanilla cake with creamy frosting.",
  },
  {
    id: 2,
    name: "Chocolate Bliss",
    price: "$50",
    image: "/elegant-cake/images/cake2.jpg",
    description: "Rich chocolate layers with a silky ganache finish.",
  },
  {
    id: 3,
    name: "Rose Petal Delight",
    price: "$55",
    image: "/elegant-cake/images/cake3.webp",
    description: "Delicate rose-infused cake with edible petals.",
  },
];

function CakeDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("medium");
  const [quantity, setQuantity] = useState(1);

  // Find the cake from your cakes data
  const cake = cakes.find((c) => c.id === parseInt(id));

  if (!cake) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-brown mb-4">Cake not found</h2>
          <Link
            to="/elegant-cake/cakes"
            className="text-gold hover:text-brown transition-colors"
          >
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const sizes = {
    small: { label: '6" (6-8 servings)', price: cake.price },
    medium: {
      label: '8" (10-12 servings)',
      price: (parseFloat(cake.price.replace("$", "")) + 10).toFixed(2),
    },
    large: {
      label: '10" (14-16 servings)',
      price: (parseFloat(cake.price.replace("$", "")) + 20).toFixed(2),
    },
  };

  return (
    <PageTransition>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  to="/elegant-cake/"
                  className="text-gray-500 hover:text-gold"
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link
                  to="/elegant-cake/cakes"
                  className="text-gray-500 hover:text-gold"
                >
                  Collection
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-brown">{cake.name}</li>
            </ol>
          </nav>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Additional Images (if available) */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden bg-white shadow-md 
                             hover:ring-2 ring-gold transition-all"
                  >
                    <img
                      src={cake.image}
                      alt={`${cake.name} view ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-playfair text-brown mb-4">
                  {cake.name}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl text-gold font-semibold">
                    ${sizes[selectedSize].price}
                  </span>
                  <div className="h-6 w-px bg-gray-300" />
                  <div className="flex items-center text-brown">
                    <span className="text-gold">★★★★★</span>
                    <span className="ml-2">(24 reviews)</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {cake.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-brown mb-4">
                  Select Size
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(sizes).map(([size, details]) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedSize === size
                          ? "border-gold bg-gold/5"
                          : "border-gray-200 hover:border-gold/50"
                      }`}
                    >
                      <div className="text-sm font-medium text-brown">
                        {details.label}
                      </div>
                      <div className="text-gold">${details.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brown mb-4">
                    Quantity
                  </h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => quantity > 1 && setQuantity((q) => q - 1)}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center
                               hover:border-gold transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center
                               hover:border-gold transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="w-full py-4 bg-gold text-white rounded-xl hover:bg-brown 
                                 transition-colors flex items-center justify-center gap-2 group"
                >
                  Add to Cart
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>

                {/* Additional Information */}
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-start gap-4 text-sm">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-600">
                      Order now for delivery within 48 hours
                    </p>
                  </div>
                  <div className="flex items-start gap-4 text-sm">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-600">
                      Made with premium ingredients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details Tabs (Optional) */}
          <div className="mt-20">
            {/* Add tabs for Ingredients, Reviews, etc. */}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default CakeDetail;
