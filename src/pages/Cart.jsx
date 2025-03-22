import CakeCard from "../components/CakeCard";
import CakeCardCart from "../components/CakeCardCart";
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
          <div className="text-center p-8">
            <p className="text-gray-600 text-lg mb-4 font-light italic">
              Your cart is currently empty
            </p>
            <Link
              to="/elegant-cake"
              className="inline-block px-6 py-3 bg-gold text-white rounded-full hover:bg-gold transition-colors duration-300 shadow-sm"
            >
              Begin Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <CakeCardCart
                  cake={item}
                  isFeatured={true}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="p-6 h-fit sticky top-6 shadow-2xl rounded-4xl bg-white">
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
