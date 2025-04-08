import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white text-center lg:text-left h-[80vh] md:h-screen flex items-center justify-between lg:px-44">
      <motion.div
        className="flex flex-col gap-8 mx-10 lg:mx-0"
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        <h1 className="font-bold text-6xl leading-tight">
          Hello, I'm <br /> Lewis Nomar.
        </h1>
        <p className="font-light text-xl leading-relaxed lg:w-[60%]">
          Web developer passionate about creating dynamic and functional
          applications with experience in both front-end and back-end
          development using frameworks and libraries such as Next.js and
          TailwindCSS.
        </p>
        <div className="hidden lg:flex items-center gap-12 mt-6">
          <h2 className="font-semibold text-3xl tracking-wide">Tech Stack:</h2>
          <div className="flex justify-center lg:justify-normal gap-8">
            <div className="flex flex-col lg:flex-row gap-4 hover:-translate-y-2 transition-all duration-300">
              <img src="https://skillicons.dev/icons?i=html" alt="" />
              <img src="https://skillicons.dev/icons?i=css" alt="" />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 hover:-translate-y-2 transition-all duration-300">
              <img src="https://skillicons.dev/icons?i=js" alt="" />
              <img src="https://skillicons.dev/icons?i=ts" alt="" />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 hover:-translate-y-2 transition-all duration-300">
              <img src="https://skillicons.dev/icons?i=react" alt="" />
              <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
              <img src="https://skillicons.dev/icons?i=nextjs" alt="" />
              <img src="https://skillicons.dev/icons?i=mongodb" alt="" />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 hover:-translate-y-2 transition-all duration-300">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="" />
              <img src="https://skillicons.dev/icons?i=bootstrap" alt="" />
              <img src="https://skillicons.dev/icons?i=sass" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
          <a className="hidden lg:block font-medium" href="/CV.pdf" target="_blank">
            <button className="bg-yellow-400 text-black font-semibold self-center lg:self-start px-6 py-2 rounded-full cursor-pointer">
              DOWNLOAD CV
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/lewisdls/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://www.github.com/lewisdls/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
