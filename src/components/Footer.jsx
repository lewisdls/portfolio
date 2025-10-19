import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full border-t border-white/10 bg-gradient-to-t from-white/5 to-white/2 text-white/70">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-8 lg:px-44 py-10">
        {/* Text */}
        <p className="text-sm tracking-wide text-white/60">
          © 2025 Lewis De los Santos — All rights reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/lewisdls/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/lewisdls/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
