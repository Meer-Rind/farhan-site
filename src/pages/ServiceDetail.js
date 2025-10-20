import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import Hero from '../components/Hero';
import StatsGallery from '../components/StatsGallery';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import VideoGallery from '../components/VideoGallery';
import {
  CheckCircle2,
  Rocket,
  GaugeCircle,
  Sparkles,
  ShieldCheck,
  Target,
  BarChart3,
  Megaphone,
  Boxes,
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Service Not Found</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO (uses your new orange-first Hero component) */}
      <Hero service={service} />

      {/* INTRO — premium two-column with orange accents */}
      <section className="bg-gradient-to-b from-white to-orange-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
                <Sparkles className="h-3.5 w-3.5" /> Comprehensive {service.title}
              </span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
                Launch fast. Operate clean. Scale profitably.
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                {service.description} Our team has helped hundreds of businesses achieve remarkable growth through
                clean execution, creator‑led storytelling, and a KPI cadence you can trust.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                We combine channel expertise with practical governance to deliver results that compound over time. Every
                strategy is customized to your brand, margins, and inventory realities.
              </p>

              {/* bullets */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Target, text: 'Proven playbooks & clear KPIs' },
                  { icon: ShieldCheck, text: 'NDA & security‑first operations' },
                  { icon: BarChart3, text: 'Dashboards, cohorts, and ROAS guardrails' },
                  { icon: Megaphone, text: 'Creator engine + performance ads' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-gray-900">{text}</span>
                  </div>
                ))}
              </div>

              {/* mini outcomes band */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { v: service?.stats?.projects ? `${service.stats.projects}+` : '500+', l: 'Projects' },
                  { v: service?.stats?.years ? `${service.stats.years}+` : '5+', l: 'Years Experience' },
                  { v: service?.stats?.clients ? `${service.stats.clients}+` : '1000+', l: 'Happy Clients' },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-white p-4 text-center shadow-lg ring-1 ring-black/5">
                    <div className="text-2xl font-extrabold text-orange-700">{s.v}</div>
                    <div className="text-sm text-gray-600">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* media */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full rounded-2xl shadow-2xl ring-1 ring-black/5"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 text-white shadow">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-orange-700">
                      {service?.stats?.projects ? `${service.stats.projects}+` : '500+'}
                    </div>
                    <div className="text-xs text-gray-600">Successful Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — outcome‑first grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">What You Get</h2>
            <p className="mt-2 text-lg text-gray-700">Everything you need to win on this channel — in one operating system.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(service.features || []).map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
                {/* accent */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-orange-600 to-amber-500" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Boxes className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-700">{feature}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Our expert team delivers comprehensive {feature.toLowerCase()} with clear KPIs, QA checkpoints, and sprint owners.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-orange-800/80">
                  <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">SLA: 5‑day sprint</span>
                  <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">QA review</span>
                </div>
              </div>
            ))}
          </div>

          {/* outcomes strip */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
            <div className="grid gap-6 px-6 py-10 text-center md:grid-cols-4">
              {[
                { v: '↑ 22%', l: 'Median AOV lift' },
                { v: '−18%', l: 'CPA decrease' },
                { v: '2.1x', l: 'ROAS improvement' },
                { v: 'NPS 72', l: 'Client satisfaction' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-extrabold text-orange-700">{s.v}</div>
                  <div className="text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Gallery (already themed orange) */}
      <StatsGallery serviceId={serviceId} />

      {/* Process (already themed orange) */}
      <Process serviceId={serviceId} />

      {/* Testimonials (already themed orange) */}
      <Testimonials serviceId={serviceId} />

      {/* Video Gallery (already themed orange) */}
      <VideoGallery />

      {/* FAQ mini */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">FAQs</h3>
            <p className="mt-2 text-gray-700">Straight answers so you know exactly how we operate.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { q: 'How fast can we go live?', a: 'We start with a discovery sprint and can launch within 5–10 business days depending on assets and access.' },
              { q: 'Do you work under NDA?', a: 'Yes. We operate with strict confidentiality, access control, and SOC‑ready practices.' },
              { q: 'How do you report results?', a: 'Weekly dashboards, KPI reviews, and recorded loom walkthroughs for clarity and alignment.' },
              { q: 'What if something underperforms?', a: 'We prune, iterate, and reallocate budget quickly. No vanity metrics — only actions tied to revenue.' },
            ].map((f, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white p-4 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <span className="text-sm text-orange-700 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — orange gradient */}
      <section className="relative overflow-hidden py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-extrabold">Ready to Transform Your Business?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Join the brands that trust us with their growth. Book a call and get a clear plan, sprint schedule, and targets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href="https://calendly.com/onestopcreators"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-700 shadow-md transition hover:bg-gray-100"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:0370-0411833"
              className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-orange-700"
            >
              <i className="fas fa-phone mr-2" /> 0370-0411833
            </a>
          </div>
          <p className="mt-6 text-white/80">Email: info@onestopcreators.com</p>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
