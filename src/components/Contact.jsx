import { motion } from "framer-motion";
import { GrMailOption, GrPhone } from "react-icons/gr";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-white py-28 px-10 lg:px-44 flex flex-col gap-12 text-center lg:text-left"
    >
      <motion.div
        className="flex flex-col items-center md:items-start gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
      >
        <h4 className="text-yellow-400 font-bold text-base">CONTACT</h4>
        <h2 className="font-bold text-4xl leading-snug w-2/3 md:w-auto">
          Need any help? Please, do tell.
        </h2>
      </motion.div>
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <div className="p-4 bg-white w-fit text-medium-blue text-2xl rounded-full">
            <GrMailOption className="text-blue-800" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-xl">Email</h3>
            <a
              href="mailto:lewisdls21@hotmail.com"
              className="font-light hover:underline hover:decoration-1"
            >
              lewisdls21@hotmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <div className="p-4 bg-white w-fit text-medium-blue text-2xl rounded-full">
            <GrPhone className="text-blue-800" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-xl">Phone</h3>
            <a
              href="tel:+18493309119"
              className="font-light hover:underline hover:decoration-1"
            >
              (849) 330-9119
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
