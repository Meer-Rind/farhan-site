import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import Hero from '../components/Hero';
import StatsGallery from '../components/StatsGallery';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import VideoGallery from '../components/VideoGallery';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero service={service} />
      
      {/* Service Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive {service.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.description} Our team of experts has helped hundreds of businesses 
                achieve remarkable growth through strategic planning and execution.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine industry expertise with cutting-edge technology to deliver 
                results that exceed expectations. Every strategy is customized to your 
                unique business needs and goals.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-green-600"></i>
                  </div>
                  <span className="font-semibold text-gray-900">Proven Results</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <span className="font-semibold text-gray-900">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-purple-600"></i>
                  </div>
                  <span className="font-semibold text-gray-900">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-orange-600"></i>
                  </div>
                  <span className="font-semibold text-gray-900">Custom Strategy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{service.stats.projects}+</div>
                  <div className="text-gray-600">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Service Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed in one complete package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our expert team delivers comprehensive {feature.toLowerCase()} services 
                  tailored to your specific business needs and goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Gallery */}
      <StatsGallery serviceId={serviceId} />

      {/* Process */}
      <Process serviceId={serviceId} />

      {/* Testimonials */}
      <Testimonials serviceId={serviceId} />

      {/* Video Gallery */}
      <VideoGallery />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the hundreds of successful businesses that trust us with their growth. 
            Let's discuss how we can help you achieve remarkable results.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://calendly.com/onestopcreators" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="tel:0370-0411833" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>
              0370-0411833
            </a>
          </div>
          <p className="mt-6 text-blue-100">
            Email: info@onestopcreators.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;