import React from "react";
import { Link } from "react-router-dom";

function useScrollToTopOnFooterNav() {
  const onClick = React.useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 0);
  }, []);
  return onClick;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleFooterNav = useScrollToTopOnFooterNav();

  const social = [
    { icon: "fab fa-facebook-f", link: "https://www.facebook.com/profile.php?id=61581622024741", color: "hover:text-orange-400", label: "Facebook" },
    { icon: "fab fa-twitter", link: "#", color: "hover:text-orange-400", label: "Twitter" },
    { icon: "fab fa-instagram", link: "https://www.instagram.com/one.stopcreators/", color: "hover:text-orange-400", label: "Instagram" },
    { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/company/one-stop-creators/?originalSubdomain=pk", color: "hover:text-orange-400", label: "LinkedIn" },
    { icon: "fab fa-youtube", link: "https://www.youtube.com/@OneStopCreators", color: "hover:text-orange-400", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services/tiktok" },
    { name: "Our Team", path: "/team" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    { name: "TikTok Shop", path: "/services/tiktok" },
    { name: "eBay Store", path: "/services/ebay" },
    { name: "Etsy Shop", path: "/services/etsy" },
    { name: "Temu Store", path: "/services/temu" },
    { name: "Walmart Marketplace", path: "/services/walmart" },
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* subtle orange glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-orange-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Company Info */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="mb-6 flex items-center">
             <div className="flex h-12 w-12 items-center justify-center rounded-lg overflow-hidden shadow-md shadow-orange-900/20 ring-1 ring-white/10 bg-white">
  <img
    src={require("../images/Symbol.jpg")}
    alt="One Stop Creators Logo"
    className="h-12 w-12 object-contain"
  />
</div>

              <h3 className="ml-3 text-2xl font-bold tracking-tight text-white">One Stop Creators</h3>
            </div>
            <p className="mb-6 max-w-prose leading-relaxed text-gray-400">
              We are a full‑service digital agency providing complete e‑commerce and marketing solutions. From
              TikTok shops to enterprise platforms, our team helps brands grow with proven strategies and results.
            </p>

            <div className="flex flex-wrap gap-3">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition ring-1 ring-white/10 hover:bg-gray-800 ${s.color}`}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>

            {/* trust badge row */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-2.5 py-1 font-semibold text-orange-300 ring-1 ring-inset ring-orange-400/20">
                <i className="fas fa-shield-alt" /> Secure & Trusted
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-2.5 py-1 font-semibold text-orange-300 ring-1 ring-inset ring-orange-400/20">
                <i className="fas fa-star" /> 5‑Star Support
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="md:col-span-3 lg:col-span-2">
            <h4 className="mb-5 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    onClick={handleFooterNav}
                    className="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                  >
                    <i className="fas fa-chevron-right text-xs opacity-60 transition group-hover:text-orange-400" />
                    <span className="group-hover:text-orange-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-5 text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    to={s.path}
                    onClick={handleFooterNav}
                    className="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                  >
                    <i className="fas fa-chevron-right text-xs opacity-60 transition group-hover:text-orange-400" />
                    <span className="group-hover:text-orange-200">{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="md:col-span-12 lg:col-span-2">
            <h4 className="mb-5 text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Phone:</p>
                <a href="tel:03700411833" onClick={handleFooterNav} className="text-gray-400 transition hover:text-orange-300">
                  0370-0411831
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Email:</p>
                <a
                  href="mailto:info@onestopcreators.com"
                  onClick={handleFooterNav}
                  className="break-all text-gray-400 transition hover:text-orange-300"
                >
                  info@onestopcreators.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Locations:</p>
                <p className="text-gray-400">📍 Lahore, Pakistan</p>
                <p className="text-gray-400">📍 London, United Kingdom</p>
              </div>
              <div>
                <p className="font-medium text-white">Working Hours:</p>
                <p className="text-gray-400">Mon - Sat: 09:00 - 17:00</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-1 text-lg font-semibold text-white">Subscribe to our Newsletter</h4>
              <p className="text-sm text-gray-400">Stay updated with the latest strategies, tips, and exclusive offers.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: Hook into your newsletter service
              }}
              className="flex overflow-hidden rounded-md ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-orange-500"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
                onClick={handleFooterNav}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} <span className="text-white">One Stop Creators</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/sitemap" onClick={handleFooterNav} className="transition hover:text-orange-300">
              Sitemap
            </Link>
            <Link to="/faq" onClick={handleFooterNav} className="transition hover:text-orange-300">
              FAQ
            </Link>
            <Link to="/support" onClick={handleFooterNav} className="transition hover:text-orange-300">
              Support
            </Link>
            <div className="flex items-center gap-2 text-orange-300">
              <i className="fas fa-shield-alt" />
              <span>Secure &amp; Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
