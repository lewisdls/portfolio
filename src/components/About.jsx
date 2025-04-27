import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="text-white pt-10 md:pt-[92px] pb-28 px-10 lg:px-44 grid lg:grid-cols-2 items-center gap-12 overflow-hidden"
    >
      <motion.div
        className="h-[400px]"
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/header.jpg"
          alt=""
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 text-center lg:text-left"
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <h4 className="text-yellow-400 font-bold text-base">ABOUT ME</h4>
        <h2 className="font-bold text-4xl leading-snug">
          Passionate Web Developer from the Dominican Republic
        </h2>
        <p className="leading-[36px] font-light text-lg">
          Currently wrapping up my degree in Computer Systems Engineering 🤩. I build responsive websites with clean code, smooth user experiences,
          and solid backend functionality. I focus on creating dynamic, engaging
          sites using modern tools and best practices.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
