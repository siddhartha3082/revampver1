import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import ChakraWatermark from "../../components/ChakraWatermark";
import {
  PiEnvelopeLight,
  PiMapPinAreaLight,
  PiPhoneCallLight,
} from "react-icons/pi";
import { companyDetails } from "../../data/constant";
import MapComponent from "../../components/Website/MapComponent";
import InquiryForm from "../../components/InquiryForm";

const ContactUs = () => {
  return (
    <div className="bg-transparent">
      <ChakraWatermark />
      <Header />

      {/* ── PAGE BANNER ── */}
      <div className="relative pt-32 pb-10 flex flex-col items-center justify-center text-center px-5">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-4 py-1 rounded-full mb-5">
          Reach Out
        </span>
        <h1
          className="font-extrabold leading-tight mb-3 text-center"
          style={{ fontFamily: "Poppins, sans-serif", color: "#010C2A", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Work Together
          </span>
        </h1>
        <p className="text-gray-500 text-sm mt-2 text-center max-w-xl">
          Have a project in mind? We'd love to hear from you.
        </p>
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-secondary">Contact Us</span>
        </div>
      </div>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="wrapper py-10 md:py-16">
        <div data-aos="fade-up" className="text-center mb-12">
          <span className="section-label">Get In Touch</span>
          <h2
            className="text-[1.4rem] md:text-[2.4rem] font-extrabold mt-2 text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact Information
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            We'd love to hear from you! Whether you have a project in mind or need expert guidance — we are just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div
            data-aos="fade-up"
            className="group relative bg-white rounded-xl border border-gray-200 p-8
                       hover:bg-primary hover:border-primary hover:shadow-xl
                       hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <PiPhoneCallLight className="absolute bottom-3 right-3 text-[4rem] md:text-[7rem] text-gray-100 group-hover:text-white/10 transition-colors duration-300" />
            <div className="w-14 h-14 rounded-xl bg-secondary/10 group-hover:bg-white flex items-center justify-center text-secondary text-2xl mb-5 transition-colors duration-300">
              <PiPhoneCallLight />
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-white text-sm mb-2 transition-colors duration-300">Phone Number</h3>
            <a
              href={`tel:${companyDetails.phone}`}
              className="text-gray-500 group-hover:text-white/80 text-sm transition-colors duration-300"
            >
              {companyDetails.phone}
            </a>
          </div>

          {/* Email */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative bg-white rounded-xl border border-gray-200 p-8
                       hover:bg-primary hover:border-primary hover:shadow-xl
                       hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <PiEnvelopeLight className="absolute bottom-3 right-3 text-[4rem] md:text-[7rem] text-gray-100 group-hover:text-white/10 transition-colors duration-300" />
            <div className="w-14 h-14 rounded-xl bg-secondary/10 group-hover:bg-white flex items-center justify-center text-secondary text-2xl mb-5 transition-colors duration-300">
              <PiEnvelopeLight />
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-white text-sm mb-2 transition-colors duration-300">Email Address</h3>
            <a
              href={`mailto:${companyDetails.email}`}
              className="text-gray-500 group-hover:text-white/80 text-sm transition-colors duration-300"
            >
              {companyDetails.email}
            </a>
          </div>

          {/* Location */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative bg-white rounded-xl border border-gray-200 p-8
                       hover:bg-primary hover:border-primary hover:shadow-xl
                       hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <PiMapPinAreaLight className="absolute bottom-3 right-3 text-[4rem] md:text-[7rem] text-gray-100 group-hover:text-white/10 transition-colors duration-300" />
            <div className="w-14 h-14 rounded-xl bg-secondary/10 group-hover:bg-white flex items-center justify-center text-secondary text-2xl mb-5 transition-colors duration-300">
              <PiMapPinAreaLight />
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-white text-sm mb-2 transition-colors duration-300">Our Location</h3>
            <p className="text-gray-500 group-hover:text-white/80 text-sm transition-colors duration-300">
              {companyDetails.location}
            </p>
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section className="mt-10">
        <div className="-mb-[8rem]">
          <InquiryForm />
        </div>
      </section>

      {/* ── MAP ── */}
      <MapComponent />

      {/* ── CTA ── */}
      <div className="-mt-[8rem] relative z-10">
        <SolveITNeeds />
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
