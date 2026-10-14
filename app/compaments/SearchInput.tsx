"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onSearchSubmit?: () => void; // Mobil menyuni yopish kabi hodisalar uchun
}

export default function SearchInput({
  placeholder = "Moshina markasi yoki modeli...",
  className = "",
  onSearchSubmit,
}: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  // URL parametr o'zgarganda input ichidagi matnni ham sinxronlash
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (trimmed) {
      params.set("search", trimmed);
    } else {
      params.delete("search");
    }

    router.push(`/cars?${params.toString()}`);

    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`/cars?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
      />
      
      {/* Qidiruv ikonasi */}
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />

      {/* Matn bo'lsa tozalash (X) tugmasi */}
      {searchQuery && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 focus:outline-none"
          title="Tozalash"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </form>
  );
}