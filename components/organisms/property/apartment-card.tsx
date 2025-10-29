import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LuStar, LuMapPin, LuHeart } from "react-icons/lu";
import { Apartment } from "@/types/property";

interface ApartmentCardProps {
  apartment: Apartment;
  onContactHost: (title: string) => void;
  showFeaturedBadge?: boolean;
  isVisible?: boolean;
  animationDelay?: number;
}

export default function ApartmentCard({
  apartment,
  onContactHost,
  showFeaturedBadge = false,
  isVisible = true,
  animationDelay = 0,
}: ApartmentCardProps) {
  return (
    <Card
      className={`group cursor-pointer border border-slate-gray-200 bg-baby-powder shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 rounded-2xl overflow-hidden backdrop-blur-sm ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        animationDelay: `${animationDelay}ms`,
        boxShadow:
          "0 8px 32px rgba(112, 133, 162, 0.12), 0 2px 16px rgba(112, 133, 162, 0.08)",
      }}
    >
      <div className="relative overflow-hidden h-72">
        <img
          src={apartment.image || "/placeholder.svg"}
          alt={apartment.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {showFeaturedBadge && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-earth-yellow-500 text-slate-gray-900 border-0 font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              ⭐ Featured
            </Badge>
          </div>
        )}

        <button className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110">
          <LuHeart className="h-4 w-4 text-slate-gray-600 hover:text-earth-yellow-500 transition-colors" />
        </button>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-slate-gray-900 group-hover:text-earth-yellow-600 transition-colors duration-300 leading-tight">
            {apartment.title}
          </h3>

          <div className="flex items-center gap-1.5 bg-baby-powder-100 px-2 py-1 rounded-full">
            <LuStar className="h-4 w-4 fill-earth-yellow-500 text-earth-yellow-500" />
            <span className="text-sm font-semibold text-slate-gray-700">
              {apartment.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <LuMapPin className="h-4 w-4 text-glaucous-500" />
          <span className="text-slate-gray-600 font-medium">
            {apartment.location}
          </span>
        </div>

        <p className="text-slate-gray-600 leading-relaxed text-sm line-clamp-2">
          {apartment.description}
        </p>

        {apartment.reviews && (
          <div className="text-xs text-slate-gray-500">
            {apartment.reviews} reviews
          </div>
        )}

        <div className="flex justify-between items-center pt-2 border-t border-slate-gray-100">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-gray-900">
                {apartment.price}
              </span>
              <span className="text-slate-gray-500 font-medium text-sm">
                /night
              </span>
            </div>
            <span className="text-xs text-slate-gray-500">Starting from</span>
          </div>

          <Button
            onClick={() => onContactHost(apartment.title)}
            className="bg-earth-yellow-500 hover:bg-earth-yellow-600 text-slate-gray-900 font-semibold rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Host
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
