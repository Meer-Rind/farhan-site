import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  Users,
  PhoneCall,
  FileText,
  Shield,
  Scale,
  RotateCcw,
  Cookie,
  HelpCircle,
  CalendarDays,
  ExternalLink,
  ChevronRight,
  Search,
} from "lucide-react";

export default function Sitemap() {
  const [query, setQuery] = React.useState("");

  const pages = [
    {
      category: "Main Pages",
      icon: LayoutDashboard,
      links: [
        { name: "Home", path: "/", icon: Home },
        { name: "About Us", path: "/about", icon: FileText },
        { name: "Our Team", path: "/team", icon: Users },
        { name: "Contact Us", path: "/contact", icon: PhoneCall },
      ],
    },
    {
      category: "Services",
      icon: FileText,
      links: [
        { name: "TikTok Shop Services", path: "/services/tiktok" },
        { name: "eBay Store Services", path: "/services/ebay" },
        { name: "Etsy Shop Services", path: "/services/etsy" },
        { name: "Temu Store Services", path: "/services/temu" },
        { name: "Walmart Marketplace Services", path: "/services/walmart" },
        { name: "Mercury Services", path: "/services/mercury" },
      ],
    },
    {
      category: "Legal",
      icon: Shield,
      links: [
        { name: "Privacy Policy", path: "/privacy-policy", icon: Shield },
        { name: "Terms & Conditions", path: "/terms-conditions", icon: Scale },
        { name: "Refund Policy", path: "/refund-policy", icon: RotateCcw },
        { name: "Cookie Policy", path: "/cookie-policy", icon: Cookie },
      ],
    },
    {
      category: "Support",
      icon: HelpCircle,
      links: [
        { name: "FAQ", path: "/faq", icon: HelpCircle },
        { name: "Support Center", path: "/support", icon: PhoneCall },
        {
          name: "Schedule Meeting",
          external: "https://calendly.com/onestopcreators",
          icon: CalendarDays,
        },
      ],
    },
  ];

  const normalized = query.trim().toLowerCase();
  const filtered = pages.map((section) => ({
    ...section,
    links: !normalized
      ? section.links
      : section.links.filter((l) => l.name.toLowerCase().includes(normalized)),
  }));
  const totalLinks = pages.reduce((acc, s) => acc + s.links.length, 0);
  const totalVisible = filtered.reduce((acc, s) => acc + s.links.length, 0);

  const anyResults = totalVisible > 0;

  return (
    <div className="min-h-screen pt-20">
      {/* HERO — orange-first, image-free */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <LayoutDashboard className="h-3.5 w-3.5" /> Site Index
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Sitemap</h1>
          <p className="mt-2 text-lg text-gray-600">Complete overview of all pages on our website</p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-2xl">
            <label htmlFor="sitemap-search" className="sr-only">
              Search pages
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-700/80" />
              <input
                id="sitemap-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, sections, or services…"
                className="w-full rounded-2xl bg-white px-12 py-3 text-gray-900 placeholder-gray-500 shadow ring-1 ring-black/10 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Showing <span className="font-semibold text-orange-700">{totalVisible}</span> of {totalLinks} links
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="bg-gradient-to-b from-white to-orange-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          {anyResults ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filtered.map((section, idx) => {
                const SecIcon = section.icon || FileText;
                const count = section.links.length;
                if (count === 0) return null;

                return (
                  <div key={idx} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                          <SecIcon className="h-5 w-5" />
                        </span>
                        <h2 className="text-lg font-bold text-gray-900">{section.category}</h2>
                      </div>
                      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
                        {count}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {section.links.map((link, i) => {
                        const ItemIcon = link.icon || ChevronRight;
                        return (
                          <li key={i}>
                            {link.external ? (
                              <a
                                href={link.external}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-xl px-3 py-2 text-orange-700 transition hover:bg-orange-50"
                              >
                                <span className="flex items-center gap-3">
                                  <ItemIcon className="h-4 w-4" />
                                  <span className="font-medium">{link.name}</span>
                                </span>
                                <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" />
                              </a>
                            ) : (
                              <Link
                                to={link.path}
                                className="group flex items-center justify-between rounded-xl px-3 py-2 text-orange-700 transition hover:bg-orange-50"
                              >
                                <span className="flex items-center gap-3">
                                  <ItemIcon className="h-4 w-4" />
                                  <span className="font-medium">{link.name}</span>
                                </span>
                                <ChevronRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" />
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            // Empty State
            <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg ring-1 ring-black/5">
              <h3 className="text-2xl font-extrabold text-gray-900">No matches found</h3>
              <p className="mt-2 text-gray-600">
                Try different keywords or clear your search to see all pages.
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:brightness-110"
              >
                Clear search
              </button>
            </div>
          )}

          {/* HELP CARD */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-white p-0 text-center shadow-2xl ring-1 ring-black/5">
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
            <div className="px-8 py-10">
              <h2 className="text-2xl font-bold text-gray-900">Can’t Find What You’re Looking For?</h2>
              <p className="mt-2 text-gray-600">Contact our support team for assistance with any questions or issues.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:support@onestopcreators.com"
                  className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 font-semibold text-white shadow transition hover:brightness-110"
                >
                  Email Support
                </a>
                <a
                  href="tel:0370-0411833"
                  className="rounded-xl border-2 border-orange-600 px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-50"
                >
                  Call: 0370-0411833
                </a>
              </div>
              <p className="mt-4 text-xs text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
