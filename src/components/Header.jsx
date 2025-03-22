import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Header() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Title Section */}
        <div>
          <h1 className="text-3xl font-bold text-gold hover:text-coral transition-colors duration-300">
            <Link to="/elegant-cake/">Elegant Cakes</Link>
          </h1>
          <p className="text-sm text-teal opacity-80">
            Crafted with Love & Grace
          </p>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gold focus:outline-none transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-8 h-8 transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/elegant-cake/"
            className="text-gold hover:text-coral hover:border-b-2 hover:border-teal transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/elegant-cake/cart"
            className="relative text-gold hover:text-coral hover:border-b-2 hover:border-teal transition-all duration-300"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isOpen ? "translate-x-1/2" : "translate-x-full"
          } absolute top-full left-0 w-full rounded-b-4xl bg-orange-50 md:hidden shadow-2xl overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              to="/elegant-cake/"
              className="text-gold hover:text-coral transition-colors duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/elegant-cake/cart"
              className="relative text-gold hover:text-coral transition-colors duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                Cart
                {totalItems > 0 && (
                  <span className="inline-flex items-center justify-center ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5">
                    {totalItems}
                  </span>
                )}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
