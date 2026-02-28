import React from "react";
import BannerLogo from "../BannerLogo";
import { Link, useLocation } from "react-router-dom";
import { services } from "../../data/constant";

const ServiceDetailsBanner = () => {
  const { pathname } = useLocation();
  const service = services.find((item) => item.link === pathname);

  return (
    <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <BannerLogo />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 pt-16 md:pt-0">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-4 py-1 rounded-full mb-4">
          Our Services
        </span>
        <h1
          className="text-primary text-center font-extrabold text-[1.5rem] md:text-[3rem] leading-tight max-w-3xl"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {service?.title || "Service Details"}
        </h1>
        {service?.subtitle && (
          <p className="text-gray-500 text-sm mt-3 text-center">
            {service.subtitle}
          </p>
        )}
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
          <span>/</span>
          <span className="text-secondary">{service?.title}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
