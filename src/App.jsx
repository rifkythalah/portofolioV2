import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import TechStackTechnology from "./components/sections/TechStackTechnology";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import WorkExperience from "./components/sections/WorkExperience";
import ScrollToTop from "./components/ui/ScrollToTop";
import Loading from "./components/ui/Loading";
import { useAppLoading } from "./hooks";

const App = () => {
  const { isLoading, handleLoadingComplete } = useAppLoading();

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}

      <div className="min-h-screen bg-black">
        <Navbar />
        <ScrollToTop />
        <main>
          <Hero />
          <About />
          <Services />
          <TechStackTechnology />
          <WorkExperience />
          <Project />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
