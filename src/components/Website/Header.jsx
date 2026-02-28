import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { websitePagesLinks } from "../../data/constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="wrapper flex items-center justify-between gap-6">

        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={logo}
            alt="Vihaang AI Logo"
            className="h-[2.5rem] md:h-[3.2rem] object-contain"
          />
          {/* Company name — hidden on very small screens */}
          <div className="hidden sm:flex flex-col justify-center" style={{ gap: "2px" }}>
            <span style={{ color: "#010C2A", fontFamily: "Syne, sans-serif", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1 }}>
              Vihaang AI
            </span>
            <span style={{ color: "#219BE4", fontSize: "0.45rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", lineHeight: 1 }}>
              Global Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {websitePagesLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                pathname === item.link
                  ? "text-secondary border-b-2 border-secondary pb-0.5"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-md bg-secondary text-white text-sm font-semibold hover:bg-primary transition-colors duration-200 flex-shrink-0"
        >
          Get a Quote
        </Link>

        {/* Hamburger - Mobile */}
        <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Hamburger
            color="#000000"
            size="24"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="p-4"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-8 px-2 pt-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-[2.5rem] object-contain" />
            <div className="flex flex-col justify-center" style={{ gap: "2px" }}>
              <span style={{ color: "#010C2A", fontFamily: "Syne, sans-serif", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1 }}>
                Vihaang AI
              </span>
              <span style={{ color: "#219BE4", fontSize: "0.45rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", lineHeight: 1 }}>
                Global Services
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 text-[2rem] hover:text-primary transition-colors"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-5 px-3">
          {websitePagesLinks.map(({ label, link, id }) => (
            <Link
              key={id}
              to={link}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-medium transition-colors duration-200 hover:text-secondary ${
                pathname === link ? "text-secondary" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-center px-5 py-3 rounded-md bg-secondary text-white font-semibold hover:bg-primary transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
