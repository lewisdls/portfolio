import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
];

const Skills = () => {
  return (
    <motion.div
      className="text-center pb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="font-semibold text-4xl text-white">Tech Stack</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 items-center justify-center gap-8 mt-16 px-10 lg:px-44">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 justify-self-center md:justify-self-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
          >
            <img className="w-16" src={skill.icon} alt={skill.name} />
            <span className="text-white text-2xl font-semibold hidden md:block">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
