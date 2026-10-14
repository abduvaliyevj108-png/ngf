"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, PlusCircle, Car, DollarSign, MapPin, Phone } from "lucide-react";

export default function AddCarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    year: "2023",
    mileage: "",
    fuelType: "Benzin",
    transmission: "Avtomat",
    location: "Toshkent",
    phone: "+998",
    description: "",
    imageUrl: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Backend ulangan paytda API orqali yuboriladi
    setTimeout(() => {
      setLoading(false);
      alert("E'loningiz muvaffaqiyatli joylashtirildi!");
      router.push("/");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Bosh sahifaga qaytish */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-6 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Bosh sahifaga qaytish</span>
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
          <PlusCircle className="w-6 h-6 text-blue-600" />
          <span>Yangi avtomobil e'lonini joylash</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Moshina nomi va Narxi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Avtomobil nomi (Modeli)
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Chevrolet Gentra 3-pozitsiya"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
                <Car className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Narxi ($ USD)
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  placeholder="13500"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
                <DollarSign className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Yili va Yurgan masofasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Ishlab chiqarilgan yili
              </label>
              <input
                type="number"
                required
                placeholder="2022"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Yurgan masofasi (km)
              </label>
              <input
                type="number"
                required
                placeholder="35000"
                value={formData.mileage}
                onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Yoqilg'i turi va Korobka */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Yoqilg'i turi
              </label>
              <select
                value={formData.fuelType}
                onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none bg-white"
              >
                <option value="Benzin">Benzin</option>
                <option value="Gaz-Benzin">Gaz-Benzin</option>
                <option value="Gibrid">Gibrid</option>
                <option value="Elektro">Elektro</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Uzatma (Korobka)
              </label>
              <select
                value={formData.transmission}
                onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none bg-white"
              >
                <option value="Avtomat">Avtomat</option>
                <option value="Mexanika">Mexanika</option>
              </select>
            </div>
          </div>

          {/* Joylashuv va Telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Joylashuv (Shahar / Viloyat)
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Toshkent, Chilonzor"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Telefon raqam
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
                <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Rasm URL */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Rasm havolasi (URL)
            </label>
            <input
              type="url"
              required
              placeholder="https://images.unsplash.com/photo-..."
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Qo'shimcha ta'rif */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Qo'shimcha ma'lumot (Tavsif)
            </label>
            <textarea
              rows={4}
              placeholder="Avtomobil holati, kraskasi, qo'shimcha jihozlari haqida ma'lumot bering..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full border border-gray-300 rounded-xl p-4 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Yuborish tugmasi */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 text-sm mt-4"
          >
            {loading ? (
              <span>Joylashtirilmoqda...</span>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                <span>E'lonni e'lon qilish</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}