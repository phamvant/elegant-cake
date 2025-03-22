import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import PageTransition from "../components/PageTransition";
import Notification from "../components/Notification";
import Rating from "../components/Rating";
import { cakes } from "../data/cakes";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function CakeDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("medium");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

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

  const handleAddToCart = () => {
    const selectedCake = {
      ...cake,
      price: cake.sizes[selectedSize].price,
      selectedSize: selectedSize,
      quantity,
    };
    addToCart(selectedCake);
    setShowNotification(true);
  };

  return (
    <PageTransition>
      <section className="">
        {/* Full-width Image */}
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={cake.image}
            alt={`${cake.name} - ${cake.sizes[selectedSize].label}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Cake Information */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-playfair text-brown mb-4">
              {cake.name}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              {cake.description}
            </p>
            <div className="flex justify-center items-center gap-4">
              <span className="text-2xl text-gold font-semibold">
                ${cake.sizes[selectedSize].price}
              </span>
              <div className="h-6 w-px bg-gray-300" />
              <Rating value={5} reviews={24} />
            </div>
          </div>

          {/* Cake Story */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-brown mb-4">
              The Story Behind the Cake
            </h3>
            <p className="text-gray-600 leading-relaxed">{cake.story}</p>
          </div>

          {/* Additional Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-brown mb-4">
              Exciting Features
            </h3>
            <p className="text-gray-600">{cake.features}</p>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg group">
                <motion.img
                  key={selectedSize}
                  src={cake.sizes[selectedSize].additionalImages[0]}
                  alt={`${cake.name} additional view ${+1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg">View</span>
                </div> */}
              </div>
              <div className="relative overflow-hidden rounded-lg group">
                <motion.img
                  key={selectedSize}
                  src={cake.sizes[selectedSize].additionalImages[1]}
                  alt={`${cake.name} additional view ${+1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg">View</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Order Options */}
          <div className="space-y-8">
            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-brown mb-4">
                Select Size
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(cake.sizes).map(([size, details]) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-4xl border-2 transition-all ${
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
                onClick={handleAddToCart}
                className="w-full py-4 bg-gold text-white rounded-4xl hover:bg-brown 
                               transition-colors flex items-center justify-center gap-2 group cursor-pointer"
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
                  <p className="text-gray-600">Made with premium ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification */}
        {showNotification && (
          <Notification
            message="Item added to cart!"
            onClose={() => setShowNotification(false)}
          />
        )}
      </section>
    </PageTransition>
  );
}

export default CakeDetail;
