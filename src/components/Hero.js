import React from "react";
import { Phone, Calendar, Users, Clock, Award, Headphones } from "lucide-react";

const Hero = ({ service }) => {
  return (
    <section className="relative bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-24">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {service?.title || "Build Your Digital Future With Us"}
            </h1>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
              {service?.description || "We deliver high-end digital solutions — from web & app development to branding and growth marketing. Our mission is to help businesses scale and thrive in the modern world."}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/onestopcreators"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00E5FF] text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                <div className="flex items-center gap-2">
                  <Calendar size={20} /> Schedule Consultation
                </div>
              </a>
              <a
                href="tel:0370-0411833"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                <div className="flex items-center gap-2">
                  <Phone size={20} /> Call: 0370-0411833
                </div>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
              <Users className="mx-auto mb-3 text-[#00E5FF]" size={28} />
              <div className="text-3xl font-bold">500+</div>
              <div className="text-gray-200">Projects Delivered</div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
              <Award className="mx-auto mb-3 text-[#FFD700]" size={28} />
              <div className="text-3xl font-bold">5+</div>
              <div className="text-gray-200">Years of Experience</div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
              <Users className="mx-auto mb-3 text-[#FF6B6B]" size={28} />
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
              <Headphones className="mx-auto mb-3 text-[#00E676]" size={28} />
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-gray-200">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
