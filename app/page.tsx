import CarCard, { CarProps } from "./Carcard";
import CarCarousel from "./compaments/CarCarousel";
import Footer from "./compaments/Footer";

// Barcha e'lonlar ro'yxati (Har birida unikal ID bor)
const DUMMY_CARS: CarProps[] = [
  {
    id: "1", // <-- Har bir kartochkaning o'z ID si
    title: "Chevrolet Gentra",
    price: 13500,
    year: 2022,
    mileage: 35000,
    fuelType: "Benzin",
    location: "Toshkent",
    badge: "Top",
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Chevrolet Cobalt",
    price: 11200,
    year: 2023,
    mileage: 18000,
    fuelType: "Gaz-Benzin",
    location: "Samarqand",
    imageUrl: "https://images.unsplash.com/photo-1541348263662-e082662d82da?w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "BYD Song Plus",
    price: 28500,
    year: 2024,
    mileage: 5000,
    fuelType: "Gibrid",
    location: "Toshkent",
    badge: "Yangi",
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Kia K5 Style",
    price: 26000,
    year: 2021,
    mileage: 42000,
    fuelType: "Benzin",
    location: "Farg'ona",
    imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Hyundai Elantra",
    price: 22000,
    year: 2022,
    mileage: 28000,
    fuelType: "Benzin",
    location: "Toshkent",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Chevrolet Tahoe",
    price: 75000,
    year: 2023,
    mileage: 15000,
    fuelType: "Benzin",
    location: "Toshkent",
    badge: "Premium",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Mercedes-Benz E-Class",
    price: 48000,
    year: 2020,
    mileage: 55000,
    fuelType: "Benzin",
    location: "Toshkent",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "BMW 5 Series",
    price: 42000,
    year: 2019,
    mileage: 62000,
    fuelType: "Benzin",
    location: "Andijon",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <CarCarousel />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Map orqali har bir car obyektini ID si bilan CarCard ga berib yuboramiz */}
          {DUMMY_CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  );
}