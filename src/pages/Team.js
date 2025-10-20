import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Mail, Sparkles, Target, ShieldCheck, Rocket, Gauge } from "lucide-react";

// ---------- CONFIG (orange-first) ----------
const COLORS = {
  primaryFrom: "from-orange-700",
  primaryTo: "to-amber-500",
  darkBg: "bg-slate-950",
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
  return value;
}

function Stat({ label, end, suffix = "" }) {
  const val = useCountUp(end, 1200);
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
      <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${COLORS.primaryFrom} ${COLORS.primaryTo} p-3 text-white shadow`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
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
      <h4 className="mt-4 text-base font-bold text-gray-900">{person.name}</h4>
      <p className="text-sm text-gray-600">{person.role}</p>
      <div className="mt-4 flex items-center justify-center gap-3 text-gray-500">
        <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-gray-100"><Linkedin className="h-4 w-4"/></a>
        <a href="#" aria-label="Twitter" className="rounded-full p-2 hover:bg-gray-100"><Twitter className="h-4 w-4"/></a>
        <a href="#" aria-label="Email" className="rounded-full p-2 hover:bg-gray-100"><Mail className="h-4 w-4"/></a>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="pt-16">
      {/* HERO (image-free, orange glow) */}
      <section className={`relative overflow-hidden ${COLORS.darkBg} py-24 text-white`}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-transparent to-amber-700/20" />
        <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            We Turn Stores Into Brands — And Brands Into Growth Engines
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto mt-4 max-w-3xl text-base text-white/80 sm:text-lg"
          >
            Strategy, creative, and performance under one roof. We launch faster, iterate smarter, and measure what actually moves revenue.
          </motion.p>

          {/* trust chips */}
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2 text-[12px] font-semibold text-white/90">
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20">NDA & secure access</span>
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20">5‑day onboarding sprint</span>
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20">Weekly KPI dashboards</span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200`}>
              <Sparkles className="h-3.5 w-3.5" /> Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">From storefront to brand to scale</h2>
            <p className="mt-4 text-gray-700">
              We’re a senior team of strategists, designers, and engineers helping modern brands launch faster and scale smarter. From identity to high‑converting storefronts and performance campaigns — we execute end‑to‑end.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-800">
              <li className="flex items-start gap-3"><Target className="mt-0.5 h-4 w-4 text-orange-700"/> Playbooks tied to revenue KPIs</li>
              <li className="flex items-start gap-3"><Gauge className="mt-0.5 h-4 w-4 text-orange-700"/> Fast iteration with clear measurement</li>
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-orange-700"/> Governance, QA, and secure access</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <div className="col-span-2 row-span-2 h-64 w-full rounded-2xl bg-gradient-to-br from-orange-200 to-amber-100 p-2 shadow">
              <div className="h-full w-full rounded-xl bg-white/70" />
            </div>
            <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-amber-200 to-orange-100 p-2 shadow">
              <div className="h-full w-full rounded-xl bg-white/70" />
            </div>
            <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-2 shadow">
              <div className="h-full w-full rounded-xl bg-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
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
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Mission & Values</h2>
            <p className="mt-3 text-gray-600">What guides how we think, build, and partner.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <ValueCard title="Innovation" desc="We experiment, iterate, and push for better outcomes." Icon={Rocket} />
            <ValueCard title="Collaboration" desc="Transparent communication and shared ownership." Icon={Sparkles} />
            <ValueCard title="Excellence" desc="Pixel‑perfect craft and measurable performance." Icon={ShieldCheck} />
          </div>
        </div>
      </section>

      {/* OPERATING TIMELINE */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5">
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
            <div className="grid gap-6 px-6 py-10 md:grid-cols-4">
              {[
                { t: "Discover", d: "Audit, goals, KPI alignment" },
                { t: "Make", d: "Creative, builds, listings, ads" },
                { t: "Measure", d: "Dashboards, cohorts, QA" },
                { t: "Scale", d: "Optimization, expansion, new channels" },
              ].map((s) => (
                <div key={s.t} className="rounded-xl bg-orange-50/50 p-5 ring-1 ring-orange-200">
                  <div className="text-sm font-semibold text-orange-700">{s.t}</div>
                  <div className="text-sm text-gray-700">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white pb-8 pt-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-3 text-gray-600">A small, senior team focused on outcomes.</p>
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
              className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${COLORS.primaryFrom} ${COLORS.primaryTo} px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-500/30`}
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-800 via-orange-700 to-amber-600" />
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent to-black/10" />
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to build something exceptional?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Let’s turn your ideas into high‑performing digital products.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-7 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
          >
            <span className="relative">Work With Us</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
