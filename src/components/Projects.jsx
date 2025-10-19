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
            className="group relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/2 hover:bg-white/7 transition-colors"
            initial={{ opacity: 0, y: 72 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Media */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-b-none">
              <img
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                src={project.image}
                alt={project.name}
              />
              {/* Subtle top gradient for legibility */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
              {/* Soft border highlight */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4 p-5 sm:p-6">
              {/* Title + subtle meta line */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <div className="text-base/6 text-white/70 tracking-wide">
                    Project
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {project.name}
                  </h3>
                </div>

                  <div className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/12 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
                    Live demo
                  </div>
              </div>

              {/* Tools / tags */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="rounded-md border border-white/15 bg-white/6 px-2.5 py-1 text-xs font-medium text-white/80 leading-none tracking-wide"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="mt-1 flex items-center justify-between">
                <div className="h-px w-2/3 bg-gradient-to-r from-white/15 to-transparent" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border-b-4 border-b-white/25 bg-white text-black px-3 py-1.5 text-sm font-semibold transition-transform active:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  Open
                </a>
              </div>
            </div>

            {/* Hover lift + glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-0.5" />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
