import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "TikTok Shop",
      description:
        "We deliver guaranteed results on TikTok Shop — from creator-powered Spark Ads to optimized store UX. 100% confidence in our strategy, execution, and conversions.",
      image:
        "https://i.pinimg.com/736x/e3/37/53/e337539242434bbd92531c5728dcd75f.jpg",
      highlights: [
        "UGC + Spark Ads",
        "Creator affiliate CRM",
        "Offer & bundle testing",
      ],
      kpi: { label: "Median ROAS lift", value: "2.1x" },
    },
    {
      name: "eBay",
      description:
        "We master eBay ranking and profit growth — blending SEO, creative listings, and smart repricing. You’ll see real, scalable sales results backed by proven systems.",
      image:
        "https://static.vecteezy.com/system/resources/previews/020/336/172/non_2x/ebay-logo-ebay-icon-free-free-vector.jpg",
      highlights: ["Item specifics SEO", "Photo & copy A/B", "Smart repricer rules"],
      kpi: { label: "Buy-box win rate", value: "↑ 18%" },
    },
    {
      name: "Etsy",
      description:
        "We create high-performing Etsy stores that connect emotionally and convert instantly — branding, keywords, and visuals that make you stand out with confidence.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/1200px-Etsy_logo.svg.png",
      highlights: ["Keyword map per SKU", "Brand story polish", "Review velocity plan"],
      kpi: { label: "Conversion rate", value: "3.4% → 4.6%" },
    },
    {
      name: "Temu",
      description:
        "We help brands dominate on Temu with compliant growth, optimized listings, and result-driven ad campaigns. Real data. Real ROI. 100% professional execution.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIGa5qr2_O7K9W8h0Fa8UsxyKDxek0rQO2w&s",
      highlights: ["Category opportunity", "Promo & ads rhythm", "Assortment scaling"],
      kpi: { label: "30-day GMV", value: "+27%" },
    },
    {
      name: "Walmart",
      description:
        "We manage Walmart stores end-to-end — from SEO to Sponsored Ads — delivering consistent, guaranteed growth with complete transparency and confidence.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveJAtN6V0Fv3eb37slzUd02FwNHKsR9zHsw&s",
      highlights: ["GTIN & taxonomy", "SLA & returns flow", "Sponsored query themes"],
      kpi: { label: "Search visibility", value: "↑ 24%" },
    },
    {
      name: "Mercari",
      description:
        "We scale Mercari businesses strategically — improving operations, ad performance, and profit growth. Trusted by top sellers for reliable, long-term success.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1iTMpCUoiVjX-gdlxywWfAryXsLVkl2h3g&s",
      highlights: ["Stack integration", "Spend efficiency", "Quarterly roadmap"],
      kpi: { label: "Ops efficiency", value: "+19%" },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/50 py-20">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <i className="fas fa-bolt" /> Platforms We Dominate
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
            Our Proven Growth Services
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            100% performance-focused marketplace services — powered by expertise,
            precision, and complete confidence in delivering results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-orange-600 to-amber-500" />

              {/* ✅ Larger image & better spacing */}
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-orange-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-14 w-14 object-contain"
                    loading="lazy"
                  />
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700">
                  {service.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                {service.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    {service.kpi.label}
                  </div>
                  <div className="text-xl font-extrabold text-orange-700">
                    {service.kpi.value}
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700 transition group-hover:bg-orange-100">
                  View playbook <i className="fas fa-arrow-right" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
