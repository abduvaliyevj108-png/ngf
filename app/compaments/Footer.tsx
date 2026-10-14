import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-xs py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Izohlar va Huquqiy Ma'lumotlar (Apple style footnotes) */}
        <div className="border-b border-gray-300 pb-6 mb-8 space-y-3 leading-relaxed text-gray-500">
          <p>
            1. Barcha narxlar va shartlar e'lon beruvchilar tomonidan belgilanadi hamda o'zgarishi mumkin. Platforma bitimlar xavfsizligi va to'lovlarga kafolat bermaydi.
          </p>
          <p>
            2. AvtoKredit va muddatli to'lov xizmatlari hamkor banklar hamda moliya tashkilotlari tomonidan taqdim etiladi. Kredit ajratish shartlari xaridorning kredit tarixiga bog'liq.
          </p>
          <p>
            Avtobozor rasmiy e'lonlar maydoni hisoblanadi. Qo'shimcha savollar yoki hamkorlik bo'yicha{" "}
            <a href="tel:+998771440055" className="text-gray-800 underline hover:text-black">
              +998 (77) 144-00-55
            </a>{" "}
            raqami yoki{" "}
            <Link href="/contacts" className="text-gray-800 underline hover:text-black">
              bizning kontaktlarimiz
            </Link>{" "}
            sahifasi orqali bog'lanishingiz mumkin.
          </p>
        </div>

        {/* 2. Asosiy Havolalar Ustunlari */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8 text-gray-700">
          
          {/* Ustun 1: Xarid va Qidiruv */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Xarid qilish</h3>
            <ul className="space-y-1.5">
              <li><Link href="/cars?type=sedan" className="hover:underline">Sedanlar</Link></li>
              <li><Link href="/cars?type=suv" className="hover:underline">Krossoverlar</Link></li>
              <li><Link href="/cars?type=electro" className="hover:underline">Elektromobillar</Link></li>
              <li><Link href="/cars?type=commercial" className="hover:underline">Tijorat mashinalari</Link></li>
              <li><Link href="/cars?badge=Top" className="hover:underline">Top e'lonlar</Link></li>
            </ul>
          </div>

          {/* Ustun 2: Mashhur Brendlar */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Brendlar</h3>
            <ul className="space-y-1.5">
              <li><Link href="/cars?brand=Chevrolet" className="hover:underline">Chevrolet</Link></li>
              <li><Link href="/cars?brand=BYD" className="hover:underline">BYD</Link></li>
              <li><Link href="/cars?brand=Kia" className="hover:underline">Kia</Link></li>
              <li><Link href="/cars?brand=Hyundai" className="hover:underline">Hyundai</Link></li>
              <li><Link href="/cars?brand=BMW" className="hover:underline">BMW</Link></li>
              <li><Link href="/cars?brand=Mercedes-Benz" className="hover:underline">Mercedes-Benz</Link></li>
            </ul>
          </div>

          {/* Ustun 3: Xizmatlar */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Xizmatlar</h3>
            <ul className="space-y-1.5">
              <li><Link href="/cars/add" className="hover:underline">E'lon berish</Link></li>
              <li><Link href="/credit" className="hover:underline">Avtokredit hisoblagich</Link></li>
              <li><Link href="/check" className="hover:underline">Moshina tarixini tekshirish</Link></li>
              <li><Link href="/evaluation" className="hover:underline">Baho ko'rsatkichlari</Link></li>
            </ul>
          </div>

          {/* Ustun 4: Yordam va Humkorlik */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Yordam</h3>
            <ul className="space-y-1.5">
              <li><Link href="/about" className="hover:underline">Biz haqimizda</Link></li>
              <li><Link href="/blog" className="hover:underline">Avto Yangiliklar</Link></li>
              <li><Link href="/contacts" className="hover:underline">Kontaktlar</Link></li>
              <li><Link href="/faq" className="hover:underline">Kopp ko'p beriladigan savollar</Link></li>
            </ul>
          </div>

          {/* Ustun 5: Viloyatlar */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Hududlar</h3>
            <ul className="space-y-1.5">
              <li><Link href="/region/toshkent" className="hover:underline">Toshkent</Link></li>
              <li><Link href="/region/samarqand" className="hover:underline">Samarqand</Link></li>
              <li><Link href="/region/fargona" className="hover:underline">Farg'ona</Link></li>
              <li><Link href="/region/andijon" className="hover:underline">Andijon</Link></li>
              <li><Link href="/region/namangan" className="hover:underline">Namangan</Link></li>
              <li><Link href="/region/buxoro" className="hover:underline">Buxoro</Link></li>
            </ul>
          </div>

        </div>

        {/* 3. Mualliflik huquqi va pastki chiziq (Copyright) */}
        <div className="border-t border-gray-300 pt-4 flex flex-col sm:flex-row items-center justify-between text-gray-500 gap-2">
          <div>
            Copyright © {new Date().getFullYear()} Avtobozor Inc. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Maxfiylik siyosati</Link>
            <Link href="/terms" className="hover:underline">Foydalanish shartlari</Link>
            <Link href="/sitemap" className="hover:underline">Sayt xaritasi</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}