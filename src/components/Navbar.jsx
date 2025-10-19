import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavBar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div
      className={`fixed text-white p-4 md:px-12 lg:px-44 md:py-6 w-full z-10 ${
        navbar ? "ring-1 ring-white/15 bg-slate-950" : "bg-transparent"
      }`}
    >
      <div
        className={`hidden lg:flex items-center justify-end gap-8 text-lg font-medium tracking-wide`}
      >
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#work">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div
        className="lg:hidden text-4xl flex items-center justify-end cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div
        className={`absolute lg:hidden left-0 right-0 top-17 h-[calc(100vh-50px)] ring-1 ring-white/15 bg-slate-950 flex flex-col items-center justify-center gap-8 font-medium text-lg transition-all duration-700 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          className={`text-center hover:text-white transform transition-all cursor-pointer`}
          href="/"
          onClick={() => setOpen(!open)}
        >
          Home
        </a>
        <a
          className={`text-center hover:text-white transform transition-all cursor-pointer`}
          href="#about"
          onClick={() => setOpen(!open)}
        >
          About
        </a>
        <a
          className={`text-center hover:text-white transform transition-all cursor-pointer`}
          href="#work"
          onClick={() => setOpen(!open)}
        >
          Projects
        </a>
        <a
          className={`text-center hover:text-white transform transition-all cursor-pointer`}
          href="#contact"
          onClick={() => setOpen(!open)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
