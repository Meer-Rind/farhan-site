import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      name: "TikTok Shop",
      path: "/services/tiktok",
      description: "Complete TikTok Shop management and optimization",
      icon: "fas fa-store"
    },
    {
      name: "eBay",
      path: "/services/ebay",
      description: "eBay store optimization and management",
      icon: "fas fa-shopping-cart"
    },
    {
      name: "Etsy",
      path: "/services/etsy",
      description: "Etsy shop growth and optimization",
      icon: "fas fa-palette"
    },
    {
      name: "Temu",
      path: "/services/temu",
      description: "Temu marketplace expansion",
      icon: "fas fa-rocket"
    },
    {
      name: "Walmart",
      path: "/services/walmart",
      description: "Walmart Marketplace solutions",
      icon: "fas fa-building"
    },
    {
      name: "Mercury",
      path: "/services/mercury",
      description: "Complete business solutions",
      icon: "fas fa-chart-line"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Special Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions for all major platforms to grow your online business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.path}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-blue-600 mb-4">
                <i className={`${service.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                {service.name}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;