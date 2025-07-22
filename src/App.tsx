import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import CrosshairCursor from "./components/CrosshairCursor";
import AboutSection from "./pages/AboutSection";
import ScrollProgress from "./components/ScrollProgress";
import Work from "./pages/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import StatsSection from "./pages/StatsSection";
import SelectiveWork from "./pages/SelectiveWork";
import Contact from "./pages/Contact";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <div>
          <ScrollProgress />
          <CrosshairCursor />
          <Navbar />
          <Hero />
          <AboutSection />
          <StatsSection />
          <Work />
          <SelectiveWork />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
