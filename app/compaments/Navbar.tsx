"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, User, Menu, X } from "lucide-react";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 py-1">
            <Image
              src="/logo.png"
              alt="Avtobozor Logo"
              width={260}
              height={65}
              priority
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Qidiruv paneli */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <Suspense fallback={<div className="h-9 bg-gray-100 rounded-full w-full animate-pulse" />}>
              <SearchInput />
            </Suspense>
          </div>

          {/* O'ng tarafdagi tugmalar (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/cars/add"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>E'lon berish</span>
            </Link>

            {/* LoginPage ga olib boruvchi Kirish tugmasi */}
            <Link
              href="/login"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Kirish</span>
            </Link>
          </div>

          {/* Mobil Menyu Tugmasi */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Menyu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menyu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-3">
          <div className="mt-2">
            <Suspense fallback={<div className="h-9 bg-gray-100 rounded-lg w-full" />}>
              <SearchInput onSearchSubmit={() => setIsOpen(false)} />
            </Suspense>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/cars/add"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg font-medium text-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>E'lon berish</span>
            </Link>

            {/* Mobil menyudagi Kirish tugmasi */}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium text-sm"
            >
              <User className="w-4 h-4" />
              <span>Kirish / Ro'yxatdan o'tish</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}