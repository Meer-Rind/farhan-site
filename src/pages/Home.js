import React from "react";
import Services from "../components/Services";
import VideoGallery from "../components/VideoGallery";
import Testimonials from "../components/Testimonials";
import {
  CheckCircle2,
  Clock4,
  Headset,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  PlayCircle,
  Rocket,
  Globe2,
  BarChart3,
  LineChart,
} from "lucide-react";

/**
 * HOME (Orange-first redesign)
 * ---------------------------------------------------------
 * Notes for integration
 * - Keep route/page name as `Home` per your request
 * - No Header/Footer here (you said those live elsewhere)
 * - Color system: warm oranges with neutral graphite grays
 * - Add your stat images to /public/images (filenames used below)
 */

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[560px] w-[560px] rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-amber-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                <Sparkles className="h-3.5 w-3.5" /> E‑commerce growth studio
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Convert more. Ship faster. <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Scale everywhere.
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-gray-600">
                We help brands win across marketplaces and DTC with clean execution,
                performance creative, and numbers you can trust.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-orange-500 hover:text-orange-600"
                >
                  How we work
                </a>
              </div>

              {/* Quick proof row */}
              <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center sm:text-left">
                {[{kpi:"GMV+",v:"2.7x"},{kpi:"CPA",v:"-38%"},{kpi:"AOV",v:"+22%"}].map(({kpi,v})=> (
                  <div key={kpi} className="rounded-xl border border-orange-200/60 bg-orange-50 px-4 py-3">
                    <div className="text-2xl font-extrabold text-orange-700">{v}</div>
                    <div className="text-xs font-semibold text-orange-800/80">{kpi}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
                  <img
                    src="https://cdn.prod.website-files.com/6298f816727c4877f3fc6f6f/64a32992bf9eb5d9e2baef93_29ralQyTfrtD5ex6aHb7ME1fh2BxYgBc_38XdeQZGDDpRVW6E-cPUx85CAXBf-U8Gs0iZ7rvSEuDSd3o0x8W1Bjbx8CVpW__5sisAKPEKxXS201DlnrmE7-miVn94z3udwtEcrRnaFDaY-JW6mWHytE.png"
                    alt="Performance dashboard preview"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02k_2jeLJ0f7dcJfuoBjCzuoP7wg0Nw8MOA&s","https://cdn.prod.website-files.com/5f60c731c7ffa072ec98ef9c/622687e750ba3f014c8ea0b4_rQTPVrEWLODSDWxddYV11M6oYkXEGvrZE0lsRdD8FkStwzCMrMRwixLTyvs8Zvms0F7fSzO1rilUvOQqOXUSPS09I-SOSHcDZaLFg43icL9CqwOCREP1Nxp7Hm_-W8v4EYNe68qGk3csucifWcM.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkJ-kSUzMAKc2zBld8hceEHGCzQ28rpaiow&s"].map((src,i)=> (
                    <img key={i} src={src} alt="Hero supporting visual" className="h-24 w-full rounded-lg object-cover ring-1 ring-black/5" loading="lazy" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* trust bar */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white/60 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-500">
              <span className="text-sm">Trusted by brands across marketplaces</span>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" />
              {[
                "Amazon","eBay","TikTok Shop","Shopify","Walmart"
              ].map((b)=> (
                <div key={b} className="font-semibold opacity-70">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-b from-white to-orange-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                <Headset className="h-3.5 w-3.5" /> Services
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">What we execute for you</h2>
            </div>
            <a href="/contact" className="hidden rounded-lg border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50 sm:inline-flex">
              Get a tailored plan
            </a>
          </div>

          <div className="mt-8">
            {/* Your existing component retained, now framed in orange theme */}
            <Services />
          </div>
        </div>
      </section>

      {/* PROOF & STATS with image slots */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">Numbers that move the needle</h2>
            <p className="mt-3 text-lg text-gray-600">Real commerce metrics, not vanity. Plug your screenshots or exports below.</p>
          </div>

          {/* KPI cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {Icon:TrendingUp,label:"Monthly GMV",value:"$1.4M",hint:"Last 30 days"},
              {Icon:BarChart3,label:"Conversion Rate",value:"3.8%",hint:"Storewide"},
              {Icon:LineChart,label:"AOV",value:"$62.40",hint:"Rolling 90d"},
              {Icon:ShieldCheck,label:"Fulfillment SLA",value:"98.9%",hint:"Under 48h"},
            ].map(({Icon,label,value,hint})=> (
              <div key={label} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-semibold text-gray-500">{label}</span>
                </div>
                <div className="mt-2 text-3xl font-extrabold">{value}</div>
                <div className="mt-1 text-xs text-gray-500">{hint}</div>
              </div>
            ))}
          </div>

          {/* Image placeholders (replace with real images) */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {src:"/images/stats-gmv.png",title:"GMV growth (YoY)"},
              {src:"/images/stats-orders.png",title:"Orders by channel"},
              {src:"/images/stats-conversion.png",title:"Conversion funnel"},
              {src:"/images/stats-topcats.png",title:"Top categories"},
            ].map(({src,title})=> (
              <figure key={title} className="rounded-2xl border border-orange-200/60 bg-orange-50/40 p-3">
                <img src={src} alt={title} className="aspect-[16/10] w-full rounded-xl object-cover ring-1 ring-black/5" loading="lazy" />
                <figcaption className="mt-2 text-xs font-semibold text-orange-800/80">{title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (clean timeline) */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">A four‑step engine</h2>
            <p className="mt-3 text-lg text-gray-600">Built for speed, clarity, and compounding gains.</p>
          </div>

          <ol className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {step:"01",title:"Discover",text:"Audit, goals, constraints."},
              {step:"02",title:"Plan",text:"Channel strategy & sprints."},
              {step:"03",title:"Launch",text:"Listings, creative, ads."},
              {step:"04",title:"Scale",text:"Optimize & expand."},
            ].map((s)=> (
              <li key={s.step} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight">What partners say</h2>
            <a href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:underline">
              See our approach <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <Testimonials serviceId="tiktok" />
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="bg-gradient-to-b from-white to-orange-50/60 pb-6 pt-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight">See it in action</h2>
            <a href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:underline">
              Watch more <PlayCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <VideoGallery />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500" />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&q=80&auto=format&fit=crop')", backgroundSize:'cover', backgroundPosition:'center'}} />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Let’s write your next growth chapter</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            From listings to performance ads and operations — we manage the stack end‑to‑end.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-700 shadow-lg transition hover:bg-gray-100"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
