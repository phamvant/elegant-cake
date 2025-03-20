import CakeCard from "./CakeCard";
import CakeSlide from "./CakeSlide";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const cakes = [
  {
    id: 1,
    name: "Vanilla Dream",
    price: "$45",
    image: "/elegant-cake/images/cake1.webp",
    description: "A light, fluffy vanilla cake with creamy.",
  },
  {
    id: 2,
    name: "Chocolate Bliss",
    price: "$50",
    image: "/elegant-cake/images/cake2.jpg",
    description: "Rich chocolate layers with a silky ganache.",
  },
  {
    id: 3,
    name: "Rose Petal Delight",
    price: "$55",
    image: "/elegant-cake/images/cake3.webp",
    description: "Delicate rose-infused cake with edible petals.",
  },
];

function CakeList() {
  const featuredRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (featuredRef.current) {
      observer.observe(featuredRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContent = () => {
    const featuredSection = document.getElementById("featured-section");
    if (featuredSection) {
      featuredSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-cream">
      {/* Hero Section with background video */}
      <div className="relative h-[1000px] mb-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/elegant-cake/videos/video.mp4" type="video/mp4" />
          {/* Add fallback image for browsers that don't support video */}
          <img
            src="/elegant-cake/images/cake2.jpg"
            alt="Cake making process"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        {/* Content with glassmorphism effect */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl mx-auto p-8 rounded-2xl backdrop-blur-md bg-white/5">
            <h2 className="text-5xl font-bold text-white mb-6 font-playfair animate-fade-in drop-shadow-lg">
              Welcome to Elegant Cakes
            </h2>
            <p className="text-xl text-white leading-relaxed animate-fade-in delay-200">
              Indulge in our handcrafted cakes, where every bite is a
              masterpiece of flavor and beauty.
            </p>
          </div>
        </div>

        {/* Clickable scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer
                   hover:transform hover:scale-110 transition-transform duration-300
                   bg-white/10 backdrop-blur-sm rounded-full p-3
                   hover:bg-white/20"
          aria-label="Scroll to content"
        >
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* Featured Cake Section - Add ID for scroll target */}
      <div
        id="featured-section"
        ref={featuredRef}
        className="max-w-6xl pt-32 mx-auto px-4 mb-24 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h3 className="text-3xl text-center text-brown mb-8 font-playfair">
          Featured Delight
        </h3>
        <div className="max-w-5xl mx-auto">
          <CakeCard cake={cakes[0]} isFeatured={true} />
        </div>
      </div>

      <CakeSlide cakes={cakes} />
      {/* Main Collection Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-12 text-center">
          <h3 className="text-3xl text-brown mb-4 font-playfair">
            Explore Our Collection
          </h3>
          <div className="w-24 h-0.5 bg-lavender mx-auto" />
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <CakeCard key={cake.id} cake={cake} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/elegant-cake/cakes"
            className="inline-flex items-center px-8 py-3 bg-gold text-white rounded-full 
                     hover:bg-brown transition-colors duration-300 group"
          >
            View All Cakes
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CakeList;
