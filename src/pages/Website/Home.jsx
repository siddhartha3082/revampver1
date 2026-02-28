import React, { useState, Suspense } from "react";
import ChakraWatermark from "../../components/ChakraWatermark";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import WorkFlow from "../../components/WorkFlow";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import {
  companyDetails,
  industriesCompanyServe,
  services,
} from "../../data/constant";
import aboutImg from "../../assets/images/home-aboutus.webp";
import whoWeAre from "../../assets/images/who-we-are.webp";
import line from "../../assets/images/line.png";

// Lazy load above-the-fold heavy components
const Header = React.lazy(() => import("../../components/Website/Header"));
const Banner = React.lazy(() => import("../../components/Website/Banner"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary" />
  </div>
);

// Schema markup for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VIHAANG AI GLOBAL SERVICES PVT LTD",
  description:
    "VIHAANG AI GLOBAL SERVICES PVT LTD is a globally recognized leader in delivering cutting-edge technology solutions including AI, Machine Learning, Blockchain, and Cloud Computing.",
  image: companyDetails.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uptown Cyberabad Building, 100ft Rd, Madhapur, Hi-Tech City",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "India",
  },
};

// FAQ data for the FAQ section
const faqs = [
  {
    id: 1,
    question: "What services does Vihaang AI provide?",
    answer:
      "We offer end-to-end technology solutions including AI & Machine Learning, Web & Mobile App Development, Blockchain, Cloud Computing, IoT, UI/UX Design, Chatbot Development, and Data Analytics.",
  },
  {
    id: 2,
    question: "How do I get started with Vihaang AI?",
    answer:
      "Simply fill out our contact form or reach out via email. Our team will connect with you to understand your goals and suggest a tailored roadmap.",
  },
  {
    id: 3,
    question: "Do you work with startups and enterprises?",
    answer:
      "Absolutely! We collaborate with startups for rapid product builds and with enterprises for large-scale digital transformation initiatives.",
  },
  {
    id: 4,
    question: "What makes Vihaang AI different?",
    answer:
      "We combine engineering excellence with business thinking. Every solution we build is designed to be scalable, secure, and genuinely aligned with your business outcomes.",
  },
  {
    id: 5,
    question: "Can you handle international projects?",
    answer:
      "Yes. We operate with a global delivery model and manage projects across multiple time zones with real-time communication and agile workflows.",
  },
];

// Collapsible FAQ Item
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">
          {question}
        </span>
        <span className="text-secondary text-xl font-bold ml-4 flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 bg-gray-50 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const firstSix = services.slice(0, 6);
  const remaining = services.slice(6);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          VIHAANG AI GLOBAL SERVICES PVT LTD — AI & Technology Solutions | Custom Software Development
        </title>
        <meta
          name="description"
          content="VIHAANG AI GLOBAL SERVICES PVT LTD offers cutting-edge AI, Machine Learning, and Blockchain solutions. Transform your business with custom software development and technology consulting."
        />
        <meta
          name="keywords"
          content="AI solutions, Machine Learning, Blockchain, Custom Software Development, Technology Consulting, Hyderabad"
        />
        <link rel="canonical" href="https://www.vihaangai.com" />
        <meta property="og:title" content="VIHAANG AI — Leading AI & Technology Solutions Provider" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, Machine Learning, and Blockchain solutions." />
        <meta property="og:image" content={aboutImg} />
        <meta property="og:url" content="https://www.vihaangai.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Page Wrapper */}
      <div className="landing-bg">
        <ChakraWatermark />

        {/* ───── Header + Hero ───── */}
        <Suspense fallback={<LoadingFallback />}>
          <Header />
          <Banner />
        </Suspense>

        <main>

          {/* ───── SECTION 1: What We Offer (Services) ───── */}
          <section
            id="services"
            className="w-screen py-16 flex justify-center relative"
            aria-label="Our Services"
          >
            <div className="blurred-blue left-[-10%] top-[-10%]" />
            <div className="wrapper flex flex-col items-center gap-6 z-10">

              {/* Section Label */}
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage src={line} alt="" className="w-[3rem]" />
                <span className="font-semibold text-secondary uppercase text-sm tracking-wide">
                  What We Offer
                </span>
              </div>

              {/* Section Heading */}
              <h2
                data-aos="fade-up"
                className="heading text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent max-w-2xl"
              >
                Customized Services Designed to Meet Your Goals
              </h2>

              <p data-aos="fade-up" className="text-center text-gray-500 max-w-2xl text-sm leading-relaxed">
                At Vihaang AI, we specialize in delivering full-spectrum technology solutions — combining
                design thinking, engineering excellence, and deep domain knowledge to help you stay ahead.
              </p>

              {/* Service Cards Grid */}
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-2"
              >
                {firstSix.map((item) => (
                  <ServiceItemCard key={item.id} item={item} />
                ))}
                {showAll &&
                  remaining.map((item) => (
                    <ServiceItemCard key={item.id} item={item} />
                  ))}
              </div>

              {/* Show More / Less */}
              {remaining.length > 0 && (
                <button
                  className="mt-4 px-6 py-2.5 rounded-md border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all duration-200 text-sm"
                  onClick={() => setShowAll((prev) => !prev)}
                >
                  {showAll ? "Show Less" : `See All Services (${remaining.length} more)`}
                </button>
              )}
            </div>
          </section>

          {/* ───── SECTION 2: About / Mission ───── */}
          <section
            className="w-screen py-16 bg-gray-50"
            aria-label="About Vihaang AI"
          >
            <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left: Image with experience badge */}
              <div className="relative" data-aos="fade-right">
                <LazyLoadImage
                  src={whoWeAre}
                  alt="Vihaang AI team at work"
                  className="rounded-xl w-full h-[22rem] object-cover object-center shadow-lg"
                />
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-primary text-white p-4 rounded-lg shadow-xl">
                  <h3 className="text-4xl font-extrabold">2+</h3>
                  <p className="text-sm font-medium mt-1">Years of Experience</p>
                  <p className="text-xs mt-2 border-l-2 border-white pl-3 max-w-[12rem] leading-relaxed">
                    The trusted choice for your software development solutions
                  </p>
                </div>
              </div>

              {/* Right: Text Content */}
              <div data-aos="fade-left" className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <LazyLoadImage src={line} alt="" className="w-[3rem]" />
                  <span className="font-semibold text-secondary uppercase text-sm tracking-wide">
                    About Company
                  </span>
                </div>

                <h2 className="heading-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Driven by Innovation. Built for Impact.
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  We're not just a development agency — we're your technology partner in building
                  exceptional digital experiences that make businesses smarter, faster, and future-ready.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  From cutting-edge UI/UX design to AI-powered solutions, from full-stack web development
                  to cloud-native architectures, we help you transform ideas into meaningful digital products.
                </p>

                {/* Vision + Values Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-primary mb-1 text-sm">Our Vision</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      To be the global leader in integrated digital solutions that redefine business efficiency.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-primary mb-1 text-sm">Our Values</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Innovation, Integrity, and Impact. We measure our success solely by our clients' success.
                    </p>
                  </div>
                </div>

                <Link to="/about-us" className="primary-btn mt-2 w-fit text-sm">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </section>

          {/* ───── SECTION 3: Why Choose Us ───── */}
          <section className="w-screen py-16" aria-label="Why Choose Vihaang AI">
            <div className="wrapper flex flex-col items-center gap-8">
              <div data-aos="fade-up" className="text-center">
                <span className="font-semibold text-secondary uppercase text-sm tracking-wide">
                  Why Vihaang AI?
                </span>
                <h2 className="heading mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  What Sets Us Apart
                </h2>
              </div>

              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl"
              >
                {[
                  { title: "On-Time Delivery", desc: "Agile processes and clear timelines ensure your project ships on schedule, every time." },
                  { title: "Top-Tier Quality", desc: "Expert teams with deep domain knowledge deliver clean, scalable, and tested solutions." },
                  { title: "End-to-End Partner", desc: "From strategy and design to development, launch, and beyond — we're with you at every step." },
                  { title: "Transparent Pricing", desc: "No hidden fees. Clear scopes, honest estimates, and guaranteed service levels." },
                  { title: "Proven Track Record", desc: "A portfolio of real products across industries, built for startups and enterprises alike." },
                  { title: "Scalable Architecture", desc: "Future-proof systems built to handle growth without performance compromise." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    <span className="text-secondary font-bold text-lg">0{i + 1}</span>
                    <h3 className="font-bold text-gray-800 mt-2 mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───── SECTION 4: Industries We Serve ───── */}
          <section
            className="w-screen py-16 bg-gray-50"
            aria-label="Industries We Serve"
          >
            <div className="wrapper flex flex-col items-center gap-8">
              <div data-aos="fade-up" className="text-center max-w-2xl">
                <span className="font-semibold text-secondary uppercase text-sm tracking-wide">
                  Industries
                </span>
                <h2 className="heading mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Industries We Serve
                </h2>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  We cater to a wide range of industries, delivering tailored AI and tech solutions
                  to meet specific business needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {industriesCompanyServe.map((item) => (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    className="relative rounded-xl overflow-hidden min-h-[11rem] group shadow-sm"
                  >
                    <LazyLoadImage
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-white/75 group-hover:bg-black/65 transition-colors duration-300" />
                    <div className="relative z-10 p-5 flex flex-col gap-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors duration-300 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-300 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───── SECTION 5: Development Workflow ───── */}
          <section className="w-screen py-16" aria-label="Our Process">
            <div className="wrapper">
              <div data-aos="fade-up" className="text-center mb-10">
                <span className="font-semibold text-secondary uppercase text-sm tracking-wide">
                  Our Process
                </span>
                <h2 className="heading mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  How We Work
                </h2>
              </div>
              <WorkFlow />
            </div>
          </section>

          {/* ───── SECTION 6: Experience / Stats ───── */}
          <Experience />

          {/* ───── SECTION 7: Testimonials ───── */}
          <Testimonials />

          {/* ───── SECTION 8: FAQ ───── */}
          <section className="w-screen py-16 bg-gray-50" aria-label="FAQ">
            <div className="wrapper flex flex-col items-center gap-8">
              <div data-aos="fade-up" className="text-center max-w-xl">
                <span className="font-semibold text-secondary uppercase text-sm tracking-wide">
                  FAQ
                </span>
                <h2 className="heading mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 text-sm mt-3">
                  Here are some common questions our clients often ask.
                </p>
              </div>

              <div data-aos="fade-up" className="w-full max-w-3xl flex flex-col gap-3">
                {faqs.map((faq) => (
                  <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </section>

          {/* ───── SECTION 9: Contact / Lead Form ───── */}
          <LeadForm />

          {/* ───── SECTION 10: Associated With / Clients ───── */}
          <AssociatedWith />

        </main>

        {/* ───── Footer ───── */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
