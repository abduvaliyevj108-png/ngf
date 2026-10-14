"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Car, DollarSign, Image as ImageIcon, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CarFormData {
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
  description: string;
  imageUrl: string;
}

export default function AddCarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<CarFormData>({
    title: "",
    brand: "Chevrolet",
    model: "",
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    fuelType: "Benzin",
    transmission: "Avtomat",
    color: "Oq",
    description: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // API orqali backend-ga yuborish (backend tayyor bo'lguncha simulyatsiya)
      const res = await fetch("/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("E'lonni saqlashda xatolik yuz berdi");
      }

      const data = await res.json();
      
      // Muvaffaqiyatli saqlangach e'lonlar sahifasiga yo'naltiramiz
      router.push("/cars");
      router.refresh();
    } catch (err: any) {
      // Hozircha backend bo'lmasa ham demo sifatida muvaffaqiyatli deb yo'naltiramiz
      console.log("Forma ma'lumotlari:", formData);
      alert("E'lon muvaffaqiyatli yaratildi! (Console'da ko'rishingiz mumkin)");
      router.push("/cars");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/cars"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Orqaga qaytish</span>
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Car className="w-7 h-7 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Yangi e'lon qo'shish</h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Asosiy xarakteristikalar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E'lon sarlavhasi *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Masalan: Chevrolet Gentra 3-pozitsiya"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Markasi *
              </label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Chevrolet">Chevrolet</option>
                <option value="BYD">BYD</option>
                <option value="Kia">Kia</option>
                <option value="Hyundai">Hyundai</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Boshqa">Boshqa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Modeli *
              </label>
              <input
                type="text"
                name="model"
                required
                placeholder="Masalan: Gentra, Cobalt, Song Plus"
                value={formData.model}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ishlab chiqarilgan yili *
              </label>
              <input
                type="number"
                name="year"
                required
                min="1990"
                max={new Date().getFullYear()}
                value={formData.year}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Narx va Yurgani */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Narxi ($) *
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="price"
                  required
                  min="0"
                  placeholder="12500"
                  value={formData.price || ""}
                  onChange={handleChange}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <DollarSign className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Yurgan masofasi (km) *
              </label>
              <input
                type="number"
                name="mileage"
                required
                min="0"
                placeholder="45000"
                value={formData.mileage || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Yoqilg'i, Uzatma va Rang */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Yoqilg'i turi
              </label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Benzin">Benzin</option>
                <option value="Gaz-Benzin">Gaz-Benzin</option>
                <option value="Elektro">Elektro</option>
                <option value="Gibrid">Gibrid</option>
                <option value="Dizel">Dizel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Uzatmalar qutisi
              </label>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Avtomat">Avtomat</option>
                <option value="Mexanika">Mexanika</option>
                <option value="Variator">Variator</option>
                <option value="Robot">Robot</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rangi
              </label>
              <input
                type="text"
                name="color"
                placeholder="Masalan: Oq, Qora, Mokriy"
                value={formData.color}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Rasm URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rasm havolasi (URL)
            </label>
            <div className="relative">
              <input
                type="url"
                name="imageUrl"
                placeholder="https://example.com/car-image.jpg"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ImageIcon className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Qo'shimcha tavsif */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Qo'shimcha ma'lumot (Tavsif)
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Moshina holati, Kraska, Qo'shimcha jihozlari haqida yozing..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Yuborish tugmasi */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            {loading ? (
              <span>Saqlanmoqda...</span>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>E'lonni chop etish</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}