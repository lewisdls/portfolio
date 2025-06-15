import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white text-center lg:text-left h-[80vh] md:h-screen flex flex-row-reverse items-center justify-between lg:gap-20 lg:px-44 overflow-hidden">
      <motion.div
        className="flex flex-col gap-8 mx-10 lg:mx-0 w-fit"
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        <h1 className="font-bold text-5xl md:text-6xl 2xl:text-[90px] leading-tight 2xl:leading-[7rem]">
          Hello, I'm <br /> Lewis Nomar
        </h1>
        <p className="font-light text-xl 2xl:text-2xl leading-[36px] 2xl:leading-[46px]">
          Web developer passionate about creating dynamic and functional
          applications with experience in both front-end and back-end
          development using frameworks and libraries such as Next.js and
          TailwindCSS.
        </p>
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
          <a className="hidden lg:block" href="/CV.pdf" target="_blank">
            <button className="bg-yellow-400 text-black font-bold self-center lg:self-start px-6 py-2 rounded-full cursor-pointer 2xl:text-lg">
              DOWNLOAD CV
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/lewisdls/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-3xl 2xl:text-4xl" />
          </a>
          <a
            href="https://www.github.com/lewisdls/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-3xl 2xl:text-4xl" />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="hidden lg:block w-2/4"
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        <img
          className="rounded-full object-cover"
          src="/lewis.jpg"
          alt="Lewis Nomar"
        />
      </motion.div>
    </div>
  );
};

export default Header;
