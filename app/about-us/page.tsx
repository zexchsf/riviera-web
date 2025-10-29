"use client";

import Footer from "@/components/organisms/footer";
import {
  LuShield,
  LuUsers,
  LuStar,
  LuLeaf,
  LuTrendingUp,
} from "react-icons/lu";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-gray-900 via-glaucous-900 to-slate-gray-800 text-white py-24 px-4 overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-slate-gray-900/90 to-black/80"></div>

        {/* Background Image - Dark themed real estate (high contrast for white text) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')",
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto z-10 px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-gray-600 tracking-tight drop-shadow-lg">
              About us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-gray-600 leading-relaxed max-w-5xl animation-delay-200 drop-shadow-md">
              A people-first real estate brand built on trust, collaboration,
              and the vision of redefining what it means to own or invest in
              property in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24">
          {/* Content */}
          <div className="space-y-20">
            {/* Founder's Welcome */}
            <div>
              <h2 className="text-2xl font-bold text-slate-gray-900 mb-6">
                Founder's Welcome
              </h2>
              <div className="space-y-6 text-slate-gray-700 leading-relaxed">
                <p>
                  Riviera Homes is a people-first real estate brand built on
                  trust, collaboration, and the vision of redefining what it
                  means to own or invest in property in Nigeria. We believe real
                  estate should go beyond buildings — it should represent
                  opportunity, security, and growth. That's why we are dedicated
                  to connecting Nigerians with verified properties, thoughtfully
                  designed homes, and comfortable shortlet apartments that truly
                  feel like home.
                </p>
                <p>
                  We've built our brand on a culture of honesty and partnership.
                  Our growth isn't driven by quick transactions but by strong,
                  long-term relationships — with clients, agents, developers,
                  and local communities. Every project reflects our core values
                  of trust, integrity, and innovation.
                </p>
                <p>
                  At Riviera Homes, we understand that real estate is deeply
                  personal. For some, it's about security; for others, it's
                  about freedom or legacy. That's why we treat every client like
                  a partner, offering guidance, transparency, and genuine care
                  at every stage of their journey.
                </p>
                <p>
                  We also see real estate as a form of nation-building. Our goal
                  isn't just to sell properties but to contribute to the future
                  of Nigerian cities — sustainable, inclusive, and built for
                  generations. From affordable land investments to short-term
                  rentals, every initiative we take is built with purpose,
                  responsibility, and heart.
                </p>
                <div className="bg-glaucous-50 border-l-4 border-glaucous-500 pl-6 py-4 italic text-glaucous-800">
                  "At Riviera Homes, we're not just shaping spaces. We're
                  shaping futures, one home at a time."
                </div>
              </div>
            </div>

            {/* Getting to know our company better */}
            <div>
              <h2 className="text-2xl font-bold text-slate-gray-900 mb-6">
                Getting to know our company better
              </h2>
              <div className="space-y-6 text-slate-gray-700 leading-relaxed">
                <p>
                  Riviera Homes is more than a company — it's a collective of
                  dreamers, professionals, and innovators who believe that
                  everyone deserves a place they can call home. We are
                  passionate about helping people make informed property
                  decisions through integrity and genuine care.
                </p>
                <p>
                  We see our clients as partners, not just customers. Every
                  conversation, every project, and every decision we make is
                  grounded in empathy and understanding. Our people-first
                  approach has helped us grow a network of loyal clients and
                  partners who trust us to deliver.
                </p>
                <p>
                  We are warm, reliable, and forward-thinking — constantly
                  evolving to meet modern housing needs while keeping our roots
                  in authenticity and community growth.
                </p>
              </div>
            </div>

            {/* Our Purpose */}
            <div>
              <h2 className="text-2xl font-bold text-slate-gray-900 mb-6">
                Our Purpose
              </h2>
              <div className="space-y-6 text-slate-gray-700 leading-relaxed">
                <p>
                  To make property ownership simple, transparent, and accessible
                  — while creating shared opportunities that empower people and
                  strengthen communities.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-2xl font-bold text-slate-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-slate-gray-700 leading-relaxed">
                <p>
                  To simplify real estate for every Nigerian through integrity,
                  partnership, and innovation. We're committed to creating
                  secure property solutions that bring value to clients,
                  partners, and the wider community — ensuring every investment
                  leads to sustainable growth.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-2xl font-bold text-slate-gray-900 mb-6">
                Our Vision
              </h2>
              <div className="space-y-6 text-slate-gray-700 leading-relaxed">
                <p>
                  To become a trusted force in Africa's real estate industry —
                  known not just for the properties we sell, but for the lives
                  we help transform through honesty, collaboration, and
                  sustainable development.
                </p>
              </div>
            </div>

            {/* Our Core Values */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-gray-900 mb-8">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white border border-slate-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg mr-4">
                      <LuShield className="h-6 w-6 text-glaucous-600" />
                    </div>
                    <h3 className="font-bold text-slate-gray-900 text-lg">
                      Integrity
                    </h3>
                  </div>
                  <p className="text-slate-gray-700 leading-relaxed">
                    Every transaction must be clear, honest, and built on trust.
                  </p>
                </div>

                <div className="bg-white border border-slate-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg mr-4">
                      <LuUsers className="h-6 w-6 text-glaucous-600" />
                    </div>
                    <h3 className="font-bold text-slate-gray-900 text-lg">
                      Collaboration
                    </h3>
                  </div>
                  <p className="text-slate-gray-700 leading-relaxed">
                    We grow by working with others — from agents and developers
                    to clients and communities.
                  </p>
                </div>

                <div className="bg-white border border-slate-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg mr-4">
                      <LuStar className="h-6 w-6 text-glaucous-600" />
                    </div>
                    <h3 className="font-bold text-slate-gray-900 text-lg">
                      Excellence
                    </h3>
                  </div>
                  <p className="text-slate-gray-700 leading-relaxed">
                    We hold ourselves to the highest standards in everything we
                    do.
                  </p>
                </div>

                <div className="bg-white border border-slate-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg mr-4">
                      <LuLeaf className="h-6 w-6 text-glaucous-600" />
                    </div>
                    <h3 className="font-bold text-slate-gray-900 text-lg">
                      Sustainability
                    </h3>
                  </div>
                  <p className="text-slate-gray-700 leading-relaxed">
                    We plan and build with the future in mind, ensuring our
                    impact benefits generations to come.
                  </p>
                </div>

                <div className="bg-white border border-slate-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-glaucous-100 p-3 rounded-lg mr-4">
                      <LuTrendingUp className="h-6 w-6 text-glaucous-600" />
                    </div>
                    <h3 className="font-bold text-slate-gray-900 text-lg">
                      Empowerment
                    </h3>
                  </div>
                  <p className="text-slate-gray-700 leading-relaxed">
                    We help individuals build financial security and confidence
                    through verified property investments.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Impact */}
            <div>
              <h2 className="text-2xl font-bold text-slate-gray-900 mb-6">
                Our Impact
              </h2>
              <div className="space-y-6 text-slate-gray-700 leading-relaxed">
                <p>
                  At Riviera Homes, impact is more than a buzzword — it's our
                  foundation. We believe that every home sold, every shortlet
                  managed, and every partnership formed should contribute
                  meaningfully to the lives of real people.
                </p>
                <p>
                  We approach real estate as a catalyst for empowerment,
                  sustainability, and inclusion. By creating access to verified
                  properties and affordable housing opportunities, we're helping
                  more Nigerians experience the stability and pride of
                  ownership.
                </p>
                <div>
                  <h3 className="font-bold text-slate-gray-900 mb-2">
                    Empowering Communities
                  </h3>
                  <p>
                    We collaborate with local contractors, agents, artisans, and
                    service providers to ensure our developments create real
                    economic impact. Each new site represents new jobs, new
                    skills, and new possibilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-gray-900 mb-2">
                    Sustainable Urban Development
                  </h3>
                  <p>
                    We advocate for responsible and environmentally aware
                    construction practices. Our projects are guided by
                    eco-friendly principles — prioritizing land use efficiency,
                    green space inclusion, and materials that minimize waste.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-gray-900 mb-2">
                    Accessibility and Trust
                  </h3>
                  <p>
                    Real estate should not be complicated or exclusive. We've
                    simplified the process with transparent documentation, due
                    diligence, and client support that prioritizes peace of
                    mind.
                  </p>
                </div>
                <div className="bg-slate-gray-50 border-l-4 border-slate-gray-400 pl-6 py-4 italic text-slate-gray-800">
                  "Real estate is not about land; it's about people. And people
                  are our priority."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
