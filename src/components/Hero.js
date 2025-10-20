import React from "react";
import { Phone, Calendar, Users, Clock, Award, Headphones } from "lucide-react";

/**
 * HERO (orange-first, no background image)
 * - Clean gradient backdrop with soft blobs
 * - Left: headline, subhead, CTAs
 * - Right: compact stat cards
 * - Accepts optional `service` prop { title, description, ctaText }
 */

const Hero = ({ service }) => {
  return (
    <section className="relative overflow-hidden text-gray-900">
      {/* soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
              <Clock className="h-3.5 w-3.5" /> Speed • Clarity • Scale
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {service?.title || (
                <>
                  Build Your Next <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Growth Chapter</span>
                </>
              )}
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
              {service?.description ||
                "We launch, optimize, and scale e‑commerce across marketplaces and DTC. Clean execution, performance creative, and numbers you can trust."}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://calendly.com/onestopcreators"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                <Calendar className="h-4 w-4" /> {service?.ctaText || "Schedule Consultation"}
              </a>
              <a
                href="tel:0370-0411833"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-orange-600 px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                <Phone className="h-4 w-4" /> Call: 0370-0411833
              </a>
            </div>

            {/* trust chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-[12px] font-semibold text-orange-800/80">
              <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">NDA & data security</span>
              <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">Weekly KPI reporting</span>
              <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">5‑day sprints</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { Icon: Users, value: "500+", label: "Projects Delivered", tone: "text-orange-600" },
              { Icon: Award, value: "5+", label: "Years Experience", tone: "text-amber-600" },
              { Icon: Users, value: "1000+", label: "Happy Clients", tone: "text-orange-600" },
              { Icon: Headphones, value: "24/7", label: "Customer Support", tone: "text-amber-600" },
            ].map(({ Icon, value, label, tone }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
              >
                <Icon className={`mx-auto mb-2 ${tone}`} size={26} />
                <div className="text-3xl font-extrabold">{value}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
    </section>
  );
};

export default Hero;
