const MarqueeBackground = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden pointer-events-none -rotate-12 opacity-[0.07] select-none z-0">
      {/* Row 1 */}
      <div className="relative whitespace-nowrap overflow-hidden py-2">
        <div className="inline-block text-[8vw] font-extrabold leading-none animate-marquee">
          Creative Developer • Digital Artist • Interactive Designer • Creative
          Developer • Digital Artist • Interactive Designer •
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative whitespace-nowrap overflow-hidden py-2">
        <div className="inline-block text-[8vw] font-extrabold leading-none animate-marquee-reverse">
          WebGL • React • TypeScript • NodeJs • WebGL • React • TypeScript •
          NodeJs •
        </div>
      </div>

      {/* Row 3 */}
      <div className="relative whitespace-nowrap overflow-hidden py-2">
        <div className="inline-block text-[8vw] font-extrabold leading-none animate-marquee">
          Motion Design • 3D Animation • UI/UX • Motion Design • 3D Animation •
          UI/UX •
        </div>
      </div>
    </div>
  );
};

export default MarqueeBackground;
