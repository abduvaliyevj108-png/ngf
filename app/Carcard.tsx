import Link from "next/link";
import { Fuel, Gauge, Calendar, MapPin } from "lucide-react";

export interface CarProps {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuelType: string;
  location: string;
  imageUrl: string;
  badge?: string;
}

export default function CarCard({ car }: { car: CarProps }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between w-full h-full">
      <div>
        <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
          <img
            src={car.imageUrl}
            alt={car.title}
            className="w-full h-full object-cover"
          />
          {car.badge && (
            <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
              {car.badge}
            </span>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-bold text-base text-gray-900 line-clamp-1">
            {car.title}
          </h3>
          
          <div className="text-xl font-extrabold text-blue-600 mt-1">
            ${car.price.toLocaleString()}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-gray-600 border-t border-b border-gray-100 py-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{car.year}-yil</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{car.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="truncate">{car.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shu yerda id dinamik ravishda havola qilib o'raladi */}
      <div className="p-4 pt-0">
        <Link
          href={`/cars/${car.id}`}
          className="w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 text-center font-medium py-2 rounded-xl text-sm transition-colors block border border-gray-200"
        >
          Batafsil
        </Link>
      </div>
    </div>
  );
}