import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white py-12 px-10 lg:px-44 flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between bg-[#0d0134]">
      <p>Copyright © 2024. All rights are reserved</p>
      <div className="flex items-center gap-8 lg:gap-4">
        <a
          href="https://www.linkedin.com/in/lewisdls/"
          target="_blank"
          className="text-3xl"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/lewisdls/"
          target="_blank"
          rel="noreferrer"
          className="text-3xl"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
