import { LuInstagram, LuMessageCircle } from "react-icons/lu";

function Footer() {
  const socialLinks = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@rivierahomes9ja",
      icon: "🎵",
      color: "hover:text-black",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rivierahomes",
      icon: LuInstagram,
      color: "hover:text-pink-500",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+2349033261767",
      icon: LuMessageCircle,
      color: "hover:text-green-500",
    },
  ];

  return (
    <footer className="bg-navy-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Riviera Homes</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for premium shortlet rentals and land
              investments in Lagos, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Featured Apartments
                </a>
              </li>
              <li>
                <a
                  href="#land-for-sale"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Land for Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="tel:+2348123456789"
                  className="hover:text-gold-400 transition-colors"
                >
                  +234 812 345 6789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rivierahomes.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@rivierahomes.com
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="https://wa.me/2348123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  <LuMessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-center text-lg font-bold mb-6">Follow Us</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                aria-label={`Follow us on ${social.name}`}
              >
                {typeof social.icon === "string" ? (
                  <span className="text-2xl">{social.icon}</span>
                ) : (
                  <social.icon className="w-6 h-6" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Riviera Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
