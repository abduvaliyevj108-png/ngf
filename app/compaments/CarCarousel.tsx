"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper stillarini import qilamiz
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  badge?: string;
  imageUrl: string;
  linkUrl: string;
}

const BANNERS: BannerItem[] = [
  {
    id: "1",
    title: "Yangi BYD Song Plus Flagship",
    subtitle: "Rasmiy kafolat bilan, tayyor pozitsiyalar",
    price: "$28,500 dan",
    badge: "Top Taklif",
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    linkUrl: "/cars?search=BYD",
  },
  {
    id: "2",
    title: "Chevrolet Tahoe 2023",
    subtitle: "Ideal holatda, halol yurgani 15,000 km",
    price: "$75,000",
    badge: "Premium",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    linkUrl: "/cars?search=Tahoe",
  },
  {
    id: "3",
    title: "AvtoKredit va Muddatli To'lov",
    subtitle: "Boshlang'ich 20% to'lov bilan 3 yilga avtomobil xarid qiling",
    price: "Yillik 18% dan",
    badge: "Aksiya",
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    linkUrl: "/cars",
  },
];

export default function CarCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-md border border-gray-100"
      >
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] bg-gray-900">
              {/* Orqa fon rasmi */}
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                fill
                priority
                className="object-cover opacity-60"
              />

              {/* Rasm ustidagi matnlar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                {banner.badge && (
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-3">
                    {banner.badge}
                  </span>
                )}
                
                <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-2 max-w-2xl">
                  {banner.title}
                </h2>
                
                <p className="text-sm sm:text-base text-gray-200 mb-4 max-w-xl">
                  {banner.subtitle}
                </p>

                <div className="flex items-center gap-4">
                  <span className="text-lg sm:text-2xl font-bold text-yellow-400">
                    {banner.price}
                  </span>
                  <Link
                    href={banner.linkUrl}
                    className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Batafsil ko'rish
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}