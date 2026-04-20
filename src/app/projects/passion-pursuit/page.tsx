"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
      <Link href="/" className="text-gray-400 hover:text-white">← Back</Link>
      <h1 className="text-4xl font-bold mt-6">Passion Pursuit</h1>
      <p className="text-gray-400 mt-2 max-w-2xl">
        30-day guided activity planner for daily journaling and progress tracking.
      </p>
      {/* IMAGES */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {["/passion_pursuit_graphics.png"].map((src) => (
          <motion.div whileHover={{ scale: 1.05 }} key={src}>
            <Image src={src} width={400} height={400} className="rounded-xl" alt="Passion Pursuit Screenshot" />
          </motion.div>
        ))}
      </div>
      <section className="mt-16 max-w-3xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-2">
            Staying consistent with new habits and tracking progress is hard without structure.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-2">
            A 30-day guided planner with daily journaling, reminders, and analytics to help users stay on track.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>• 30-day guided planner</li>
            <li>• Daily journaling & reminders</li>
            <li>• Progress analytics & streaks</li>
            <li>• Customizable activities</li>
            <li>• Motivational quotes</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Tech</h2>
          <p className="text-gray-400 mt-2">
            Kotlin, Jetpack Compose, Room DB, MVVM
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Impact</h2>
          <p className="text-gray-400 mt-2">
            Helped users build habits and track progress with a structured, motivational approach.
          </p>
        </div>
      </section>
    </main>
  );
}
