import { useState } from "react";
import { useCart } from "../context/CartContext";
import Notification from "../components/Notification";

function Checkout() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Here you can handle the form submission, e.g., send data to a server
      setShowNotification(true);
      clearCart(); // Clear the cart after successful order
      setErrors({});
      // Redirect to home or a confirmation page
    } else {
      setErrors(formErrors);
    }
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const itemTotal = parseFloat(item.price * item.quantity);
        return total + itemTotal;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gold/10 py-12 px-4 pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Order Summary */}
          <div className="p-6 rounded-4xl border-[1px] border-gold/80">
            <h3 className="text-xl font-bold mb-4 text-gray-700">
              Order Summary
            </h3>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id + item.selectedSize}
                  className="flex justify-between"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>
                    ${parseFloat(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
              <span className="text-gray-700">Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>

          {/* Personal Information Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 rounded-full block w-full border-0 ring-1 transition-all pl-4 ${
                  errors.name ? "border-red-500" : "border-gold/50"
                } focus:ring-1 ring-gold/50 focus:ring-gold focus:outline-none p-2`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 rounded-full block w-full border-0 ring-1 transition-all pl-4 ${
                  errors.email ? "border-red-500" : "border-gold/50"
                } focus:ring-1 ring-gold/50 focus:ring-gold focus:outline-none p-2`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`mt-1 rounded-full block w-full border-0 ring-1 transition-all pl-4 ${
                  errors.address ? "border-red-500" : "border-gold/50"
                } focus:ring-1 ring-gold/50 focus:ring-gold focus:outline-none p-2`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 rounded-full block w-full border-0 ring-1 transition-all pl-4 ${
                  errors.phone ? "border-red-500" : "border-gold/50"
                } focus:ring-1 ring-gold/50 focus:ring-gold focus:outline-none p-2`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gold text-white rounded-full hover:bg-brown transition-colors cursor-pointer"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <Notification
          message="Order confirmed. We we will contact with you soon!"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
}

export default Checkout;
