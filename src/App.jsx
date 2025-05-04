import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#11023e] to-[#021c3e] bg-cover">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
