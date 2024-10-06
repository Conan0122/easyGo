import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility of the button.
  // Show button only when scrolled down to certain position.
  const toggleVisibility = () => {
    // Show when scrolled 500px down
    (window.scrollY > 500)? setIsVisible(true): setIsVisible(false);
  };

  // Function to smoothly scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Adding scroll event listener
  // Using useEffect as we are adding event listener and this passed function runs only when dependencies are met.
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-8 right-8">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-black text-black shadow-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out drop-shadow-lg"
          >
            <span className="font-extrabold text-3xl">↑</span> Top
          </button>
        )}
      </div>
    </>
  );
}

export default ScrollToTop;
