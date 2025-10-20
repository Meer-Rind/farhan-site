import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * VideoGallery (orange-first)
 * - Clean, premium cards with gradient accents
 * - Custom orange nav arrows & pagination
 * - Lazy thumbnails, accessible buttons
 */

const VideoGallery = () => {
  const videos = [
  {
    id: "video1",
    title: "TikTok Shop — Real Client Results",
    thumbnail: "https://img.youtube.com/vi/TjAAENzzVDU/hqdefault.jpg",
    youtubeId: "TjAAENzzVDU",
    badge: "TikTok Shop",
  },
  {
    id: "video2",
    title: "eBay — Growth Testimonial",
    thumbnail: "https://img.youtube.com/vi/vTKNhn6d6DE/hqdefault.jpg",
    youtubeId: "vTKNhn6d6DE",
    badge: "eBay",
  },
  {
    id: "video3",
    title: "Etsy — Sales Boost Review",
    thumbnail: "https://img.youtube.com/vi/vgSoWHihqy4/hqdefault.jpg",
    youtubeId: "vgSoWHihqy4",
    badge: "Etsy",
  },
];


  const openVideo = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/40 py-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <i className="fas fa-film" /> Case studies you can watch
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">Our Success Stories</h2>
          <p className="mt-3 text-lg text-gray-600">See the playbooks behind GMV lift, lower CPA, and better AOV — in a few minutes each.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {videos.map((v) => (
            <SwiperSlide key={v.id}>
              <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
                {/* top stripe */}
                <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />

                {/* thumbnail */}
                <figure className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="h-full w-full origin-center scale-[1.01] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* badge */}
                  {v.badge && (
                    <figcaption className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm ring-1 ring-black/5">
                      {v.badge}
                    </figcaption>
                  )}
                  {/* dim overlay + play */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={() => openVideo(v.youtubeId)}
                      aria-label={`Play ${v.title}`}
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg transition hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    >
                      <i className="fas fa-play text-xl" />
                    </button>
                  </div>
                </figure>

                {/* content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900">{v.title}</h3>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* component-level styles to theme Swiper controls */}
      <style>{`
        .swiper-button-prev, .swiper-button-next {
          width: 40px; height: 40px; border-radius: 9999px; background: linear-gradient(90deg,#ea580c,#f59e0b);
          color: #fff; box-shadow: 0 10px 20px rgba(234,88,12,.25); border: 0; 
        }
        .swiper-button-prev:after, .swiper-button-next:after { font-size: 14px; font-weight: 700; }
        .swiper-button-prev:hover, .swiper-button-next:hover { filter: brightness(1.05); }
        .swiper-pagination-bullet { background: #fdba74; opacity: .6; }
        .swiper-pagination-bullet-active { background: #ea580c; opacity: 1; }
      `}</style>
    </section>
  );
};

export default VideoGallery;
