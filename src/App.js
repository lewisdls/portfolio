import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App relative bg-[url('/public/h.jpg')] bg-cover">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
