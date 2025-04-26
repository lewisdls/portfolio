import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white text-center lg:text-left h-[80vh] md:h-screen flex items-center justify-between lg:px-44">
      <motion.div
        className="flex flex-col gap-8 mx-10 lg:mx-0 w-fit"
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        <h1 className="font-bold text-5xl md:text-6xl leading-tight">
          Hello, I'm <br /> Lewis Nomar
        </h1>
        <p className="font-light text-xl leading-[36px] lg:w-4/5">
          Web developer passionate about creating dynamic and functional
          applications with experience in both front-end and back-end
          development using frameworks and libraries such as Next.js and
          TailwindCSS.
        </p>
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
          <a
            className="hidden lg:block font-medium"
            href="/CV.pdf"
            target="_blank"
          >
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
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        <img
          className="hidden lg:block rounded-full object-cover h-[300px] w-[380px]"
          src="/lewis.jpg"
          alt="Lewis Nomar"
        />
      </motion.div>
    </div>
  );
};

export default Header;
