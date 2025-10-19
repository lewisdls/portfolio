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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Soft ambient background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.18),transparent_60%)]" />
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
