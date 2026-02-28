import React from "react";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import { Link, Outlet, useLocation } from "react-router-dom";
import { services, companyDetails } from "../../data/constant";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../Footer";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import Header from "./Header";
import SolveITNeeds from "./SolveITNeeds";
import ChakraWatermark from "../ChakraWatermark";

const ServicePageLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-transparent">
      <ChakraWatermark />
      <Header />
      <ServiceDetailsBanner />

      <div className="wrapper py-16">
        <div className="grid md:grid-cols-[28%_68%] gap-10">

          {/* ── LEFT SIDEBAR ── */}
          <div className="hidden md:flex flex-col gap-6">

            {/* All Services list */}
            <div data-aos="fade-up" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <h4 className="text-white font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                  All Services
                </h4>
              </div>
              <div className="flex flex-col p-3 gap-1">
                {services.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${item.link === pathname
                        ? "bg-secondary text-white shadow-md"
                        : "text-gray-700 hover:bg-secondary/10 hover:text-secondary"
                      }`}
                  >
                    {item.title}
                    <PiCaretDoubleRightBold className="text-xs flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Call CTA */}
            <div data-aos="fade-up" className="bg-primary rounded-xl p-8 flex flex-col items-center gap-5 text-white text-center">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                Need Help? Call Us
              </h4>
              <p className="text-white/70 text-sm">Our experts are ready to help you find the right solution.</p>
              <p className="font-bold text-secondary text-lg">{companyDetails.phone}</p>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="w-full py-3 rounded-lg bg-secondary text-white text-sm font-bold
                           hover:bg-white hover:text-secondary transition-all duration-200"
              >
                Contact Now
              </Link>
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          {/* Wrap Outlet in a styled container so all service pages look better */}
          <div className="w-full [&_h2]:font-extrabold [&_h2]:text-gray-900
                          [&_.heading]:text-[1.8rem] [&_.heading]:md:text-[2.2rem]
                          [&_.description]:text-gray-500 [&_.description]:leading-relaxed [&_.description]:text-sm
                          [&_img]:rounded-xl [&_hr]:border-gray-200
                          [&_h3]:font-bold [&_h3]:text-gray-800
                          [&_p]:text-gray-500 [&_p]:text-sm [&_p]:leading-relaxed">
            <Outlet />
          </div>

          {/* Mobile call box */}
          <div data-aos="fade-up" className="md:hidden bg-primary rounded-xl p-8 flex flex-col items-center gap-5 text-white text-center">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <h4 className="font-bold text-lg">{companyDetails.phone}</h4>
            <Link
              to={`tel:${companyDetails.phone}`}
              className="w-full py-3 rounded-lg bg-secondary text-white text-sm font-bold hover:bg-white hover:text-secondary transition-all duration-200"
            >
              Contact Now
            </Link>
          </div>

        </div>
      </div>

      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
