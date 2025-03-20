import { Link } from "react-router-dom";

function Header() {
  return (
    // Sticky header with a gradient background and glassmorphism effect
    <header className="fixed w-full top-0 z-50 backdrop-blur-md shadow-sm">
      {/* Container for the header content, with padding and flex layout */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Title Section */}
        <div>
          {/* Link to the home page, styled as the logo/title with a coral hover effect */}
          <h1 className="text-3xl font-bold text-gold hover:text-coral transition-colors duration-300">
            <Link to="/elegant-cake/">Elegant Cakes</Link>
          </h1>
          {/* Tagline with a subtle teal accent */}
          <p className="text-sm text-teal opacity-80">
            Crafted with Love & Grace
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          {/* Home link with teal underline on hover */}
          <Link
            to="/elegant-cake/"
            className="text-gold hover:text-coral hover:border-b-2 hover:border-teal transition-all duration-300"
          >
            Home
          </Link>
          {/* Contact link with teal underline on hover */}
          <Link
            to="/elegant-cake/contact"
            className="text-gold hover:text-coral hover:border-b-2 hover:border-teal transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
