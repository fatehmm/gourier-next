"use client";

import React, { useEffect, useState } from "react";

import { clsx } from "clsx";

const testimonials = [
  [
    {
      content:
        "If you want you package to ship faster, Gourier is way to go. They have delivered my package in less than 3 days from US.",
      author: {
        name: "Masud Hajiyev",
        role: "Developer & Manager",
      },
    },
    {
      content:
        "Even I was skeptic about the traveller courier concept at the first time, it became my main source of shipments. Kudos to the team.",
      author: {
        name: "Ali Mursaliyev",
        role: "Designer",
      },
    },
    {
      content: "These guys really know what they're doing",
      author: {
        name: "Kristiana J.",
        role: "Flower shop manager",
      },
    },
  ],
  [
    {
      content:
        "I had to ship several packages to my brother in US. Gourier made it simple and accesible.",
      author: {
        name: "Van Stefan Oros",
        role: "Entrepreneur",
      },
    },
    {
      content:
        "My university wanted my documents in less than 1 week, and no other company than Gourier was shipping it. Gourier saved my educational life.",
      author: {
        name: "Nijat Abbasov",
        role: "Student & Olympiad winner",
      },
    },
    {
      content:
        "Travellers in Gourier are very friendly and kind. I make one friend when I ship a package.",
      author: {
        name: "Azim Azimli",
        role: "Politics student",
      },
    },
  ],
  [
    {
      content:
        "It is unusual for a company this new do a excellent job. Keep it up Gourier!",
      author: {
        name: "K.K.",
        role: "Anonymous",
      },
    },
    {
      content:
        "When I first saw Gourier, I knew their professional work ethic and ambition. They're bringing much value to the community.",
      author: {
        name: "Mahammad Sahib",
        role: "Startup Founder",
      },
    },
    {
      content:
        "All I can say is wow — this is easily the best shipment company I have ever worked with. They are more than a company.",
      author: {
        name: "Anonymous",
        role: "Anonymous",
      },
    },
  ],
];

function Testimonial({
  author,
  children,
}: {
  author: { name: string; role: string };
  children: React.ReactNode;
}) {
  return (
    <figure className="rounded-3xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  let [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="gradient-testimonial" className="py-8 sm:py-10 lg:py-16">
      <div className="text-center px-12">
        <h2 className="font-display font-space text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Gourier is well-known shipment company that uses startup incentives.
        </p>
      </div>
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        {testimonials
          .map((column) => column[0])
          .map((testimonial, testimonialIndex) => (
            <li key={testimonialIndex} className="lg:hidden">
              <Testimonial author={testimonial.author}>
                {testimonial.content}
              </Testimonial>
            </li>
          ))}
        {testimonials.map((column, columnIndex) => (
          <li
            key={columnIndex}
            className={clsx({ "hidden lg:list-item": !isExpanded })}
          >
            <ul>
              {column
                .slice(0, isExpanded ? undefined : 2)
                .map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className={clsx({
                      "hidden lg:list-item": testimonialIndex === 0,
                      "lg:mt-8": testimonialIndex === 1,
                      "mt-8": testimonialIndex > 1,
                    })}
                  >
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      {!isExpanded && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
            onClick={() => setIsExpanded(true)}
          >
            Read more
            <svg aria-hidden="true" className="ml-2 h-6 w-6">
              <path
                d="m17 14-5 5-5-5M12 18.5V5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
