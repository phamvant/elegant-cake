import { useEffect } from "react";
import SlideCard from "./SlideCard";

function CakeSlide({ cakes }) {
  useEffect(() => {
    // Only add animation if user hasn't opted for reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scroller = document.querySelector(".scroller");
      const scrollerInner = scroller.querySelector(".scroller__inner");

      // Clone the cake cards
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });

      scroller.setAttribute("data-animated", true);
    }
  }, [cakes]);

  return (
    <div className="relative ">
      <h3 className="text-3xl text-center text-brown mb-8">
        Featured Collection
      </h3>

      <div className="scroller" data-speed="slow">
        <div className="scroller__inner flex gap-6">
          {cakes.map((cake) => (
            <div key={cake.id} className="flex-none">
              <SlideCard cake={cake} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CakeSlide;
