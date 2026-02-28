import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import ChakraWatermark from "../../components/ChakraWatermark";

const Blogs = () => {
  return (
    <div className="bg-transparent">
      <ChakraWatermark />
      <Header />

      {/* ── PAGE BANNER ── */}
      <div className="relative pt-32 pb-10 flex flex-col items-center justify-center text-center px-5">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-4 py-1 rounded-full mb-5">
          Our Blog
        </span>
        <h1
          className="font-extrabold leading-tight mb-3 text-center"
          style={{ fontFamily: "Poppins, sans-serif", color: "#010C2A", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          Insights &amp;{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Innovations
          </span>
        </h1>
        <p className="text-gray-500 text-sm mt-2 text-center max-w-xl">
          Your gateway to IT excellence — tips, trends, and tech insights from our team.
        </p>
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-secondary">Blogs</span>
        </div>
      </div>

      {/* ── BLOGS SECTION ── */}
      <section className="wrapper py-12 md:py-20">
        <div data-aos="fade-up" className="text-center mb-12">
          <span className="section-label">Latest Articles</span>
          <h2
            className="text-[1.4rem] md:text-[2.4rem] font-extrabold mt-2 text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            What We're Writing About
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Stay up to date with the latest in AI, software, blockchain, and digital transformation.
          </p>
        </div>

        {/* Empty state */}
        <div className="col-span-full flex flex-col items-center justify-center py-12 md:py-20 gap-4">
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
            <span className="text-3xl">📝</span>
          </div>
          <h3 className="font-bold text-gray-800 text-lg">No blogs yet</h3>
          <p className="text-gray-500 text-sm text-center max-w-sm">
            We're working on some great content. Check back soon!
          </p>
          <Link to="/" className="primary-btn mt-2">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ── Blog Card Component (for BlogDetails page to use) ──
export const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="group bg-white rounded-xl border border-gray-200 shadow-sm
                 hover:shadow-xl hover:-translate-y-1 hover:border-secondary
                 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <Link to={`/blogs/${blog.slug}`} className="overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          width="600"
          height="400"
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">

        {/* Author chip */}
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
            {blog.author?.name || "Admin"}
          </span>
        </div>

        {/* Title */}
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-base font-bold text-gray-900 leading-snug line-clamp-2
                     hover:text-secondary transition-colors duration-200"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {blog.title}
        </Link>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {blog.excerpt}
        </p>

        {/* Read More */}
        <Link
          to={`/blogs/${blog.slug}`}
          className="mt-2 flex items-center gap-2 text-sm font-semibold text-secondary
                     hover:gap-4 transition-all duration-200"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
