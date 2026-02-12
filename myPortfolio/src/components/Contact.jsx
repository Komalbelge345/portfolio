import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Currently Disabled. Please Email Me Instead.");

    const emailButton = document.getElementById("emailButton");
    if (emailButton) {
      emailButton.scrollIntoView({ behavior: "smooth", block: "center" });
      emailButton.focus();
      emailButton.style.boxShadow = "0 0 20px rgba(34, 211, 238, 0.8)";
      emailButton.style.transition = "box-shadow 0.5s ease";
      setTimeout(() => {
        emailButton.style.boxShadow = "none";
      }, 4000);
    }
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16"
    >
      <ToastContainer theme="dark" />

      {/* Heading */}
      <div className="mb-10 flex items-center gap-3 px-4 md:px-16">
        <div className="h-[1.5px] w-full bg-slate-700"></div>
        <h1 className="text-lg font-bold uppercase text-slate-400 whitespace-nowrap">
          Contact Me
        </h1>
        <div className="h-[1.5px] w-full bg-slate-700"></div>
      </div>

      <div className="mx-4 sm:w-[70vw] sm:mx-auto mb-20">
        <div className="border border-slate-700 bg-slate-900 rounded-2xl shadow-xl">
          {/* Top Bar */}
          <div className="flex items-center gap-2 bg-slate-800 border-b border-slate-700 text-white p-4 rounded-t-2xl">
            <GoDotFill className="text-cyan-400 text-lg" />
            <h1 className="text-lg font-semibold">
              Get In <span className="text-cyan-400">Touch</span>
            </h1>
          </div>

          {/* Form */}
          <form className="p-6" onSubmit={handleSubmit}>
            <input
              value={data.name}
              required
              name="name"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Full Name"
              className="border-b border-slate-600 bg-transparent focus:border-cyan-400 focus:outline-none ps-2 pb-3 mb-8 w-full font-medium text-sm text-slate-300 placeholder-slate-500 transition"
            />

            <input
              value={data.email}
              required
              name="email"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              type="email"
              placeholder="@Email"
              className="border-b border-slate-600 bg-transparent focus:border-cyan-400 focus:outline-none ps-2 pb-3 mb-8 w-full font-medium text-sm text-slate-300 placeholder-slate-500 transition"
            />

            <textarea
              value={data.message}
              required
              name="message"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Leave a message here..."
              className="h-[130px] border-b border-slate-600 bg-transparent focus:border-cyan-400 focus:outline-none ps-2 pb-3 mb-6 w-full font-medium text-sm text-slate-300 placeholder-slate-500 transition"
            ></textarea>

            <button
              type="submit"
              className="py-2 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:scale-105"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
