import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="text-white py-28 px-10 lg:px-44 grid lg:grid-cols-2 items-center gap-12"
    >
      <motion.div
        className="h-[400px]"
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
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
        <h4 className="text-medium-yellow font-bold text-base">ABOUT ME</h4>
        <h2 className="font-bold text-4xl leading-snug">
          Dedicated Front-End Developer based in DR
        </h2>
        <p className="leading-relaxed font-light text-lg">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React JS, Tailwind and SCSS. I excel
          in designing and maintaining responsive websites that offer a smooth
          user experience. My expertise lies in crafting dynamic, engaging
          interfaces through writing clean and optimized code and utilizing
          cutting-edge development tools and techniques.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
