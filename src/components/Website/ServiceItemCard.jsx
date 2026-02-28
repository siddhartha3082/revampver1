import React from "react";
import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

/**
 * ServiceItemCard - Revamped
 * - Clean white card with subtle border
 * - Icon in colored circle, lifts on hover
 * - Blue accent left border appears on hover
 * - Dark fill on hover with white text (like gigglezen cards)
 * - Keywords as subtle chips
 * - Arrow icon on "Know More" link
 */
const ServiceItemCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="group relative flex flex-col justify-between gap-5
                 bg-white rounded-xl border border-gray-200
                 p-6 shadow-sm
                 hover:shadow-2xl hover:-translate-y-2 hover:border-secondary
                 transition-all duration-300 overflow-hidden"
    >
      {/* Blue left accent bar — slides in on hover */}
      <div
        className="absolute left-0 top-0 h-full w-1 bg-secondary
                   scale-y-0 group-hover:scale-y-100
                   origin-top transition-transform duration-300"
      />

      {/* Top: Icon + Title + Description */}
      <div className="flex flex-col gap-3 items-start">

        {/* Icon circle */}
        <div
          className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center
                     group-hover:bg-secondary transition-colors duration-300"
        >
          <img
            src={item.icon}
            alt={item.title}
            width="32"
            height="32"
            loading="lazy"
            className="w-7 h-7 object-contain
                       group-hover:invert group-hover:brightness-200
                       transition-all duration-300"
          />
        </div>

        {/* Title */}
        <h3 className="font-bold text-base text-gray-900 group-hover:text-secondary transition-colors duration-300">
          {item.title}
        </h3>

        {/* Subtitle */}
        {item.subtitle && (
          <p className="text-xs font-semibold text-secondary/80 -mt-1">
            {item.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* Keyword chips */}
        {item.keywords && (
          <div className="flex flex-wrap gap-2 mt-1">
            {item.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full
                           group-hover:bg-secondary/10 group-hover:text-secondary
                           transition-colors duration-300"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom: Know More link */}
      <div
        className="flex items-center gap-2 text-sm font-semibold text-secondary
                   group-hover:gap-4 transition-all duration-300 mt-2"
      >
        Know More
        <PiArrowRightBold className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  );
};

export default ServiceItemCard;
