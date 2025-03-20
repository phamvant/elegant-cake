import { useState } from "react";
import CakeCard from "./CakeCard";
import PageTransition from "./PageTransition";
import cakes from "../data/cakes";

function AllCakes() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Categories for filter - adjust based on your cake categories
  const categories = [
    { id: "all", name: "All Cakes" },
    { id: "birthday", name: "Birthday" },
    { id: "wedding", name: "Wedding" },
    { id: "custom", name: "Custom" },
    { id: "seasonal", name: "Seasonal" },
  ];

  // Filter and search functionality
  const filteredCakes = cakes.filter(
    (cake) =>
      (activeFilter === "all" || cake.category === activeFilter) &&
      (cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <PageTransition type="fade">
      <section className=" bg-cream">
        {/* Hero Banner */}
        <div className="relative h-[300px] mb-12 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/cakes-banner.jpg")',
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-5xl font-playfair text-white text-center">
              Our Collection
              <div className="w-24 h-1 bg-gold mx-auto mt-4" />
            </h1>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-xl shadow-md">
            {/* Search Input */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cakes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-[300px] pl-10 pr-4 py-2 border border-lavender rounded-full 
                           focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gold text-white shadow-md"
                      : "bg-lavender/20 text-brown hover:bg-lavender/30"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cakes Grid */}
        <div className="max-w-7xl mx-auto px-4">
          {filteredCakes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCakes.map((cake) => (
                <div
                  key={cake.id}
                  className="transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <CakeCard cake={cake} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl text-brown mb-4">No cakes found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Load More Button (optional) */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-gold text-white rounded-full 
                           hover:bg-brown transition-colors duration-300
                           flex items-center gap-2 mx-auto"
          >
            Load More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </section>
    </PageTransition>
  );
}

export default AllCakes;
