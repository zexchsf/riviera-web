"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Text Content */}
      <div className="flex-1 bg-slate-100 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-0 order-2 lg:order-1">
        <div className="max-w-lg mx-auto lg:mx-0 w-full">
          {/* Brand Logo */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">Riviera Homes</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
            We help you find your{" "}
            <span className="italic relative inline-block">
              perfect
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-gold-500"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15C50 5 100 10 150 8C170 7 190 12 195 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            shortlet
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
            We're a trusted digital platform that connects you with premium
            shortlet rentals and land investments to make your property journey
            seamless and rewarding.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8">
            <Button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base w-full sm:w-auto">
              <Link href="/about-us">About us</Link>
            </Button>
            <button className="flex items-center justify-center sm:justify-start text-black font-semibold hover:text-gray-600 transition-colors text-sm sm:text-base py-3 sm:py-0">
              Book a Call
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg">✓</span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-black">Verified</p>
                <p className="text-xs text-gray-600">Platform</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xs">
              This platform meets high standards of security and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Visual Content */}
      <div className="flex-1 relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-60 lg:opacity-80"
          style={{
            backgroundImage: `url('/luxury-modern-apartment.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 p-4 sm:p-6 md:p-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end gap-4 lg:gap-8">
            <a
              href="/properties"
              className="text-white hover:text-gold-400 font-medium transition-colors text-sm lg:text-base"
            >
              Our Properties
            </a>
            <a
              href="/about-us"
              className="text-white hover:text-gold-400 font-medium transition-colors text-sm lg:text-base"
            >
              About us
            </a>
            <a
              href="/contact-us"
              className="text-white hover:text-gold-400 font-medium transition-colors text-sm lg:text-base"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-navy-900/95 backdrop-blur-md mt-2 mx-4 rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col">
                <a
                  href="/properties"
                  className="text-white hover:text-gold-400 hover:bg-white/10 font-medium transition-all px-6 py-4 border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Properties
                </a>
                <a
                  href="/about-us"
                  className="text-white hover:text-gold-400 hover:bg-white/10 font-medium transition-all px-6 py-4 border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </a>
                <a
                  href="/contact-us"
                  className="text-white hover:text-gold-400 hover:bg-white/10 font-medium transition-all px-6 py-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 flex-col items-center gap-2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <div className="flex flex-col gap-1">
            {[1, 2, 3, 4, 5].map((dot, index) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
