import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Website/Header";
import Footer from "../../../components/Footer";
import ChakraWatermark from "../../../components/ChakraWatermark";

const AIAndMLService = () => {
  return (
    <div className="bg-transparent">
      <ChakraWatermark />
      <Header />

      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/vihaang-logo.png" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI & Machine Learning</h1>
          <p className="text-lg md:text-xl opacity-90">Transform your business with intelligent automation and data-driven insights</p>
        </div>
      </div>

      <section className="wrapper py-12 md:py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Artificial Intelligence and Machine Learning are transforming industries by automating complex processes and extracting insights from data. At Vihaang AI, we specialize in building custom ML solutions for predictive analytics, recommendation engines, computer vision, and natural language processing that deliver measurable business results.
        </p>

        <h3 className="text-2xl font-bold mb-8 mt-12 text-gray-900">Key Features & Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Predictive Analytics</h4>
            <p className="text-gray-600">Forecast trends and outcomes with advanced ML models to stay ahead of market changes</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Custom Models</h4>
            <p className="text-gray-600">Tailored AI solutions built specifically for your unique business challenges and goals</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Data Processing</h4>
            <p className="text-gray-600">Handle large datasets efficiently with automated preprocessing and feature engineering</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Real-time Insights</h4>
            <p className="text-gray-600">Get actionable intelligence instantly to make faster, data-driven business decisions</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-gray-900">Use Cases</h3>
        <ul className="space-y-3 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Healthcare providers using AI for disease prediction and diagnosis accuracy</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Retailers analyzing customer behavior for personalized recommendations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Financial institutions detecting fraud and managing risk in real-time</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold mb-8 text-gray-900">Why Choose Vihaang AI?</h3>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-12">
          <p className="text-gray-600 text-lg">
            We combine cutting-edge ML algorithms with deep domain expertise across industries. Our team has successfully delivered 50+ AI projects with 100% client satisfaction. We focus on building sustainable, scalable solutions that deliver real ROI and measurable business impact.
          </p>
        </div>

        <div className="text-center">
          <Link 
            to="/contact-us" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-200 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAndMLService;
