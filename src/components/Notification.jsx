import { useEffect } from "react";

function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg z-50 transition-transform duration-300 ease-out animate-slide-in">
      {message}
    </div>
  );
}

export default Notification;
