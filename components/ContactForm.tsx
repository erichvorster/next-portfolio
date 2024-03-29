import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = ({ scrollYProgress }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.075,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={` w-full border  border-neutral-800 rounded-lg ${
        scrollYProgress.current > 0.96
          ? "border-1 border-white shadow-md shadow-white/25 bg-neutral-800"
          : "border-neutral-700"
      }   mx-auto transition-all ease-in-out duration-300`}
    >
      <form
        className={` w-full  rounded-md p-8 h-[380px]`}
        method="POST"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-neutral-700 text-xs uppercase"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`shadow ${
                scrollYProgress.current > 0.96
                  ? "border-1 border-white bg-neutral-800"
                  : "border-neutral-700 bg-neutral-900"
              }  appearance-none border transition-all ease-in-out duration-300 rounded focus-within:bg-neutral-800 w-full py-2 px-3 text-neutral-400 border-neutral-800  leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-neutral-700 text-xs uppercase font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow ${
                scrollYProgress.current > 0.96
                  ? "border-1 border-white bg-neutral-800"
                  : "border-neutral-700 bg-neutral-900"
              }  appearance-none border transition-all ease-in-out duration-300 rounded focus-within:bg-neutral-800 w-full py-2 px-3 text-neutral-400 border-neutral-800  leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block  font-bold mb-2 text-neutral-700 text-xs uppercase"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className={`shadow ${
              scrollYProgress.current > 0.96
                ? "border-1 border-white bg-neutral-800"
                : "border-neutral-700 bg-neutral-900"
            }  appearance-none border transition-all ease-in-out duration-300 rounded focus:bg-neutral-800 w-full py-2 px-3 text-neutral-400 border-neutral-800 leading-tight focus:outline-none focus:shadow-outline`}
            id="message"
            name="message"
            rows="8"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            className={`border ${
              scrollYProgress.current > 0.96
                ? "border-1 border-white bg-neutral-800"
                : "border-neutral-700 bg-neutral-900"
            }  text-gray-500 border-neutral-800 font-noraml hover:bg-gray-700  transiton-all ease-in-out font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
