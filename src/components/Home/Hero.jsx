"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import L1 from "/public/Home/graph.png";
import L2 from "/public/Home/chart.png";
import L3 from "/public/Home/user.png";
import L4 from "/public/Home/video.png";
import L5 from "/public/Home/rupee.png";
import L6 from "/public/Home/search.png";
import WordFadeIn from "../ui/word-fadein";
import AnimatedGradientText from "../ui/gradienttxt";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Blobby from "../blobby";
import { ImCross } from "react-icons/im";

const data = [
  {
    title: "85% Bussiness growth",
    image: L1,
    class: "ml-32 ",
  },
  {
    title: "4.5% Conversion rate",
    image: L2,
    class: "mr-32",
  },
  {
    title: "60% Leads generated",
    image: L3,
    class: "",
  },
  {
    title: "55% Increased views",
    image: L4,
    class: "",
  },
  {
    title: "50% Increased sales",
    image: L5,
    class: "ml-32",
  },
  {
    title: "Top 3 seach rankings",
    image: L6,
    class: "mr-32",
  },
];

const Hero = () => {
  const [consultingType, setConsultingType] = useState("AI Consulting");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  useEffect(() => {
    const consultingTypes = [
      "AI Consulting",
      "Web Consulting",
      "App Consulting",
    ];
    const interval = setInterval(() => {
      setConsultingType((prev) => {
        const currentIndex = consultingTypes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % consultingTypes.length;
        return consultingTypes[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "", budget: "" });
        setShowForm(false);
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };

  return (
    <section className="isolate overflow-hidden py-16 md:py-10">
      <Blobby className="top-40 left-10 h-40 bg-primary/30 z-50" />
      <Blobby className="bottom-20 right-10 h-40 bg-cyan-300/20 z-50" />
      <div className="relative mx-auto max-h-full px-6 md:max-w-[90%] md:px-8">
        <div className="absolute mx-auto flex h-full w-full flex-nowrap items-center justify-center">
          <div className="maskk h-full w-full opacity-60">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "url('/Home/dotted-bg.png')",
                backgroundSize: "482px",
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/60 pointer-events-none"></div>
        <div className="absolute left-0 mx-auto hidden h-full w-full max-w-full md:block">
          <div className="flex h-full w-full flex-row flex-wrap items-center justify-between">
            {data.map((item, i) => (
              <motion.div
                key={i}
                className="w-1/2"
                initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div
                  className={`flex w-fit items-center gap-3 shadow-sm rounded-full border bg-background px-4 py-1.5 ${
                    i % 2 !== 0 ? "ml-auto" : ""
                  } ${item.class}`}
                >
                  <Image src={item.image} alt="misx" className="h-6 w-6" />
                  <p className="text-muted-foreground">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative isolate z-10 mx-auto my-auto max-w-full py-4 md:max-w-[70%] md:py-20"
        >
          <AnimatedGradientText
            className={
              "hover:scale-105 active:scale-95 transition-all duration-300 hover:rotate-2 cursor-pointer"
            }
          >
            🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span className="inline font-semibold animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              Reach new heights with Syntalix
            </span>
            <ArrowUpRight className="ml-1 size-4 transition-transform duration-300 group-hover:rotate-45 text-primary ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
          <h1 className="syntalix-heading mt-8 text-center font-semibold text-4xl tracking-tight  md:text-7xl md:leading-[5rem]">
            Explore Innovation with Expert{" "}
            <span className="syntalix-gradient-text font-extrabold drop-shadow-sm">
              {" "}
              <TypeAnimation
                sequence={[
                  "AI Consulting ",
                  5000,
                  "Web Consulting",
                  3000,
                  "App Consulting",
                  3000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="syntalix-body mx-auto mt-6 max-w-2xl text-center text-base text-zinc-800 md:text-lg font-medium"
          >
            <WordFadeIn
              words="Unlock innovation with our AI consulting. We provide tailored
            solutions to optimize operations and enhance decision-making,
            helping you stay ahead in the market."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-x-4 md:gap-x-8"
          >
            <button
              onClick={handleGetStarted}
              className="syntalix-heading max-w-md inline-flex items-center rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-500 px-4 py-2 text-white md:px-6 shadow-lg hover:shadow-xl md:py-3 md:text-2xl"
            >
              Get started
              <ArrowUpRight />
            </button>
          </motion.div>
        </motion.div>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-background p-10 w-[90%] rounded-2xl md:w-[400px] shadow-lg z-50 relative">
            <h2 className="text-xl font-bold mb-4 text-center text-foreground">
              Get in Touch With Us
            </h2>
            <form
              className="relative w-full md:max-w-[500px] bg-muted shadow-lg rounded-2xl"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="enter your name"
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mt-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mt-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 px-3 rounded-xl block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter a message here"
                />
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-foreground mt-2"
                >
                  Budget
                </label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full px-3 rounded-xl border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="enter a number in INR"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-3xl bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-700"
              >
                Get in Touch With Us
              </button>
            </form>
            <button
              className="absolute top-2 right-2 text-xl text-foreground"
              onClick={() => setShowForm(false)}
            >
              <ImCross />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
