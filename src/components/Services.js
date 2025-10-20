import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      name: 'TikTok Shop',
      path: '/services/tiktok',
      description: 'Full-funnel TikTok Shop growth with creator engine, Spark Ads, and conversion UX.',
      icon: 'fas fa-store',
      highlights: ['UGC + Spark Ads', 'Creator affiliate CRM', 'Offer & bundle testing'],
      kpi: { label: 'Median ROAS lift', value: '2.1x' },
    },
    {
      name: 'eBay',
      path: '/services/ebay',
      description: 'Search-rank SEO, listing hygiene, and repricing tuned to profit — not just volume.',
      icon: 'fas fa-shopping-cart',
      highlights: ['Item specifics SEO', 'Photo & copy A/B', 'Smart repricer rules'],
      kpi: { label: 'Buy-box win rate', value: '↑ 18%' },
    },
    {
      name: 'Etsy',
      path: '/services/etsy',
      description: 'Niche-first branding, long‑tail tags, and visuals that eliminate buyer hesitation.',
      icon: 'fas fa-palette',
      highlights: ['Keyword map per SKU', 'Brand story polish', 'Review velocity plan'],
      kpi: { label: 'Conversion rate', value: '3.4% → 4.6%' },
    },
    {
      name: 'Temu',
      path: '/services/temu',
      description: 'Fast entry with compliant claims, promo cadence, and assortment expansion.',
      icon: 'fas fa-rocket',
      highlights: ['Category opportunity', 'Promo & ads rhythm', 'Assortment scaling'],
      kpi: { label: '30‑day GMV', value: '+27%' },
    },
    {
      name: 'Walmart',
      path: '/services/walmart',
      description: 'Catalog hygiene, 2‑day ship ops, and Sponsored Ads tuned for ROAS.',
      icon: 'fas fa-building',
      highlights: ['GTIN & taxonomy', 'SLA & returns flow', 'Sponsored query themes'],
      kpi: { label: 'Search visibility', value: '↑ 24%' },
    },
    {
      name: 'Mercury',
      path: '/services/mercury',
      description: 'Business stack, finance ops, and growth governance that scale with you.',
      icon: 'fas fa-chart-line',
      highlights: ['Stack integration', 'Spend efficiency', 'Quarterly roadmap'],
      kpi: { label: 'Ops efficiency', value: '+19%' },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/50 py-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <i className="fas fa-bolt" /> Platforms we run
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Our Special Services</h2>
          <p className="mt-3 text-lg text-gray-600">
            Multi‑marketplace execution that pairs clean ops with performance creative — so brands trust us with their stores.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
            >
              {/* Left accent */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-orange-600 to-amber-500" />

              {/* Icon + name */}
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-amber-500 text-white shadow-sm">
                  <i className={`${service.icon} text-base`} />
                </span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-700">{service.name}</h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>

              {/* Highlights */}
              <ul className="mt-4 space-y-2 text-sm">
                {service.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>

              {/* KPI + CTA row */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-gray-500">{service.kpi.label}</div>
                  <div className="text-xl font-extrabold text-orange-700">{service.kpi.value}</div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700 transition group-hover:bg-orange-100">
                  View playbook <i className="fas fa-arrow-right" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Proof strip */}
        <div className="mt-12 rounded-2xl border border-orange-200/60 bg-white/70 p-5 backdrop-blur">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 font-semibold text-orange-700">
              <i className="fas fa-shield-alt" /> NDA + data security ready
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-clipboard-check text-orange-600" /> Weekly KPI reporting
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-truck-fast text-orange-600" /> 5‑day sprint cycles
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-headset text-orange-600" /> Dedicated manager
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
