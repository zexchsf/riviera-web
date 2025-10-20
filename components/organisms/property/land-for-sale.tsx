import PropertyCard from "./property-card"

interface LandProperty {
  id: number
  title: string
  price: string
  location: string
  image: string
  size: string
  description: string
}

interface LandForSaleProps {
  isVisible?: boolean
  onInquire?: (title: string) => void
}

const defaultLandProperties: LandProperty[] = [
  {
    id: 1,
    title: "Lekki Waterfront Plot",
    price: "₦45,000,000",
    location: "Lekki Phase 1, Lagos",
    image: "/lekki-waterfront-land.jpg",
    size: "600 sqm",
    description: "Prime waterfront land with C of O, perfect for luxury development",
  },
  {
    id: 2,
    title: "Ibeju-Lekki Estate Land",
    price: "₦15,000,000",
    location: "Ibeju-Lekki, Lagos",
    image: "/ibeju-lekki-estate-land.jpg",
    size: "500 sqm",
    description: "Gated estate with excellent infrastructure and security",
  },
  {
    id: 3,
    title: "Ajah Commercial Plot",
    price: "₦28,000,000",
    location: "Ajah, Lagos",
    image: "/ajah-commercial-land.jpg",
    size: "800 sqm",
    description: "Corner piece on major road, ideal for commercial development",
  },
  {
    id: 4,
    title: "Ikoyi Premium Land",
    price: "₦120,000,000",
    location: "Ikoyi, Lagos",
    image: "/ikoyi-premium-land.jpg",
    size: "1000 sqm",
    description: "Exclusive plot in the heart of Ikoyi with Governor's Consent",
  },
  {
    id: 5,
    title: "Epe Beachfront Land",
    price: "₦35,000,000",
    location: "Epe, Lagos",
    image: "/epe-beachfront-land.jpg",
    size: "1200 sqm",
    description: "Stunning beachfront property with direct ocean access",
  },
  {
    id: 6,
    title: "Sangotedo Residential Plot",
    price: "₦18,000,000",
    location: "Sangotedo, Lagos",
    image: "/sangotedo-residential-land.jpg",
    size: "450 sqm",
    description: "Dry land in serene estate, ready for immediate development",
  },
]

export default function LandForSale({ isVisible = true, onInquire }: LandForSaleProps) {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/30 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Section Header */}
        <div
          id="land-for-sale"
          data-animate
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-sm font-semibold text-gold-600 tracking-widest uppercase">
              Premium Properties
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 tracking-tight leading-tight">
            Land for Sale
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          
          <p className="text-xl md:text-2xl text-slate-600 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Prime plots available in strategic Lagos locations
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {defaultLandProperties.map((land, index) => (
            <PropertyCard
              key={land.id}
              id={land.id}
              title={land.title}
              price={land.price}
              location={land.location}
              image={land.image}
              size={land.size}
              description={land.description}
              isVisible={isVisible}
              animationDelay={index * 150}
              onInquire={onInquire}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
