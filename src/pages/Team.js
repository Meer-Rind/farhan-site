import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";

// ---------- CONFIG ----------
const COLORS = {
  primaryFrom: "from-blue-700",
  primaryTo: "to-indigo-700",
  darkBg: "bg-slate-900",
};

const teamBase = [
  {
    name: "Ayesha Noor",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Omar Farooq",
    role: "Lead Strategist",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Hina Raza",
    role: "Senior Developer",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Amir Khan",
    role: "Performance Marketer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
  },
];

const teamExtra = [
  {
    name: "Sarah Wilson",
    role: "Customer Success",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Mike Johnson",
    role: "Solutions Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    role: "Content Lead",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "John Doe",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
  },
];

// Small, dependency-free counter
function useCountUp(end = 100, duration = 1200) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    let start = 0;
    const t0 = performance.now();
    let raf = 0;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(start + (end - start) * eased);
      setValue(next);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return [value, ref];
}

function Stat({ label, end, suffix = "" }) {
  const [val] = useCountUp(end, 1200);
  return (
    <div className="rounded-2xl bg-white/70 p-6 text-center shadow ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="text-4xl font-extrabold text-slate-900">
        {val}
        {suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-slate-600">{label}</div>
    </div>
  );
}

function ValueCard({ title, desc, Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-2xl"
    >
      <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${COLORS.primaryFrom} ${COLORS.primaryTo} p-3 text-white shadow` }>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </motion.div>
  );
}

function TeamCard({ person, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.03 }}
      className="rounded-2xl bg-white p-6 text-center shadow ring-1 ring-black/5 hover:shadow-2xl"
    >
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-white shadow-md">
        <img src={person.image} alt={person.name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <h4 className="mt-4 text-base font-bold text-slate-900">{person.name}</h4>
      <p className="text-sm text-slate-600">{person.role}</p>
      <div className="mt-4 flex items-center justify-center gap-3 text-slate-500">
        <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-slate-100"><Linkedin className="h-4 w-4"/></a>
        <a href="#" aria-label="Twitter" className="rounded-full p-2 hover:bg-slate-100"><Twitter className="h-4 w-4"/></a>
        <a href="#" aria-label="Email" className="rounded-full p-2 hover:bg-slate-100"><Mail className="h-4 w-4"/></a>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className={`relative overflow-hidden ${COLORS.darkBg} py-24 text-white`}>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&auto=format&fit=crop"
          alt="Team collaborating"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/40" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            We Craft Digital Experiences That Grow Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg"
          >
            A creative digital agency blending strategy, design, and performance marketing to deliver measurable growth.
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Who We Are</h2>
            <p className="mt-4 text-slate-600">
              We’re a team of strategists, designers, and engineers helping modern brands launch faster and scale smarter. From brand identity to high‑converting storefronts and performance campaigns — we execute end‑to‑end.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-3"><Sparkles className="mt-0.5 h-4 w-4 text-blue-600"/> Human‑centered design with data‑driven decisions</li>
              <li className="flex items-start gap-3"><Sparkles className="mt-0.5 h-4 w-4 text-blue-600"/> Full‑stack execution across web, content, and paid media</li>
              <li className="flex items-start gap-3"><Sparkles className="mt-0.5 h-4 w-4 text-blue-600"/> Lean delivery, premium quality</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <img className="col-span-2 row-span-2 h-64 w-full rounded-2xl object-cover shadow" src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=1200&q=80&auto=format&fit=crop" alt="Workshop"/>
            <img className="h-32 w-full rounded-2xl object-cover shadow" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop" alt="Collaboration"/>
            <img className="h-32 w-full rounded-2xl object-cover shadow" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800&q=80&auto=format&fit=crop" alt="Design desk"/>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Years Experience" end={7} suffix="+" />
            <Stat label="Projects Delivered" end={240} suffix="+" />
            <Stat label="Happy Clients" end={120} suffix="+" />
            <Stat label="Industries Served" end={18} suffix="+" />
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Mission & Values</h2>
            <p className="mt-3 text-slate-600">What guides how we think, build, and partner.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <ValueCard title="Innovation" desc="We experiment, iterate, and push for better outcomes." Icon={Sparkles} />
            <ValueCard title="Collaboration" desc="Transparent communication and shared ownership." Icon={Sparkles} />
            <ValueCard title="Excellence" desc="Pixel‑perfect craft and measurable performance." Icon={Sparkles} />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white pb-8 pt-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-3 text-slate-600">A small, senior team focused on outcomes.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamBase.slice(0, 4).map((p, i) => (
              <TeamCard key={p.name} person={p} i={i} />
            ))}
          </div>

          <AnimatePresence initial={false}>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {teamExtra.map((p, i) => (
                  <TeamCard key={p.name} person={p} i={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowMore((s) => !s)}
              className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${COLORS.primaryFrom} ${COLORS.primaryTo} px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-500/30`}
              aria-expanded={showMore}
            >
              <span>{showMore ? "SHOW LESS" : "MORE TEAM"}</span>
              <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${showMore ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800" />
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent to-slate-900/40" />
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to build something exceptional?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Let’s turn your ideas into high‑performing digital products.
          </p>
          <button
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-7 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
          >
            <span className="relative">
              <span className="absolute inset-0 -z-10 animate-pulse rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 blur-sm" />
              <span className="relative z-10">Work With Us</span>
            </span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
