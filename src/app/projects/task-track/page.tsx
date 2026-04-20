"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-16">

      <Link href="/#portfolio" scroll={true} className="text-gray-400 hover:text-white">← Back</Link>

      <h1 className="text-4xl font-bold mt-6">
        Task Track
      </h1>

      <p className="text-gray-400 mt-2 max-w-2xl">
        A productivity-focused task manager with structured planning and tracking.
      </p>

      {/* IMAGES */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {["/task_track_graphics.png", "/task_track_screens.png", "/t3.png"].map((src) => (
          <motion.div whileHover={{ scale: 1.05 }} key={src}>
            <Image src={src} width={300} height={600} className="rounded-xl" alt="" />
          </motion.div>
        ))}
      </div>

      <section className="mt-16 max-w-3xl space-y-6">

        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-2">
            Managing tasks becomes chaotic without structured tracking and prioritization.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-2">
            Built a task manager with sub-tasks, filters, calendar, and time scheduling.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>• Task breakdown into sub-tasks</li>
            <li>• Priority & status system</li>
            <li>• Calendar integration</li>
            <li>• Search + filtering</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Tech</h2>
          <p className="text-gray-400 mt-2">
            Kotlin, MVVM, Room DB, UI/UX design
          </p>
        </div>

      </section>
    </main>
  );
}