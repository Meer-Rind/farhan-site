import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react"; // Dropdown icon

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "TikTok Shop", path: "/services/tiktok" },
    { name: "eBay", path: "/services/ebay" },
    { name: "Etsy", path: "/services/etsy" },
    { name: "Temu", path: "/services/temu" },
    { name: "Walmart", path: "/services/walmart" },
    { name: "Mercury", path: "/services/mercury" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" // 🔥 placeholder logo PNG
              alt="One Stop Creators"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-gray-800 tracking-tight">
              OneStop Creators
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-lg shadow-lg py-3 ring-1 ring-gray-200 z-50 animate-fade-in">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsServicesOpen(false)} // 🔥 closes dropdown on click
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/team"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Schedule Button */}
          <div className="flex items-center">
            <a
              href="https://calendly.com/onestopcreators"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg hover:bg-blue-700 transition-all font-medium"
            >
              Schedule Meeting
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
