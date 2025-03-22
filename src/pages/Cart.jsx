import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleRemove = (id) => removeFromCart(id);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/elegant-cake/checkout");
  };

  return (
    <div className="min-h-screen bg-gold/10 py-12 px-4 pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-gray-600 mb-10 tracking-wide">
          Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center  p-8 border-[1px] border-gold/80 rounded-4xl">
            <p className="text-gray-600 text-lg mb-4 font-light italic">
              Your cart is currently empty
            </p>
            <Link
              to="/elegant-cake"
              className="inline-block px-6 py-3 bg-gold text-white rounded-md hover:bg-gold transition-colors duration-300 shadow-sm"
            >
              Begin Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-6 flex items-center justify-between border-[1px] border-gold/80 rounded-4xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover border-[1px] border-gold/80 rounded-4xl"
                    />
                    <div>
                      <h3 className="text-xl font-serif text-gray-800 tracking-tight">
                        {item.name} - {item.selectedSize}
                      </h3>
                      <p className="text-gold font-medium mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 border-[1px] border-gold/80 cursor-pointer bg-gray-100/50 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-medium"
                        >
                          -
                        </button>
                        <span className="text-gray-700 font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 border-[1px] border-gold/80 cursor-pointer bg-gray-100/50 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-medium"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
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
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="p-6 h-fit sticky top-6 border-[1px] border-gold/80 rounded-4xl">
              <h3 className="text-2xl font-serif text-gray-800 mb-6 tracking-tight">
                Order Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span className="font-light">Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-light">Discount</span>
                  <span className="">0%</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-light">Shipping</span>
                  <span className="text-green-600">Complimentary</span>
                </div>
                <div className="rounded-4xl pt-4 flex justify-between text-gray-800 font-semibold text-lg">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-6 py-3 bg-gold/80 text-white rounded-4xl hover:bg-gold transition-colors duration-300 shadow-sm font-medium cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
