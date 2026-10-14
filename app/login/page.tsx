"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, Lock, Phone } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "+998",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      isRegister
        ? "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!"
        : "Tizimga muvaffaqiyatli kirdingiz!"
    );
    router.push("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm w-full max-w-md">
        {/* Bosh sahifaga qaytish tugmasi */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 mb-6 font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Bosh sahifaga qaytish</span>
        </Link>

        {/* Kirish / Ro'yxatdan o'tish tablari */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            type="button"
            onClick={() => setIsRegister(false)}
            className={`flex-1 pb-3 text-center text-sm font-bold border-b-2 transition-colors ${
              !isRegister
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Kirish
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(true)}
            className={`flex-1 pb-3 text-center text-sm font-bold border-b-2 transition-colors ${
              isRegister
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Ro'yxatdan o'tish
          </button>
        </div>

        {/* Forma */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Ism kiritish (faqat ro'yxatdan o'tishda ko'rinadi) */}
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Ismingiz
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Sardorbek"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          {/* Telefon raqam */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Telefon raqamingiz
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="+998 90 123 45 67"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
              <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Parol */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Parol
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Yuborish tugmasi */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-md text-sm mt-2"
          >
            {isRegister ? "Ro'yxatdan o'tish" : "Tizimga kirish"}
          </button>
        </form>
      </div>
    </div>
  );
}