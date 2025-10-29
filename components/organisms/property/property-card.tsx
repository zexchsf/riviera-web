import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LuMapPin, LuArrowRight } from "react-icons/lu";

interface PropertyCardProps {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  size?: string;
  description: string;
  isVisible?: boolean;
  animationDelay?: number;
  onInquire?: (title: string) => void;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  image,
  size,
  description,
  isVisible = true,
  animationDelay = 0,
  onInquire,
}: PropertyCardProps) {
  const handleInquire = () => {
    if (onInquire) {
      onInquire(title);
    } else {
      const message = `Hi! I'm interested in "${title}". Could you please provide more details?`;
      const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <Card
      className={`group cursor-pointer border-0 shadow-sm hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-72">
        <img
          src={image || "/placeholder.svg?height=300&width=400&query=property"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Enhanced Size Badge */}
        {size && (
          <div className="absolute top-5 left-5">
            <Badge className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-gold-400 border-0 font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
              {size}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-8 space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-300 leading-tight tracking-tight">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-slate-500">
            <LuMapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-base line-clamp-2">
          {description}
        </p>

        {/* Price and Action */}
        <div className="space-y-4">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-navy-900 tracking-tight">
              {price}
            </span>
          </div>

          {/* Enhanced Button */}
          <Button
            onClick={handleInquire}
            className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg shadow-gold-500/25 group/btn"
          >
            <span className="flex items-center justify-center gap-2">
              Inquire Now
              <LuArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
