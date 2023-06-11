import React, { useState } from "react";

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

  return (
    <div
      className={` w-full border  border-neutral-800 rounded-lg ${
        scrollYProgress.current > 0.95
          ? "border-1 border-white shadow-md shadow-white/25 bg-neutral-800"
          : "border-neutral-700"
      }   mx-auto transition-all ease-in-out duration-700`}
    >
      <form
        onSubmit={handleSubmit}
        className={` w-full  rounded-md p-8 h-[420px]`}
      >
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
                scrollYProgress.current > 0.95
                  ? "border-1 border-white bg-neutral-800"
                  : "border-neutral-700"
              }  appearance-none border transition-all ease-in-out duration-700 rounded w-full py-2 px-3 text-gray-700 border-neutral-800 bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline`}
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
                scrollYProgress.current > 0.95
                  ? "border-1 border-white bg-neutral-800"
                  : "border-neutral-700"
              }  appearance-none border transition-all ease-in-out duration-700 rounded w-full py-2 px-3 text-gray-700 border-neutral-800 bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline`}
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
              scrollYProgress.current > 0.95
                ? "border-1 border-white bg-neutral-800"
                : "border-neutral-700"
            }  appearance-none border transition-all ease-in-out duration-700 rounded w-full py-2 px-3 text-gray-700 border-neutral-800 bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline`}
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
            className="border border-neutral-800 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;