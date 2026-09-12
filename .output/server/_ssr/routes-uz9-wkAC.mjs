import { a as __toESM } from "../_runtime.mjs";
import { i as motion, n as useSpring, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as m } from "../_libs/react-type-animation.mjs";
import { _ as ChevronDown, a as Phone, b as Award, c as Mail, d as GraduationCap, f as Github, g as CircleCheck, h as Database, i as Send, l as Linkedin, m as Download, n as Sun, o as Moon, p as ExternalLink, r as Server, s as MapPin, t as Zap, u as Layers, v as Calendar, x as ArrowUp, y as Briefcase } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uz9-wkAC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ramesh_hero_new_default = "/assets/ramesh-hero-new-BRMdkMZX.jpg";
var project_smart_parking_default = "/assets/project-smart-parking-DxT5aKXk.jpg";
var project_food_delivery_default = "/assets/project-food-delivery-DI6ZvSl3.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var resumeUrl = "/Ramesh_Resume.pdf";
var CONTACT_EMAIL = "ballariramesh0825@gmail.com";
var CONTACT_PHONE = "+91 7672047816";
var EMAILJS_SERVICE_ID = "service_q9xlcre";
var EMAILJS_TEMPLATE_ID = "template_7pt68gf";
var EMAILJS_PUBLIC_KEY = "aGw6ujle7HSAwi-2G";
var NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Portfolio() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .3
	});
	const [active, setActive] = (0, import_react.useState)("home");
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	const [mouse, setMouse] = (0, import_react.useState)({
		x: 50,
		y: 30
	});
	const [theme, setTheme] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") return localStorage.getItem("portfolio_theme") || "dark";
		return "dark";
	});
	(0, import_react.useEffect)(() => {
		if (theme === "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		localStorage.setItem("portfolio_theme", theme);
	}, [theme]);
	const [ripples, setRipples] = (0, import_react.useState)([]);
	const handlePointerDown = (e) => {
		const id = Date.now();
		setRipples((prev) => [...prev, {
			id,
			x: e.clientX,
			y: e.clientY
		}]);
		setTimeout(() => {
			setRipples((prev) => prev.filter((r) => r.id !== id));
		}, 600);
	};
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setShowTop(window.scrollY > 600);
			let current = "home";
			for (const s of NAV) {
				const el = document.getElementById(s.id);
				if (el && el.getBoundingClientRect().top <= 120) current = s.id;
			}
			setActive(current);
		};
		const onMouse = (e) => {
			setMouse({
				x: e.clientX / window.innerWidth * 100,
				y: e.clientY / window.innerHeight * 100
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("mousemove", onMouse);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("mousemove", onMouse);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onPointerDown: handlePointerDown,
		className: "relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 z-50 overflow-hidden",
				children: ripples.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						scale: .2,
						opacity: .9
					},
					animate: {
						scale: 2.2,
						opacity: 0
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					style: {
						left: r.x - 20,
						top: r.y - 20
					},
					className: "absolute h-10 w-10 rounded-full border-2 border-secondary bg-secondary/20 shadow-lg shadow-secondary/50"
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 z-0 opacity-60 transition-[background] duration-300",
				style: { background: `radial-gradient(650px circle at ${mouse.x}% ${mouse.y}%, oklch(0.62 0.28 295 / 0.15), transparent 65%)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "fixed inset-x-0 top-0 z-50 h-0.5 origin-left",
				style: {
					scaleX,
					background: "var(--gradient-primary)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
				active,
				theme,
				setTheme
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				whileHover: { scale: 1.15 },
				whileTap: { scale: .9 },
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full glass glow-purple transition",
				"aria-label": "Back to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				theme: theme === "dark" ? "dark" : "light",
				position: "top-right"
			})
		]
	});
}
function Nav({ active, theme, setTheme }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-40 px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-3 shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2.5 font-display text-lg font-bold group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid h-9 w-9 place-items-center rounded-xl p-[1px]",
						style: {
							background: "var(--gradient-primary)",
							boxShadow: "var(--shadow-glow-purple)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-full w-full place-items-center rounded-[11px] bg-background/90 font-mono text-xs font-extrabold text-secondary transition duration-300 group-hover:scale-105",
							children: "<RK/>"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient font-display text-lg font-extrabold tracking-tight",
							children: "Ramesh.K"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
							children: "Java Full Stack Dev"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-1 xl:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://smart-parking-system-murex.vercel.app/",
						target: "_blank",
						rel: "noreferrer",
						className: "mr-3 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-400 hover:border-emerald-400 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Smart Parking Telemetry Live" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex items-center gap-1",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${n.id}`,
							className: `rounded-lg px-3 py-1.5 text-xs font-semibold transition ${active === n.id ? "text-foreground bg-secondary/20 text-secondary border border-secondary/30" : "text-muted-foreground hover:text-foreground"}`,
							children: n.label
						}, n.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							whileHover: { scale: 1.1 },
							whileTap: { scale: .9 },
							onClick: () => setTheme((t) => t === "dark" ? "light" : "dark"),
							className: "grid h-9 w-9 place-items-center rounded-xl glass text-foreground transition",
							"aria-label": "Toggle theme",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4 text-indigo-400" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							whileHover: { scale: 1.05 },
							whileTap: { scale: .95 },
							href: "#contact",
							className: "hidden rounded-xl px-4 py-2 text-xs font-semibold text-primary-foreground transition md:inline-flex",
							style: {
								background: "var(--gradient-primary)",
								boxShadow: "var(--shadow-glow-purple)"
							},
							children: "Hire Me"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-9 w-9 place-items-center rounded-lg glass xl:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition ${open ? "rotate-180" : ""}` })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-2 max-w-6xl rounded-2xl glass p-3 xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-1",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${n.id}`,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
					children: n.label
				}, n.id))
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative flex min-h-screen items-center overflow-hidden pt-28 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-grid opacity-20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.25fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow",
								style: { boxShadow: "0 0 10px #34d399" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "Java Full-Stack Software Engineer"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-mono text-sm text-secondary",
							children: "👋 Welcome, I'm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl",
							children: ["RAMESH ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "K"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-12 font-mono text-lg text-muted-foreground sm:text-xl md:text-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, {
								sequence: [
									"Java Full-Stack Software Engineer",
									1800,
									"Smart Vehicle Parking System Architect",
									1800,
									"Spring Boot & RESTful APIs Specialist",
									1800,
									"React.js & Modern Frontend Developer",
									1800,
									"MySQL, JDBC & Hibernate Engineer",
									1800,
									"B.E. Computer Science Graduate",
									1800
								],
								wrapper: "span",
								speed: 45,
								repeat: Infinity,
								cursor: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed",
							children: [
								"Computer Science Engineering graduate with strong expertise in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: "Java, Spring Boot, React.js, REST APIs, JDBC, Hibernate, and MySQL"
								}),
								". Proficient in developing scalable, responsive, and maintainable web applications using modern frontend and backend architectures."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap items-center gap-2",
							children: [
								"Java",
								"Spring Boot",
								"React.js",
								"REST APIs",
								"JDBC",
								"Hibernate",
								"MySQL",
								"MVC Architecture",
								"HTML5 & CSS3"
							].map((skill, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									scale: .8
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								whileHover: {
									scale: 1.08,
									y: -2
								},
								whileTap: { scale: .95 },
								transition: {
									duration: .2,
									delay: idx * .04
								},
								className: "rounded-lg border border-border/80 bg-muted/40 px-3 py-1 font-mono text-xs text-secondary hover:border-secondary transition cursor-pointer",
								children: skill
							}, skill))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
									whileHover: { scale: 1.04 },
									whileTap: { scale: .95 },
									href: "https://smart-parking-system-murex.vercel.app/",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition",
									style: {
										background: "var(--gradient-primary)",
										boxShadow: "var(--shadow-glow-purple)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }), " Launch Smart Parking Live"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
									whileHover: { scale: 1.04 },
									whileTap: { scale: .95 },
									href: resumeUrl,
									download: "Ramesh_Resume.pdf",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:border-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 text-emerald-400" }), " Download Resume"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
									whileHover: { scale: 1.04 },
									whileTap: { scale: .95 },
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Get in Touch"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: [
							0,
							-10,
							0
						]
					},
					transition: {
						opacity: { duration: .8 },
						scale: { duration: .8 },
						y: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut"
						}
					},
					whileHover: {
						scale: 1.04,
						rotate: 1
					},
					className: "relative mx-auto cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: {
							scale: [
								1,
								1.06,
								1
							],
							opacity: [
								.3,
								.7,
								.3
							]
						},
						transition: {
							duration: 3.5,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "absolute inset-0 rounded-full",
						style: {
							background: "radial-gradient(circle, var(--neon-purple) 0%, var(--neon-cyan) 60%, transparent 80%)",
							filter: "blur(18px)"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gradient-border h-full w-full rounded-full p-1.5 shadow-2xl transition duration-500 hover:shadow-purple-500/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full w-full overflow-hidden rounded-full border-2 border-border/80 bg-muted/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ramesh_hero_new_default,
									alt: "Ramesh K portrait",
									width: 768,
									height: 768,
									className: "h-full w-full object-cover object-top transition duration-700 hover:scale-105"
								})
							})]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#about",
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground",
				"aria-label": "Scroll down",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						repeat: Infinity,
						duration: 1.6
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-6 w-6" })
				})
			})
		]
	});
}
function Socials() {
	const items = [
		{
			href: "https://github.com/Ramesh2200",
			icon: Github,
			label: "GitHub"
		},
		{
			href: "https://www.linkedin.com/in/ramesh-k-71243026/",
			icon: Linkedin,
			label: "LinkedIn"
		},
		{
			href: `mailto:${CONTACT_EMAIL}`,
			icon: Mail,
			label: "Email"
		},
		{
			href: `tel:${CONTACT_PHONE.replace(/\s+/g, "")}`,
			icon: Phone,
			label: "Phone"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: it.href,
			target: it.href.startsWith("http") ? "_blank" : void 0,
			rel: it.href.startsWith("http") ? "noreferrer" : void 0,
			"aria-label": it.label,
			className: "grid h-10 w-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:text-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4" })
		}, it.label))
	});
}
function SectionHeader({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.25em] text-secondary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl",
				children: title.split(" ").map((w, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: i === arr.length - 1 ? "text-gradient" : "",
					children: [w, " "]
				}, i))
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
				children: sub
			})
		]
	});
}
function Reveal({ children, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 24
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .6,
			delay
		},
		children
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "About Me",
				title: "Java Full-Stack Software Engineer"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-border p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: [
								"Computer Science Engineering graduate with strong expertise in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: "Java, Spring Boot, React.js, REST APIs, JDBC, Hibernate, and MySQL"
								}),
								". Proficient in developing scalable, responsive, and maintainable web applications using modern frontend and backend technologies."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-muted-foreground",
							children: [
								"Strong understanding of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Object-Oriented Programming, MVC Architecture, database design, CRUD operations, and API integration"
								}),
								". Skilled in writing clean, reliable code with a focus on performance, security, and user experience. A quick learner with strong problem-solving, teamwork, and software engineering capabilities."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2 font-mono text-xs",
							children: [
								"Java 17/21",
								"Spring Boot",
								"React.js",
								"RESTful APIs",
								"JDBC",
								"Hibernate",
								"MySQL",
								"PostgreSQL",
								"Java Servlets & JSP",
								"HTML5 & CSS3"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border bg-muted/40 px-3.5 py-1 text-muted-foreground",
								children: t
							}, t))
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full grid-cols-2 gap-4",
						children: [
							{
								k: "Smart Parking",
								v: "Flagship Production Platform"
							},
							{
								k: "Java & Spring Boot",
								v: "Enterprise REST & MVC Services"
							},
							{
								k: "React.js & CSS3",
								v: "High-Performance Modern UI"
							},
							{
								k: "MySQL & JDBC",
								v: "Relational Database Architecture"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gradient-border flex flex-col justify-center p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl font-bold text-gradient",
									children: s.k
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-muted-foreground",
									children: s.v
								})
							]
						}, s.k))
					})
				})]
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Core Competencies",
				title: "Skills & Technical Expertise",
				sub: "Expertise across Java, Spring Boot, React.js, RESTful APIs, JDBC, Hibernate, and MySQL."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						title: "Programming & Backend",
						icon: Server,
						items: [
							{
								name: "Java (Core & Advanced)",
								level: 95
							},
							{
								name: "Spring Boot & RESTful APIs",
								level: 92
							},
							{
								name: "Hibernate ORM & JDBC",
								level: 90
							},
							{
								name: "Java Servlets & JSP",
								level: 88
							},
							{
								name: "Python",
								level: 85
							}
						]
					},
					{
						title: "Frontend Development",
						icon: Layers,
						items: [
							{
								name: "React.js Component Architecture",
								level: 92
							},
							{
								name: "HTML5 Semantic UI",
								level: 95
							},
							{
								name: "CSS3 & Modern Responsive Design",
								level: 92
							},
							{
								name: "JavaScript (ES6+)",
								level: 90
							}
						]
					},
					{
						title: "Databases & Core Architecture",
						icon: Database,
						items: [
							{
								name: "MySQL & Relational Schema Design",
								level: 92
							},
							{
								name: "PostgreSQL & SQLite",
								level: 86
							},
							{
								name: "MVC Architecture & CRUD Operations",
								level: 94
							},
							{
								name: "Object-Oriented Programming (OOP)",
								level: 95
							}
						]
					}
				].map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border h-full p-6 transition hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl glass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { className: "h-4 w-4 text-secondary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-semibold",
									children: g.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: g.items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-secondary",
										children: s.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-secondary",
										children: [s.level, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 h-1.5 overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: { width: 0 },
										whileInView: { width: `${s.level}%` },
										viewport: { once: true },
										transition: {
											duration: 1,
											ease: "easeOut"
										},
										className: "h-full rounded-full",
										style: { background: "var(--gradient-primary)" }
									})
								})] }, s.name))
							})
						]
					})
				}, g.title))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Featured Projects",
				title: "Full-Stack Production Platforms",
				sub: "Enterprise applications engineered using Java, Spring Boot, React.js, RESTful APIs, and Relational Databases."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-12",
				children: [{
					id: "parking-project",
					title: "Smart Vehicle Parking Management System",
					duration: "Jul – Nov 2026",
					badge: "Flagship Production Project • Vercel",
					image: project_smart_parking_default,
					desc: "Engineered a full-stack commercial smart parking management platform using React.js, Java, Spring Boot, Servlets, JSP, JDBC, and SQL, enabling automated parking-slot booking, vehicle entry/exit tracking, and centralized parking operations.",
					bullets: [
						"Architected RESTful APIs and MVC-based services with SQL integration for user, vehicle, slot, booking, and transaction management, reducing manual administrative workflows.",
						"Developed responsive user and admin dashboards with secure authentication, real-time slot availability, automated fee calculation, and centralized management, improving parking accessibility and operational efficiency.",
						"Integrated Razorpay payment gateway for instant checkout, optical ZXing cryptographic QR gate passes, and automated commercial A4 PDF tax receipt invoicing."
					],
					tech: [
						"HTML5",
						"CSS3",
						"JavaScript",
						"React.js",
						"Java 17",
						"Spring Boot",
						"RESTful APIs",
						"MVC",
						"SQL",
						"JDBC",
						"Servlets & JSP",
						"Razorpay",
						"ZXing QR",
						"Vercel"
					],
					demoUrl: "https://smart-parking-system-murex.vercel.app/",
					repoUrl: "https://github.com/Ramesh2200/smart-parking-system"
				}, {
					id: "ecommerce-project",
					title: "E-Commerce Website",
					duration: "Mar – Jun 2026",
					badge: "Full-Stack Web Platform",
					image: project_food_delivery_default,
					desc: "Engineered a full-stack E-Commerce platform using React.js, Spring Boot, Hibernate, REST APIs, and MySQL, implementing authentication, product discovery, cart management, checkout, and order placement workflows.",
					bullets: ["Developed scalable RESTful services and relational database integration for users, products, categories, carts, orders, and order items, implementing robust CRUD operations.", "Enhanced the shopping experience through product search, filtering, responsive interfaces, and admin management, and successfully deployed the application on Vercel."],
					tech: [
						"HTML5",
						"CSS3",
						"JavaScript",
						"React.js",
						"Spring Boot",
						"Hibernate",
						"JDBC",
						"MySQL",
						"REST APIs"
					],
					demoUrl: "https://github.com/Ramesh2200",
					repoUrl: "https://github.com/Ramesh2200"
				}].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group gradient-border overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-[1.1fr_1fr] gap-8 p-6 sm:p-8 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.title,
										width: 1280,
										height: 800,
										loading: "lazy",
										className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-3 right-3 rounded-full glass px-3 py-1 font-mono text-[11px] font-semibold text-emerald-400 border border-emerald-500/30",
										children: p.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-3 left-3 rounded-md glass px-2.5 py-1 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.duration })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2 mb-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-xs text-secondary font-semibold",
											children: [
												"0",
												i + 1,
												" // FEATURED"
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl sm:text-3xl font-bold tracking-tight",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground leading-relaxed",
										children: p.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 space-y-2",
										children: p.bullets.map((b, bIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
										}, bIdx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-1.5",
										children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-[11px] text-secondary",
											children: t
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap gap-3 pt-4 border-t border-border/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.demoUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-primary-foreground",
											style: {
												background: "var(--gradient-primary)",
												boxShadow: "var(--shadow-glow-purple)"
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }),
												" Live Website",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.repoUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-xs font-semibold hover:border-secondary transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " View Source"]
										})]
									})
								]
							})]
						})]
					})
				}, p.id))
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-24 bg-card/20 border-y border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Work History",
				title: "Professional Experience",
				sub: "Internship and industrial full-stack development experience."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-3xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-border p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 text-xs font-mono text-secondary mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Software Developer Intern" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-bold",
									children: "Tap Academy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Java Full-Stack Development"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-full glass px-4 py-1.5 font-mono text-xs text-muted-foreground border border-border",
								children: "2026"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Applied Java, Spring Boot, React.js, REST APIs, JDBC, and MySQL to develop and integrate full-stack application components." })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Implemented MVC architecture, CRUD operations, database connectivity, and API integration while following modular and maintainable development practices." })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2 font-mono text-xs",
							children: [
								"Java",
								"Spring Boot",
								"React.js",
								"REST APIs",
								"JDBC",
								"MySQL",
								"MVC Architecture",
								"CRUD Operations"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border bg-muted/40 px-2.5 py-1 text-secondary",
								children: t
							}, t))
						})
					]
				}) })
			})]
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "education",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Academic Background",
				title: "Education & Credentials",
				sub: "Strong technical foundations in Computer Science Engineering."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3 max-w-6xl mx-auto",
				children: [
					{
						degree: "B.E. in Computer Science & Engineering",
						institution: "Yenepoya Institute of Technology, Mangalore, Karnataka",
						period: "2022 – 2026",
						score: "CGPA: 7.9",
						icon: GraduationCap,
						highlight: true
					},
					{
						degree: "Pre-University Course (PUC)",
						institution: "Bellary Independent PU College, Bellary, Karnataka",
						period: "2020 – 2022",
						score: "66%",
						icon: Award,
						highlight: false
					},
					{
						degree: "Secondary School Leaving Certificate (S.S.L.C)",
						institution: "Morarji Desai Residential School, Bellary, Karnataka",
						period: "2016 – 2020",
						score: "86%",
						icon: Award,
						highlight: false
					}
				].map((edu, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: idx * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border h-full p-6 flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-xl glass",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(edu.icon, { className: "h-5 w-5 text-secondary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs rounded-full glass px-3 py-1 text-muted-foreground",
										children: edu.period
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold",
									children: edu.degree
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground leading-relaxed",
									children: edu.institution
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-4 border-t border-border/40 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Grade / Score"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm font-bold text-gradient",
									children: edu.score
								})]
							})
						]
					})
				}, edu.degree))
			})]
		})
	});
}
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const cards = [
		{
			icon: Mail,
			label: "Email",
			value: CONTACT_EMAIL,
			href: `mailto:${CONTACT_EMAIL}`
		},
		{
			icon: Phone,
			label: "Phone",
			value: CONTACT_PHONE,
			href: `tel:${CONTACT_PHONE.replace(/\s+/g, "")}`
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Bengaluru / Bellary, Karnataka, India"
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			value: "ramesh-k-71243026",
			href: "https://www.linkedin.com/in/ramesh-k-71243026/"
		},
		{
			icon: Github,
			label: "GitHub",
			value: "Ramesh2200",
			href: "https://github.com/Ramesh2200"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 bg-card/10 border-t border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Contact & Connect",
				title: "Let's Build Impactful Software",
				sub: "Available for Java Full-Stack, Spring Boot, React.js, and Software Engineering opportunities."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: cards.map((c) => {
						const Inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex items-center gap-4 gradient-border p-4 transition hover:-translate-y-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl glass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4 text-secondary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-wider text-muted-foreground",
										children: c.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-sm font-medium",
										children: c.value
									})]
								})
							]
						});
						return c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: c.href,
							target: c.href.startsWith("http") ? "_blank" : void 0,
							rel: c.href.startsWith("http") ? "noreferrer" : void 0,
							children: Inner
						}, c.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Inner }, c.label);
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: async (e) => {
							e.preventDefault();
							const form = e.target;
							const formData = new FormData(form);
							const fromName = String(formData.get("from_name") ?? "").trim();
							const replyTo = String(formData.get("reply_to") ?? "").trim();
							const subject = String(formData.get("subject") ?? "").trim();
							const message = String(formData.get("message") ?? "").trim();
							setSending(true);
							try {
								await (await import("../_libs/emailjs__browser.mjs").then((n) => n.t)).default.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
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
									sent_at: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
								}, { publicKey: EMAILJS_PUBLIC_KEY });
								toast.success("Message sent successfully! Ramesh will get back to you soon.");
								form.reset();
							} catch (err) {
								toast.error("Failed to send message via form. Please email directly at ballariramesh0825@gmail.com");
							} finally {
								setSending(false);
							}
						},
						className: "gradient-border p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-border-mask" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 flex items-center justify-between border-b border-border/60 pb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-semibold",
									children: "Send a Direct Message"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs text-muted-foreground",
									children: "Your Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "from_name",
									required: true,
									placeholder: "Recruiter / Collaborator",
									className: "bg-muted/40"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs text-muted-foreground",
									children: "Your Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "reply_to",
									required: true,
									type: "email",
									placeholder: "recruiter@company.com",
									className: "bg-muted/40"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs text-muted-foreground",
									children: "Subject"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "subject",
									required: true,
									placeholder: "Full-Stack Engineer Opportunity",
									className: "bg-muted/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block text-xs text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									name: "message",
									required: true,
									rows: 4,
									placeholder: "Hi Ramesh, we are impressed by your Smart Parking System and Java background...",
									className: "bg-muted/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								disabled: sending,
								className: "mt-6 h-11 w-full text-primary-foreground font-semibold",
								style: {
									background: "var(--gradient-primary)",
									boxShadow: "var(--shadow-glow-purple)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 h-4 w-4" }),
									" ",
									sending ? "Sending Message..." : "Send Message"
								]
							})
						]
					})
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border/60 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-[1.2fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2.5 font-display text-lg font-bold group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid h-9 w-9 place-items-center rounded-xl p-[1px]",
						style: {
							background: "var(--gradient-primary)",
							boxShadow: "var(--shadow-glow-purple)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-full w-full place-items-center rounded-[11px] bg-background/90 font-mono text-xs font-extrabold text-secondary transition duration-300 group-hover:scale-105",
							children: "<RK/>"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient font-display text-lg font-extrabold tracking-tight",
							children: "Ramesh.K"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
							children: "Java Full Stack Dev"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-sm text-xs text-muted-foreground leading-relaxed",
					children: "Computer Science Engineering graduate specializing in Java, Spring Boot, React.js, REST APIs, JDBC, Hibernate, and MySQL."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 font-mono text-xs uppercase tracking-widest text-secondary",
					children: "Navigation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-1 text-xs",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						className: "text-muted-foreground hover:text-foreground",
						children: n.label
					}) }, n.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-3 font-mono text-xs uppercase tracking-widest text-secondary",
						children: "Connect & Links"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://smart-parking-system-murex.vercel.app/",
							target: "_blank",
							rel: "noreferrer",
							className: "text-emerald-400 hover:underline flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }), " Smart Parking Platform (Live)"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: resumeUrl,
							download: "Ramesh_Resume.pdf",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-foreground flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" }), " Download Resume PDF"]
						})]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-8 max-w-6xl px-6 text-center text-xs text-muted-foreground border-t border-border/40 pt-6",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Ramesh K. All rights reserved. Built with React.js, Tailwind CSS & Java Full-Stack Architecture."
			]
		})]
	});
}
var SplitComponent = Portfolio;
//#endregion
export { SplitComponent as component };
