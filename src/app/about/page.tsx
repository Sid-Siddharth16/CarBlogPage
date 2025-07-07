"use client";

import { motion } from "framer-motion";
import { Car, Sparkles, Cpu } from "lucide-react";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 pb-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-12 pb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="bg-gradient-to-tr from-blue-400/80 to-indigo-500/80 rounded-full p-6 shadow-2xl mb-4"
        >
          <Car className="w-16 h-16 text-white drop-shadow-lg animate-bounce" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-2 text-center font-[Poppins]"
        >
          About Car Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-700 text-center max-w-2xl"
        >
          <Sparkles className="inline-block w-5 h-5 text-yellow-500 mr-2" />
          Car Blog is your go-to source for the latest in automotive news, reviews, and tips. We fuel the passion of car lovers with content that&apos;s not just informative—but exciting.
        </motion.p>
      </div>

      {/* Main Card Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/60 backdrop-blur-lg p-10 rounded-2xl max-w-3xl mx-auto mt-10 mb-16"
      >
        {/* What We Cover */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Car className="text-blue-500 w-5 h-5" />
            What We Cover
          </h2>
          <motion.ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <motion.li variants={itemVariants}>Electric Vehicles (EVs) and the future of mobility ⚡</motion.li>
            <motion.li variants={itemVariants}>SUV and sedan deep-dive reviews 🚗</motion.li>
            <motion.li variants={itemVariants}>Hands-on maintenance tips 🔧</motion.li>
            <motion.li variants={itemVariants}>Automotive industry insights 📈</motion.li>
          </motion.ul>
        </motion.div>
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full mb-8 origin-left"
        />
        {/* Tech Stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Cpu className="text-purple-600 w-5 h-5" />
            Tech Stack
          </h2>
          <motion.ul className="list-disc pl-6 text-gray-700 space-y-1">
            <motion.li variants={itemVariants}>Next.js with App Router 🚀</motion.li>
            <motion.li variants={itemVariants}>Tailwind CSS for fast & sleek UI 🌈</motion.li>
            <motion.li variants={itemVariants}>TypeScript for type-safe coding 💻</motion.li>
            <motion.li variants={itemVariants}>JSONPlaceholder for API prototyping 🔗</motion.li>
          </motion.ul>
        </motion.div>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <motion.a
            href="/allposts"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:from-indigo-500 hover:to-blue-600 text-lg"
          >
            Read Our Blog
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
