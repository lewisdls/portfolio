import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../utils/constants";

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
        }}
      >
        <h4 className="text-yellow-400 font-bold text-base">PROJECTS</h4>
        <h2 className="font-bold text-4xl leading-snug">
          Each project is a unique piece of development
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
          >
            <img
              className="w-full object-cover object-top rounded-t-3xl lg:h-[200px]"
              src={project.image}
              alt=""
            />
            <div className="flex flex-col gap-4 p-6 bg-[#091447] rounded-b-3xl w-full">
              <h3 className="font-semibold text-2xl">{project.name}</h3>
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="flex gap-2 flex-wrap">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 border-blue-900 border-solid border-2 rounded-lg cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-fit"
              >
                <button className="flex items-center gap-2 font-semibold text-md bg-white text-black w-max mt-4 px-2 py-1 rounded-xl border-b-blue-900 border-b-4 cursor-pointer">
                  Live demo <FiExternalLink />
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
