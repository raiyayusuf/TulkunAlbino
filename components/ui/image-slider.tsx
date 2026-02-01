// components/ui/image-slider.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles (Swiper v12)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ImageSliderProps {
  images?: Array<{
    src: string;
    alt: string;
  }>;
}

// Default placeholder images (5 images)
const DEFAULT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Kelas Robotik GSE Jogja",
  },
  {
    src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Belajar Coding Python",
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Workshop IoT",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Perangkat Apple di GSE Mac",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Service Apple Resmi",
  },
];

export default function ImageSlider({
  images = DEFAULT_IMAGES,
}: ImageSliderProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="aspect-[4/3]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              {/* Overlay gradient untuk readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold drop-shadow-lg">
                  {image.alt}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-primary-navy" />
      </button>
      <button
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-primary-navy" />
      </button>
    </div>
  );
}
