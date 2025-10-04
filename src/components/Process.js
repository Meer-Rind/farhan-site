import React from 'react';

const Process = ({ serviceId }) => {
  const processes = {
    tiktok: [
      { step: "01", title: "Strategy Development", description: "Customized TikTok shop growth and market analysis", icon: "fas fa-chess-board" },
      { step: "02", title: "Content Creation", description: "Engaging short-form videos optimized for virality", icon: "fas fa-video" },
      { step: "03", title: "Influencer Partnerships", description: "Collaboration with top influencers for reach", icon: "fas fa-users" },
      { step: "04", title: "Campaign Management", description: "Real-time optimization and ad performance tracking", icon: "fas fa-chart-line" },
      { step: "05", title: "Sales Funnel Optimization", description: "Maximize conversions and repeat sales", icon: "fas fa-shopping-cart" },
      { step: "06", title: "Growth Reporting", description: "Detailed analytics and strategy refinement", icon: "fas fa-chart-bar" }
    ],
    ebay: [
      { step: "01", title: "Store Audit", description: "In-depth analysis of your eBay presence", icon: "fas fa-search" },
      { step: "02", title: "SEO Optimization", description: "Enhanced product listings for higher visibility", icon: "fas fa-cogs" },
      { step: "03", title: "Listing Enhancement", description: "Professional product photos and descriptions", icon: "fas fa-edit" },
      { step: "04", title: "Pricing Strategy", description: "Competitive pricing for maximum conversion", icon: "fas fa-tag" },
      { step: "05", title: "Advertising Campaigns", description: "eBay Promoted Listings & paid strategy", icon: "fas fa-bullhorn" },
      { step: "06", title: "Performance Tracking", description: "Continuous monitoring and growth tracking", icon: "fas fa-chart-pie" }
    ],
    etsy: [
      { step: "01", title: "Shop Setup & Branding", description: "Create and optimize your Etsy shop branding", icon: "fas fa-store" },
      { step: "02", title: "Keyword Research", description: "Etsy-specific SEO keyword strategy", icon: "fas fa-key" },
      { step: "03", title: "Product Optimization", description: "Compelling titles, descriptions, and tags", icon: "fas fa-box" },
      { step: "04", title: "Creative Photography", description: "High-quality visuals for higher sales", icon: "fas fa-camera" },
      { step: "05", title: "Marketing Campaigns", description: "Run Etsy Ads and social promotions", icon: "fas fa-bullhorn" },
      { step: "06", title: "Sales Analysis", description: "Track performance & scale successful products", icon: "fas fa-chart-line" }
    ],
    temu: [
      { step: "01", title: "Market Entry Strategy", description: "Analyze opportunities on Temu marketplace", icon: "fas fa-lightbulb" },
      { step: "02", title: "Product Research", description: "Identify high-demand & trending products", icon: "fas fa-search" },
      { step: "03", title: "Listing Creation", description: "Optimized product descriptions & images", icon: "fas fa-edit" },
      { step: "04", title: "Advertising Setup", description: "Promotions & ads to drive sales", icon: "fas fa-bullhorn" },
      { step: "05", title: "Conversion Optimization", description: "Pricing, offers & customer experience", icon: "fas fa-tags" },
      { step: "06", title: "Growth Scaling", description: "Expand product range & reach new markets", icon: "fas fa-rocket" }
    ],
    walmart: [
      { step: "01", title: "Seller Onboarding", description: "Account setup & compliance with Walmart policies", icon: "fas fa-user-check" },
      { step: "02", title: "Catalog Setup", description: "Bulk product uploads and category mapping", icon: "fas fa-boxes" },
      { step: "03", title: "SEO Optimization", description: "Walmart SEO strategy for higher rankings", icon: "fas fa-search" },
      { step: "04", title: "Sponsored Ads", description: "Run Walmart-sponsored campaigns", icon: "fas fa-ad" },
      { step: "05", title: "Order Management", description: "Streamlined logistics & order fulfillment", icon: "fas fa-truck" },
      { step: "06", title: "Growth & Analytics", description: "Monitor KPIs and scale profitably", icon: "fas fa-chart-bar" }
    ],
    mercury: [
      { step: "01", title: "Business Consultation", description: "Understand your business goals & requirements", icon: "fas fa-handshake" },
      { step: "02", title: "Strategy & Planning", description: "Tailored digital and financial strategy", icon: "fas fa-tasks" },
      { step: "03", title: "System Setup", description: "Technology & platform integrations", icon: "fas fa-cogs" },
      { step: "04", title: "Growth Implementation", description: "Execute campaigns & growth tactics", icon: "fas fa-rocket" },
      { step: "05", title: "Financial Optimization", description: "Cash flow, investments & scaling solutions", icon: "fas fa-dollar-sign" },
      { step: "06", title: "Ongoing Support", description: "Dedicated assistance & regular updates", icon: "fas fa-headset" }
    ]
  };

  const process = processes[serviceId] || processes.tiktok;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear, results-driven roadmap designed to help your business grow efficiently.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {item.step}
                </div>
                <div className="text-2xl text-blue-600">
                  <i className={item.icon}></i>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our proven process has helped hundreds of businesses achieve remarkable growth. 
              Let's discuss how we can apply it to your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://calendly.com/onestopcreators" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Begin Your Success Story
              </a>
              <a 
                href="tel:0370-0411833" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-phone mr-2"></i>
                0370-0411833
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
