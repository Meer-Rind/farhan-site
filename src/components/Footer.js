import React from "react";
import { Link, useLocation } from "react-router-dom";

function useScrollToTopOnFooterNav() {
  // Returns a callback you can attach to any link in the footer
  const onClick = React.useCallback((e) => {
    // Let the router handle navigation, just scroll after
    // If you use <a> with target _blank, it won't matter
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
    { icon: "fab fa-facebook-f", link: "#", color: "hover:text-blue-500", label: "Facebook" },
    { icon: "fab fa-twitter", link: "#", color: "hover:text-sky-400", label: "Twitter" },
    { icon: "fab fa-instagram", link: "#", color: "hover:text-pink-500", label: "Instagram" },
    { icon: "fab fa-linkedin-in", link: "#", color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: "fab fa-youtube", link: "#", color: "hover:text-red-500", label: "YouTube" },
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Company Info */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
                <i className="fas fa-rocket text-white text-lg" />
              </div>
              <h3 className="ml-3 text-2xl font-bold text-white">One Stop Creators</h3>
            </div>
            <p className="mb-6 max-w-prose text-gray-400 leading-relaxed">
              We are a full-service digital agency providing complete e-commerce and
              marketing solutions. From TikTok shops to enterprise platforms, our team helps
              brands grow with proven strategies and results.
            </p>

            <div className="flex flex-wrap gap-3">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition ${s.color}`}
                >
                  <i className={s.icon} />
                </a>
              ))}
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
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <i className="fas fa-chevron-right text-xs opacity-60" />
                    {link.name}
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
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <i className="fas fa-chevron-right text-xs opacity-60" />
                    {s.name}
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
                <a href="tel:03700411833" onClick={handleFooterNav} className="hover:text-blue-400">
                  0370-0411833
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Email:</p>
                <a
                  href="mailto:info@onestopcreators.com"
                  onClick={handleFooterNav}
                  className="hover:text-blue-400 break-all"
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
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-1 text-lg font-semibold text-white">
                Subscribe to our Newsletter
              </h4>
              <p className="text-sm text-gray-400">
                Stay updated with the latest strategies, tips, and exclusive offers.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: Hook into your newsletter service
              }}
              className="flex overflow-hidden rounded-md ring-1 ring-gray-700 focus-within:ring-2 focus-within:ring-blue-500"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-6 py-3 text-white text-sm font-medium hover:bg-blue-700 transition"
                onClick={handleFooterNav}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} <span className="text-white">One Stop Creators</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/sitemap" onClick={handleFooterNav} className="hover:text-white">
              Sitemap
            </Link>
            <Link to="/faq" onClick={handleFooterNav} className="hover:text-white">
              FAQ
            </Link>
            <Link to="/support" onClick={handleFooterNav} className="hover:text-white">
              Support
            </Link>
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-green-500" />
              <span>Secure &amp; Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
