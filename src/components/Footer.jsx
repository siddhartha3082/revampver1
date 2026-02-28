import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { companyDetails, services, websitePagesLinks } from "../data/constant";

/**
 * Footer Component - Revamped
 * - Clean white background with top border accent
 * - 4-column layout: Brand | Company | Services | Contact
 * - Social icons, newsletter sub-text, copyright line
 * - Matches GiggleZen's footer structure
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer Content */}
      <div className="wrapper py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Brand */}
        <div className="flex flex-col gap-5 lg:col-span-1">
          <Link to="/">
            <img
              src={logo}
              alt="Vihaang AI Logo"
              className="h-[2.8rem] object-contain brightness-200"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-w-[18rem]">
            Enterprise AI & Technology Solutions · Global Delivery
          </p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-[18rem]">
            Uptown Cyberabad Building, 100ft Rd, Madhapur, Hi-Tech City,
            Hyderabad, Telangana — 500081
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-1">
            <Link
              to={companyDetails.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-secondary hover:text-white transition-all duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              to={companyDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-secondary hover:text-white transition-all duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </Link>
            <Link
              to={companyDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-secondary hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
            </Link>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="flex flex-col gap-4">
          <h6 className="text-white font-semibold text-sm uppercase tracking-wider">
            Company
          </h6>
          <ul className="flex flex-col gap-3">
            {websitePagesLinks.map(({ id, label, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-4">
          <h6 className="text-white font-semibold text-sm uppercase tracking-wider">
            Services
          </h6>
          <ul className="flex flex-col gap-3">
            {services.slice(0, 7).map(({ id, title, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col gap-4">
          <h6 className="text-white font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </h6>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href={`mailto:${companyDetails.email}`}
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-secondary transition-colors duration-200"
              >
                <MdEmail size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <span>{companyDetails.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${companyDetails.phone}`}
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-secondary transition-colors duration-200"
              >
                <MdPhone size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <span>{companyDetails.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MdLocationOn size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
              <span className="leading-relaxed">{companyDetails.location}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="wrapper py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} Vihaang AI Global Services Pvt Ltd · All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="#" className="hover:text-secondary transition-colors duration-200">Privacy Policy</Link>
            <Link to="#" className="hover:text-secondary transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
