"use client"

import { useState, useEffect } from "react"
import Footer from "@/components/organisms/footer"
import PropertyCard from "@/components/organisms/property/property-card"
import { Search, SlidersHorizontal, MapPin, Home, Building2, Landmark, ChevronDown, X } from "lucide-react"

interface Property {
  id: number
  title: string
  price: string
  location: string
  image: string
  size?: string
  description: string
  type: "apartment" | "land" | "villa"
  bedrooms?: number
  bathrooms?: number
}

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const properties: Property[] = [
    {
      id: 1,
      title: "Luxury Lekki Penthouse",
      price: "₦45,000/night",
      location: "Lekki Phase 1, Lagos",
      image: "/modern-luxury-apartment-interior-with-city-view.jpg",
      description: "Stunning 3-bedroom penthouse with panoramic city views, modern amenities, and 24/7 security",
      type: "apartment",
      size: "180 sqm",
      bedrooms: 3,
      bathrooms: 3
    },
    {
      id: 2,
      title: "Cozy Victoria Island Studio",
      price: "₦25,000/night",
      location: "Victoria Island, Lagos",
      image: "/minimalist-studio-apartment.png",
      description: "Perfect studio for business travelers and couples with high-speed WiFi",
      type: "apartment",
      size: "45 sqm",
      bedrooms: 1,
      bathrooms: 1
    },
    {
      id: 3,
      title: "Ikoyi Executive Suite",
      price: "₦60,000/night",
      location: "Ikoyi, Lagos",
      image: "/executive-suite-with-modern-furniture-and-city-sky.jpg",
      description: "Premium 2-bedroom suite in the heart of Ikoyi with gym and pool access",
      type: "apartment",
      size: "120 sqm",
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: 4,
      title: "Banana Island Villa",
      price: "₦120,000/night",
      location: "Banana Island, Lagos",
      image: "/luxury-villa-with-pool-and-tropical-garden.jpg",
      description: "Exclusive 4-bedroom villa with private pool and waterfront views",
      type: "villa",
      size: "350 sqm",
      bedrooms: 4,
      bathrooms: 4
    },
    {
      id: 5,
      title: "Ajah Residential Land",
      price: "₦15M",
      location: "Ajah, Lagos",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      description: "Prime 500sqm residential land with C of O in a serene estate",
      type: "land",
      size: "500 sqm"
    },
    {
      id: 6,
      title: "Lekki Commercial Plot",
      price: "₦45M",
      location: "Lekki Phase 2, Lagos",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
      description: "Commercial land with excellent road access and proper documentation",
      type: "land",
      size: "1000 sqm"
    },
    {
      id: 7,
      title: "Ikeja GRA Duplex",
      price: "₦50,000/night",
      location: "Ikeja GRA, Lagos",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      description: "Spacious 4-bedroom duplex in a quiet, secure neighborhood",
      type: "villa",
      size: "250 sqm",
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 8,
      title: "Yaba Student Apartment",
      price: "₦18,000/night",
      location: "Yaba, Lagos",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      description: "Affordable 1-bedroom close to universities and tech hubs",
      type: "apartment",
      size: "55 sqm",
      bedrooms: 1,
      bathrooms: 1
    },
    {
      id: 9,
      title: "Epe Beach Land",
      price: "₦8M",
      location: "Epe, Lagos",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
      description: "Beachfront land perfect for resort or residential development",
      type: "land",
      size: "800 sqm"
    }
  ]

  const locations = ["all", "Lekki", "Victoria Island", "Ikoyi", "Banana Island", "Ajah", "Yaba", "Ikeja", "Epe"]
  const priceRanges = [
    { label: "All Prices", value: "all" },
    { label: "Under ₦20,000", value: "0-20000" },
    { label: "₦20,000 - ₦50,000", value: "20000-50000" },
    { label: "₦50,000 - ₦100,000", value: "50000-100000" },
    { label: "Above ₦100,000", value: "100000-999999999" },
    { label: "Land (₦5M - ₦20M)", value: "land-low" },
    { label: "Land (Above ₦20M)", value: "land-high" }
  ]

  const filterProperties = (properties: Property[]) => {
    return properties.filter(property => {
      // Search filter
      const matchesSearch = 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Type filter
      const matchesType = selectedType === "all" || property.type === selectedType

      // Location filter
      const matchesLocation = 
        selectedLocation === "all" || 
        property.location.toLowerCase().includes(selectedLocation.toLowerCase())

      // Price filter
      let matchesPrice = true
      if (priceRange !== "all") {
        if (priceRange === "land-low") {
          matchesPrice = property.type === "land" && 
            parseFloat(property.price.replace(/[^0-9.]/g, "")) >= 5000000 &&
            parseFloat(property.price.replace(/[^0-9.]/g, "")) <= 20000000
        } else if (priceRange === "land-high") {
          matchesPrice = property.type === "land" && 
            parseFloat(property.price.replace(/[^0-9.]/g, "")) > 20000000
        } else {
          const [min, max] = priceRange.split("-").map(Number)
          const price = parseFloat(property.price.replace(/[^0-9]/g, ""))
          matchesPrice = price >= min && price <= max
        }
      }

      return matchesSearch && matchesType && matchesLocation && matchesPrice
    })
  }

  const filteredProperties = filterProperties(properties)
  const propertyCount = filteredProperties.length

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedType("all")
    setSelectedLocation("all")
    setPriceRange("all")
  }

  const hasActiveFilters = searchQuery !== "" || selectedType !== "all" || 
    selectedLocation !== "all" || priceRange !== "all"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-gray-900 via-glaucous-900 to-slate-gray-800 text-white py-24 px-4 overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-slate-gray-900/90 to-black/80"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto z-10 px-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-gray-100 tracking-tight drop-shadow-lg">
              Discover Your Perfect Property
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-gray-200 leading-relaxed max-w-5xl drop-shadow-md">
              Explore our curated collection of premium shortlets, luxury homes, and investment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white to-slate-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filter Bar */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by location, property name, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-glaucous-500 transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-sm"
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-glaucous-600 hover:bg-glaucous-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 mb-4 shadow-md"
            >
              <SlidersHorizontal className="h-5 w-5" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Property Type Filter */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                  <div className="relative">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-glaucous-500 transition-all duration-300 text-gray-700 cursor-pointer shadow-sm"
                    >
                      <option value="all">All Types</option>
                      <option value="apartment">Apartments</option>
                      <option value="villa">Villas & Duplexes</option>
                      <option value="land">Land</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>
                </div>

                {/* Location Filter */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-glaucous-500 transition-all duration-300 text-gray-700 cursor-pointer shadow-sm"
                    >
                      {locations.map(location => (
                        <option key={location} value={location}>
                          {location === "all" ? "All Locations" : location}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                  <div className="relative">
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-glaucous-500 transition-all duration-300 text-gray-700 cursor-pointer shadow-sm"
                    >
                      {priceRanges.map(range => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>
                </div>

                {/* Clear Filters Button */}
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    disabled={!hasActiveFilters}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                      hasActiveFilters
                        ? 'bg-red-50 text-red-600 hover:bg-red-100 border-2 border-red-200 cursor-pointer'
                        : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                    }`}
                  >
                    <X className="h-4 w-4" />
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-gray-600 font-medium">
                Showing <span className="text-glaucous-600 font-bold">{propertyCount}</span> {propertyCount === 1 ? 'property' : 'properties'}
              </p>
              {hasActiveFilters && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-glaucous-100 text-glaucous-700 rounded-full font-medium">
                    Filters Active
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Property Type Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: Home, label: "All Properties", value: "all" },
              { icon: Building2, label: "Apartments", value: "apartment" },
              { icon: Home, label: "Villas", value: "villa" },
              { icon: Landmark, label: "Land", value: "land" }
            ].map(({ icon: Icon, label, value }) => (
              <button
                key={value}
                onClick={() => setSelectedType(value)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                  selectedType === value
                    ? 'bg-glaucous-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-glaucous-400 hover:text-glaucous-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  image={property.image}
                  size={property.size}
                  description={property.description}
                  isVisible={isVisible}
                  animationDelay={index * 100}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-glaucous-600 hover:bg-glaucous-700 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 shadow-md"
              >
                <X className="h-5 w-5" />
                Clear All Filters
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-br from-glaucous-600 to-slate-gray-800 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-slate-gray-100 mb-8 max-w-2xl mx-auto">
              Let us help you find your perfect property. Our team is ready to assist you with personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white text-glaucous-600 hover:bg-slate-gray-100 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/2348012345678?text=Hi%20Riviera%20Homes,%20I%20need%20help%20finding%20a%20property"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20BD5A] py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
