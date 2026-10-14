"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Car, Lock, Phone, User as UserIcon, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false); // Login / Register rejimini almashish
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Backend so'rovi (auth API)
      const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Xatolik yuz berdi");
      }

      // Kirish muvaffaqiyatli bo'lsa
      router.push("/");
      router.refresh();
    } catch (err) {
      // Backend tayyor bo'lguncha test simulyatsiyasi
      console.log("Auth data:", formData);
      alert(
        isRegister
          ? "Ro'yxatdan muvaffaqiyatli o'tdingiz!"
          : "Tizimga muvaffaqiyatli kirdingiz!"
      );
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        
        {/* Header / Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl text-blue-600 mb-2">
            <Car className="w-8 h-8" />
            <span>AVTOBOZOR</span>
          </Link>
          <h2 className="text-xl font-bold text-gray-900 mt-2">
            {isRegister ? "Ro'yxatdan o'tish" : "Tizimga kirish"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {isRegister
              ? "E'lon berish va boshqarish uchun hisob yarating"
              : "E'lonlaringizni boshqarish uchun hisobingizga kiring"}
          </p>
        </div>

        {/* Forma */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Ro'yxatdan o'tish rejimida Ism familiya chiqadi */}
          {isRegister && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ism va Familiya *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  required={isRegister}
                  placeholder="Ali Valiyev"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>
          )}

          {/* Telefon raqam */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon raqam *
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                placeholder="+998 90 123 45 67"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Parol */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parol *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Kirish / Ro'yxatdan o'tish tugmasi */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            {loading ? (
              <span>Yuklanmoqda...</span>
            ) : (
              <>
                <span>{isRegister ? "Ro'yxatdan o'tish" : "Kirish"}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Rejimni o'zgartirish (Login / Register toggle) */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {isRegister ? (
            <p>
              Hisobingiz bormi?{" "}
              <button
                onClick={() => setIsRegister(false)}
                className="text-blue-600 hover:underline font-semibold"
              >
                Tizimga kirish
              </button>
            </p>
          ) : (
            <p>
              Hali hisobingiz yo'qmi?{" "}
              <button
                onClick={() => setIsRegister(true)}
                className="text-blue-600 hover:underline font-semibold"
              >
                Ro'yxatdan o'tish
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}