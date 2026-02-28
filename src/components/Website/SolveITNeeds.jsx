import React from "react";
import img from "../../assets/images/266699.webp";
import { Link } from "react-router-dom";

const SolveITNeeds = () => {
  return (
    <section data-aos="fade-up" className="w-full relative overflow-hidden my-10 mx-auto max-w-7xl px-5 sm:px-8">
      <div className="relative rounded-2xl overflow-hidden min-h-[16rem] flex items-center">

        {/* Background image */}
        <img
          src={img}
          alt="CTA background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Dark gradient overlay — strong enough to make text readable */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(1,12,42,0.96) 0%, rgba(1,12,42,0.88) 60%, rgba(33,155,228,0.75) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-14 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2
              className="text-[1.6rem] md:text-[2.2rem] font-extrabold leading-tight"
              style={{ fontFamily: "Syne, sans-serif", color: "#ffffff" }}
            >
              Let's Build What's Next
            </h2>
            <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              Whether you're starting fresh or scaling fast — we help you build digital solutions
              that are beautifully designed, technically advanced, and strategically sound.
            </p>
            <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
              We don't just deliver software. We deliver value, impact, and growth.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 px-8 py-4 rounded-xl font-bold text-sm
                       shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            style={{ background: "#219BE4", color: "#ffffff" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#010C2A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#219BE4"; e.currentTarget.style.color = "#ffffff"; }}
          >
            Get Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolveITNeeds;
