"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Shield, CreditCard, CheckCircle, MessageCircle, Calendar, Search } from "lucide-react"

export default function ShortletRental() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const apartments = [
    {
      id: 1,
      title: "Luxury Lekki Penthouse",
      price: "₦45,000",
      location: "Lekki Phase 1, Lagos",
      image: "/modern-luxury-apartment-interior-with-city-view.jpg",
      description: "Stunning 3-bedroom penthouse with panoramic city views",
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      title: "Cozy Victoria Island Studio",
      price: "₦25,000",
      location: "Victoria Island, Lagos",
      image: "/minimalist-studio-apartment.png",
      description: "Perfect studio for business travelers and couples",
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      title: "Ikoyi Executive Suite",
      price: "₦60,000",
      location: "Ikoyi, Lagos",
      image: "/executive-suite-with-modern-furniture-and-city-sky.jpg",
      description: "Premium 2-bedroom suite in the heart of Ikoyi",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      title: "Banana Island Villa",
      price: "₦120,000",
      location: "Banana Island, Lagos",
      image: "/luxury-villa-with-pool-and-tropical-garden.jpg",
      description: "Exclusive 4-bedroom villa with private pool",
      rating: 5.0,
      reviews: 73,
    },
    {
      id: 5,
      title: "Ajah Family Home",
      price: "₦35,000",
      location: "Ajah, Lagos",
      image: "/family-home-with-spacious-living-room-and-garden.jpg",
      description: "Spacious 3-bedroom home perfect for families",
      rating: 4.7,
      reviews: 94,
    },
    {
      id: 6,
      title: "Surulere Modern Flat",
      price: "₦20,000",
      location: "Surulere, Lagos",
      image: "/modern-apartment-with-contemporary-design-and-natu.jpg",
      description: "Affordable 2-bedroom flat with modern amenities",
      rating: 4.6,
      reviews: 112,
    },
  ]

  const testimonials = [
    {
      name: "Adebayo Johnson",
      rating: 5,
      comment: "Amazing experience! The apartment was exactly as described and the host was incredibly helpful.",
      avatar: "/professional-african-man-smiling.jpg",
    },
    {
      name: "Sarah Williams",
      rating: 5,
      comment: "Perfect location and beautiful space. Will definitely book again for my next Lagos trip!",
      avatar: "/professional-woman-smiling.png",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Outstanding service and attention to detail. The booking process was seamless.",
      avatar: "/professional-asian-man-smiling.jpg",
    },
    {
      name: "Fatima Al-Hassan",
      rating: 5,
      comment: "Exceeded all expectations! Clean, comfortable, and great value for money.",
      avatar: "/professional-middle-eastern-woman-smiling.png",
    },
  ]

  const featuredApartments = apartments.slice(0, 3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleContactHost = (apartmentTitle: string) => {
    const message = `Hi! I'm interested in booking "${apartmentTitle}". Could you please provide more details?`
    const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header with Logo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/riviera-homes-logo.jpg" alt="Riviera Homes" className="h-12 w-auto" />
          <div className="flex items-center gap-6">
            <a href="#featured" className="text-navy-900 hover:text-gold-500 font-medium transition-colors">
              Featured
            </a>
            <a href="#listings" className="text-navy-900 hover:text-gold-500 font-medium transition-colors">
              Listings
            </a>
            <a href="#testimonials" className="text-navy-900 hover:text-gold-500 font-medium transition-colors">
              Reviews
            </a>
            <a href="#land-for-sale" className="text-navy-900 hover:text-gold-500 font-medium transition-colors">
              Land for Sale
            </a>
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl">
              List Property
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 opacity-90"
          style={{
            backgroundImage: `url('/luxury-modern-apartment.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/60 to-navy-700/80 animate-pulse" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up">
            Find Your Perfect Shortlet
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-200 text-pretty animate-fade-in-up animation-delay-200">
            Book beautiful apartments for your stay, fast and easy.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input placeholder="Location" className="pl-10 h-12 border-0 bg-slate-50 text-slate-900" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input type="date" className="pl-10 h-12 border-0 bg-slate-50 text-slate-900" />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input placeholder="Guests" className="pl-10 h-12 border-0 bg-slate-50 text-slate-900" />
              </div>
              <Button className="h-12 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            id="featured"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.featured ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Popular This Week</h2>
            <p className="text-xl text-slate-600 text-pretty">Discover the most booked apartments in Lagos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredApartments.map((apartment, index) => (
              <Card
                key={apartment.id}
                className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden bg-white transition-all duration-1000 ${
                  isVisible.featured ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={apartment.image || "/placeholder.svg"}
                    alt={apartment.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-500 text-navy-900 border-0 font-semibold">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {apartment.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-slate-700">{apartment.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-600">{apartment.location}</span>
                  </div>
                  <p className="text-slate-600 mb-4 text-pretty">{apartment.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-navy-900">{apartment.price}</span>
                      <span className="text-slate-600">/night</span>
                    </div>
                    <Button
                      onClick={() => handleContactHost(apartment.title)}
                      className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Contact Host
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apartment Listings Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            id="listings"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.listings ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">All Available Apartments</h2>
            <p className="text-xl text-slate-600 text-pretty">Choose from our curated selection of premium shortlets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment, index) => (
              <Card
                key={apartment.id}
                className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden bg-white transition-all duration-1000 ${
                  isVisible.listings ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={apartment.image || "/placeholder.svg"}
                    alt={apartment.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {apartment.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-slate-700">{apartment.rating}</span>
                      <span className="text-xs text-slate-500">({apartment.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-600">{apartment.location}</span>
                  </div>
                  <p className="text-slate-600 mb-4 text-pretty">{apartment.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-navy-900">{apartment.price}</span>
                      <span className="text-slate-600">/night</span>
                    </div>
                    <Button
                      onClick={() => handleContactHost(apartment.title)}
                      className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Contact Host
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div
            id="testimonials"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-slate-600 text-pretty">Real experiences from real travelers</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="min-w-full bg-white border-0 shadow-xl rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg text-slate-700 mb-6 text-pretty italic">"{testimonial.comment}"</p>
                    <h4 className="text-xl font-bold text-navy-900">{testimonial.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-gold-500 scale-125" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Land for Sale Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="land-for-sale"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["land-for-sale"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Land for Sale</h2>
            <p className="text-xl text-slate-600 text-pretty">Prime plots available in strategic Lagos locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((land, index) => (
              <Card
                key={land.id}
                className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden bg-white transition-all duration-1000 ${
                  isVisible["land-for-sale"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={land.image || "/placeholder.svg?height=300&width=400&query=land plot aerial view"}
                    alt={land.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-navy-900 text-gold-400 border-0 font-semibold">
                    {land.size}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-3">
                    {land.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-600">{land.location}</span>
                  </div>
                  <p className="text-slate-600 mb-4 text-pretty">{land.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-navy-900">{land.price}</span>
                    </div>
                    <Button
                      onClick={() => {
                        const message = `Hi! I'm interested in "${land.title}". Could you please provide more details?`
                        const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, "_blank")
                      }}
                      className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Inquire Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Offers Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badges */}
          <div
            id="trust"
            data-animate
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
              isVisible.trust ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Verified Hosts</h3>
              <p className="text-slate-600">All our hosts are verified for your safety and peace of mind</p>
            </div>
            <div className="text-center">
              <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Secure Payment</h3>
              <p className="text-slate-600">Your payments are protected with bank-level security</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock customer support for all your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="/riviera-homes-logo.jpg" alt="Riviera Homes" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-slate-400 text-pretty">
                Your trusted partner for premium shortlet rentals in Lagos and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    List Your Property
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>📧 hello@rivierahomes.com</li>
                <li>📞 +234 812 345 6789</li>
                <li>📍 Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Riviera Homes. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open("https://wa.me/2348123456789", "_blank")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
