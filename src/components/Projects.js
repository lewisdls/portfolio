import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div
      id="work"
      className="text-white lg:py-28 px-10 lg:px-44 flex flex-col gap-12 text-center lg:text-left"
    >
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <h4 className="text-medium-yellow font-bold text-base">PROJECTS</h4>
        <h2 className="font-bold text-4xl leading-snug">
          Each project is a unique piece of development
        </h2>
      </motion.div>
      <motion.div
        className="grid auto-fill gap-8 text-left"
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <div className="w-full">
          <img
            className="w-full h-[300px] object-cover object-top rounded-t-3xl transition-all duration-300 group-hover:opacity-70"
            src="/naruto.png"
            alt=""
          />
          <div className="flex flex-col gap-4 p-6 bg-[#181c4a] rounded-b-3xl">
            <h3 className="font-semibold text-2xl">Naruto Universe</h3>
            <div className="flex items-center justify-between">
              <p className="px-2 py-1 border-blue-900 border-solid border-2 rounded-lg cursor-default">
                Next.js
              </p>
              <p className="px-2 py-1 border-blue-900 border-solid border-2 rounded-lg cursor-default">
                TypeScript
              </p>
              <p className="px-2 py-1 border-blue-900 border-solid border-2 rounded-lg cursor-default">
                Tailwind
              </p>
              <p className="px-2 py-1 border-blue-900 border-solid border-2 rounded-lg cursor-default">
                Strapi
              </p>
            </div>
            <a
              href="https://salon-aura.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex items-center gap-2 font-semibold text-md bg-white text-black w-max mt-4 px-2 py-1 rounded-xl border-b-blue-900 border-b-4">
                Live demo <FiExternalLink />
              </button>
            </a>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full h-[300px] object-cover object-top rounded-t-3xl transition-all duration-300 group-hover:opacity-70"
            src="/salon-aura.jpeg"
            alt=""
          />
          <div className="flex flex-col gap-4 p-6 bg-[#181c4a] rounded-b-3xl">
            <h3 className="font-semibold text-2xl">Salon Aura</h3>
            <div className="flex items-center gap-4">
              <p className="px-2 py-1 border-blue-900 border-solid border-2 rounded-lg cursor-default">
                React JS
              </p>
              <p className="px-2 py-1 border-blue-900 border-solid border-2 rounded-lg cursor-default">
                Tailwind
              </p>
            </div>
            <a
              href="https://salon-aura.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex items-center gap-2 font-semibold text-md bg-white text-black w-max mt-4 px-2 py-1 rounded-xl border-b-blue-900 border-b-4">
                Live demo <FiExternalLink />
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;