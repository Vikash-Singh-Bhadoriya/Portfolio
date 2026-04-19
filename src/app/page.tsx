"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrvikashsingh/",
    icon: "/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/Vikash-Singh-Bhadoriya/",
    icon: "/github.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mrvikashsinghofficial/",
    icon: "/instagram.svg",
  },
];

const apps = [
  {
    title: "Workout Timer: HIIT, Tabata",
    desc: "Minimalist timer with customizable intervals, background running, and motivational features. 1K+ downloads.",
    image: "/workout_timer_graphics.png",
    href: "/projects/workout-timer",
  },
  {
    title: "Task Track",
    desc: "Productivity-focused task manager with sub-tasks, filters, calendar, and time scheduling.",
    image: "/task_track_graphics.png",
    href: "/projects/task-track",
  },
  {
    title: "QR Code & Barcode Scanner",
    desc: "Instant scanning, batch-processing, QR code generator, and multi-language UI.",
    image: "/qr_scanner.png",
    href: "#", // Add detail page if available
  },
  {
    title: "Passion Pursuit",
    desc: "30-day guided activity planner for daily journaling and progress tracking.",
    image: "/passion_pursuit.png",
    href: "#", // Add detail page if available
  },
];

export default function Home() {
  // Hydration fix for animated cursor
  const [showCursor, setShowCursor] = useState(false);
  useEffect(() => setShowCursor(true), []);

  // Animated gradient for hero
  const [gradient, setGradient] = useState("from-purple-400 to-blue-500");
  useEffect(() => {
    const gradients = [
      "from-purple-400 to-blue-500",
      "from-pink-500 to-purple-500",
      "from-blue-400 to-green-400",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % gradients.length;
      setGradient(gradients[i]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white px-6 md:px-20 pt-28 pb-16 overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-bold text-white text-2xl tracking-tight">Vikash</span>
          <div className="flex gap-6 text-base text-gray-300 font-medium">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Animated Cursor Glow */}
      {showCursor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: 500,
            height: 500,
            pointerEvents: "none",
            zIndex: 0,
            borderRadius: "50%",
            background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
            filter: "blur(120px)",
            transform: "translate(-50%,-50%)",
          }}
        />
      )}

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/40 via-black to-black" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.18),transparent_60%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* HERO SECTION */}
        <section className="mb-24 flex flex-col items-center text-center">
          <motion.div variants={item} className="flex flex-col items-center">
            <div className="relative w-44 h-44 md:w-56 md:h-56 mb-8">
              <Image
                src="/profile_photo.jpg"
                alt="Vikash profile photo"
                fill
                className="object-cover rounded-full border-4 border-purple-500 shadow-2xl"
                priority
                sizes="(max-width: 768px) 176px, 224px"
              />
            </div>
            <motion.h1
              variants={item}
              className={`text-4xl md:text-7xl font-extrabold leading-tight mb-4`}
            >
              Building{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} transition-all duration-1000`}
              >
                Android Apps
              </span>{" "}
              that scale
            </motion.h1>
            <motion.p variants={item} className="text-gray-300 mt-2 max-w-xl text-lg md:text-xl">
              Kotlin • Jetpack Compose • Clean Architecture
            </motion.p>
            <motion.div variants={item} className="mt-8 flex gap-4 flex-wrap justify-center">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow hover:scale-105 transition"
                aria-label="Download Resume"
              >
                Resume
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 border border-white/20 rounded-full font-semibold hover:border-purple-500 transition"
              >
                View Work
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div variants={item} className="flex gap-6 mt-8 justify-center">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="group"
                >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    width={32}
                    height={32}
                    className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition"
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* SUMMARY */}
        <section className="mb-20 max-w-3xl mx-auto text-center">
          <motion.h2 variants={item} className="text-2xl font-semibold mb-4">
            Summary
          </motion.h2>
          <motion.p variants={item} className="text-gray-300 leading-relaxed text-lg">
            Android developer with <span className="text-purple-400 font-semibold">2+ years</span> of hands-on experience crafting performant, user-friendly apps using Kotlin, Jetpack Compose & Clean MVVM Architecture. Published <span className="text-purple-400 font-semibold">4 apps</span> on the Play Store with a focus on clean architecture, seamless UI, and robust API integration, <span className="text-purple-400 font-semibold">used by 1K+ users</span>.
          </motion.p>
        </section>

        {/* PROOF SECTION */}
        <section className="mb-32 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["1K+", "Users"],
            ["4", "Apps Published"],
            ["2+", "Years Experience"],
            ["100%", "Offline-first Apps"],
          ].map(([num, label]) => (
            <motion.div
              key={label}
              variants={item}
              className="p-4 border border-gray-800 rounded-xl bg-white/10 backdrop-blur-md shadow-lg"
            >
              <p className="text-2xl font-bold text-purple-400">{num}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </motion.div>
          ))}
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-32 max-w-4xl mx-auto">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-6">
            About Me
          </motion.h2>
          <motion.p variants={item} className="text-gray-300 leading-relaxed text-lg">
            I'm an Android developer focused on building real-world applications with clean architecture and performance in mind.
            I enjoy solving practical problems and turning ideas into polished mobile experiences.
            

            My work focuses on offline-first apps, smooth UI using Jetpack Compose, and scalable architecture using MVVM.
            I prioritize usability, performance, and long-term maintainability in every project.
          </motion.p>
        </section>

        {/* WHAT I DO */}
        <section className="mb-32">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-10">
            What I Do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Android Development",
                desc: "Build scalable apps using Kotlin, Jetpack Compose, and modern architecture.",
              },
              {
                title: "Clean Architecture",
                desc: "MVVM, modular structure, and maintainable codebases.",
              },
              {
                title: "User Experience",
                desc: "Smooth UI, animations, and real-world usability focus.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={item}
                className="p-6 rounded-2xl border border-gray-800 bg-white/10 backdrop-blur-md hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-300 mt-2 text-base">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* APP PORTFOLIO */}
        <section id="portfolio" className="mb-32 max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-8 text-center">
            App Portfolio
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {apps.map((app) => (
              <Link href={app.href} key={app.title} tabIndex={0} className="group">
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 60px #a855f7aa" }}
                  className="cursor-pointer p-6 rounded-2xl border border-gray-800 bg-white/10 backdrop-blur-md hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition flex flex-col items-center"
                >
                  <div className="w-full flex justify-center">
                    <Image
                      src={app.image}
                      alt={app.title}
                      width={340}
                      height={180}
                      className="rounded-xl mb-4 border border-gray-700 shadow"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-400 transition">{app.title}</h3>
                  <p className="text-gray-300 mt-2 text-center">{app.desc}</p>
                  <span className="mt-4 text-purple-400 font-medium group-hover:underline">View Case Study →</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* JOURNEY (Vertical Timeline with Animated Line & Resume Content) */}
        <section className="mb-32">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-10">
            Journey
          </motion.h2>
          <div className="relative max-w-2xl mx-auto pl-6">
            {/* Animated vertical line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-3 top-0 w-0.5 bg-gradient-to-b from-purple-500/60 to-blue-500/20"
              style={{ minHeight: "40px" }}
              aria-hidden="true"
            />
            {[
              [
                "2021",
                "Began programming journey with Java and basic Android apps. Built foundational skills in software development."
              ],
              [
                "2022",
                "Transitioned to Kotlin and Jetpack Compose. Started focusing on Clean MVVM Architecture and modern Android development."
              ],
              [
                "Mar 2023",
                <>
                  <span className="font-semibold text-white">Workout Timer: HIIT, Tabata</span> published on Play Store.<br />
                  <span className="text-gray-400">• 1K+ downloads, ad-free, customizable intervals, background running, and motivational features.</span>
                </>
              ],
              [
                "Aug 2025",
                <>
                  <span className="font-semibold text-white">QR Code & Barcode Scanner</span> released.<br />
                  <span className="text-gray-400">• Instant scanning, batch-processing, QR code generator, and multi-language UI.</span>
                </>
              ],
              [
                "Jun 2025",
                <>
                  <span className="font-semibold text-white">Passion Pursuit</span> launched.<br />
                  <span className="text-gray-400">• 30-day guided planner for daily journaling and progress tracking.</span>
                </>
              ],
              [
                "Aug 2025",
                "Start B.Tech in Information Technology from Amity University Gwalior, India."
              ],
              [
                "2026",
                "Open to collaborations, internships, and freelance projects. Focused on building robust, user-friendly Android apps."
              ],
            ].map(([year, text], idx) => (
              <motion.div
                key={year + idx}
                variants={item}
                className="relative flex items-start gap-4 mb-10 last:mb-0"
              >
                {/* Dot */}
                <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 border-4 border-black shadow" />
                {/* Year & Description */}
                <div className="pl-8">
                  <span className="text-purple-400 font-semibold">{year}</span>
                  <div className="text-gray-300">{text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECHNICAL EXPERTISE */}
        <section id="skills" className="mb-32 max-w-4xl mx-auto">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-8">
            Technical Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 text-base">
            <div>
              <h3 className="text-purple-400 font-semibold mb-2">Languages</h3>
              <p className="text-gray-300">Kotlin, Java</p>
              <h3 className="text-purple-400 font-semibold mt-4 mb-2">Architecture</h3>
              <p className="text-gray-300">MVVM, Clean Architecture, DI (Hilt)</p>
              <h3 className="text-purple-400 font-semibold mt-4 mb-2">UI/UX</h3>
              <p className="text-gray-300">Jetpack Compose, XML, Figma, Custom Views</p>
            </div>
            <div>
              <h3 className="text-purple-400 font-semibold mb-2">State Management</h3>
              <p className="text-gray-300">Kotlin Coroutines, Flow</p>
              <h3 className="text-purple-400 font-semibold mt-4 mb-2">Libraries</h3>
              <p className="text-gray-300">Retrofit, Room, Firebase, Navigation, Coil, Firebase</p>
              <h3 className="text-purple-400 font-semibold mt-4 mb-2">Tools</h3>
              <p className="text-gray-300">Git, GitHub, Gradle, Proguard, Android Studio</p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mb-32 max-w-2xl mx-auto">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-8">
            Education
          </motion.h2>
          <div className="bg-white/10 p-6 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-lg font-bold text-purple-400">Bachelor of Technology in Information Technology</h3>
            <p className="text-gray-300 mt-2">Amity University Gwalior, India</p>
            <p className="text-gray-400 mt-1">Aug 2025 - Present</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-20 text-center">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-4">
            Let’s Work Together
          </motion.h2>
          <motion.p variants={item} className="text-gray-400 mb-6 text-lg">
            I’m open to internships, freelance projects, and collaborations.
          </motion.p>
          <motion.div variants={item} className="flex justify-center gap-4">
            <a
              href="mailto:codingwithvikash@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
              aria-label="Send email"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-600 rounded-full font-semibold hover:border-purple-500 transition"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </motion.div>
          {/* Socials again for easy access */}
          <div className="flex gap-6 mt-8 justify-center">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="group"
              >
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={32}
                  height={32}
                  className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition"
                />
              </a>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
}