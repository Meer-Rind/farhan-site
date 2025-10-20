import React from "react";

/**
 * Process (orange-first redesign)
 * - Keeps serviceId API the same
 * - Orange/amber palette
 * - Updated copy for clarity & quality
 * - New layout: responsive timeline grid + quality guarantees band
 */

const Process = ({ serviceId }) => {
  const processes = {
    tiktok: [
      { step: "01", title: "Strategy Blueprint", description: "ICP, market size, content pillars, and revenue model mapped to your goals.", icon: "fas fa-chess-board" },
      { step: "02", title: "Creative Sprints", description: "High-velocity hooks, edits, and UGC tailored to TikTok buying intent.", icon: "fas fa-video" },
      { step: "03", title: "Influencer Engine", description: "Recruit, brief, and manage creators with performance-based payouts.", icon: "fas fa-users" },
      { step: "04", title: "Ads & Optimization", description: "Spark Ads, audience testing, and ROAS-driven budget automation.", icon: "fas fa-chart-line" },
      { step: "05", title: "Checkout Lift", description: "Offer testing, bundles, and on-page UX to raise CVR and AOV.", icon: "fas fa-shopping-cart" },
      { step: "06", title: "Scale & Learn", description: "Daily dashboards, cohort analysis, and compounding learnings.", icon: "fas fa-chart-bar" }
    ],
    ebay: [
      { step: "01", title: "Store Audit", description: "Listing health, policy compliance, and competitor benchmarking.", icon: "fas fa-search" },
      { step: "02", title: "SEO + Structure", description: "Item specifics, taxonomy, and titles that rank and convert.", icon: "fas fa-cogs" },
      { step: "03", title: "Listing Enhancement", description: "Pro photos, A/B copy, and bullet clarity for skim readers.", icon: "fas fa-edit" },
      { step: "04", title: "Smart Pricing", description: "Repricer rules tuned to margin floors and buy-box dynamics.", icon: "fas fa-tag" },
      { step: "05", title: "Promoted Listings", description: "Campaign tiers that balance volume and profit.", icon: "fas fa-bullhorn" },
      { step: "06", title: "Performance Loop", description: "SKU pruning, returns reduction, and seller score uplift.", icon: "fas fa-chart-pie" }
    ],
    etsy: [
      { step: "01", title: "Brand Setup", description: "Shop identity, policies, and trust signals aligned to niche.", icon: "fas fa-store" },
      { step: "02", title: "Keyword System", description: "Long-tail tags and seasonal terms mapped per listing.", icon: "fas fa-key" },
      { step: "03", title: "Offer Craft", description: "Titles, benefits-first descriptions, and variant logic.", icon: "fas fa-box" },
      { step: "04", title: "Photography", description: "Lighting, scale, and context images that eliminate doubt.", icon: "fas fa-camera" },
      { step: "05", title: "Promotion", description: "Etsy Ads and social proof runs to lift recency score.", icon: "fas fa-bullhorn" },
      { step: "06", title: "Scale Winners", description: "Doubling down on SKUs with margin and review velocity.", icon: "fas fa-chart-line" }
    ],
    temu: [
      { step: "01", title: "Entry Strategy", description: "Category opportunity, cost model, and ops feasibility.", icon: "fas fa-lightbulb" },
      { step: "02", title: "Product Fit", description: "Trend scan, price brackets, and bundle concepts.", icon: "fas fa-search" },
      { step: "03", title: "Listing Creation", description: "Imagery, specs, and risk-free claims compliance.", icon: "fas fa-edit" },
      { step: "04", title: "Promo Setup", description: "Promotions + ads aligned to inventory cadence.", icon: "fas fa-bullhorn" },
      { step: "05", title: "Conversion Lift", description: "Urgency, shipping, and incentive tuning.", icon: "fas fa-tags" },
      { step: "06", title: "Scale", description: "Assortment expansion and cross-border rollout.", icon: "fas fa-rocket" }
    ],
    walmart: [
      { step: "01", title: "Onboarding", description: "Compliance checklist and fast listing eligibility.", icon: "fas fa-user-check" },
      { step: "02", title: "Catalog Setup", description: "Bulk uploads, GTIN hygiene, and category mapping.", icon: "fas fa-boxes" },
      { step: "03", title: "Search Lift", description: "Attributes, reviews, and relevance scoring.", icon: "fas fa-search" },
      { step: "04", title: "Sponsored Ads", description: "Query themes and negative keywords for ROAS.", icon: "fas fa-ad" },
      { step: "05", title: "Ops & SLA", description: "2‑day ship readiness, returns flow, and defect rate.", icon: "fas fa-truck" },
      { step: "06", title: "Profit Scale", description: "KPI cadence, SKU curation, and margin defense.", icon: "fas fa-chart-bar" }
    ],
    mercury: [
      { step: "01", title: "Consultation", description: "Objectives, constraints, and success definition.", icon: "fas fa-handshake" },
      { step: "02", title: "Strategy & Plan", description: "Growth levers, channels, and instrumentation.", icon: "fas fa-tasks" },
      { step: "03", title: "Systems Setup", description: "Stack integration, tracking, and governance.", icon: "fas fa-cogs" },
      { step: "04", title: "Execution", description: "Campaigns live with QA and fail-safes.", icon: "fas fa-rocket" },
      { step: "05", title: "Financial Ops", description: "Cash flow models and spend efficiency.", icon: "fas fa-dollar-sign" },
      { step: "06", title: "Ongoing Support", description: "Sprints, reviews, and roadmap evolution.", icon: "fas fa-headset" }
    ]
  };

  const process = processes[serviceId] || processes.tiktok;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/50 py-20">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <i className="fas fa-bolt" /> Proven Operating System
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Our Proven Process</h2>
          <p className="mt-3 text-lg text-gray-600">
            Clear steps. Strong controls. Compounding learnings. Built to deliver measurable revenue, not vanity metrics.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
            >
              {/* left accent */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-orange-600 to-amber-500" />

              {/* step + icon */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-amber-500 text-sm font-extrabold text-white shadow-sm">
                  {item.step}
                </div>
                <div className="text-orange-600">
                  <i className={`${item.icon} text-xl`} />
                </div>
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-orange-700">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>

              {/* micro-metrics */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-orange-800/80">
                <span className="rounded-full bg-orange-500/10 px-2 py-1 ring-1 ring-orange-400/20">SLA: 5‑day sprint</span>
                <span className="rounded-full bg-orange-500/10 px-2 py-1 ring-1 ring-orange-400/20">QA checkpoint</span>
                <span className="rounded-full bg-orange-500/10 px-2 py-1 ring-1 ring-orange-400/20">Owner assigned</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantees */}
        <div className="mt-14 rounded-2xl border border-orange-200/60 bg-white/70 p-6 backdrop-blur">
          <div className="grid items-center gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-orange-700">48h</div>
              <div className="text-sm text-gray-600">Creator response SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-orange-700">97.5%</div>
              <div className="text-sm text-gray-600">On‑time sprint delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-orange-700">+22%</div>
              <div className="text-sm text-gray-600">Median AOV uplift</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-orange-700">NPS 72</div>
              <div className="text-sm text-gray-600">Client satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5">
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">Ready to Start Your Journey?</h3>
            <p className="mt-2 text-lg text-gray-600">
              We plug into your stack in days, not months. Get a plan, sprint schedule, and clear targets on day one.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/onestopcreators"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                Begin Your Success Story
              </a>
              <a
                href="tel:0370-0411833"
                className="inline-flex items-center rounded-lg border-2 border-orange-600 px-8 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                <i className="fas fa-phone mr-2" /> 0370-0411833
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
