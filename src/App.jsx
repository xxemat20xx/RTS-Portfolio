import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  return (
    <>
     <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;