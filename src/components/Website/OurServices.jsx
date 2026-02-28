import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import banner from "../../assets/images/our-services-banner.webp";

const OurServices = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Services — VIHAANG AI GLOBAL SERVICES PVT LTD</title>
        <meta
          name="description"
          content="Explore the full range of AI, software development, blockchain, cloud, and digital services offered by Vihaang AI."
        />
      </Helmet>

      <Header />

      {/* ── PAGE BANNER ── */}
      <div className="relative h-[45vh] md:h-[60vh] overflow-hidden">
        <img
          src={banner}
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 mt-10">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-white/10 border border-white/20 px-4 py-1 rounded-full mb-4">
            What We Offer
          </span>
          <h1
            className="text-white text-center font-extrabold text-[2rem] md:text-[3.2rem] leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Customized Services{" "}
            <span className="bg-gradient-to-r from-secondary to-blue-300 bg-clip-text text-transparent">
              Built for Your Goals
            </span>
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section id="services" className="wrapper py-20">
        <div data-aos="fade-up" className="text-center mb-12">
          <span className="section-label">Our Core Expertise</span>
          <h2
            className="text-[1.8rem] md:text-[2.4rem] font-extrabold mt-2 text-gray-900"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Full-Spectrum Technology Solutions
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            At Vihaang AI, we specialize in delivering end-to-end technology services — combining
            design thinking, engineering excellence, and deep domain knowledge to help you stay ahead.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((item) => (
            <ServiceItemCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US (mini strip) ── */}
      <section className="bg-gray-50 py-14">
        <div className="wrapper">
          <div data-aos="fade-up" className="text-center mb-10">
            <span className="section-label">Why Vihaang AI</span>
            <h2
              className="text-[1.8rem] md:text-[2.2rem] font-extrabold mt-2 text-gray-900"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { number: "01", title: "On-Time Delivery",     desc: "Agile processes and clear timelines, every time." },
              { number: "02", title: "Expert Teams",         desc: "Deep domain knowledge across every tech stack." },
              { number: "03", title: "Transparent Pricing",  desc: "No hidden fees. Clear scopes, honest estimates." },
              { number: "04", title: "Long-Term Support",    desc: "We stay with you well beyond the launch date." },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm
                           hover:shadow-md hover:border-secondary hover:-translate-y-1
                           transition-all duration-300"
              >
                <span className="text-secondary font-extrabold text-xl" style={{ fontFamily: "Syne, sans-serif" }}>
                  {item.number}
                </span>
                <h3 className="font-bold text-gray-900 text-sm mt-3 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default OurServices;
