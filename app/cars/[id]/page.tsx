"use client";

import { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Calendar,
  Gauge,
  Fuel,
  MapPin,
  ShieldCheck,
  User,
  Car,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// База данных автомобилей по ID
const CARS_DATABASE: Record<string, any> = {
  "1": {
    id: "1",
    title: "Chevrolet Gentra",
    price: 13500,
    year: 2022,
    mileage: 35000,
    fuelType: "Benzin",
    transmission: "Avtomat",
    color: "Oq",
    location: "Toshkent, Chilonzor r-ni",
    sellerName: "Sardorbek",
    phone: "+998901234567",
    description:
      "Chevrolet Gentra 3-pozitsiya avtomat. Holati ideal, kraskasi toza, faqat shahar ichida haydalgan. Magicar pult, video registrator va yangi balonlar taqilgan. Barter va variant yo'q.",
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop",
  },
  "2": {
    id: "2",
    title: "Chevrolet Cobalt",
    price: 11200,
    year: 2023,
    mileage: 18000,
    fuelType: "Gaz-Benzin",
    transmission: "Avtomat",
    color: "Mokriy",
    location: "Samarqand sh.",
    sellerName: "Jasur",
    phone: "+998912345678",
    description:
      "Cobalt 4-pozitsiya AT. Propan gaz o'rnatilgan. Xarajatlari yo'q, xodovoylari ideal holatda.",
    imageUrl:
      "https://images.unsplash.com/photo-1541348263662-e082662d82da?w=800&auto=format&fit=crop",
  },
  "3": {
    id: "3",
    title: "BYD Song Plus",
    price: 28500,
    year: 2024,
    mileage: 5000,
    fuelType: "Gibrid",
    transmission: "Avtomat",
    color: "Qora",
    location: "Toshkent sh.",
    sellerName: "Bekzod",
    phone: "+998931112233",
    description: "BYD Song Plus Flagship. Ideal holatda, yangi moshina.",
    imageUrl:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop",
  },
  "4": {
    id: "4",
    title: "Kia K5 Style",
    price: 26000,
    year: 2021,
    mileage: 42000,
    fuelType: "Benzin",
    transmission: "Avtomat",
    color: "Oq",
    location: "Farg'ona sh.",
    sellerName: "Alisher",
    phone: "+998944445566",
    description: "Kia K5 Full pozitsiya. Servis kitobchasi bor, ideal holatda.",
    imageUrl:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop",
  },
  "5": {
    id: "5",
    title: "Hyundai Elantra",
    price: 22000,
    year: 2022,
    mileage: 28000,
    fuelType: "Benzin",
    transmission: "Avtomat",
    color: "Mokriy",
    location: "Toshkent sh.",
    sellerName: "Doston",
    phone: "+998977778899",
    description: "Hyundai Elantra ideal holatda, birinchi qo'l.",
    imageUrl:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop",
  },
  "6": {
    id: "6",
    title: "Chevrolet Tahoe",
    price: 75000,
    year: 2023,
    mileage: 15000,
    fuelType: "Benzin",
    transmission: "Avtomat",
    color: "Qora",
    location: "Toshkent sh.",
    sellerName: "Jamshid",
    phone: "+998990001122",
    description: "Chevrolet Tahoe 2023. Lyuks holatda.",
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop",
  },
};

export default function CarDetailPage({ params }: PageProps) {
  // Распаковываем асинхронный params через React.use()
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Находим автомобиль по ID или используем значения по умолчанию
  const car = CARS_DATABASE[id] || {
    id,
    title: `Avtomobil #${id}`,
    price: 15000,
    year: 2022,
    mileage: 25000,
    fuelType: "Benzin",
    transmission: "Avtomat",
    color: "Oq",
    location: "Toshkent",
    sellerName: "Avtobozor Foydalanuvchisi",
    phone: "+998901234567",
    description: "Avtomobil holati a'lo darajada.",
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Кнопка возврата на главную */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-6 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Bosh sahifaga qaytish</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Левая колонка: Изображение и Характеристики */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative w-full h-[320px] sm:h-[420px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <img
              src={car.imageUrl}
              alt={car.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Карточки основных параметров */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Xarakteristikasi
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <span className="text-xs text-gray-500 block">Yili</span>
                <span className="font-bold text-gray-800 text-sm">
                  {car.year}
                </span>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <Gauge className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <span className="text-xs text-gray-500 block">Masofasi</span>
                <span className="font-bold text-gray-800 text-sm">
                  {car.mileage.toLocaleString()} km
                </span>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <Fuel className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <span className="text-xs text-gray-500 block">Yoqilg'i</span>
                <span className="font-bold text-gray-800 text-sm">
                  {car.fuelType}
                </span>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <Car className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <span className="text-xs text-gray-500 block">Uzatma</span>
                <span className="font-bold text-gray-800 text-sm">
                  {car.transmission}
                </span>
              </div>
            </div>
          </div>

          {/* Дополнительное описание */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Qo'shimcha ma'lumot
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {car.description}
            </p>
          </div>
        </div>

        {/* Правая колонка: Цена, Продавец и Связь */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {car.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{car.location}</span>
            </div>

            <div className="text-3xl font-extrabold text-blue-600 mb-6 border-b border-gray-100 pb-4">
              ${car.price.toLocaleString()}
            </div>

            {/* Карточка продавца */}
            <div className="flex items-center gap-3 mb-6 bg-gray-50 p-3 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">
                  {car.sellerName}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  <span>Tasdiqlangan sotuvchi</span>
                </div>
              </div>
            </div>

            {/* Кнопки "Звонок" и "SMS" */}
            <div className="space-y-3">
              <a
                href={`tel:${car.phone}`}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Qo'ng'iroq qilish</span>
              </a>

              <a
                href={`sms:${car.phone}?body=Assalomu alaykum, ${car.title} e'loningiz bo'yicha murojaat qilayotgan edim.`}
                className="w-full border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>SMS yuborish</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}