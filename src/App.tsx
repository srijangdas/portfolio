import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CrosshairCursor from "./components/CrosshairCursor";
import AboutSection from "./components/AboutSection";
import ScrollProgress from "./components/ScrollProgress";
// @ts-expect-error stuff
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <ScrollProgress />
      <CrosshairCursor />
      <Navbar />
      <Hero />
      <AboutSection />
    </div>
  );
}

export default App;
