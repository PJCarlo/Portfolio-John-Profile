import { Element } from "react-scroll";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import SkeletonLoader from "./components/SkeletonLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-800 selection:text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Skeleton Loader */}
      {isLoading && <SkeletonLoader />}

      {/* Content */}
      {!isLoading && (
        <div className="container mx-auto px-8">
          <Element name="home">
            <Profile />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="connect">
            <Connect />
          </Element>
        </div>
      )}
    </div>
  );
};

export default App;