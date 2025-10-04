import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VideoGallery = () => {
  const videos = [
    {
      id: "video1",
      title: "TikTok Shop Success Story",
      thumbnail:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "video2",
      title: "eBay Store Optimization Tips",
      thumbnail:
        "https://images.unsplash.com/photo-1563013541-5a0c48f2b5a1?w=400",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "video3",
      title: "Etsy Marketing Strategies",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: "video4",
      title: "Walmart Marketplace Guide",
      thumbnail:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Watch how we've helped businesses grow across different platforms
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative pb-[56.25%]">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.youtube.com/watch?v=${video.youtubeId}`,
                          "_blank"
                        )
                      }
                      className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-red-700 transition transform hover:scale-110"
                    >
                      <i className="fas fa-play text-xl"></i>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoGallery;
