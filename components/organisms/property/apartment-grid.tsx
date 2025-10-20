import { Apartment } from "@/types/property"
import ApartmentCard from "./apartment-card"

interface ApartmentGridProps {
  apartments: Apartment[]
  onContactHost: (title: string) => void
  showFeaturedBadge?: boolean
  isVisible?: boolean
  columns?: "2" | "3"
}

export default function ApartmentGrid({
  apartments,
  onContactHost,
  showFeaturedBadge = false,
  isVisible = true,
  columns = "3",
}: ApartmentGridProps) {
  const gridClass = columns === "2" 
    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    : "grid grid-cols-1 md:grid-cols-3 gap-8"

  return (
    <div className={gridClass}>
      {apartments.map((apartment, index) => (
        <ApartmentCard
          key={apartment.id}
          apartment={apartment}
          onContactHost={onContactHost}
          showFeaturedBadge={showFeaturedBadge}
          isVisible={isVisible}
          animationDelay={index * (columns === "3" ? 200 : 100)}
        />
      ))}
    </div>
  )
}

