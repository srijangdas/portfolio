import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (currentScroll / totalHeight) * 100;
      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[99]">
      <div
        className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-100 ease-out"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
