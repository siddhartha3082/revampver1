import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import ChakraWatermark from "../../components/ChakraWatermark";

const [SERVICE_NAME]Service = () => {
  return (
    <div className="bg-transparent">
      <ChakraWatermark />
      <Header />

      {/* BANNER */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/vihaang-logo.png" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">[SERVICE_NAME]</h1>
          <p className="text-lg md:text-xl opacity-90">[ONE LINE DESCRIPTION]</p>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="wrapper py-12 md:py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          [2-3 SENTENCES ABOUT THE SERVICE]
        </p>

        {/* KEY FEATURES */}
        <h3 className="text-2xl font-bold mb-8 mt-12 text-gray-900">Key Features & Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Feature 1</h4>
            <p className="text-gray-600">[Description of feature 1 - 1-2 sentences]</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Feature 2</h4>
            <p className="text-gray-600">[Description of feature 2 - 1-2 sentences]</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Feature 3</h4>
            <p className="text-gray-600">[Description of feature 3 - 1-2 sentences]</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Feature 4</h4>
            <p className="text-gray-600">[Description of feature 4 - 1-2 sentences]</p>
          </div>
        </div>

        {/* USE CASES */}
        <h3 className="text-2xl font-bold mb-8 text-gray-900">Use Cases</h3>
        <ul className="space-y-3 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">[Use case 1 - who benefits and how]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">[Use case 2 - who benefits and how]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">[Use case 3 - who benefits and how]</span>
          </li>
        </ul>

        {/* WHY CHOOSE US */}
        <h3 className="text-2xl font-bold mb-8 text-gray-900">Why Choose Vihaang AI?</h3>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-12">
          <p className="text-gray-600 text-lg">
            [2-3 SENTENCES ABOUT WHY VIHAANG AI IS THE BEST CHOICE FOR THIS SERVICE - mention expertise, experience, results]
          </p>
        </div>

        {/* CTA */}
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

export default [SERVICE_NAME]Service;
