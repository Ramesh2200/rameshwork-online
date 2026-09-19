import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Send,
  ChevronDown,
  CheckCircle2,
  Zap,
  Sun,
  Moon,
  Server,
  Database as DatabaseIcon,
  Code2,
  Award,
  Calendar,
  Sparkles,
} from "lucide-react";
import profilePhoto from "@/assets/ramesh-hero-new.jpg";
import projectSmartParkingImage from "@/assets/project-smart-parking.jpg";
import projectFoodImage from "@/assets/project-food-delivery.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const resumeUrl = "/Ramesh_Resume.pdf";
const handleResumeDownload = async (e: React.MouseEvent) => {
  e.preventDefault();
  try {
    const res = await fetch(resumeUrl);
    if (!res.ok) throw new Error("Resume fetch failed");
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ramesh_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 1500);
  } catch {
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.download = "Ramesh_Resume.pdf";
    a.click();
  }
};
const CONTACT_EMAIL = "ballariramesh0825@gmail.com";
const CONTACT_PHONE = "+91 7672047816";
const EMAILJS_SERVICE_ID = "service_q9xlcre";
const EMAILJS_TEMPLATE_ID = "template_7pt68gf";
const EMAILJS_PUBLIC_KEY = "aGw6ujle7HSAwi-2G";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 30 });

  // Dark & Light Theme State
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio_theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  // Touch & Click Sparkle Ripple Animations
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const handlePointerDown = (e: React.PointerEvent) => {
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      let current = "home";
      for (const s of NAV) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    const onMouse = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div
      onPointerDown={handlePointerDown}
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground"
    >
      {/* Touch & Click Particle Burst Effect */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ left: r.x - 20, top: r.y - 20 }}
            className="absolute h-10 w-10 rounded-full border-2 border-secondary bg-secondary/20 shadow-lg shadow-secondary/50"
          />
        ))}
      </div>

      {/* Mouse Follow Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-60 transition-[background] duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mouse.x}% ${mouse.y}%, oklch(0.62 0.28 295 / 0.15), transparent 65%)`,
        }}
      />

      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left"
        style={{ scaleX, background: "var(--gradient-primary)" }}
      />

      <Nav active={active} theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />

      {showTop && (
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full glass glow-purple transition"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
      <Toaster theme={theme === "dark" ? "dark" : "light"} position="top-right" />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav({
  active,
  theme,
  setTheme,
}: {
  active: string;
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-3 shadow-lg">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold group">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl p-[1px]" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}>
            <div className="grid h-full w-full place-items-center rounded-[11px] bg-background/90 font-mono text-xs font-extrabold text-secondary transition duration-300 group-hover:scale-105">
              &lt;RK/&gt;
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gradient font-display text-lg font-extrabold tracking-tight">Ramesh.K</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Java Full Stack Dev</span>
          </div>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          <a
            href="https://smart-parking-system-murex.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mr-3 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-400 hover:border-emerald-400 transition"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Smart Parking Telemetry Live</span>
          </a>
          <nav className="flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  active === n.id
                    ? "text-foreground bg-secondary/20 text-secondary border border-secondary/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="grid h-9 w-9 place-items-center rounded-xl glass text-foreground transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-400" />}
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden rounded-xl px-4 py-2 text-xs font-semibold text-primary-foreground transition md:inline-flex"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
          >
            Hire Me
          </motion.a>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg glass xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl glass p-3 xl:hidden">
          <div className="grid grid-cols-2 gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO WITH BEAUTIFUL ANIMATIONS ---------------- */
function Hero() {
  const skillsList = [
    "Java", "Spring Boot", "React.js", "REST APIs", "JDBC", "Hibernate", "MySQL", "MVC Architecture", "HTML5 & CSS3"
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.25fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" style={{ boxShadow: "0 0 10px #34d399" }} />
            <span className="font-semibold text-foreground">Java Full-Stack Software Engineer</span>
          </div>

          <p className="mb-2 font-mono text-sm text-secondary">👋 Welcome, I'm</p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            RAMESH <span className="text-gradient">K</span>
          </h1>

          <div className="mt-4 h-12 font-mono text-lg text-muted-foreground sm:text-xl md:text-2xl">
            <TypeAnimation
              sequence={[
                "Java Full-Stack Software Engineer", 1800,
                "Smart Vehicle Parking System Architect", 1800,
                "Spring Boot & RESTful APIs Specialist", 1800,
                "React.js & Modern Frontend Developer", 1800,
                "MySQL, JDBC & Hibernate Engineer", 1800,
                "B.E. Computer Science Graduate", 1800,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Computer Science Engineering graduate with strong expertise in <span className="text-foreground font-semibold">Java, Spring Boot, React.js, REST APIs, JDBC, Hibernate, and MySQL</span>. Proficient in developing scalable, responsive, and maintainable web applications using modern frontend and backend architectures.
          </p>

          {/* Clean Interactive Skill Badges Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {skillsList.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: idx * 0.04 }}
                className="rounded-lg border border-border/80 bg-muted/40 px-3 py-1 font-mono text-xs text-secondary hover:border-secondary transition cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href="https://smart-parking-system-murex.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
            >
              <Zap className="h-4 w-4" /> Launch Smart Parking Live
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href={resumeUrl}
              download="Ramesh_Resume.pdf"
              onClick={handleResumeDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:border-secondary cursor-pointer"
            >
              <Download className="h-4 w-4 text-emerald-400" /> Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition"
            >
              <Mail className="h-4 w-4" /> Get in Touch
            </motion.a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Socials />
          </div>
        </motion.div>

        {/* Animated Hero Profile Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.04, rotate: 1 }}
          className="relative mx-auto cursor-pointer"
        >
          {/* Pulsing Ambient Glow Halo */}
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, var(--neon-purple) 0%, var(--neon-cyan) 60%, transparent 80%)",
              filter: "blur(18px)",
            }}
          />

          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
            <div className="gradient-border h-full w-full rounded-full p-1.5 shadow-2xl transition duration-500 hover:shadow-purple-500/30">
              <div className="gradient-border-mask rounded-full" />
              <div className="h-full w-full overflow-hidden rounded-full border-2 border-border/80 bg-muted/20">
                <img
                  src={profilePhoto}
                  alt="Ramesh K portrait"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground" aria-label="Scroll down">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </a>
    </section>
  );
}

function Socials() {
  const items = [
    { href: "https://github.com/Ramesh2200", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ramesh-k-71243026/", icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${CONTACT_EMAIL}`, icon: Mail, label: "Email" },
    { href: `tel:${CONTACT_PHONE.replace(/\s+/g, '')}`, icon: Phone, label: "Phone" },
  ];
  return (
    <div className="flex gap-2">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel={it.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={it.label}
          className="grid h-10 w-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:text-secondary"
        >
          <it.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

/* ---------------- Section Header ---------------- */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
        {title.split(" ").map((w, i, arr) => (
          <span key={i} className={i === arr.length - 1 ? "text-gradient" : ""}>
            {w}{" "}
          </span>
        ))}
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { k: "Smart Parking", v: "Flagship Production Platform" },
    { k: "Java & Spring Boot", v: "Enterprise REST & MVC Services" },
    { k: "React.js & CSS3", v: "High-Performance Modern UI" },
    { k: "MySQL & JDBC", v: "Relational Database Architecture" },
  ];
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About Me" title="Java Full-Stack Software Engineer" />
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="gradient-border p-8">
              <div className="gradient-border-mask" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                Computer Science Engineering graduate with strong expertise in <span className="text-foreground font-semibold">Java, Spring Boot, React.js, REST APIs, JDBC, Hibernate, and MySQL</span>. Proficient in developing scalable, responsive, and maintainable web applications using modern frontend and backend technologies.
              </p>
              <p className="mt-4 text-muted-foreground">
                Strong understanding of <span className="text-foreground font-medium">Object-Oriented Programming, MVC Architecture, database design, CRUD operations, and API integration</span>. Skilled in writing clean, reliable code with a focus on performance, security, and user experience. A quick learner with strong problem-solving, teamwork, and software engineering capabilities.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
                {["Java 17/21", "Spring Boot", "React.js", "RESTful APIs", "JDBC", "Hibernate", "MySQL", "PostgreSQL", "Java Servlets & JSP", "HTML5 & CSS3"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-muted/40 px-3.5 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid h-full grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.k} className="gradient-border flex flex-col justify-center p-5">
                  <div className="gradient-border-mask" />
                  <div className="font-display text-xl font-bold text-gradient">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  const groups = [
    {
      title: "Programming & Backend",
      icon: Server,
      items: [
        { name: "Java (Core & Advanced)", level: 95 },
        { name: "Spring Boot & RESTful APIs", level: 92 },
        { name: "Hibernate ORM & JDBC", level: 90 },
        { name: "Java Servlets & JSP", level: 88 },
        { name: "Python", level: 85 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Layers,
      items: [
        { name: "React.js Component Architecture", level: 92 },
        { name: "HTML5 Semantic UI", level: 95 },
        { name: "CSS3 & Modern Responsive Design", level: 92 },
        { name: "JavaScript (ES6+)", level: 90 },
      ],
    },
    {
      title: "Databases & Core Architecture",
      icon: DatabaseIcon,
      items: [
        { name: "MySQL & Relational Schema Design", level: 92 },
        { name: "PostgreSQL & SQLite", level: 86 },
        { name: "MVC Architecture & CRUD Operations", level: 94 },
        { name: "Object-Oriented Programming (OOP)", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Core Competencies"
          title="Skills & Technical Expertise"
          sub="Expertise across Java, Spring Boot, React.js, RESTful APIs, JDBC, Hibernate, and MySQL."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="gradient-border h-full p-6 transition hover:-translate-y-1">
                <div className="gradient-border-mask" />
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl glass">
                    <g.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{g.title}</h3>
                </div>
                <div className="space-y-4">
                  {g.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-secondary">{s.name}</span>
                        <span className="font-mono text-secondary">{s.level}%</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: "var(--gradient-primary)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED PROJECTS ---------------- */
function Projects() {
  const projectsList = [
    {
      id: "parking-project",
      title: "Smart Vehicle Parking Management System",
      duration: "Jul – Nov 2026",
      badge: "Flagship Production Project • Vercel",
      image: projectSmartParkingImage,
      desc: "Engineered a full-stack commercial smart parking management platform using React.js, Java, Spring Boot, Servlets, JSP, JDBC, and SQL, enabling automated parking-slot booking, vehicle entry/exit tracking, and centralized parking operations.",
      bullets: [
        "Architected RESTful APIs and MVC-based services with SQL integration for user, vehicle, slot, booking, and transaction management, reducing manual administrative workflows.",
        "Developed responsive user and admin dashboards with secure authentication, real-time slot availability, automated fee calculation, and centralized management, improving parking accessibility and operational efficiency.",
        "Integrated Razorpay payment gateway for instant checkout, optical ZXing cryptographic QR gate passes, and automated commercial A4 PDF tax receipt invoicing.",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Java 17", "Spring Boot", "RESTful APIs", "MVC", "SQL", "JDBC", "Servlets & JSP", "Razorpay", "ZXing QR", "Vercel"],
      demoUrl: "https://smart-parking-system-murex.vercel.app/",
      repoUrl: "https://github.com/Ramesh2200/smart-parking-system",
    },
    {
      id: "ecommerce-project",
      title: "E-Commerce Website",
      duration: "Mar – Jun 2026",
      badge: "Full-Stack Web Platform",
      image: projectFoodImage,
      desc: "Engineered a full-stack E-Commerce platform using React.js, Spring Boot, Hibernate, REST APIs, and MySQL, implementing authentication, product discovery, cart management, checkout, and order placement workflows.",
      bullets: [
        "Developed scalable RESTful services and relational database integration for users, products, categories, carts, orders, and order items, implementing robust CRUD operations.",
        "Enhanced the shopping experience through product search, filtering, responsive interfaces, and admin management, and successfully deployed the application on Vercel.",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Spring Boot", "Hibernate", "JDBC", "MySQL", "REST APIs"],
      demoUrl: "https://ecommerce-gmail-auth.vercel.app",
      repoUrl: "https://github.com/Ramesh2200",
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Full-Stack Production Platforms"
          sub="Enterprise applications engineered using Java, Spring Boot, React.js, RESTful APIs, and Relational Databases."
        />

        <div className="space-y-12">
          {projectsList.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <article className="group gradient-border overflow-hidden">
                <div className="gradient-border-mask" />
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 p-6 sm:p-8 items-center">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/80">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 rounded-full glass px-3 py-1 font-mono text-[11px] font-semibold text-emerald-400 border border-emerald-500/30">
                      {p.badge}
                    </div>
                    <div className="absolute bottom-3 left-3 rounded-md glass px-2.5 py-1 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-secondary" />
                      <span>{p.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-secondary font-semibold">0{i + 1} // FEATURED</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                    <div className="mt-4 space-y-2">
                      {p.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-md border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-[11px] text-secondary">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-border/40">
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-primary-foreground"
                        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
                      >
                        <Zap className="h-4 w-4" /> Live Website
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-xs font-semibold hover:border-secondary transition"
                      >
                        <Github className="h-4 w-4" /> View Source
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-card/20 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Work History"
          title="Professional Experience"
          sub="Internship and industrial full-stack development experience."
        />

        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="gradient-border p-8">
              <div className="gradient-border-mask" />
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-secondary mb-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>Software Developer Intern</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold">Tap Academy</h3>
                  <p className="text-sm text-muted-foreground">Java Full-Stack Development</p>
                </div>
                <div className="rounded-full glass px-4 py-1.5 font-mono text-xs text-muted-foreground border border-border">
                  2026
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Applied Java, Spring Boot, React.js, REST APIs, JDBC, and MySQL to develop and integrate full-stack application components.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Implemented MVC architecture, CRUD operations, database connectivity, and API integration while following modular and maintainable development practices.</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {["Java", "Spring Boot", "React.js", "REST APIs", "JDBC", "MySQL", "MVC Architecture", "CRUD Operations"].map((t) => (
                  <span key={t} className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  const educationList = [
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Yenepoya Institute of Technology, Mangalore, Karnataka",
      period: "2022 – 2026",
      score: "CGPA: 7.9",
      icon: GraduationCap,
      highlight: true,
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Bellary Independent PU College, Bellary, Karnataka",
      period: "2020 – 2022",
      score: "66%",
      icon: Award,
      highlight: false,
    },
    {
      degree: "Secondary School Leaving Certificate (S.S.L.C)",
      institution: "Morarji Desai Residential School, Bellary, Karnataka",
      period: "2016 – 2020",
      score: "86%",
      icon: Award,
      highlight: false,
    },
  ];

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Academic Background"
          title="Education & Credentials"
          sub="Strong technical foundations in Computer Science Engineering."
        />

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {educationList.map((edu, idx) => (
            <Reveal key={edu.degree} delay={idx * 0.1}>
              <div className="gradient-border h-full p-6 flex flex-col justify-between">
                <div className="gradient-border-mask" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl glass">
                      <edu.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-mono text-xs rounded-full glass px-3 py-1 text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold">{edu.degree}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{edu.institution}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Grade / Score</span>
                  <span className="font-mono text-sm font-bold text-gradient">{edu.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);

  const cards = [
    { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s+/g, '')}` },
    { icon: MapPin, label: "Location", value: "Bengaluru / Bellary, Karnataka, India" },
    { icon: Linkedin, label: "LinkedIn", value: "ramesh-k-71243026", href: "https://www.linkedin.com/in/ramesh-k-71243026/" },
    { icon: Github, label: "GitHub", value: "Ramesh2200", href: "https://github.com/Ramesh2200" },
  ];

  return (
    <section id="contact" className="relative py-24 bg-card/10 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact & Connect"
          title="Let's Build Impactful Software"
          sub="Available for Java Full-Stack, Spring Boot, React.js, and Software Engineering opportunities."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="grid gap-3">
              {cards.map((c) => {
                const Inner = (
                  <div className="group flex items-center gap-4 gradient-border p-4 transition hover:-translate-y-0.5">
                    <div className="gradient-border-mask" />
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl glass">
                      <c.icon className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="truncate text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noreferrer" : undefined}>
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const fromName = String(formData.get("from_name") ?? "").trim();
                const replyTo = String(formData.get("reply_to") ?? "").trim();
                const subject = String(formData.get("subject") ?? "").trim();
                const message = String(formData.get("message") ?? "").trim();
                setSending(true);

                try {
                  const emailjs = (await import("@emailjs/browser")).default;
                  await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                      from_name: fromName,
                      name: fromName,
                      reply_to: replyTo,
                      email: replyTo,
                      user_email: replyTo,
                      from_email: replyTo,
                      to_name: "Ramesh",
                      to_email: CONTACT_EMAIL,
                      subject,
                      title: subject,
                      message,
                      sent_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                    },
                    { publicKey: EMAILJS_PUBLIC_KEY }
                  );

                  toast.success("Message sent successfully! Ramesh will get back to you soon.");
                  form.reset();
                } catch (err) {
                  toast.error("Failed to send message via form. Please email directly at ballariramesh0825@gmail.com");
                } finally {
                  setSending(false);
                }
              }}
              className="gradient-border p-6"
            >
              <div className="gradient-border-mask" />
              <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                <span className="font-display text-base font-semibold">Send a Direct Message</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Your Name</label>
                  <Input name="from_name" required placeholder="Recruiter / Collaborator" className="bg-muted/40" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Your Email</label>
                  <Input name="reply_to" required type="email" placeholder="recruiter@company.com" className="bg-muted/40" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-xs text-muted-foreground">Subject</label>
                <Input name="subject" required placeholder="Full-Stack Engineer Opportunity" className="bg-muted/40" />
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-xs text-muted-foreground">Message</label>
                <Textarea name="message" required rows={4} placeholder="Hi Ramesh, we are impressed by your Smart Parking System and Java background..." className="bg-muted/40" />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="mt-6 h-11 w-full text-primary-foreground font-semibold"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
              >
                <Send className="mr-2 h-4 w-4" /> {sending ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold group">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl p-[1px]" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}>
              <div className="grid h-full w-full place-items-center rounded-[11px] bg-background/90 font-mono text-xs font-extrabold text-secondary transition duration-300 group-hover:scale-105">
                &lt;RK/&gt;
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gradient font-display text-lg font-extrabold tracking-tight">Ramesh.K</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Java Full Stack Dev</span>
            </div>
          </a>
          <p className="mt-3 max-w-sm text-xs text-muted-foreground leading-relaxed">
            Computer Science Engineering graduate specializing in Java, Spring Boot, React.js, REST APIs, JDBC, Hibernate, and MySQL.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-secondary">Navigation</h4>
          <ul className="grid grid-cols-2 gap-1 text-xs">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-secondary">Connect & Links</h4>
          <Socials />
          <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
            <a
              href="https://smart-parking-system-murex.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1"
            >
              <Zap className="h-3 w-3" /> Smart Parking Platform (Live)
            </a>
            <a
              href={resumeUrl}
              download="Ramesh_Resume.pdf"
              onClick={handleResumeDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1 cursor-pointer"
            >
              <Download className="h-3 w-3" /> Download Resume PDF
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 text-center text-xs text-muted-foreground border-t border-border/40 pt-6">
        © {new Date().getFullYear()} Ramesh K. All rights reserved. Built with React.js, Tailwind CSS & Java Full-Stack Architecture.
      </div>
    </footer>
  );
}
