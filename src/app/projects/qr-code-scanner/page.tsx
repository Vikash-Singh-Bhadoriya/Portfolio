"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
      <Link href="/#portfolio" scroll={true} className="text-gray-400 hover:text-white">← Back</Link>
      <h1 className="text-4xl font-bold mt-6">QR Code & Barcode Scanner</h1>
      <p className="text-gray-400 mt-2 max-w-2xl">
        Instant scanning, batch-processing, QR code generator, and multi-language UI.
      </p>
      {/* IMAGES */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {["/qrcode_graphics.png"].map((src) => (
          <motion.div whileHover={{ scale: 1.05 }} key={src}>
            <Image src={src} width={400} height={400} className="rounded-xl" alt="QR Scanner Screenshot" />
          </motion.div>
        ))}
      </div>
      <section className="mt-16 max-w-3xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-2">
            Tedious manual entry and unreliable scanners slow down workflows and frustrate users.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-2">
            Built a fast, accurate scanner with batch-processing, QR code generator, and multi-language UI.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>• Instant QR & barcode scanning</li>
            <li>• Batch-processing for multiple codes</li>
            <li>• QR code generator</li>
            <li>• Multi-language UI</li>
            <li>• Offline support</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Tech</h2>
          <p className="text-gray-400 mt-2">
            Kotlin, CameraX, ML Kit, Jetpack Compose
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Impact</h2>
          <p className="text-gray-400 mt-2">
            Improved productivity and accuracy for users in inventory, retail, and events.
          </p>
        </div>
      </section>
    </main>
  );
}
