import React from "react";
import {
  Sparkles,
  Rocket,
  ShoppingBag,
  TrendingUp,
  Users,
  Globe2,
  ShieldCheck,
  ClipboardCheck,
  Handshake,
} from "lucide-react";

const About = () => {
  return (
    <div className="pt-16 text-gray-900">
      {/* HERO — image-free, orange gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
              <Sparkles className="h-3.5 w-3.5" /> We build stores. We build brands.
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              About <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">One Stop Creators</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We’re an e‑commerce growth studio. From zero to multi‑marketplace scale, we combine clean operations with
              performance creative to turn products into brands and brands into growth engines.
            </p>

            {/* quick stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[{v:"500+",l:"Projects Delivered"},{v:"1000+",l:"Happy Clients"},{v:"5+",l:"Years Experience"},{v:"15+",l:"Industries Served"}].map((s)=> (
                <div key={s.l} className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5">
                  <div className="text-3xl font-extrabold text-orange-700">{s.v}</div>
                  <div className="text-sm text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — story + collage */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-12">
            {/* copy */}
            <div className="md:col-span-7">
              <h2 className="text-3xl font-extrabold tracking-tight">Who We Are</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                At <strong>One Stop Creators</strong>, we’re builders. We craft storefronts people trust,
                content people watch, and operations that don’t break at scale. Startups and enterprises partner
                with us to launch, optimize, and expand across marketplaces and DTC — fast.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                Our playbooks are simple: data‑driven decisions, creator‑led storytelling, and ruthless execution.
                We measure what matters — GMV, ROAS, AOV, retention — and we iterate until it sticks.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { Icon:Rocket, title:"Launch fast", sub:"Days, not months" },
                  { Icon:ShoppingBag, title:"Own the shelf", sub:"Search + creative" },
                  { Icon:TrendingUp, title:"Scale profit", sub:"Margin first" },
                ].map(({Icon,title,sub})=> (
                  <div key={title} className="rounded-2xl border border-orange-200/60 bg-white p-5">
                    <Icon className="h-6 w-6 text-orange-600" />
                    <h4 className="mt-2 font-semibold">{title}</h4>
                    <p className="text-xs text-gray-600">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* collage */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop"
                  alt="Marketplaces dashboard"
                  className="h-56 w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5 sm:h-64"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80&auto=format&fit=crop"
                  alt="Creative production"
                  className="mt-8 h-56 w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5 sm:h-64"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop"
                  alt="Team celebrating results"
                  className="col-span-2 h-60 w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5 sm:h-72"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES — mission & values */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Mission & Values</h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-gray-700">
            Our mission is simple: ship work that moves revenue and builds brand equity. We do it through
            <strong> innovation</strong>, <strong>collaboration</strong>, and <strong>excellence</strong>.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title:"Innovation", desc:"Creative testing meets clean data and fast iteration.", Icon:Sparkles },
              { title:"Collaboration", desc:"Radical transparency, shared dashboards, weekly reviews.", Icon:Handshake },
              { title:"Excellence", desc:"QA, governance, and pride in the craft, every sprint.", Icon:ClipboardCheck },
            ].map(({title,desc,Icon})=> (
              <div key={title} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
                <Icon className="mx-auto h-6 w-6 text-orange-600" />
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-1 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE BUILD BRANDS — timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">From Storefront to Brand</h2>
            <p className="mt-3 text-lg text-gray-700">A simple system engineered for speed and compounding gains.</p>
          </div>

          <ol className="mt-12 grid gap-6 lg:grid-cols-4">
            {[
              { step:"01", title:"Discover", text:"ICP, competitors, channel mix, constraints." },
              { step:"02", title:"Make", text:"Listings, creative, offers, and funnels live fast." },
              { step:"03", title:"Measure", text:"KPI cadence, cohorts, and actionable insight." },
              { step:"04", title:"Scale", text:"Iterate, expand marketplaces, defend margin." },
            ].map((s)=> (
              <li key={s.step} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-sm font-bold text-white">{s.step}</span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRUST STRIP — compliance & reach */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { Icon:ShieldCheck, v:"SOC‑ready", l:"Security & NDA" },
              { Icon:Users, v:"50+", l:"Experts & creators" },
              { Icon:Globe2, v:"7", l:"Markets scaled" },
              { Icon:TrendingUp, v:"2.7x", l:"Median GMV lift" },
            ].map(({Icon,v,l})=> (
              <div key={l} className="rounded-2xl border border-orange-200/60 bg-white p-6 text-center shadow-sm">
                <Icon className="mx-auto h-6 w-6 text-orange-600" />
                <div className="mt-2 text-2xl font-extrabold text-orange-700">{v}</div>
                <div className="text-sm text-gray-600">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW — compact, link to /team */}
      <section className="bg-gradient-to-b from-white to-orange-50/40 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Meet the Team</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">A tight crew of builders, analysts, and creators — organized in 5‑day sprints.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name:"John Doe", role:"Founder & CEO", img:"https://randomuser.me/api/portraits/men/32.jpg" },
              { name:"Jane Smith", role:"Creative Director", img:"https://randomuser.me/api/portraits/women/44.jpg" },
              { name:"David Johnson", role:"Lead Developer", img:"https://randomuser.me/api/portraits/men/65.jpg" },
            ].map((m)=> (
              <div key={m.name} className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-black/5">
                <img src={m.img} alt={m.name} className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-orange-100" loading="lazy" />
                <h3 className="mt-3 text-lg font-bold">{m.name}</h3>
                <p className="text-sm text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>

          <a
            href="/team"
            className="mx-auto mt-8 inline-flex items-center rounded-full border border-orange-300 bg-white px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Meet the Full Team
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Ready to build a brand, not just a store?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Plug us into your stack. We’ll bring the dashboards, the creators, and the operations.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-700 shadow-lg transition hover:bg-gray-100">
              Get in Touch
            </a>
            <a href="https://calendly.com/onestopcreators" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
