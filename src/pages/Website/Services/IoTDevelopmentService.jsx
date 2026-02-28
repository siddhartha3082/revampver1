import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Website/Header";
import Footer from "../../../components/Footer";
import ChakraWatermark from "../../../components/ChakraWatermark";

const IoTDevelopmentService = () => {
  return (
    <div className="bg-transparent">
      <ChakraWatermark />
      <Header />

      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/vihaang-logo.png" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IoT Development</h1>
          <p className="text-lg md:text-xl opacity-90">Connect and control smart devices with IoT solutions</p>
        </div>
      </div>

      <section className="wrapper py-12 md:py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          The Internet of Things is connecting billions of devices worldwide, creating unprecedented opportunities for automation and insights. Vihaang AI develops IoT solutions that collect, analyze, and act on data from connected devices in real-time.
        </p>

        <h3 className="text-2xl font-bold mb-8 mt-12 text-gray-900">Key Features & Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Device Management</h4>
            <p className="text-gray-600">Centralized control and monitoring of thousands of IoT devices</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Real-time Monitoring</h4>
            <p className="text-gray-600">Live dashboards tracking device health, performance, and analytics</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Data Collection</h4>
            <p className="text-gray-600">Efficient collection and processing of sensor and device data streams</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-2 text-gray-900">✨ Remote Control</h4>
            <p className="text-gray-600">Control and manage devices remotely with secure command protocols</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-gray-900">Use Cases</h3>
        <ul className="space-y-3 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Smart home companies building connected home automation systems</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Manufacturing plants implementing predictive maintenance on equipment</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <span className="text-gray-600">Healthcare providers monitoring patient health with wearable devices</span>
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

export default IoTDevelopmentService;