import React from "react";
import { testimonialsData } from "../data/testimonialsData";
import { Star, Quote } from "lucide-react";

const Testimonials = ({ serviceId }) => {
  const testimonials = testimonialsData[serviceId] || testimonialsData.tiktok || [];

  const Stars = ({ rating = 5 }) => (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => {
        const active = i < rating;
        return (
          <Star
            key={i}
            className={`h-5 w-5 ${active ? "text-orange-400" : "text-gray-300"}`}
            strokeWidth={2}
            // lucide icons are stroke-only; we emulate fill by overlaying opacity via drop-shadow of text color look
            // Optionally, you could swap to a filled SVG if you prefer true fills.
          />
        );
      })}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/40 py-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <Quote className="h-3.5 w-3.5" /> What our partners say
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">What Our Clients Say</h2>
          <p className="mt-3 text-lg text-gray-600">
            Real outcomes, real relationships. Here’s a snapshot of the wins we’ve created together.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
            >
              {/* accent bar */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-orange-600 to-amber-500" />

              <header className="mb-5 flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="mr-4 h-14 w-14 rounded-full object-cover ring-2 ring-orange-100"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm font-semibold text-orange-700">{t.company}</p>
                  <p className="text-xs text-gray-500">{t.service}</p>
                </div>
              </header>

              <div className="mb-3"><Stars rating={t.rating} /></div>

              <p className="relative text-gray-700">
                <span className="absolute -left-2 -top-3 text-3xl text-orange-200">“</span>
                {t.text}
                <span className="ml-0.5 text-3xl text-orange-200">”</span>
              </p>
            </article>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-20">
          <h3 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">Video Testimonials</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Two quick stories from partners who scaled faster with our playbooks.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/embed/9bZkp7q19f0"].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={src}
                    title={`Client Testimonial Video ${i + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
          <div className="px-6 py-10 md:px-10">
            <div className="grid gap-8 text-center md:grid-cols-4">
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "500+", label: "Happy Clients" },
                { value: "4.9/5", label: "Average Rating" },
                { value: "95%", label: "Retention Rate" },
              ].map((s) => (
                <div key={s.label} className="">
                  <div className="text-4xl font-extrabold text-orange-700">{s.value}</div>
                  <div className="text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
