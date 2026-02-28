import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Website/Header";
import Footer from "../../../components/Footer";
import ChakraWatermark from "../../../components/ChakraWatermark";

const ARAndVRService = () => {
  return (
    <div className="bg-transparent">
      <ChakraWatermark />
      <Header />

      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/vihaang-logo.png" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AR & VR Solutions</h1>
          <p className="text-lg md:text-xl opacity-90">Create immersive experiences with AR and VR technology</p>
        </div>
      </div>

      <section className="wrapper py-12 md:py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Augmented Reality and Virtual Reality are creating new ways to engage customers, train employees, and showcase products. Vihaang AI develops immersive AR and VR experiences that transform how people interact with digital content.
        </p>

        <h3 className="text-2xl font-bold mb-8 mt-12 text-gray-900">Key Features & Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ 3D Modeling</h4>
            <p className="text-gray-600">High-fidelity 3D models of products, environments, and characters</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Real-time Rendering</h4>
            <p className="text-gray-600">Smooth, high-performance graphics that run on consumer devices</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ User Interaction</h4>
            <p className="text-gray-600">Intuitive gestures and controls for natural user interaction in virtual space</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Cross-platform</h4>
            <p className="text-gray-600">Deploy to mobile, desktop, VR headsets, and AR glasses seamlessly</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-gray-900">Use Cases</h3>
        <ul className="space-y-3 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Real estate companies showing properties through immersive VR tours</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Training companies creating hands-on simulations for skill development</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Retail brands letting customers visualize products in their own space with AR</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold mb-8 text-gray-900">Why Choose Vihaang AI?</h3>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-12">
          <p className="text-gray-600 text-lg">
            We combine cutting-edge technology with deep domain expertise across industries. Our team has successfully delivered 50+ projects with 100% client satisfaction. We focus on building sustainable, scalable solutions that deliver real ROI and measurable business impact.
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

export default ARAndVRService;