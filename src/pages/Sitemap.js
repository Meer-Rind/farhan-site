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
        { name: "Home", path: "/" , icon: Home },
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
      : section.links.filter((l) =>
          l.name.toLowerCase().includes(normalized)
        ),
  }));
  const totalLinks = pages.reduce((acc, s) => acc + s.links.length, 0);
  const totalVisible = filtered.reduce((acc, s) => acc + s.links.length, 0);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Sitemap</h1>
          <p className="text-white/90 text-lg">
            Complete overview of all pages on our website
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-2xl">
            <label
              htmlFor="sitemap-search"
              className="sr-only"
            >
              Search pages
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
              <input
                id="sitemap-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, sections, or services…"
                className="w-full rounded-2xl bg-white/15 px-12 py-3 text-white placeholder-white/60 shadow ring-1 ring-white/20 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
            <p className="mt-2 text-sm text-white/80">
              Showing {totalVisible} of {totalLinks} links
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((section, idx) => {
            const SecIcon = section.icon || FileText;
            const count = section.links.length;
            if (count === 0) return null;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 ring-1 ring-black/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <SecIcon className="h-5 w-5" />
                    </span>
                    <h2 className="text-lg font-bold text-gray-900">
                      {section.category}
                    </h2>
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
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
                            className="group flex items-center justify-between rounded-xl px-3 py-2 text-blue-700 transition hover:bg-blue-50"
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
                            className="group flex items-center justify-between rounded-xl px-3 py-2 text-blue-700 transition hover:bg-blue-50"
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

        {/* HELP CARD */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center ring-1 ring-black/5">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Can’t Find What You’re Looking For?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our support team for assistance with any questions or issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@onestopcreators.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Email Support
            </a>
            <a
              href="tel:0370-0411833"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Call: 0370-0411833
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
