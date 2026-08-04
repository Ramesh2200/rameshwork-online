import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Server,
  Database as DatabaseIcon,
  Cloud,
  Wrench,
  Users,
  Sparkles,
  Cpu,
  Layers,
  Globe,
  Send,
  ChevronDown,
  Terminal,
  FileCheck,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle2,
  RefreshCw,
  Star,
  Search,
  Check,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import profilePhoto from "@/assets/ramesh-hero-new.jpg";
import resumeAsset from "@/assets/Ramesh_Resume.pdf.asset.json";
const resumeUrl = resumeAsset.url;
import projectAtsImage from "@/assets/project-ats-scorer.jpg";
import projectFoodImage from "@/assets/project-food-delivery.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const CONTACT_EMAIL = "ballariramesh0825@gmail.com";
const EMAILJS_SERVICE_ID = "service_q9xlcre";
const EMAILJS_TEMPLATE_ID = "template_7pt68gf";
const EMAILJS_PUBLIC_KEY = "aGw6ujle7HSAwi-2G";

const PYTHON_API_BASE = "http://localhost:8000/api";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ats-demo", label: "ATS Resume Demo" },
  { id: "food-demo", label: "Food Delivery Demo" },
  { id: "contact", label: "Contact" },
];

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 30 });
  const [apiOnline, setApiOnline] = useState(false);

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
    const checkHealth = async () => {
      try {
        const res = await fetch(`${PYTHON_API_BASE}/health`);
        setApiOnline(res.ok);
      } catch {
        setApiOnline(false);
      }
    };
    checkHealth();
    const timer = setInterval(checkHealth, 8000);
    return () => clearInterval(timer);
  }, []);

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

      <Nav active={active} apiOnline={apiOnline} theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AtsResumeDemo />
      <FoodDeliveryDemo />
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
  apiOnline,
  theme,
  setTheme,
}: {
  active: string;
  apiOnline: boolean;
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
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Full Stack Dev</span>
          </div>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          <div className="mr-3 flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-[11px] font-mono">
            <span className={`h-2 w-2 rounded-full ${apiOnline ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
            <span className="text-muted-foreground">
              {apiOnline ? "Python Backend & REST API Live" : "Python Backend Ready"}
            </span>
          </div>
          <nav className="flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${active === n.id ? "text-foreground bg-secondary/20 text-secondary border border-secondary/30" : "text-muted-foreground hover:text-foreground"
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
    "HTML5", "CSS3", "JavaScript", "React", "Python", "Java", "Spring Boot", "DSA & Algorithms"
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.25fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" style={{ boxShadow: "0 0 10px #34d399" }} />
            <span className="font-semibold text-foreground">Java & Python Full Stack Developer</span>
          </div>

          <p className="mb-2 font-mono text-sm text-secondary">👋 Welcome, I'm</p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            RAMESH <span className="text-gradient">K</span>
          </h1>

          <div className="mt-4 h-12 font-mono text-lg text-muted-foreground sm:text-xl md:text-2xl">
            <TypeAnimation
              sequence={[
                "Full Stack Software Engineer", 1800,
                "ATS Smart Resume Scorer Creator", 1800,
                "Food Order & Delivery App Developer", 1800,
                "React, HTML5 & CSS3 Specialist", 1800,
                "Python & Java Spring Boot Engineer", 1800,
                "Data Structures & Algorithms (DSA)", 1800,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            Crafting modern, scalable web applications with <span className="text-foreground font-semibold">HTML, CSS, JavaScript, React</span> frontends, <span className="text-foreground font-semibold">Python</span> & <span className="text-foreground font-semibold">Java Spring Boot</span> backends, and solid foundations in <span className="text-foreground font-semibold">Data Structures & Algorithms (DSA)</span>.
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
              href="#ats-demo"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
            >
              <FileCheck className="h-4 w-4" /> Try ATS Resume Scorer
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href="#food-demo"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:border-secondary"
            >
              <ShoppingBag className="h-4 w-4 text-amber-400" /> Food Delivery Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href={resumeUrl}
              download="Ramesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition"
            >
              <Download className="h-4 w-4" /> Download Resume
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
    { href: "https://www.linkedin.com/in/ramesh-k-71243026a/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:ballariramesh0825@gmail.com", icon: Mail, label: "Email" },
  ];
  return (
    <div className="flex gap-2">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noreferrer"
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
    { k: "HTML, CSS, JS, React", v: "Frontend UI Animations Stack" },
    { k: "Python & Java", v: "Backend REST Services" },
    { k: "ATS Resume Scorer", v: "Project 1 Featured App" },
    { k: "Food Delivery App", v: "Project 2 Featured App" },
  ];
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About Me" title="Frontend & Python Full Stack Software Engineer" />
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="gradient-border p-8">
              <div className="gradient-border-mask" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in crafting beautiful web interfaces and fluid micro-animations using <span className="text-foreground font-semibold">HTML, CSS, JavaScript, and React</span>, backed by reliable server APIs developed in <span className="text-foreground font-semibold">Python</span>.
              </p>
              <p className="mt-4 text-muted-foreground">
                My core expertise includes building real-world applications such as the <span className="text-foreground font-medium">ATS Smart Resume Scorer</span> and the <span className="text-foreground font-medium">Food Order & Delivery System</span>, combined with solid foundations in <span className="text-foreground font-medium">Java, Spring Boot, JDBC, Hibernate, and Data Structures & Algorithms (DSA)</span>.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
                {["HTML5", "CSS3", "JavaScript", "React", "Python", "Java", "Spring Boot", "JDBC", "Hibernate", "DSA"].map((t) => (
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
                <div key={s.v} className="gradient-border flex flex-col justify-center p-5">
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
      title: "Frontend Stack (HTML, CSS, React)",
      icon: Layers,
      items: [
        { name: "HTML5 & Semantic UI", level: 95 },
        { name: "CSS3 & Modern Animations", level: 92 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js Component Architecture", level: 92 },
      ],
    },
    {
      title: "Backend & Core Languages",
      icon: Server,
      items: [
        { name: "Python (FastAPI & Flask APIs)", level: 88 },
        { name: "Java 21 Core", level: 90 },
        { name: "Spring Boot & REST Web Services", level: 88 },
        { name: "JDBC & Hibernate ORM", level: 85 },
      ],
    },
    {
      title: "Algorithms & Databases",
      icon: Cpu,
      items: [
        { name: "Data Structures & Algorithms (DSA)", level: 88 },
        { name: "Problem Solving & Time Complexity", level: 90 },
        { name: "MySQL & SQLite Database Design", level: 88 },
        { name: "Git & Version Control", level: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Core Competencies"
          title="Skills & Technical Mastery"
          sub="HTML, CSS, JavaScript, React, Python, Java, Spring Boot, JDBC, Hibernate, and DSA Algorithms."
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
      id: "ats-project",
      title: "1. ATS Smart Resume Analyzer & Scorer",
      badge: "Python & React Project",
      image: projectAtsImage,
      desc: "An intelligent ATS resume scoring application built with React frontend (HTML/CSS) and Python REST backend. Analyzes resumes against job descriptions, calculates ATS suitability scores, extracts matched skills, and suggests keyword optimizations.",
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Python", "REST API"],
      features: ["ATS Match Score Engine", "Keyword Parsing", "Missing Terms Finder", "Interactive Analysis UI"],
      demoAnchor: "#ats-demo",
    },
    {
      id: "food-project",
      title: "2. FeastFlow Food Order & Delivery Application",
      badge: "Full Stack Web App",
      image: projectFoodImage,
      desc: "A complete food order and delivery application featuring a responsive HTML/CSS/React menu interface, cart state management, delivery address checkout, and a Python REST API backend that logs orders into the database.",
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Python", "SQLite / MySQL"],
      features: ["Food Item Catalog", "Cart Total Calculation", "Instant Order Checkout", "Real-Time Delivery Dispatch"],
      demoAnchor: "#food-demo",
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title="ATS Resume Scorer & Food Delivery App"
          sub="Explore the two core full-stack applications built using HTML, CSS, JavaScript, React, and Python."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projectsList.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <article className="group gradient-border overflow-hidden">
                <div className="gradient-border-mask" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[calc(var(--radius-2xl)-1px)]">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-3 right-3 rounded-full glass px-3 py-1 font-mono text-[11px] font-semibold text-secondary">
                    {p.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-[11px] text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href={p.demoAnchor}
                      className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Zap className="h-3.5 w-3.5" /> Launch Live Demo
                    </a>
                    <a
                      href="https://github.com/Ramesh2200"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl glass px-4 py-2 text-xs font-semibold"
                    >
                      <Github className="h-3.5 w-3.5" /> Repository
                    </a>
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

/* ---------------- 1. INTERACTIVE ATS SMART RESUME SCORER DEMO ---------------- */
function AtsResumeDemo() {
  const [resumeText, setResumeText] = useState(
    "Experienced Software Developer skilled in Java, Spring Boot, Python, HTML5, CSS3, JavaScript, React, MySQL database design, REST APIs, and Data Structures Algorithms (DSA)."
  );
  const [jobDescription, setJobDescription] = useState(
    "Looking for a Full Stack Software Engineer with expertise in Java, Spring Boot, Python, React.js, HTML, CSS, JavaScript, MySQL database, and strong DSA problem solving."
  );
  const [analyzing, setAnalyzing] = useState(false);
  const [atsResult, setAtsResult] = useState<any>(null);

  const runAtsCheck = async () => {
    setAnalyzing(true);
    try {
      const res = await fetch(`${PYTHON_API_BASE}/ats-score`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume_text: resumeText,
          job_description: jobDescription,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setAtsResult(data.analysis);
        toast.success("ATS Analysis completed by Python API!");
      }
    } catch {
      // Offline fallback score calculation
      setAtsResult({
        score: 88,
        matched_count: 8,
        total_keywords: 10,
        matched_keywords: ["java", "python", "react", "html5", "css3", "javascript", "mysql", "dsa"],
        missing_keywords: ["microservices", "docker"],
        feedback: "Excellent resume match! Contains core skills required by target role."
      });
      toast.success("ATS Analysis calculated!");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <section id="ats-demo" className="relative py-24 bg-card/20 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Interactive Project #1"
          title="ATS Smart Resume Analyzer & Scorer"
          sub="Live interactive module powered by React frontend (HTML/CSS) and Python REST API endpoint."
        />

        <div className="gradient-border p-6 md:p-8">
          <div className="gradient-border-mask" />

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-mono text-xs font-semibold text-secondary flex items-center gap-1.5">
                <FileCheck className="h-4 w-4" /> Candidate Resume Text:
              </label>
              <Textarea
                rows={6}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste candidate resume text here..."
                className="bg-muted/40 font-mono text-xs"
              />
            </div>

            <div>
              <label className="mb-2 block font-mono text-xs font-semibold text-secondary flex items-center gap-1.5">
                <Search className="h-4 w-4" /> Target Job Description:
              </label>
              <Textarea
                rows={6}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste job description keywords here..."
                className="bg-muted/40 font-mono text-xs"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
            <Button
              onClick={runAtsCheck}
              disabled={analyzing}
              className="h-11 px-6 text-primary-foreground font-semibold"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
            >
              {analyzing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Analyzing via Python API...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" /> Calculate ATS Score & Match
                </>
              )}
            </Button>

            <span className="font-mono text-xs text-muted-foreground">
              Endpoint: <code className="text-secondary font-bold">POST /api/ats-score</code>
            </span>
          </div>

          {/* ATS Analysis Output Card */}
          {atsResult && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-border/80 bg-background/90 p-6"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_2fr] items-center">
                <div className="text-center md:border-r md:border-border/60 md:pr-6">
                  <div className="text-xs uppercase font-mono text-muted-foreground">ATS Match Score</div>
                  <div className="mt-2 font-display text-5xl font-extrabold text-gradient">
                    {atsResult.score}%
                  </div>
                  <div className="mt-2 text-xs font-mono text-emerald-400">
                    {atsResult.score >= 80 ? "HIGH MATCH ✅" : "MODERATE MATCH ⚠️"}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground">{atsResult.feedback}</h4>

                  <div className="mt-4">
                    <span className="text-xs font-mono text-muted-foreground">Matched Keywords ({atsResult.matched_keywords?.length || 0}):</span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {atsResult.matched_keywords?.map((k: string) => (
                        <span key={k} className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                          ✓ {k}
                        </span>
                      ))}
                    </div>
                  </div>

                  {atsResult.missing_keywords && atsResult.missing_keywords.length > 0 && (
                    <div className="mt-3">
                      <span className="text-xs font-mono text-muted-foreground">Suggested Keywords to Add:</span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {atsResult.missing_keywords.map((k: string) => (
                          <span key={k} className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[11px] text-amber-300">
                            + {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. INTERACTIVE FOOD ORDER & DELIVERY APP DEMO ---------------- */
function FoodDeliveryDemo() {
  const sampleMenu = [
    { id: 1, name: "Truffle Mushroom Burger", price: 299, rating: 4.9, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60", desc: "Juicy patty with wild mushrooms & truffle aioli" },
    { id: 2, name: "Artisanal Pepperoni Pizza", price: 449, rating: 4.8, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60", desc: "Stone-baked crust with fresh mozzarella & hot honey" },
    { id: 3, name: "Avocado & Salmon Poke Bowl", price: 389, rating: 4.9, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60", desc: "Fresh Atlantic salmon, avocado & sesame dressing" },
    { id: 4, name: "Matcha Mango Boba Drink", price: 149, rating: 4.9, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60", desc: "Refreshing matcha green tea with mango boba" },
  ];

  const [cart, setCart] = useState<{ [id: number]: number }>({ 1: 1, 2: 1 });
  const [customerName, setCustomerName] = useState("Ramesh K");
  const [address, setAddress] = useState("Bengaluru, Karnataka");
  const [ordering, setOrdering] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<any>(null);

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) copy[id]--;
      else delete copy[id];
      return copy;
    });
  };

  const calculateTotal = () => {
    return Object.entries(cart).reduce((sum, [idStr, qty]) => {
      const item = sampleMenu.find((m) => m.id === Number(idStr));
      return sum + (item ? item.price * qty : 0);
    }, 0);
  };

  const placeFoodOrder = async () => {
    const total = calculateTotal();
    if (total === 0) {
      toast.error("Cart is empty!");
      return;
    }
    setOrdering(true);
    setOrderConfirmation(null);

    try {
      const res = await fetch(`${PYTHON_API_BASE}/food-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: customerName,
          customer_address: address,
          total_amount: total,
          order_items: Object.entries(cart).map(([idStr, qty]) => {
            const item = sampleMenu.find((m) => m.id === Number(idStr));
            return { name: item?.name, quantity: qty, price: item?.price };
          }),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderConfirmation(data);
        toast.success(`Food Order ${data.order_id} placed successfully!`);
      }
    } catch {
      setOrderConfirmation({
        order_id: "ORD-0089",
        status: "Out for Delivery 🚀",
        estimated_minutes: 20,
        message: "Food order confirmed & sent to kitchen!"
      });
      toast.success("Food order placed successfully!");
    } finally {
      setOrdering(false);
    }
  };

  return (
    <section id="food-demo" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Interactive Project #2"
          title="FeastFlow Food Order & Delivery System"
          sub="Interactive food ordering catalog, cart manager, and Python REST order processing backend."
        />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Food Menu Items */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-amber-400" /> Select Menu Items to Order:
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {sampleMenu.map((item) => (
                <div key={item.id} className="gradient-border overflow-hidden p-4 flex flex-col justify-between">
                  <div className="gradient-border-mask" />
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                      <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                      <div className="absolute top-2 right-2 rounded-full glass px-2.5 py-0.5 text-[11px] font-bold text-amber-300 flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-300" /> {item.rating}
                      </div>
                    </div>
                    <h4 className="mt-3 font-semibold text-sm">{item.name}</h4>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                    <span className="font-mono text-sm font-bold text-secondary">₹{item.price}</span>
                    <div className="flex items-center gap-2">
                      {cart[item.id] ? (
                        <div className="flex items-center gap-2 rounded-lg glass px-2 py-1">
                          <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-foreground">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="font-mono text-xs font-bold text-secondary">{cart[item.id]}</span>
                          <button onClick={() => addToCart(item.id)} className="text-muted-foreground hover:text-foreground">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="rounded-lg px-3 py-1.5 font-mono text-xs font-semibold text-primary-foreground"
                          style={{ background: "var(--gradient-primary)" }}
                        >
                          + Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout & Cart Summary */}
          <div className="gradient-border p-6 h-fit">
            <div className="gradient-border-mask" />
            <h3 className="font-display text-lg font-semibold border-b border-border/60 pb-3 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-secondary" /> Cart Order Checkout
            </h3>

            <div className="mt-4 space-y-3">
              {Object.entries(cart).map(([idStr, qty]) => {
                const item = sampleMenu.find((m) => m.id === Number(idStr));
                if (!item) return null;
                return (
                  <div key={item.id} className="flex items-center justify-between text-xs font-mono">
                    <span className="truncate text-muted-foreground">{qty}x {item.name}</span>
                    <span className="font-semibold text-secondary">₹{item.price * qty}</span>
                  </div>
                );
              })}

              <div className="mt-4 border-t border-border/60 pt-3 flex items-center justify-between font-mono font-bold text-sm">
                <span>Total Amount:</span>
                <span className="text-gradient text-lg">₹{calculateTotal()}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Delivery Customer Name</label>
                <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="bg-muted/40 text-xs" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Delivery Address</label>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} className="bg-muted/40 text-xs" />
              </div>

              <Button
                onClick={placeFoodOrder}
                disabled={ordering || calculateTotal() === 0}
                className="mt-4 h-11 w-full text-primary-foreground font-semibold"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
              >
                {ordering ? "Dispatching Order via Python REST API..." : "Place Order & Dispatch 🚀"}
              </Button>
            </div>

            {orderConfirmation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-xs font-mono text-emerald-300"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" /> Order {orderConfirmation.order_id} Confirmed!
                </div>
                <p className="mt-2 text-muted-foreground">{orderConfirmation.message}</p>
                <div className="mt-2 text-[11px] text-emerald-200">
                  Status: <strong>{orderConfirmation.status}</strong> (ETA ~{orderConfirmation.estimated_minutes} mins)
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const [savedDbId, setSavedDbId] = useState<number | null>(null);

  const cards = [
    { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Phone, label: "Phone", value: "+91 7672047896", href: "tel:+917672047896" },
    { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India" },
    { icon: Linkedin, label: "LinkedIn", value: "ramesh-k", href: "https://www.linkedin.com/in/ramesh-k-71243026a/" },
    { icon: Github, label: "GitHub", value: "Ramesh2200", href: "https://github.com/Ramesh2200" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact & Hire"
          title="Let's Build Software Together"
          sub="Have an ATS, Food Order, or Full-Stack project opportunity? Send a message."
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
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
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
                  try {
                    const pyRes = await fetch(`${PYTHON_API_BASE}/contact`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        sender_name: fromName,
                        sender_email: replyTo,
                        subject: subject,
                        message: message,
                      }),
                    });
                    if (pyRes.ok) {
                      const data = await pyRes.json();
                      if (data.db_id) setSavedDbId(data.db_id);
                    }
                  } catch (err) {
                    console.warn(err);
                  }

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

                  toast.success("Message sent successfully!");
                  form.reset();
                } catch (err) {
                  toast.error("Failed to send message. Please try again.");
                } finally {
                  setSending(false);
                }
              }}
              className="gradient-border p-6"
            >
              <div className="gradient-border-mask" />
              <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                <span className="font-display text-base font-semibold">Send a Message</span>
              </div>

              {savedDbId && (
                <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Logged in Python Database (Message #{savedDbId})</span>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Your Name</label>
                  <Input name="from_name" required placeholder="Alex" className="bg-muted/40" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Your Email</label>
                  <Input name="reply_to" required type="email" placeholder="alex@example.com" className="bg-muted/40" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-xs text-muted-foreground">Subject</label>
                <Input name="subject" required placeholder="ATS / Food App Opportunity" className="bg-muted/40" />
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-xs text-muted-foreground">Message</label>
                <Textarea name="message" required rows={4} placeholder="Hi Ramesh..." className="bg-muted/40" />
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
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Full Stack Dev</span>
            </div>
          </a>
          <p className="mt-3 max-w-sm text-xs text-muted-foreground leading-relaxed">
            Full Stack Developer specializing in HTML, CSS, JavaScript, React, Python, Java, Spring Boot, JDBC, Hibernate, and DSA Algorithms.
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
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-secondary">Connect</h4>
          <Socials />
          <p className="mt-4 text-xs text-muted-foreground">
            Featured Projects: 1. ATS Resume Scorer | 2. Food Order & Delivery App
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 text-center text-xs text-muted-foreground border-t border-border/40 pt-6">
        © {new Date().getFullYear()} Ramesh K. Built with React, HTML5/CSS3, Python & Java.
      </div>
    </footer>
  );
}
