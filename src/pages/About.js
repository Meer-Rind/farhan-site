import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16">
      {/* Banner Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
            About One Stop Creators
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-gray-200 animate-fadeIn delay-200">
            A creative digital agency helping businesses grow through innovation,
            strategy, and technology-driven solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                At <strong>One Stop Creators</strong>, we are more than a team — 
                we’re your digital growth partners. From startups to enterprises, 
                we deliver scalable solutions designed to innovate, inspire, and grow.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                With expertise across eCommerce, web development, branding, 
                and mobile solutions, our mission is to craft impactful 
                digital experiences that make businesses stand out globally.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 shadow rounded-lg p-6 text-center hover:shadow-md transition">
                  <h3 className="text-3xl font-bold text-blue-600">5+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-gray-50 shadow rounded-lg p-6 text-center hover:shadow-md transition">
                  <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-gray-50 shadow rounded-lg p-6 text-center hover:shadow-md transition">
                  <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
                <div className="bg-gray-50 shadow rounded-lg p-6 text-center hover:shadow-md transition">
                  <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                  <p className="text-gray-600">Industries Served</p>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556767576-cfba7c2a6e26?w=600"
                alt="Team working"
                className="rounded-lg shadow-lg hover:scale-105 transform transition"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                alt="Office"
                className="rounded-lg mt-8 shadow-lg hover:scale-105 transform transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission & Values
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Our mission is to create impactful digital experiences that empower
            businesses worldwide. Guided by <strong>Innovation, Collaboration, 
            and Excellence</strong>, we craft solutions that truly make an impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Leveraging creativity and technology to craft unique solutions.", icon: "💡" },
              { title: "Collaboration", desc: "Partnering with clients for transparency and long-term success.", icon: "🤝" },
              { title: "Excellence", desc: "Striving for the highest standards in every project.", icon: "⭐" },
            ].map((value, i) => (
              <div key={i} className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg", linkedin: "#", twitter: "#", insta: "#" },
              { name: "Jane Smith", role: "Creative Director", img: "https://randomuser.me/api/portraits/women/44.jpg", linkedin: "#", twitter: "#", insta: "#" },
              { name: "David Johnson", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/65.jpg", linkedin: "#", twitter: "#", insta: "#" },
            ].map((member, i) => (
              <div key={i} className="bg-gray-50 shadow rounded-lg p-6 hover:shadow-lg transition">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                {/* Socials */}
                <div className="flex justify-center gap-4 mt-4 text-gray-500">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-400">
                    <FaTwitter size={20} />
                  </a>
                  <a href={member.insta} target="_blank" rel="noreferrer" className="hover:text-pink-500">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Link to full team */}
          <div className="mt-10">
            <a
              href="/team"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Meet the Full Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a192f] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-lg mb-8 leading-relaxed text-gray-300">
            Partner with <strong>One Stop Creators</strong> and let’s build something extraordinary together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
