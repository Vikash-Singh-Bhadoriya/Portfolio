"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-16">

      {/* BACK */}
      <Link href="/" className="text-gray-400 hover:text-white">← Back</Link>

      {/* TITLE */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mt-6"
      >
        Workout Timer (1K+ Users)
      </motion.h1>

      {/* TAGLINE */}
      <p className="text-gray-400 mt-2 max-w-2xl">
        A highly customizable interval training app for HIIT, Tabata, and fitness routines.
      </p>

      {/* CONTENT */}
      <section className="mt-16 max-w-3xl space-y-6">

        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-2">
            Existing fitness timer apps were either too complex or lacked flexibility,
            making it difficult for users to create custom workout routines.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-2">
            Built a flexible interval timer supporting custom routines, multiple modes,
            and seamless background execution.
          </p>
        </div>

        
{/* SCREENSHOTS */}
<div className="mt-12 space-y-10">

  {[
    "/workout_timer_graphics.png",
  ].map((src, i) => (
    
    <motion.div
      key={src}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Image
        src={src}
        alt="Workout Screenshot"
        width={1200}
        height={800}
        className="w-full h-auto rounded-2xl border border-gray-800 hover:scale-[1.01] transition"
      />
    </motion.div>

  ))}

</div>

        <div>
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>• Simple & Advanced workout modes</li>
            <li>• Voice + Audio + Vibration alerts</li>
            <li>• Background execution with notifications</li>
            <li>• Pre-built HIIT & Tabata workouts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Tech</h2>
          <p className="text-gray-400 mt-2">
            Kotlin, MVVM, Clean Architecture, Services, Notifications
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Impact</h2>
          <p className="text-gray-400 mt-2">
            Achieved 1K+ users with strong retention due to reliability and ease of use.
          </p>
        </div>

      </section>

{/* SCREENSHOTS */}
<div className="mt-12 space-y-10">

  {[
    "/workout_timer_logo.png",
    "/workout_timer_screens.png"
  ].map((src, i) => (
    
    <motion.div
      key={src}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Image
        src={src}
        alt="Workout Screenshot"
        width={1200}
        height={800}
        className="w-full h-auto rounded-2xl border border-gray-800 hover:scale-[1.01] transition"
      />
    </motion.div>

  ))}

</div>

    </main>
  );
}