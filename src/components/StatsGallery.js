import React from "react";
import { statsData } from "../data/statsData";

const StatsGallery = ({ serviceId }) => {
  const stats = statsData[serviceId] || [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/40 py-24">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-amber-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <i className="fas fa-trophy" /> Wins we can talk about
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
            Our Achievements <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">& Success Stories</span>
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Real, measurable results — presented with clarity. Clean visuals, honest numbers, and the story behind each lift.
          </p>
        </div>

        {/* airy spacer */}
        <div className="h-2" />

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
            >
              {/* Image */}
              <figure className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="h-full w-full origin-center scale-[1.01] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* top-right subtle label slot if provided */}
                {stat?.label && (
                  <figcaption className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm ring-1 ring-black/5">
                    {stat.label}
                  </figcaption>
                )}
                {/* gradient fade for legibility on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 transition group-hover:text-orange-700">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{stat.caption}</p>

                {/* Optional KPIs row if provided in data */}
                {Array.isArray(stat?.metrics) && stat.metrics.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2 text-[12px] font-semibold text-orange-800/80">
                    {stat.metrics.map((m, i) => (
                      <li key={i} className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* generous whitespace before CTA */}
        <div className="mt-20" />

        {/* Call to Action */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
          {/* top stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />

          <div className="px-8 py-12 md:px-14">
            <h3 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
              Ready to Write Your Success Story?
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-center text-lg text-gray-600">
              Partner with a team that pairs clean execution with accountable reporting. We scale what works and cut what doesn’t.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/onestopcreators"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-4 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                Start Your Journey
              </a>
              <a
                href="tel:0370-0411833"
                className="inline-flex items-center rounded-xl border-2 border-orange-600 px-8 py-4 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                Call: 0370-0411833
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGallery;
