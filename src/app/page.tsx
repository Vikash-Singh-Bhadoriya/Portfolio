"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 md:px-20 py-16 selection:bg-purple-500 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px]" />

      <motion.div variants={container} initial="hidden" animate="show">

        {/* HERO */}
        <section className="mb-24 max-w-3xl">
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text"
          >
            Hi, I'm Vikash Singh
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-gray-400"
          >
            Android Developer • Kotlin • Jetpack Compose
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-gray-500 leading-relaxed"
          >
            I build high-performance Android apps with clean architecture,
            smooth UI, and real-world usability.
          </motion.p>
        </section>

        {/* PROJECTS */}
        <section className="mb-24">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-10">
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* CARD */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.04 }}
              className="group relative p-6 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-md hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold">Workout Timer</h3>

              <p className="text-gray-400 mt-3">
                Custom interval training app with voice alerts, background execution,
                and multiple workout modes.
              </p>

              <div className="mt-5 flex gap-6 text-sm">
                <a href="https://github.com/Vikash-Singh-Bhadoriya/Workout-Timer" target="_blank" className="hover:text-purple-400">
                  GitHub →
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.thefocust.intervaltimer" target="_blank" className="hover:text-green-400">
                  Live →
                </a>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition" />
            </motion.div>

            {/* CARD */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.04 }}
              className="group relative p-6 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-md hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold">Lock In App</h3>

              <p className="text-gray-400 mt-3">
                Productivity-focused Android app designed to eliminate distractions
                and improve focus.
              </p>

              <div className="mt-5 flex gap-6 text-sm">
                <a href="https://github.com/Vikash-Singh-Bhadoriya/Lock-In" target="_blank" className="hover:text-purple-400">
                  GitHub →
                </a>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition" />
            </motion.div>

          </div>
        </section>

        {/* SKILLS */}
        <section>
          <motion.h2 variants={item} className="text-3xl font-semibold mb-8">
            Skills
          </motion.h2>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            {["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Room", "Git"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-white/5 border border-gray-700 hover:border-purple-500 transition text-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </section>

      </motion.div>
    </main>
  );
}