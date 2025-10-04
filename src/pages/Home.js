import React from "react";
import Hero from "../components/Hero";
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO (keep your existing Hero component) */}
      <Hero />

      {/* TRUST BAR */}
      <section aria-label="Trusted by" className="border-y bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-500">
            <span className="text-sm">Trusted by brands across e-commerce</span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <div className="flex items-center gap-6 opacity-70">
              <div className="font-semibold">Amazon</div>
              <div className="font-semibold">eBay</div>
              <div className="font-semibold">TikTok Shop</div>
              <div className="font-semibold">Shopify</div>
              <div className="font-semibold">Walmart</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (keep your component) */}
      <Services />

      {/* ABOUT — polished layout + icons */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                <Sparkles className="h-3.5 w-3.5" /> ABOUT One Stop CreatORS
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
                We Make Your Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">Profitable</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We’re a team of specialists in growth, content, and marketplace ops. From boosting engagement to running
                scalable campaigns — we handle the heavy lifting so you can focus on your brand.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                Transparent processes, measurable results. Listings, ads, fulfillment, influencer strategy — all under one
                roof. Our workflow blends data with creative to unlock consistent revenue.
              </p>

              {/* value bullets */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-blue-50 p-5 text-center">
                  <Clock4 className="mx-auto mb-2 h-6 w-6 text-blue-700" />
                  <h4 className="font-semibold text-gray-900">On-time Delivery</h4>
                  <p className="mt-1 text-xs text-gray-600">Reliable timelines</p>
                </div>
                <div className="rounded-2xl bg-purple-50 p-5 text-center">
                  <Headset className="mx-auto mb-2 h-6 w-6 text-purple-700" />
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="mt-1 text-xs text-gray-600">Always available</p>
                </div>
                <div className="rounded-2xl bg-green-50 p-5 text-center">
                  <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-green-700" />
                  <h4 className="font-semibold text-gray-900">Verified Pros</h4>
                  <p className="mt-1 text-xs text-gray-600">Certified experts</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right image collage */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop"
                alt="Team working collaboratively"
                className="h-56 w-full rounded-2xl object-cover shadow-lg sm:h-64"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&auto=format&fit=crop"
                alt="Modern office space"
                className="mt-8 h-56 w-full rounded-2xl object-cover shadow-lg sm:h-64"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop"
                alt="Team celebrating success"
                className="col-span-2 h-60 w-full rounded-2xl object-cover shadow-lg sm:h-72"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS (impact row) */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: TrendingUp,
                title: "Performance First",
                text: "Data-backed decisions, daily optimization, and clear KPIs.",
              },
              { icon: Rocket, title: "Faster Execution", text: "Lean sprints, rapid iteration, real momentum." },
              { icon: Globe2, title: "Omnichannel", text: "TikTok, eBay, Etsy, Walmart — we scale everywhere." },
              { icon: CheckCircle2, title: "Transparent", text: "Simple pricing, weekly reporting, shared dashboards." },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
              >
                <Icon className="h-6 w-6 text-blue-700" />
                <h3 className="mt-3 text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (target a key service) */}
      <Testimonials serviceId="tiktok" />

      {/* VIDEO GALLERY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Watch Our Work</h2>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
            >
              See how we execute <PlayCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <VideoGallery />
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">How We Work</h2>
            <p className="mt-3 text-lg text-gray-600">
              A simple, repeatable framework designed for speed and clarity.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", text: "Goal mapping, audit, and success metrics." },
              { step: "02", title: "Plan", text: "Channel strategy and sprint roadmap." },
              { step: "03", title: "Launch", text: "Creative, listings, ads — go live fast." },
              { step: "04", title: "Scale", text: "Optimize, iterate, and expand channels." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="text-5xl font-extrabold">500+</div>
              <div className="text-lg">Projects Completed</div>
              <p className="text-blue-100 mt-1 text-sm">Across all platforms</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold">50+</div>
              <div className="text-lg">Experts</div>
              <p className="text-blue-100 mt-1 text-sm">Skilled professionals</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold">5+</div>
              <div className="text-lg">Years Experience</div>
              <p className="text-blue-100 mt-1 text-sm">Industry expertise</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold">1000+</div>
              <div className="text-lg">Happy Customers</div>
              <p className="text-blue-100 mt-1 text-sm">Global clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                <ShieldCheck className="h-3.5 w-3.5" /> FAQs
              </p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">
                Straight answers. No fluff.
              </h3>
              <p className="mt-2 text-gray-600">
                Want details on timelines, pricing, or platforms? We’ve compiled the most common answers.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    q: "How fast can I see results?",
                    a: "Usually 2–4 weeks for initial traction; 3–6 months for compounding growth.",
                  },
                  {
                    q: "Do you sign NDAs?",
                    a: "Yes. We follow strict confidentiality and data security practices.",
                  },
                  {
                    q: "Which marketplaces do you cover?",
                    a: "TikTok Shop, eBay, Etsy, Walmart, Temu, plus Shopify integrations.",
                  },
                ].map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-gray-200 p-4 open:shadow-sm"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="font-semibold text-gray-900">{f.q}</span>
                      <span className="text-sm text-blue-700 group-open:rotate-180 transition">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">{f.a}</p>
                  </details>
                ))}
              </div>
              <a
                href="/faq"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                View all FAQs <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* small visual */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white shadow-lg">
              <h4 className="text-2xl font-extrabold">Ready to scale?</h4>
              <p className="mt-2 text-white/90">
                Book a free consultation. We’ll audit your setup and share a clear game plan with timelines and targets.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-gray-100"
                >
                  Talk to an Expert <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://calendly.com/onestopcreators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 py-16 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Let’s Build Your Next Growth Chapter</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            From product listings to performance ads and influencer ops — we manage the stack end-to-end.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition hover:bg-gray-100"
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
