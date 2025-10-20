import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    { name: "TikTok Shop", path: "/services/tiktok" },
    { name: "eBay", path: "/services/ebay" },
    { name: "Etsy", path: "/services/etsy" },
    { name: "Temu", path: "/services/temu" },
    { name: "Walmart", path: "/services/walmart" },
    { name: "Mercury", path: "/services/mercury" },
  ];

  // Close dropdown on outside click / ESC
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-200/50 bg-white/85 backdrop-blur-md">
      {/* subtle orange top accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
         <Link to="/" className="group flex items-center gap-2">
  <span className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden shadow-md ring-1 ring-black/5">
    <img
      src={require("../images/Symbol.jpg")}
      alt="OneStop Creators Logo"
      className="h-10 w-10 object-contain"
    />
  </span>
  <span className="text-lg font-extrabold tracking-tight text-gray-900">
    OneStop{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
      Creators
    </span>
  </span>
</Link>


          {/* Right: Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="nav-link">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen((s) => !s)}
                className="nav-link inline-flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
              >
                Services <ChevronDown className={`ml-0.5 h-4 w-4 transition ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-xl border border-orange-200/60 bg-white shadow-xl ring-1 ring-black/5"
                  role="menu"
                >
                  <div className="grid gap-0 p-1">
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 transition hover:bg-orange-50 hover:text-orange-700"
                        role="menuitem"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/team" className="nav-link">
              Our Team
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>

            {/* CTA */}
            <a
              href="https://calendly.com/onestopcreators"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Schedule Meeting
            </a>
          </div>

          {/* Mobile: menu button */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-orange-200/60 text-gray-700 shadow-sm transition active:scale-95"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden">
          {/* overlay */}
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setMobileOpen(false)} />

          <div className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl ring-1 ring-black/5">
            <div className="flex items-center justify-between px-4 py-3 border-b border-orange-200/60">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-orange-600 to-amber-500 text-white shadow ring-1 ring-black/5">
                  <i className="fas fa-rocket" />
                </span>
                <span className="font-bold">OneStop Creators</span>
              </Link>
              <button aria-label="Close menu" className="rounded-md p-2 text-gray-700 hover:bg-orange-50" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-2 py-3">
              <Link to="/" onClick={() => setMobileOpen(false)} className="mobile-item">
                Home
              </Link>

              {/* Mobile Services accordion */}
              <details className="group">
                <summary className="mobile-item flex list-none items-center justify-between">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <div className="ml-2 mt-1 space-y-1">
                  {services.map((s, i) => (
                    <Link key={i} to={s.path} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link to="/about" onClick={() => setMobileOpen(false)} className="mobile-item">
                About Us
              </Link>
              <Link to="/team" onClick={() => setMobileOpen(false)} className="mobile-item">
                Our Team
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="mobile-item">
                Contact Us
              </Link>

              <a
                href="https://calendly.com/onestopcreators"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:brightness-110"
              >
                Schedule Meeting
              </a>
            </nav>

            {/* footer note */}
            <div className="px-4 pb-6 pt-2 text-xs text-gray-500">© {new Date().getFullYear()} OneStop Creators</div>
          </div>
        </div>
      )}

      {/* Tailwind component-level utilities */}
      <style>{`
        .nav-link { position: relative; font-weight: 600; color: #374151; }
        .nav-link:hover { color: #c2410c; }
        .nav-link::after { content: ""; position: absolute; left: 0; bottom: -10px; height: 2px; width: 0; background: linear-gradient(90deg,#ea580c,#f59e0b); border-radius: 2px; transition: width .25s; }
        .nav-link:hover::after { width: 100%; }
        .mobile-item { display:block; padding: .75rem 1rem; border-radius: .5rem; font-weight:600; color:#374151; }
        .mobile-item:hover { background:#fff7ed; color:#c2410c; }
      `}</style>
    </nav>
  );
};

export default Navbar;
