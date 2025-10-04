import React from "react";
import { statsData } from "../data/statsData";

const StatsGallery = ({ serviceId }) => {
  const stats = statsData[serviceId] || [];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Achievements <span className="text-blue-600">& Success Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real, measurable results that showcase our dedication, expertise, and
            proven success in empowering businesses worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white p-4 text-sm">{stat.caption}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {stat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stat.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-10 md:p-14 max-w-5xl mx-auto relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 blur-2xl opacity-30"></div>

            <h3 className="text-4xl font-extrabold text-white mb-6 relative z-10">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto relative z-10">
              Partner with us and join the growing list of businesses that scaled
              faster, smarter, and more efficiently.
            </p>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a
                href="https://calendly.com/onestopcreators"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition-all"
              >
                Start Your Journey
              </a>
              <a
                href="tel:0370-0411833"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all"
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
