import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY < 50); // Hide when scrolled past 50px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 transition-opacity duration-500 pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-300">
        SCROLL
      </span>
      <div className="w-px h-6 relative mt-1 overflow-hidden">
        <div className="scroll-line" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
