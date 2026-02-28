import React from "react";
import ChakraWatermark from "../../components/ChakraWatermark";
import { Helmet } from "react-helmet";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/about-us-page-2.png";
import projectsImg from "../../assets/images/icons/projects.png";
import clientsImg from "../../assets/images/icons/clients.png";
import awardsImg from "../../assets/images/icons/awards.png";

const stats = [
  { icon: projectsImg, number: "50+",  label: "Projects Completed" },
  { icon: clientsImg,  number: "100%", label: "Satisfied Clients"  },
  { icon: awardsImg,   number: "2+",   label: "Awards Won"         },
];

const values = [
  { emoji: "💡", title: "Innovation with Purpose",   desc: "We don't chase trends — we create solutions that genuinely move the needle for your business." },
  { emoji: "🤝", title: "Partnership Over Projects", desc: "Every client becomes a long-term part of our journey. Your success is our success." },
  { emoji: "🎯", title: "Precision in Execution",    desc: "From strategy to deployment, we sweat every detail so you don't have to." },
  { emoji: "📈", title: "Scalable Growth",           desc: "Our systems and solutions are built to evolve and grow right alongside your business." },
  { emoji: "🔒", title: "Security First",            desc: "Every solution we build is designed with security, reliability, and compliance in mind." },
  { emoji: "🌍", title: "Global Delivery",           desc: "Headquartered in Hyderabad with a global delivery model across multiple time zones." },
];

const AboutUs = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us — VIHAANG AI GLOBAL SERVICES PVT LTD</title>
        <meta name="description" content="Learn about Vihaang AI — our mission, values, and the team driving innovation in AI, software development, and digital transformation." />
      </Helmet>

      <ChakraWatermark />
      <Header />

      {/* ── PAGE BANNER ── */}
      <div className="relative pt-32 pb-10 flex flex-col items-center justify-center text-center px-5">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-4 py-1 rounded-full mb-5">
          Who We Are
        </span>
        <h1
          className="font-extrabold leading-tight mb-3 text-center"
          style={{ fontFamily: "Poppins, sans-serif", color: "#010C2A", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          Driven by Innovation.{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Built for Impact.
          </span>
        </h1>
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-secondary">About Us</span>
        </div>
      </div>

      {/* ── SECTION 1: Who We Are ── */}
      <section className="wrapper py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <div data-aos="fade-right" className="flex flex-col gap-6">
            <span className="section-label">About the Company</span>
            <h2
              className="text-[1.8rem] md:text-[2.4rem] font-extrabold leading-tight text-gray-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We're Not Just a Tech Company —{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                We're Your Growth Partner
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Founded with the mission to drive digital transformation, Vihaang AI specializes in
              providing cutting-edge AI, blockchain, and ML services across a wide range of sectors
              including energy, healthcare, e-commerce, real estate, and more.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We collaborate closely with startups, SMEs, and enterprises to design and develop
              custom solutions that not only meet industry standards but push the boundaries of
              what's possible. We don't just build products — we build long-term partnerships.
            </p>

            {/* Highlight bullets */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                "Cutting-edge AI, Blockchain & ML solutions",
                "Serving startups to large enterprises globally",
                "End-to-end from strategy to post-launch support",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-secondary/15 text-secondary text-xs font-bold flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  {point}
                </div>
              ))}
            </div>

            <Link to="/contact" className="primary-btn w-fit mt-2">
              Work With Us
            </Link>
          </div>

          {/* Right: Image */}
          <div data-aos="fade-left" className="relative">
            <img
              src={img1}
              alt="Vihaang AI team"
              className="w-full max-h-[26rem] object-contain rounded-xl"
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-primary text-white px-5 py-4 rounded-xl shadow-xl">
              <p className="text-3xl font-extrabold" style={{ fontFamily: "Poppins, sans-serif" }}>2+</p>
              <p className="text-xs font-medium mt-1 text-white/80">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Stats Bar ── */}
      <section className="bg-primary py-14" aria-label="Company Stats">
        <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className={`flex flex-col gap-3 text-white items-start px-8
                ${i < stats.length - 1 ? "md:border-r border-white/20" : ""}`}
            >
              <img src={stat.icon} alt={stat.label} className="h-10 object-contain brightness-200" />
              <p
                className="text-5xl font-extrabold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {stat.number}
              </p>
              <p className="border-l-2 border-secondary pl-3 text-sm text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: Mission & Vision ── */}
      <section className="wrapper py-20">
        <div data-aos="fade-up" className="text-center mb-12">
          <span className="section-label">Our Purpose</span>
          <h2
            className="text-[1.8rem] md:text-[2.4rem] font-extrabold mt-2 text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Mission, Vision & Values
          </h2>
        </div>

        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div
            data-aos="fade-right"
            className="bg-primary rounded-2xl p-8 text-white flex flex-col gap-4"
          >
            <span className="text-3xl">🚀</span>
            <h3 className="text-xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
              Our Mission
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              To bridge the gap between complex technology and business success — by building
              intelligent, scalable, and beautifully crafted digital solutions that create real-world value.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-secondary rounded-2xl p-8 text-white flex flex-col gap-4"
          >
            <span className="text-3xl">🌟</span>
            <h3 className="text-xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
              Our Vision
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              To be the global leader in providing integrated digital solutions that redefine
              business efficiency — empowering companies of all sizes to thrive in the digital era.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((val, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                         hover:shadow-lg hover:-translate-y-1 hover:border-secondary
                         transition-all duration-300"
            >
              <span className="text-2xl mb-3 block">{val.emoji}</span>
              <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-secondary transition-colors duration-200">
                {val.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default AboutUs;
