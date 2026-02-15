import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF size={12} />, color: "bg-[#3b5998]" },
    { icon: <FaTwitter size={12} />, color: "bg-[#55acee]" },
    { icon: <FaInstagram size={12} />, color: "bg-[#e4405f]" },
    { icon: <FaLinkedinIn size={12} />, color: "bg-[#007bb5]" },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: ["Home", "Menu", "Services", "Reviews"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Use", "Payment Policy", "Cookies"],
    },
  ];

  return (
    <footer className="w-full font-sans">
      {/* Top Gradient Background Area */}
      <div className="bg-gradient-to-b from-[#fdf5e6] to-[#fffaf0] pt-16 pb-32 px-4 md:px-10 border-t border-orange-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="px-6 py-1.5 border border-gray-300 rounded-full text-2xl font-bold text-[#d35400] font-serif shadow-sm">
              Foodie's Hub
            </h2>
            <p className="italic text-gray-500 text-sm ml-2">Serving happiness since 2020</p>
            <div className="flex gap-2 ml-2">
              {socialLinks.map((social, index) => (
                <div key={index} className={`${social.color} text-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform`}>
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="px-6 py-1 border border-gray-300 rounded-full text-lg font-bold text-gray-700 font-serif mb-5 shadow-sm">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-600 text-[15px] ml-2">
                {section.links.map((link) => (
                  <li key={link} className="hover:text-orange-600 cursor-pointer transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="flex flex-col items-start">
            <h3 className="px-6 py-1 border border-gray-300 rounded-full text-lg font-bold text-gray-700 font-serif mb-5 shadow-sm">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-600 text-[14px] ml-2">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#d35400]" />
                <span>123 Food Street, New York</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#d35400]" />
                <span>+91 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaRegEnvelope className="text-[#d35400]" />
                <span>contact@foodies.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Newsletter Card */}
      <div className="relative -mt-24 px-4">
        <div className="max-w-4xl mx-auto bg-[#fafafa] rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">
            Get 15% Off Your First Order!
          </h2>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-orange-100 bg-[#fffdfa] text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 shadow-inner"
            />
            <button className="bg-[#e65100] text-white px-10 py-4 rounded-full font-bold hover:bg-[#bf360c] transition-colors shadow-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="bg-[#fffaf0] pt-20 pb-10 text-center text-sm text-gray-500">
        <p>© 2026 Foodie's Hub. All rights reserved.</p>
        <p className="mt-2">
          Designed by <span className="text-[#d35400] font-semibold cursor-pointer">Sultan AL Islam</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;