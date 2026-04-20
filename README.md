# Vikash Singh - Android Developer Portfolio 🚀

A modern, highly interactive, and fully responsive 3D developer portfolio website built to showcase my Android development journey, technical expertise, and published applications. 

## 🌟 Live Demo
**[View Live Portfolio](https://vikash-xi.vercel.app)**

## 🛠️ Tech Stack & Technologies Used

This portfolio is engineered for optimal performance and aesthetics using cutting-edge web technologies:

* **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) (Scroll-triggered reveals, micro-interactions, hover effects)
* **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & [@react-three/drei](https://github.com/pmndrs/drei) (Interactive 3D Hero Background)
* **Language:** TypeScript
* **Hosting:** Vercel

## 📱 Featured Apps
This portfolio highlights 4 major Android applications fully architected with **Kotlin, Clean MVVM Architecture, and Jetpack Compose**:
1. **Workout Timer: HIIT, Tabata** (1K+ Downloads) - `com.thefocust.intervaltimer`
2. **Task Track** - `com.lifeupgrade.tasktrack`
3. **QR Code & Barcode Scanner** - `com.vikashsinghapp.qrcodebarcodescanner`
4. **Passion Pursuit** - `com.vikashsinghapp.passionpursuit`

## 🚀 Running Locally

Want to run this portfolio locally? Follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vikash-Singh-Bhadoriya/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 🏗️ Project Structure
* `src/app/page.tsx`: The heart of the portfolio including the Hero, About, App Grid, Timeline, Skills, and Contact sections.
* `src/app/globals.css`: Contains crucial global styles, CSS variables, and the `scroll-padding-top` logic allowing smooth anchor jump behaviors without navigation bar overlay.
* `src/app/Hero3DBackground.tsx`: The `<Canvas>` module utilizing Three.js to render the rotating icosahedron wireframe directly behind the Hero tagline.
* `src/app/projects/`: Dedicated individual Next.js route case-studies for each Android app detailing the problem-solution scope, tech stack, and high-res screenshots.

## 📬 Contact
* **Email:** codingwithvikash@gmail.com
* **LinkedIn:** [Vikash Singh](https://www.linkedin.com/in/mrvikashsingh/)
* **GitHub:** [@Vikash-Singh-Bhadoriya](https://github.com/Vikash-Singh-Bhadoriya)

---
*© 2026 Vikash Singh — All rights reserved.*
