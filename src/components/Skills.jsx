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
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" },
  { name: "Sanity", icon: "https://yt3.googleusercontent.com/NAUB0vdxKU7a0n2L863_S3cn35TLev08dKY7P8NqTZn4EH3hDXh-v1oPWPDgasSRUokqlAtg=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Strapi", icon: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F763%2F988af53b-5d7e-435a-98eb-dd4aff5299d2.png" },
];

const Skills = () => {
  return (
    <motion.div
      className="text-center pb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-semibold text-4xl 2xl:text-5xl text-white">Tech Stack</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 items-center justify-center gap-8 mt-20 px-10 lg:px-44">
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
            <img className="w-16 rounded-2xl" src={skill.icon} alt={skill.name} />
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
