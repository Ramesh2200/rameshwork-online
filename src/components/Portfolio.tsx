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
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Users,
  Sparkles,
  Cpu,
  Layers,
  Globe,
  Send,
  ChevronDown,
} from "lucide-react";
import profilePhotoAsset from "@/assets/ramesh-hero.jpg.asset.json";
const profilePhoto = profilePhotoAsset.url;
import projectCivic from "@/assets/project-civic.jpg";
import projectRetino from "@/assets/project-retino.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 30 });

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
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      {/* Mouse-follow spotlight */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-70 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, oklch(0.62 0.28 295 / 0.15), transparent 60%)`,
        }}
      />

      {/* Scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left"
        style={{ scaleX, background: "var(--gradient-primary)" }}
      />

      <Nav active={active} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full glass glow-purple transition hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-3">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
            <span className="font-mono text-sm text-background">R</span>
          </span>
          <span className="text-gradient">Ramesh.K</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="mx-auto mt-0.5 block h-0.5 w-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              )}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-xl px-4 py-2 text-sm font-medium text-primary-foreground md:inline-flex"
          style={{ background: "var(--gradient-primary)" }}
        >
          Hire Me
        </a>
        <button
          className="grid h-9 w-9 place-items-center rounded-lg glass md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl glass p-3 md:hidden">
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

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
      {/* Floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[22%] h-24 w-24 rounded-3xl animate-float" style={{ background: "var(--gradient-primary)", opacity: 0.25, filter: "blur(2px)" }} />
        <div className="absolute right-[10%] top-[30%] h-16 w-16 rounded-full animate-float" style={{ background: "var(--neon-cyan)", opacity: 0.35, animationDelay: "1.2s", filter: "blur(1px)" }} />
        <div className="absolute bottom-[18%] left-[18%] h-20 w-20 rotate-45 rounded-2xl animate-float" style={{ background: "var(--neon-purple)", opacity: 0.25, animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full animate-pulse-glow" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 10px var(--neon-cyan)" }} />
            Available for opportunities · 2026
          </div>
          <p className="mb-3 font-mono text-sm text-secondary">👋 Hello, I'm</p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            RAMESH <span className="text-gradient">K</span>
          </h1>
          <div className="mt-4 h-8 font-mono text-lg text-muted-foreground sm:text-xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 1500,
                "React Developer", 1500,
                "Java Developer", 1500,
                "Software Engineer", 1500,
                "Problem Solver", 1500,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              cursor
            />
          </div>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A versatile software engineer bridging client-side design and server-side logic. I build
            scalable, user-centric applications and optimize the complete development lifecycle — with
            a goal of becoming a <span className="text-foreground">Lead Architect</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); toast("Resume download will be available soon."); }}
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition hover:border-secondary">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium hover:bg-muted">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Socials />
          </div>
        </motion.div>

        {/* Profile with glowing gradient ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, var(--neon-purple), var(--neon-cyan), var(--neon-purple))", filter: "blur(2px)" }}
            />
            <div className="absolute inset-[6px] rounded-full bg-background" />
            <div className="absolute inset-[10px] overflow-hidden rounded-full animate-float">
              <img
                src={profilePhoto}
                alt="Ramesh K portrait"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Orbiting badge */}
            <div className="absolute -right-2 top-6 rounded-full glass px-3 py-1 text-xs font-mono glow-cyan">
              <span className="text-secondary">&lt;/&gt;</span> code.dream.build
            </div>
            <div className="absolute -bottom-2 left-4 rounded-full glass px-3 py-1 text-xs font-mono">
              <Sparkles className="mr-1 inline h-3 w-3 text-secondary" /> full-stack.tsx
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

/* ---------------- Section helpers ---------------- */
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
    { k: "6+", v: "Projects Completed" },
    { k: "15+", v: "Technologies Known" },
    { k: "5 mo", v: "Internship Experience" },
    { k: "120+", v: "GitHub Contributions" },
  ];
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About Me" title="Engineering ideas into products" />
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="gradient-border p-8">
              <div className="gradient-border-mask" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate software engineer who loves crafting <span className="text-foreground">scalable, user-centric applications</span> — from
                pixel-perfect React interfaces to robust Java and Node.js backends. I care about
                <span className="text-foreground"> clean code</span>, thoughtful architecture, and shipping
                things that actually work.
              </p>
              <p className="mt-4 text-muted-foreground">
                My focus is on <span className="text-foreground">backend architecture</span> and full-stack
                delivery, and I'm continuously learning to grow into a <span className="text-gradient font-medium">Lead Architect</span>.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
                {["Scalable Systems", "Clean Code", "REST APIs", "SDLC", "Agile"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-muted/40 px-3 py-1 text-muted-foreground">
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
                  <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
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

/* ---------------- EDUCATION ---------------- */
function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Education" title="Academic journey" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-6 top-0 h-full w-px" style={{ background: "var(--gradient-primary)", opacity: 0.4 }} />
            <div className="relative pl-16">
              <div className="absolute left-0 top-1 grid h-12 w-12 place-items-center rounded-full glass glow-purple">
                <GraduationCap className="h-5 w-5 text-secondary" />
              </div>
              <div className="gradient-border p-6">
                <div className="gradient-border-mask" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">B.E. in Computer Science & Engineering</h3>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-secondary">2022 — 2026</span>
                </div>
                <p className="mt-1 text-muted-foreground">Yenepoya Institute of Technology · VTU</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Focused on data structures, systems design, databases, and full-stack web
                  engineering — with hands-on project work every semester.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const bullets = [
    "Developed responsive full-stack web applications",
    "Built modern React user interfaces",
    "Integrated frontend with backend APIs",
    "Designed RESTful APIs",
    "Optimized SQL database queries",
    "Fixed bugs and improved performance",
    "Participated in Agile ceremonies & code reviews",
    "Used Git for version control",
    "Worked through the complete SDLC",
  ];
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Experience" title="Where I've built things" />
        <Reveal>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-6 top-0 h-full w-px" style={{ background: "var(--gradient-primary)", opacity: 0.4 }} />
            <div className="relative pl-16">
              <div className="absolute left-0 top-1 grid h-12 w-12 place-items-center rounded-full glass glow-cyan">
                <Briefcase className="h-5 w-5 text-secondary" />
              </div>
              <div className="gradient-border p-6">
                <div className="gradient-border-mask" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">Full Stack Software Developer Intern</h3>
                    <p className="mt-1 text-muted-foreground">AiROBOSOFT Products And Services LLP</p>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-secondary">Jan 2026 — May 2026</span>
                </div>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--gradient-primary)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  const groups: { title: string; icon: any; items: { name: string; level: number }[] }[] = [
    { title: "Languages", icon: Code2, items: [
      { name: "Java", level: 88 }, { name: "Python", level: 78 }, { name: "JavaScript", level: 90 }, { name: "SQL", level: 82 },
    ]},
    { title: "Frontend", icon: Layers, items: [
      { name: "React.js", level: 92 }, { name: "HTML5", level: 95 }, { name: "CSS3", level: 90 }, { name: "Bootstrap", level: 85 },
    ]},
    { title: "Backend", icon: Server, items: [
      { name: "Spring Boot", level: 82 }, { name: "Node.js", level: 85 }, { name: "Express.js", level: 82 }, { name: "Java", level: 88 },
    ]},
    { title: "Databases", icon: Database, items: [
      { name: "MySQL", level: 86 }, { name: "MongoDB", level: 80 },
    ]},
    { title: "Tools", icon: Wrench, items: [
      { name: "Git & GitHub", level: 90 }, { name: "Docker", level: 70 }, { name: "Postman", level: 88 }, { name: "VS Code", level: 95 },
    ]},
    { title: "Cloud & Platforms", icon: Cloud, items: [
      { name: "AWS", level: 68 }, { name: "Firebase", level: 78 }, { name: "Linux", level: 80 },
    ]},
  ];
  const soft = ["Problem Solving", "Teamwork", "Communication", "Agile"];
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Skills" title="My technical toolkit" sub="A stack refined through projects, internships and endless late-night builds." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="gradient-border h-full p-6 transition hover:-translate-y-1">
                <div className="gradient-border-mask" />
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl glass">
                    <g.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="space-y-3">
                  {g.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{s.name}</span>
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

        <Reveal delay={0.2}>
          <div className="mt-8 gradient-border p-6">
            <div className="gradient-border-mask" />
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl glass"><Users className="h-4 w-4 text-secondary" /></div>
              <h3 className="font-display text-lg font-semibold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-sm">
              {soft.map((s) => (
                <span key={s} className="rounded-full border border-border bg-muted/40 px-4 py-1.5 text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    { icon: Globe, title: "Full Stack Web Development", desc: "End-to-end web applications from responsive UIs to reliable backends." },
    { icon: Layers, title: "Frontend Development", desc: "Modern, responsive, and interactive React interfaces that feel great." },
    { icon: Server, title: "Backend API Development", desc: "Scalable REST APIs with secure authentication and clean architecture." },
    { icon: Cpu, title: "REST API Integration", desc: "Integrating third-party APIs and stitching services together efficiently." },
    { icon: Database, title: "Database Design & Management", desc: "Optimized relational and NoSQL schemas that scale with your product." },
  ];
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Services" title="What I can build for you" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group gradient-border h-full p-6 transition hover:-translate-y-1">
                <div className="gradient-border-mask" />
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl transition group-hover:scale-110"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
                >
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-secondary opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const items = [
    {
      title: "Smart Local Problem Management System",
      image: projectCivic,
      desc: "A civic issue reporting platform enabling citizens to report local problems and administrators to manage complaints and track resolutions.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      features: ["Complaint Management", "Admin Dashboard", "User Authentication", "REST APIs", "Responsive UI"],
    },
    {
      title: "AI-Powered Automated Detection of Retinoblastoma",
      image: projectRetino,
      desc: "AI-driven medical image analysis platform that detects retinoblastoma from retinal images, assisting early diagnosis using ML and computer vision.",
      tech: ["Python", "Streamlit", "TensorFlow", "OpenCV"],
      features: ["AI Prediction", "Image Upload", "Medical Image Processing", "Explainable AI", "Diagnostic Reports"],
    },
  ];
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Portfolio" title="Selected projects" sub="A peek at things I've designed, built and broken (and fixed)." />
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group gradient-border overflow-hidden">
                <div className="gradient-border-mask" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[calc(var(--radius-2xl)-1px)]">
                  <img src={p.image} alt={p.title} width={1280} height={800} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="inline-block h-1 w-1 rounded-full" style={{ background: "var(--neon-cyan)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <button
                      onClick={() => toast("Live demo coming soon")}
                      className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </button>
                    <a
                      href="https://github.com/Ramesh2200"
                      target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl glass px-3 py-2 text-xs font-medium"
                    >
                      <Github className="h-3.5 w-3.5" /> Repository
                    </a>
                    <button
                      onClick={() => toast(`${p.title} — details coming soon`)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium hover:bg-muted"
                    >
                      Project Details <ArrowRight className="h-3.5 w-3.5" />
                    </button>
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

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const cards = [
    { icon: Mail, label: "Email", value: "ballariramesh0825@gmail.com", href: "mailto:ballariramesh0825@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7672047896", href: "tel:+917672047896" },
    { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India" },
    { icon: Linkedin, label: "LinkedIn", value: "ramesh-k", href: "https://www.linkedin.com/in/ramesh-k-71243026a/" },
    { icon: Github, label: "GitHub", value: "Ramesh2200", href: "https://github.com/Ramesh2200" },
  ];
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something great" sub="Have a project, an opportunity, or just want to say hi? Drop a message." />
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
                      <div className="truncate text-sm">{c.value}</div>
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
              <div className="gradient-border relative aspect-[16/9] overflow-hidden">
                <div className="gradient-border-mask" />
                <iframe
                  title="Bengaluru location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.4%2C12.85%2C77.75%2C13.1&amp;layer=mapnik"
                  className="h-full w-full opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                setSending(true);
                try {
                  const emailjs = (await import("@emailjs/browser")).default;
                  await emailjs.sendForm(
                    "service_q9xlcre",
                    "template_7pt68gf",
                    form,
                    "aGw6ujle7HSAwi-2G"
                  );
                  toast.success("Message sent! I'll get back to you soon.");
                  form.reset();
                } catch (err) {
                  console.error(err);
                  toast.error("Failed to send. Please try again.");
                } finally {
                  setSending(false);
                }
              }}
              className="gradient-border p-6"
            >
              <div className="gradient-border-mask" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Name</label>
                  <Input name="from_name" required placeholder="Your name" className="bg-muted/40" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Email</label>
                  <Input name="reply_to" required type="email" placeholder="you@example.com" className="bg-muted/40" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-xs text-muted-foreground">Subject</label>
                <Input name="subject" required placeholder="What's this about?" className="bg-muted/40" />
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-xs text-muted-foreground">Message</label>
                <Textarea name="message" required rows={6} placeholder="Tell me about your project…" className="bg-muted/40" />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="mt-6 h-11 w-full text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-purple)" }}
              >
                <Send className="mr-2 h-4 w-4" /> {sending ? "Sending…" : "Send Message"}
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
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
              <span className="font-mono text-sm text-background">R</span>
            </span>
            <span className="text-gradient">Ramesh.K</span>
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Full Stack Software Engineer crafting scalable, user-centric web applications.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-secondary">Navigate</h4>
          <ul className="grid grid-cols-2 gap-1 text-sm">
            {NAV.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-secondary">Connect</h4>
          <Socials />
          <p className="mt-4 text-xs text-muted-foreground">Thanks for stopping by. Let's build the future. ✨</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ramesh K. Designed & built with <span className="text-secondary">React</span> + <span className="text-secondary">Framer Motion</span>.
      </div>
    </footer>
  );
}
