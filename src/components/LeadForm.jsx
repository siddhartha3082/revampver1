import React, { useContext } from "react";
import img from "../assets/images/contact.webp";
import { useForm } from "react-hook-form";
import { companyDetails } from "../data/constant";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

/**
 * LeadForm - Revamped
 * - Bold section heading like gigglezen "Get a free audit"
 * - Left side: heading + 3 contact info chips + form
 * - Right side: image (hidden on mobile)
 * - Clean input styling with focus ring in brand color
 * - Submit button with gradient
 */
const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const handleFormSubmit = async (values) => {
    setSpinner(true);
    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from VIHAANG AI GLOBAL SERVICES PVT LTD",
      body: emailBody,
      name: "VIHAANG AI GLOBAL",
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => { toast.success("Email sent successfully"); reset(); })
      .catch((error) => { toast.error(error.message); })
      .finally(() => setSpinner(false));
  };

  const inputClass = `w-full border border-gray-200 rounded-lg px-4 py-3 text-sm
    outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20
    transition-all duration-200 bg-gray-50 placeholder-gray-400`;

  return (
    <section id="contact" className="w-full py-20">
      <div className="wrapper grid md:grid-cols-2 items-center gap-14" data-aos="fade-up">

        {/* LEFT: Form */}
        <div className="flex flex-col gap-6">

          {/* Heading */}
          <div>
            <span className="section-label">Contact Us</span>
            <h2
              className="text-[1.8rem] md:text-[2.4rem] font-extrabold mt-2 text-gray-900 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Get a Free Audit
            </h2>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Tell us about your goals. We'll suggest a roadmap across AI, Software & Digital solutions.
            </p>
          </div>

          {/* Contact chips */}
          <div className="flex flex-col gap-3">
            <a href={`mailto:${companyDetails.email}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-secondary transition-colors">
              <span className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <MdEmail size={18} />
              </span>
              {companyDetails.email}
            </a>
            <a href={`tel:${companyDetails.phone}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-secondary transition-colors">
              <span className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <MdPhone size={18} />
              </span>
              {companyDetails.phone}
            </a>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                <MdLocationOn size={18} />
              </span>
              {companyDetails.location}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Full name is required",
                    pattern: { value: /^[a-zA-Z\s\-']+$/, message: "Name should only contain letters" },
                    validate: (val) => val.trim() !== "" || "Full name is required",
                  })}
                />
                <small className="error-message">{errors.name?.message}</small>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="you@company.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Invalid email" },
                  })}
                />
                <small className="error-message">{errors.email?.message}</small>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">Subject</label>
              <input
                type="text"
                className={inputClass}
                placeholder="What are you looking for?"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => val.trim() !== "" || "Subject is required",
                })}
              />
              <small className="error-message">{errors.subject?.message}</small>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700">Message</label>
              <textarea
                className={inputClass}
                placeholder="Tell us about your project or goals..."
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => val.trim() !== "" || "Message is required",
                })}
              />
              <small className="error-message">{errors.message?.message}</small>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="primary-btn mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

        {/* RIGHT: Image */}
        <div className="hidden md:block h-full">
          <img
            src={img}
            alt="Contact Vihaang AI"
            className="w-full h-full max-h-[600px] object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
