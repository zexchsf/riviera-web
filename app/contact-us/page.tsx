"use client"

import Footer from "@/components/organisms/footer"
import { Mail, MessageCircle, Instagram, MapPin, Phone, Clock } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactUs() {
  const [ripplePos, setRipplePos] = useState<{ x: number; y: number; key: number } | null>(null)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348012345678?text=Hello%20Riviera%20Homes", "_blank")
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:info@rivierahomes.com"
  }

  const handleInstagramClick = () => {
    window.open("https://instagram.com/rivierahomes", "_blank")
  }

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setRipplePos({ x, y, key: Date.now() })
    setTimeout(() => setRipplePos(null), 600)
  }

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
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80')"
          }}
        ></div>
        
        <div className="relative max-w-6xl mx-auto z-10 px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-gray-100 tracking-tight drop-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-gray-200 leading-relaxed max-w-5xl animation-delay-200 drop-shadow-md">
              We're here to help you find your dream property. Reach out through any of our channels 
              and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          
          {/* Modern Contact Cards Section */}
          <style jsx>{`
            @keyframes pulse-icon {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }

            @keyframes ripple {
              0% {
                transform: scale(0);
                opacity: 1;
              }
              100% {
                transform: scale(4);
                opacity: 0;
              }
            }

            .pulse-animation {
              animation: pulse-icon 3s ease-in-out infinite;
            }

            .ripple-effect {
              position: absolute;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.6);
              width: 20px;
              height: 20px;
              animation: ripple 0.6s ease-out;
              pointer-events: none;
            }

            .glass-effect:hover {
              backdrop-filter: blur(8px);
            }

            .gradient-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.05));
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
              pointer-events: none;
              border-radius: 16px;
            }

            .card-hover:hover .gradient-overlay {
              opacity: 1;
            }
          `}</style>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* WhatsApp Card */}
            <div 
              className="card-hover group relative bg-white rounded-2xl p-10 transition-all duration-300 ease-in-out hover:-translate-y-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#25D366] cursor-pointer"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                maxWidth: '400px',
                width: '100%',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}
              tabIndex={0}
              role="article"
            >
              <div className="gradient-overlay"></div>
              
              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div 
                  className="relative flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 pulse-animation"
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'rgba(37, 211, 102, 0.2)'
                  }}
                >
                  <MessageCircle 
                    className="transition-transform duration-300 ease-in-out"
                    style={{
                      width: '28px',
                      height: '28px',
                      color: '#25D366'
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 
                className="text-center mb-2"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#1A1A1A'
                }}
              >
                WhatsApp
              </h3>
              
              <p 
                className="text-center mb-6"
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}
              >
                Chat with us instantly for quick responses
              </p>

              {/* Button */}
              <button
                onClick={(e) => {
                  createRipple(e)
                  handleWhatsAppClick()
                }}
                aria-label="Start WhatsApp chat with Riviera Homes"
                className="relative w-full text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] overflow-hidden"
                style={{
                  height: '48px',
                  fontSize: '16px',
                  backgroundColor: '#25D366'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#20BD5A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366'
                }}
              >
                Start Chat
                {ripplePos && (
                  <span
                    className="ripple-effect"
                    style={{
                      left: ripplePos.x - 10,
                      top: ripplePos.y - 10
                    }}
                  />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div 
              className="card-hover group relative bg-white rounded-2xl p-10 transition-all duration-300 ease-in-out hover:-translate-y-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#5B7C99] cursor-pointer"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                maxWidth: '400px',
                width: '100%',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}
              tabIndex={0}
              role="article"
            >
              <div className="gradient-overlay"></div>
              
              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div 
                  className="relative flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 pulse-animation"
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'rgba(91, 124, 153, 0.2)'
                  }}
                >
                  <Mail 
                    className="transition-transform duration-300 ease-in-out"
                    style={{
                      width: '28px',
                      height: '28px',
                      color: '#5B7C99'
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 
                className="text-center mb-2"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#1A1A1A'
                }}
              >
                Email
              </h3>
              
              <p 
                className="text-center mb-6"
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}
              >
                Send us a detailed message about your needs
              </p>

              {/* Button */}
              <button
                onClick={(e) => {
                  createRipple(e)
                  handleEmailClick()
                }}
                aria-label="Send email to Riviera Homes"
                className="relative w-full text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B7C99] overflow-hidden"
                style={{
                  height: '48px',
                  fontSize: '16px',
                  backgroundColor: '#5B7C99'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4A6580'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#5B7C99'
                }}
              >
                Send Email
                {ripplePos && (
                  <span
                    className="ripple-effect"
                    style={{
                      left: ripplePos.x - 10,
                      top: ripplePos.y - 10
                    }}
                  />
                )}
              </button>
            </div>

            {/* Instagram Card */}
            <div 
              className="card-hover group relative bg-white rounded-2xl p-10 transition-all duration-300 ease-in-out hover:-translate-y-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#833AB4] cursor-pointer"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                maxWidth: '400px',
                width: '100%',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}
              tabIndex={0}
              role="article"
            >
              <div className="gradient-overlay"></div>
              
              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div 
                  className="relative flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 pulse-animation"
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'radial-gradient(circle at 30% 107%, rgba(252, 175, 69, 0.2) 0%, rgba(253, 29, 29, 0.2) 45%, rgba(131, 58, 180, 0.2) 90%)'
                  }}
                >
                  <Instagram 
                    className="transition-transform duration-300 ease-in-out"
                    style={{
                      width: '28px',
                      height: '28px',
                      color: '#833AB4'
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 
                className="text-center mb-2"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#1A1A1A'
                }}
              >
                Instagram
              </h3>
              
              <p 
                className="text-center mb-6"
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}
              >
                Follow us for the latest property updates
              </p>

              {/* Button */}
              <button
                onClick={(e) => {
                  createRipple(e)
                  handleInstagramClick()
                }}
                aria-label="Follow Riviera Homes on Instagram"
                className="relative w-full text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#833AB4] overflow-hidden"
                style={{
                  height: '48px',
                  fontSize: '16px',
                  background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(1)'
                }}
              >
                Follow Us
                {ripplePos && (
                  <span
                    className="ripple-effect"
                    style={{
                      left: ripplePos.x - 10,
                      top: ripplePos.y - 10
                    }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Contact Form & Info Section */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
            {/* Contact Form */}
            {/* <div>
              <h2 className="text-3xl font-bold text-slate-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName"
                      placeholder="John"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName"
                      placeholder="Doe"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+234 801 234 5678"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your property needs..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-glaucous-600 hover:bg-glaucous-700 text-white text-lg py-6"
                >
                  Send Message
                </Button>
              </form>
            </div> */}

            {/* Contact Information */}
            {/* <div>
              <h2 className="text-3xl font-bold text-slate-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-8"> */}
                {/* Office Address */}
                {/* <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-glaucous-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-glaucous-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-gray-900 mb-1">Office Address</h3>
                    <p className="text-slate-gray-600">
                      123 Victoria Island<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div> */}

                {/* Phone */}
                {/* <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-glaucous-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-glaucous-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-gray-900 mb-1">Phone</h3>
                    <p className="text-slate-gray-600">
                      +234 801 234 5678<br />
                      +234 809 876 5432
                    </p>
                  </div>
                </div> */}

                {/* Email */}
                {/* <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-glaucous-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-glaucous-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-gray-900 mb-1">Email</h3>
                    <p className="text-slate-gray-600">
                      info@rivierahomes.com<br />
                      support@rivierahomes.com
                    </p>
                  </div>
                </div> */}

                {/* Business Hours */}
                {/* <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-glaucous-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-glaucous-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-gray-900 mb-1">Business Hours</h3>
                    <p className="text-slate-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div> */}

                {/* Social Media Links */}
                {/* <div className="pt-6 border-t border-slate-gray-200">
                  <h3 className="text-lg font-semibold text-slate-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <button 
                      onClick={handleWhatsAppClick}
                      className="w-12 h-12 bg-green-100 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </button>
                    <button 
                      onClick={handleEmailClick}
                      className="w-12 h-12 bg-glaucous-100 hover:bg-glaucous-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Mail className="h-6 w-6 text-glaucous-600 group-hover:text-white transition-colors duration-300" />
                    </button>
                    <button 
                      onClick={handleInstagramClick}
                      className="w-12 h-12 bg-pink-100 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Instagram className="h-6 w-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Map Section (Optional) */}
          {/* <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-gray-900 mb-6">Find Us</h2>
            <div className="w-full h-96 bg-slate-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7653094097456!2d3.4207574!3d6.4280629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52f87e9c0c7%3A0x9e1a22c6cd0c4b5e!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}