"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 selection:bg-purple-500">
      
      {/* HERO */}
      <section className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          Hi, I'm Vikash Singh
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-400"
        >
          Android Developer | Kotlin | Jetpack Compose
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-500 max-w-xl"
        >
          I build performant Android apps with clean architecture and real-world usability.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section className="mb-16">
        <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-6"
      >
        Projects
      </motion.h2>    
          <motion.div 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 border border-gray-800 rounded-xl hover:bg-gray-900 transition"
          >
            <h3 className="text-xl font-semibold">Workout Timer</h3>
            <p className="text-gray-400 mt-2">
              Custom interval training app with voice alerts, background running, and multiple workout modes.
            </p>

            {/* LINKS */}
            <div className="mt-4 flex gap-4">
              <a href="https://github.com/Vikash-Singh-Bhadoriya/Workout-Timer" target="_blank" className="text-blue-400 hover:underline">
                GitHub
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.thefocust.intervaltimer" className="text-green-400 hover:underline">
                Live
              </a>
            </div>
          </motion.div>
             
          <motion.div 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 border border-gray-800 rounded-xl hover:bg-gray-900 transition"
          >
            <h3 className="text-xl font-semibold">Lock In App</h3>
            <p className="text-gray-400 mt-2">
              Custom interval training app with voice alerts, background running, and multiple workout modes.
            </p>

            {/* LINKS */}
            <div className="mt-4 flex gap-4">
              <a href="https://github.com/Vikash-Singh-Bhadoriya/Lock-In" target="_blank" className="text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
          </motion.div>
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    
        <div className="flex flex-wrap gap-3">
          {["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Room", "Git"].map((skill) => (
            <span key={skill} className="px-3 py-1 border border-gray-700 rounded-full text-sm text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}