"use client";

// import Navbar from "../../components/page-components/Navbar";
// import Footer from "../../components/page-components/Footer";
import Example from "../(components)/(page-components)/4_column_with_newsletter";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../(components)/(page-components)/Header";
import Karusel from "../(components)/(page-components)/Karusel";
import { Testimonials } from "../(components)/(page-components)/Testimonials";
import { useEffect, useState, useRef } from "react";
import { PrimaryFeatures } from "../(components)/PrimaryFeatures";
import "./home.css";
import * as THREE from "three";
import $ from "jquery";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export default function Home() {
  const [globeFile, setGlobeFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("/images/texture.png");
  const globeRef: any = useRef(null);
  const inputRef: any = useRef(null);
  const linkRef: any = useRef(null);
  const arcsData = [1, 2, 3, 4, 5, 6].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [["#000000"][0], ["#000000"][0]],
  }));
  return (
    <>
      <Header></Header>

      {/* Hero section start */}
      <header>
        <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
              <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                <div className=" text-black">
                  <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                    Gourier. Your access. Everywhere.
                  </h1>
                  <p className=" mt-6 text-lg text-gray-600">
                    {" "}
                    We deliver your packages at the cheapest rates and fastest
                    shipping time.{" "}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                    {/* {!isAuthenticated ? ( */}
                    <button
                      // onClick={() => {
                      //   loginWithRedirect();
                      // }}
                      className="rounded-lg flex items-center px-4 py-1 border border-transparent  text-white bg-[#0a2540]"
                    >
                      {" "}
                      Get started{" "}
                    </button>
                    {/* ) : null} */}

                    <Link
                      href="/faq"
                      className="inline-flex items-center justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11.5"
                          stroke="#D4D4D4"
                        ></circle>
                        <path
                          d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                          fill="#A3A3A3"
                          stroke="#A3A3A3"
                        ></path>
                      </svg>
                      <span className="ml-2.5 text-gray-700">Learn more </span>
                      {/* <Image
                    width={30}
                    height={30}
                    className="ml-2 lg:ml-6"
                    src="/assets/icons/arrow.svg"
                    alt="Arrow icon"
                  /> */}

                      {/*  */}

                      {/*  */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                  <svg
                    viewBox="0 0 1026 1026"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full animate-spin-slow"
                  >
                    <path
                      d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                      stroke="#D4D4D4"
                      stroke-opacity="0.7"
                    ></path>
                    <path
                      d="M513 1025C230.23 1025 1 795.77 1 513"
                      stroke="url(#:R65m:-gradient-1)"
                      stroke-linecap="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id=":R65m:-gradient-1"
                        x1="1"
                        y1="513"
                        x2="1"
                        y2="1025"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#06b6d4"></stop>
                        <stop
                          offset="1"
                          stop-color="#06b6d4"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    viewBox="0 0 1026 1026"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
                  >
                    <path
                      d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                      stroke="#D4D4D4"
                      stroke-opacity="0.7"
                    ></path>
                    <path
                      d="M913 513c0 220.914-179.086 400-400 400"
                      stroke="url(#:R65m:-gradient-2)"
                      stroke-linecap="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id=":R65m:-gradient-2"
                        x1="913"
                        y1="513"
                        x2="913"
                        y2="913"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#06b6d4"></stop>
                        <stop
                          offset="1"
                          stop-color="#06b6d4"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="-mx-4 h-[500px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                  <div className="absolute h-full flex justify-center inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)]">
                    <img
                      className="h-full "
                      src="/assets/img/HeaderImage.png"
                      alt="Gourier Employees"
                    />
                  </div>
                </div>

                {/* <div className="hidden sm:block min-w-48 max-w-md lg:max-w-xl  sm:w-full h-auto">
                  <Image
                    width={300}
                    height={300}
                    className="w-full h-full rounded-xl lg:rounded-2xl "
                    src="/assets/img/gourier-mobile.png"
                    alt="Gourier Employees"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Hero section end */}

      <PrimaryFeatures></PrimaryFeatures>

      {/* Partners section start */}
      <section className="p-4 lg:px-20 md:p-6 mt-6">
        <div>
          <h3 className="font-space sm:pl-4 lg:pl-6 text-base sm:text-xl lg:text-2xl text-gray-600">
            {" "}
            Our partners :{" "}
          </h3>
        </div>
        <div className="flex mt-2 md:mt-6 items-center">
          <div className="min-w-min max-w-sm w-1/2 sm:w-1/4 lg:w-1/6">
            <Image
              width={300}
              height={300}
              className="w-full h-auto"
              src="/assets/img/microsoft.webp"
              alt="Microsoft Logo"
            />
          </div>
          <div className="min-w-min max-w-sm w-1/2 sm:w-1/4 lg:w-1/6">
            <Image
              width={300}
              height={300}
              className="w-full h-auto"
              src="/assets/img/rabalon.webp"
              alt="Rabalon Logo"
            />
          </div>
          <div className="min-w-min max-w-sm  hidden sm:block sm:w-1/4 lg:w-1/6">
            <Image
              width={300}
              height={300}
              className="w-full h-auto"
              src="/assets/img/founders-hub.png"
              alt="Microsoft Logo"
            />
          </div>
          <div className="min-w-min max-w-sm  hidden sm:block sm:w-1/4 lg:w-1/6">
            <Image
              width={300}
              height={300}
              className="w-full h-auto"
              src="/assets/img/rabalon.webp"
              alt="Rabalon Logo"
            />
          </div>
          <div className="min-w-min max-w-sm  hidden lg:block lg:w-1/6">
            <Image
              width={300}
              height={300}
              className="w-full h-auto"
              src="/assets/img/microsoft.webp"
              alt="Microsoft Logo"
            />
          </div>
          <div className="min-w-min max-w-sm  hidden lg:block lg:w-1/6 ">
            <Image
              width={300}
              height={300}
              className="w-full h-auto"
              src="/assets/img/founders-hub.png"
              alt="Rabalon Logo"
            />
          </div>
        </div>
      </section>
      {/* Partners section end */}

      {/* Feature section start*/}
      <section className="p-4 mt-6 lg:mt-12 sm:grid sm:grid-cols-2 sm:grid-rows-1">
        <div className="md:mt-12 md:flex md:justify-center col-start-1 row-start-1">
          <div className="min-w-48 max-w-lg md:max-w-sm 2xl:max-w-lg sm:w-full h-auto">
            <Image
              width={300}
              height={300}
              className="w-full"
              src="/assets/img/EverythingEverywhere.webp"
              alt="Everything, Everywhere"
            />
          </div>
        </div>
        <div className="mb-12 sm:mb-0 md:mt-12 text-black mt-6 sm:flex sm:items-center sm:justify-center col-start-2 row-start-1">
          <div className="sm:px-6 md:px-0 max-w-lg md:max-w-sm 2xl:max-w-lg">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:font-semibold font-space">
              {" "}
              Everything. Everywhere. All for affordable.{" "}
            </h3>
            <p className="mt-4 text-gray-600 2xl:text-lg">
              {" "}
              With Gourier, users can easily send and receive packages to and
              from any part of the world, without having to worry about high
              shipping costs or complex delivery logistics.{" "}
            </p>
          </div>
        </div>
        <div className="md:mt-12 md:flex md:justify-center col-start-2 col-end-3 row-start-2 row-end-3">
          <div className="min-w-48 max-w-lg md:max-w-sm 2xl:max-w-lg sm:w-full h-auto">
            <Image
              width={300}
              height={300}
              className="w-full"
              src="/assets/img/TravelTheWrld.webp"
              alt="Travel the world"
            />
          </div>
        </div>
        <div className="mb-12 sm:mb-0 text-black md:mt-12 mt-6 sm:flex sm:items-center sm:justify-center col-start-1 col-end-2 row-start-2 row-end-3 row-span-2">
          <div className="sm:px-6 md:px-0  max-w-lg md:max-w-sm 2xl:max-w-lg">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:font-semibold font-space">
              {" "}
              Travel the World. Earn money.{" "}
            </h3>
            <p className="mt-4 text-gray-600 2xl:text-lg">
              {" "}
              Gourier's innovative platform allows users to make money while
              traveling by becoming gouriers. With Gourier, users can turn their
              travels into a lucrative opportunity by delivering packages for
              others along the way.{" "}
            </p>
          </div>
        </div>
        <div className="md:mt-12 md:flex md:justify-center col-start-1 row-start-3">
          <div className="min-w-48 max-w-lg md:max-w-sm 2xl:max-w-lg sm:w-full h-auto">
            <Image
              width={300}
              height={300}
              className="w-full"
              src="/assets/img/SendDocuments.webp"
              alt="Everything, Everywhere"
            />
          </div>
        </div>
        <div className="mb-12 text-blackglobe sm:mb-0 md:mt-12 mt-6 sm:flex sm:items-center sm:justify-center col-start-2 row-start-3">
          <div className="sm:px-6 md:px-0 max-w-lg md:max-w-sm 2xl:max-w-lg">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:font-semibold font-space">
              {" "}
              We will deliver your packages worldwide{" "}
            </h3>
            <p className="mt-4 text-gray-600 2xl:text-lg">
              {" "}
              Faster delivery times and cheaper rates.{" "}
            </p>
            <button
              //   onClick={() => {
              //     loginWithRedirect();
              //   }}
              className="mt-8 sm:text-sm text-sm lg:h-12 lg:w-32 lg:text-md inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {" "}
              Order now{" "}
            </button>
          </div>
        </div>
      </section>
      {/* Feature section end */}

      <section className="globe-gourier flex flex-col sm:flex-row justify-end my-28">
        <div className="md:w-2/3 lg:w-1/2 w-screen bg-[#11243e] p-4 sm:pl-12 pt-20">
          <h2 className="text-white text-[10vw] leading-tight tracking-tighter sm:tracking-normal sm:text-3xl md:text-4xl  lg:text-5xl font-medium lg:font-bold font-space bg-blend-color-burn">
            Gourier's decentralized network
          </h2>
          <p className="text-white font-space pt-6">
            Our travellers from all aroud the globe are ready to carry your
            packages and items.
          </p>
          <p className="text-white font-space pt-6">
            This is our thing. Moving items from point A to point B, and we are
            really good at it.
          </p>
          <div className="pt-16">
            <div className="sm:w-1/3 Stats">
              <span className="font-space text-white text-4xl block">250+</span>
              <span className="font-space text-white text-xl">
                customers around the globe
              </span>
            </div>
          </div>
        </div>
        <div className="container md:w-1/3 sm:w-1/4 w-screen lg:w-1/2 h-[35rem] bg-[#11243e] cursor-grab">
          <div
            id="globeCanvas"
            className=" relative md:left-[80px] lg:left-0 sm:left-[170px]"
          ></div>
        </div>
      </section>

      <Testimonials></Testimonials>
      {/* Carousel section start */}
      <section>{/* <Karusel /> */}</section>
      {/* Carousel section end */}

      <Example></Example>
    </>
  );
}
