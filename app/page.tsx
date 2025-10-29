"use client";

import Footer from "@/components/organisms/footer";
import Hero from "@/components/organisms/hero";
import ApartmentGrid from "@/components/organisms/property/apartment-grid";
import LandForSale from "@/components/organisms/property/land-for-sale";
import Testimonials from "@/components/organisms/testimonials";
import { LuMessageCircle } from "react-icons/lu";
import { useEffect, useState } from "react";
import ValuesSection from "@/components/organisms/home/values-section";
import AboutUsSection from "@/components/organisms/home/about-us-section";
import PartnersSection from "@/components/organisms/home/partners-section";
import TestimonialSection from "@/components/organisms/home/testimonial-section";

export default function ShortletRental() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

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
  ];

  const featuredApartments = apartments.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactHost = (apartmentTitle: string) => {
    const message = `Hi! I'm interested in booking "${apartmentTitle}". Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />

      <PartnersSection />

      <ValuesSection />

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            id="featured"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.featured
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Popular This Week
            </h2>
            <p className="text-xl text-slate-600 text-pretty">
              Discover the most booked apartments in Lagos
            </p>
          </div>

          <ApartmentGrid
            apartments={featuredApartments}
            onContactHost={handleContactHost}
            showFeaturedBadge={true}
            isVisible={isVisible.featured}
            columns="3"
          />
        </div>
      </section>

      {/* Apartment Listings Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            id="listings"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.listings
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              All Available Apartments
            </h2>
            <p className="text-xl text-slate-600 text-pretty">
              Choose from our curated selection of premium shortlets
            </p>
          </div>

          <ApartmentGrid
            apartments={apartments}
            onContactHost={handleContactHost}
            showFeaturedBadge={false}
            isVisible={isVisible.listings}
            columns="2"
          />
        </div>
      </section>

      <TestimonialSection />

      {/* Testimonials Section */}
      {/* <Testimonials isVisible={isVisible.testimonials} /> */}

      {/* Land for Sale Section */}
      <LandForSale isVisible={isVisible["land-for-sale"]} />

      <AboutUsSection />

      <Footer />

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open("https://wa.me/2348123456789", "_blank")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse z-50"
        aria-label="Contact us on WhatsApp"
      >
        <LuMessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
