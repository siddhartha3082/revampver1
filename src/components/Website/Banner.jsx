import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TYPEWRITER_WORDS = [
  "AI Solutions.",
  "Web Development.",
  "App Development.",
  "Blockchain Solutions.",
  "Cloud Computing.",
  "Digital Transformation.",
];

const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
};

const Banner = () => {
  const typed = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section
      id="banner"
      className="min-h-screen w-full relative flex items-center justify-center"
      aria-label="Hero Section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/88 to-secondary/10 z-0" />

      {/* Glow blob */}
      <div
        className="absolute top-[-5rem] right-[-5rem] w-[30rem] h-[30rem] rounded-full opacity-15 z-0"
        style={{
          background: "radial-gradient(circle, #219BE4, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content — fully centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-5 pt-[5rem] pb-[5rem]">

        {/* Badge */}
        <span
          data-aos="fade-up"
          className="text-xs font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-4 py-1.5 rounded-full border border-secondary/20 mb-6"
        >
          India-based • Global Delivery
        </span>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-extrabold leading-tight tracking-tight mb-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#010C2A",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
          }}
        >
          Your Partner for
        </h1>

        {/* Typewriter line — separate so it never gets clipped */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mb-6 flex items-center justify-center"
          style={{ minHeight: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          <span
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              background: "linear-gradient(135deg, #219BE4, #010C2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {typed}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "3px",
              height: "clamp(2rem, 5vw, 3rem)",
              background: "#219BE4",
              marginLeft: "4px",
              borderRadius: "2px",
              animation: "blink 0.75s step-end infinite",
              verticalAlign: "middle",
            }}
          />
        </div>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-base leading-relaxed mb-8 max-w-xl"
          style={{ color: "#1e3a5f" }}
        >
          As a leading software company in Hyderabad, we turn your ideas into
          growth-driven solutions across AI, web, mobile, and cloud.
        </p>

        {/* CTA Buttons */}
        <div data-aos="fade-up" data-aos-delay="250" className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/services"
            className="px-8 py-3.5 rounded-lg text-white font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #219BE4, #010C2A)" }}
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-lg font-bold text-sm hover:-translate-y-0.5 transition-all duration-200"
            style={{ border: "2px solid #010C2A", color: "#010C2A" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#010C2A";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#010C2A";
            }}
          >
            Get a Free Audit →
          </Link>
        </div>
      </div>

      {/* Blink cursor */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px]" fill="white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
