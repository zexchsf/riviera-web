"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LuStar, LuQuote } from "react-icons/lu";

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  isVisible?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Adebayo Johnson",
    rating: 5,
    comment:
      "Amazing experience! The apartment was exactly as described and the host was incredibly helpful.",
    avatar: "/professional-african-man-smiling.jpg",
  },
  {
    name: "Sarah Williams",
    rating: 5,
    comment:
      "Perfect location and beautiful space. Will definitely book again for my next Lagos trip!",
    avatar: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment:
      "Outstanding service and attention to detail. The booking process was seamless.",
    avatar: "/professional-asian-man-smiling.jpg",
  },
  {
    name: "Fatima Al-Hassan",
    rating: 5,
    comment:
      "Exceeded all expectations! Clean, comfortable, and great value for money.",
    avatar: "/professional-middle-eastern-woman-smiling.png",
  },
];

export default function Testimonials({
  testimonials = defaultTestimonials,
  isVisible = true,
}: TestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-900/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          id="testimonials"
          data-animate
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-5 tracking-tight">
            What Our Guests Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-5" />
          <p className="text-xl md:text-2xl text-slate-600 font-light tracking-wide">
            Real experiences from real travelers
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-white to-stone-50/30 backdrop-blur-sm rounded-[2rem] overflow-hidden">
                  <CardContent className="p-12 md:p-16 text-center relative">
                    {/* Decorative quote mark */}
                    <div className="absolute top-8 left-8 opacity-10">
                      <LuQuote className="h-16 w-16 text-gold-500 fill-gold-500" />
                    </div>

                    {/* Avatar with gradient border */}
                    <div className="relative inline-block mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full blur-sm" />
                      <div className="relative bg-white rounded-full p-1.5">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-white"
                        />
                      </div>
                    </div>

                    {/* Rating stars */}
                    <div className="flex justify-center gap-1.5 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <LuStar
                          key={i}
                          className="h-6 w-6 fill-gold-500 text-gold-500 drop-shadow-sm animate-in fade-in duration-300"
                          style={{ animationDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <div className="relative mb-8">
                      <p className="text-xl md:text-2xl text-navy-900 font-light leading-relaxed tracking-wide max-w-3xl mx-auto">
                        "{testimonial.comment}"
                      </p>
                    </div>

                    {/* Name */}
                    <div className="relative">
                      <h4 className="text-2xl font-semibold text-navy-900 tracking-wide">
                        {testimonial.name}
                      </h4>
                      <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-3" />
                    </div>

                    {/* Decorative quote mark */}
                    <div className="absolute bottom-8 right-8 opacity-10 rotate-180">
                      <LuQuote className="h-16 w-16 text-gold-500 fill-gold-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced navigation dots */}
        <div className="flex justify-center items-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`group relative transition-all duration-500 ease-out ${
                index === currentTestimonial ? "w-12" : "w-4"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div
                className={`h-4 rounded-full transition-all duration-500 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 shadow-lg shadow-gold-500/50"
                    : "bg-slate-300 group-hover:bg-slate-400"
                }`}
              />
              {index === currentTestimonial && (
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full blur-md opacity-50 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
