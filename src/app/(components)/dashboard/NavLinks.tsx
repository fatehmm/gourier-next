"use client";
import { useState, Fragment } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Fragment>
      {[
        [
          "Home",
          "/dashboard",
          "relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]",
        ],
        [
          "Orders",
          "/dashboard/orders",
          "relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]",
        ],
        [
          "Travels",
          "/dashboard/travels",
          "relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]",
        ],
        [
          "Contact",
          "/dashboard/contact",
          "relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]",
        ],
        // [
        //   "Order now → ",
        //   "/dashboard",
        //   "relative text-blue-600 transition-all transition-transform hover:transition hover:translate-x-1  -my-2 -mx-3 rounded-lg px-3 py-2 text-sm  transition-colors delay-150  hover:delay-[0ms]",
        // ],
      ].map(([label, href, className], index) => (
        <Link
          key={label}
          href={href}
          className={className}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{label}</span>
        </Link>
      ))}
    </Fragment>
  );
}
