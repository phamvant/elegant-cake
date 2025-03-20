import { Link } from "react-router-dom";

function SlideCard({ cake }) {
  return (
    <Link to={`/elegant-cake/cake/${cake.id}`}>
      <div className="group w-[280px] bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
        {/* Image container */}
        <div className="h-[200px] overflow-hidden">
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content container */}
      </div>
    </Link>
  );
}

export default SlideCard;
