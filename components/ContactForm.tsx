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
      className={`w-full md:bg-[#081e1e] rounded-lg  mx-auto transition-all ease-in-out duration-300`}
    >
      <form
        className={`w-full rounded-md md:p-8 `}
        method="POST"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block  mb-2 text-gray text-xs uppercase"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`shadow border-gray text-sm bg-[#081e1e] focus:bg-[#081e1e] appearance-none border transition-all ease-in-out duration-150 rounded-lg focus-within:bg-neutral-800 w-full py-2 px-3 text-white   leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray text-xs uppercase  mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow border-gray text-sm bg-[#081e1e] focus:bg-[#081e1e] appearance-none border transition-all ease-in-out duration-150 rounded-lg focus-within:bg-neutral-800 w-full py-2 px-3 text-white   leading-tight focus:outline-none focus:shadow-outline`}
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

        <div className="mb-4 md:pt-4">
          <label
            className="block mb-2 text-gray text-xs uppercase"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className={`shadow border-gray text-sm bg-[#081e1e] focus:bg-[#081e1e] appearance-none border transition-all ease-in-out duration-150 rounded-lg focus-within:bg-neutral-800 w-full py-2 px-3 text-white   leading-tight focus:outline-none focus:shadow-outline`}
            id="message"
            name="message"
            rows="8"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center ">
          <button
            className={`px-10 text-secondary font-noraml bg-[#36544c] hover:bg-[#36544c]/75 text-sm transiton-all ease-in-out duration-150 py-2 rounded-lg focus:outline-none focus:shadow-outline`}
            type="submit"
            value="Send"
          >
            Send
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
