"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const Hero3DBackground = dynamic(() => import("./Hero3DBackground"), { ssr: false });

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
    icon: "/instagram.svg", // use available Instagram icon
  },
];

{/* JOURNEY (Alternate Timeline) */}

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
    image: "/qrcode_graphics.png",
    href: "/projects/qr-code-scanner",
  },
  {
    title: "Passion Pursuit",
    desc: "30-day guided activity planner for daily journaling and progress tracking.",
    image: "/passion_pursuit_graphics.png",
    href: "/projects/passion-pursuit", // Add detail page if available
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-purple-900/30 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <span className="font-extrabold text-2xl md:text-3xl tracking-tight text-white drop-shadow-lg select-none">
            Vikash
          </span>
          <div className="flex gap-2 md:gap-6 text-base font-semibold">
            {[
              { label: "About", href: "#about" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Skills", href: "#skills" },
              { label: "Education", href: "#education" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1 rounded-lg text-gray-200 hover:text-white hover:bg-purple-700/30 transition font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {item.label}
              </a>
            ))}
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
        {/* HERO SECTION with integrated 3D background */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] mb-24 overflow-hidden">
          <Hero3DBackground />
          <motion.div variants={item} className="relative z-10 flex flex-col items-center w-full">
            <div className="relative w-36 h-36 md:w-48 md:h-48 mb-6 md:mb-8">
              <Image
                src="/profile_photo.jpg"
                alt="Vikash profile photo"
                fill
                className="object-cover rounded-full border-4 border-purple-500 shadow-2xl"
                priority
                sizes="(max-width: 768px) 144px, 192px"
              />
            </div>
            <motion.h1
              variants={item}
              className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 md:mb-6 tracking-tight drop-shadow-lg"
              style={{lineHeight: 1.1}}
            >
              Building <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} transition-all duration-1000`}>Android Apps</span> that scale
            </motion.h1>
            <motion.p variants={item} className="text-gray-200 mt-2 mb-8 max-w-2xl text-lg md:text-2xl font-medium drop-shadow">
              Kotlin • Jetpack Compose • Clean Architecture
            </motion.p>
            <motion.div variants={item} className="flex gap-4 flex-wrap justify-center mb-8">
              <a
                href="/Resume.pdf"
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
            <motion.div variants={item} className="flex gap-6 mt-2 justify-center">
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

        <section className="mb-32">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-10 text-center">
            What I Do
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
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
                className="p-6 rounded-2xl border border-gray-800 bg-white/10 backdrop-blur-md hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition min-w-[260px] max-w-xs mx-auto md:mx-0"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-300 mt-2 text-base">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mb-32 max-w-6xl mx-auto">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-8 text-center">
            App Portfolio
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:px-12 max-w-5xl mx-auto">
            {apps.map((app) => {
              let github = "#";
              let playstore = "#";
              if (app.title.includes("Workout Timer")) {
                github = "https://github.com/Vikash-Singh-Bhadoriya/Workout-Timer";
                playstore = "https://play.google.com/store/apps/details?id=com.vikash.workouttimer";
              } else if (app.title.includes("Task Track")) {
                github = "https://github.com/Vikash-Singh-Bhadoriya/Task-Track";
                playstore = "https://play.google.com/store/apps/details?id=com.vikash.tasktrack";
              } else if (app.title.includes("QR Code")) {
                github = "https://github.com/Vikash-Singh-Bhadoriya/QR-Code-Scanner";
                playstore = "https://play.google.com/store/apps/details?id=com.vikash.qrscanner";
              } else if (app.title.includes("Passion Pursuit")) {
                github = "https://github.com/Vikash-Singh-Bhadoriya/Passion-Pursuit";
                playstore = "https://play.google.com/store/apps/details?id=com.vikash.passionpursuit";
              }
              return (
                <div key={app.title} className="w-full flex group">
                  <motion.div
                    variants={item}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 60px #a855f7aa" }}
                    className="relative p-6 rounded-2xl border border-gray-800 bg-white/10 backdrop-blur-md transition flex flex-col items-center w-full min-h-[500px]"
                  >
                    <Link href={app.href} className="absolute inset-0 z-0 rounded-2xl" aria-label={`View Case Study: ${app.title}`} />
                    
                    <div className="w-full flex justify-center relative z-10 pointer-events-none">
                      <Image
                        src={app.image}
                        alt={app.title}
                        width={340}
                        height={180}
                        className="rounded-xl mb-4 border border-gray-700 shadow object-cover h-[180px]"
                      />
                    </div>
                    <div className="relative z-10 flex flex-col flex-grow w-full pointer-events-none text-center mt-4">
                      <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-400 transition">{app.title}</h3>
                      <p className="text-gray-300 mt-3 text-sm md:text-base max-w-[90%] mx-auto">{app.desc}</p>
                    </div>

                    <div className="flex gap-6 mt-2 relative z-20">
                      <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition bg-black/40 p-2 rounded-full border border-gray-700 cursor-pointer">
                        <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                      </a>
                      <a href={playstore} target="_blank" rel="noopener noreferrer" aria-label="Play Store" className="hover:scale-110 transition bg-black/40 p-2 rounded-full border border-gray-700 cursor-pointer">
                        <Image src="/playstore.svg" alt="Play Store" width={24} height={24} />
                      </a>
                    </div>
                    
                    <div className="mt-6 relative z-20 pointer-events-none pb-2">
                      <span className="text-purple-400 font-medium group-hover:underline">View Case Study →</span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* JOURNEY (Alternating Timeline) */}
        <section className="mb-32">
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">
            My Journey
          </motion.h2>
          <div className="relative max-w-5xl mx-auto px-4 md:px-0">
            {/* Animated timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500/60 to-blue-500/20 -translate-x-1/2 z-0 rounded-full"
              style={{ minHeight: "40px", height: "100%" }}
              aria-hidden="true"
            />
            {[
              {
                id: "2021-start",
                year: "2021",
                title: "Started Programming",
                desc: "Began with Java and basic Android apps. Built foundational skills in software development.",
                icon: "💻"
              },
              {
                id: "2022-modern",
                year: "2022",
                title: "Modern Android Dev",
                desc: "Transitioned to Kotlin and Jetpack Compose. Focused on Clean MVVM Architecture.",
                icon: "📱"
              },
              {
                id: "2023-timer",
                year: "Mar 2023",
                title: "Workout Timer Published",
                desc: "1K+ downloads, ad-free, customizable intervals, background running, and motivational features.",
                icon: "⏱️"
              },
              {
                id: "2025-qr",
                year: "Aug 2025",
                title: "QR Code Scanner Released",
                desc: "Instant scanning, batch-processing, QR code generator, and multi-language UI.",
                icon: "🔎"
              },
              {
                id: "2025-passion",
                year: "Jun 2025",
                title: "Passion Pursuit Launched",
                desc: "30-day guided planner for daily journaling and progress tracking.",
                icon: "🔥"
              },
              {
                id: "2025-btech",
                year: "Aug 2025 (BTech)",
                title: "B.Tech Begins",
                desc: "Started B.Tech in Information Technology at Amity University Gwalior, India.",
                icon: "🎓"
              },
              {
                id: "2026-open",
                year: "2026",
                title: "Open to Opportunities",
                desc: "Open to collaborations, internships, and freelance projects. Focused on building robust, user-friendly Android apps.",
                icon: "🚀"
              },
            ].map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  variants={item}
                  className="relative flex flex-row items-center justify-between mb-16 last:mb-0 z-10 w-full"
                >
                  {/* Left Side */}
                  <div className={`w-5/12 flex ${isEven ? 'justify-end text-right' : 'justify-end items-center pr-4 md:pr-8'}`}>
                    {isEven ? (
                      <div className="bg-white/10 border border-purple-900/30 rounded-xl p-4 md:p-6 shadow-lg w-full max-w-md text-left inline-block hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition">
                        <h3 className="text-lg md:text-2xl font-bold text-purple-200 mb-2">{step.title}</h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <span className="text-sm md:text-xl text-purple-300 font-bold drop-shadow-md text-right">{step.year}</span>
                    )}
                  </div>
                  
                  {/* Center Icon */}
                  <div className="w-2/12 flex justify-center items-center relative z-20">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-4 border-purple-500 shadow-xl flex items-center justify-center hover:scale-110 transition cursor-default">
                      <span className="text-xl md:text-3xl drop-shadow-lg">{step.icon}</span>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className={`w-5/12 flex ${!isEven ? 'justify-start text-left' : 'justify-start items-center pl-4 md:pl-8'}`}>
                    {!isEven ? (
                      <div className="bg-white/10 border border-purple-900/30 rounded-xl p-4 md:p-6 shadow-lg w-full max-w-md text-left inline-block hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition">
                        <h3 className="text-lg md:text-2xl font-bold text-purple-200 mb-2">{step.title}</h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <span className="text-sm md:text-xl text-purple-300 font-bold drop-shadow-md text-left">{step.year}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* TECHNICAL EXPERTISE */}
        <section id="skills" className="mb-32 max-w-5xl mx-auto px-4 md:px-12">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-8 text-center">
            Technical Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 text-base bg-white/5 border border-purple-900/30 rounded-2xl p-8 shadow-lg">
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
        <section id="education" className="mb-32 max-w-5xl mx-auto px-4 md:px-12">
          <motion.h2 variants={item} className="text-3xl font-semibold mb-8 text-center">
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 md:p-8 rounded-xl border border-gray-800 shadow-lg text-left">
              <h3 className="text-lg md:text-xl font-bold text-purple-400">Bachelor of Technology in Information Technology</h3>
              <p className="text-gray-300 mt-2">Amity University Gwalior, India</p>
              <p className="text-gray-400 mt-1">Aug 2025 - Present</p>
            </div>
            <div className="bg-white/10 p-6 md:p-8 rounded-xl border border-gray-800 shadow-lg text-left">
              <h3 className="text-lg md:text-xl font-bold text-purple-400">Class 11, 12th (CBSE)</h3>
              <p className="text-gray-300 mt-2">Greenwood Public School</p>
              <p className="text-gray-400 mt-1">April 2023 - April 2025</p>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contact" className="py-20 mt-24 bg-gradient-to-t from-black/90 via-purple-900/10 to-transparent text-center border-t border-purple-900/20">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Let’s Work Together
          </motion.h2>
          <motion.p variants={item} className="text-gray-300 mb-8 text-lg md:text-xl">
            I’m open to internships, freelance projects, and collaborations.
          </motion.p>
          <motion.div variants={item} className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <a
              href="mailto:codingwithvikash@gmail.com"
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition shadow"
              aria-label="Send email"
            >
              Contact Me
            </a>
            <a
              href="/Resume.pdf"
              download
              className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-purple-500 transition shadow"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </motion.div>
          <div className="flex gap-6 mt-6 justify-center mb-8">
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
          <div className="text-gray-500 text-sm mt-8" suppressHydrationWarning>
            {`© ${new Date().getFullYear()} Vikash Singh — All rights reserved.`}
          </div>
        </footer>
      </motion.div>
    </main>
  );
}