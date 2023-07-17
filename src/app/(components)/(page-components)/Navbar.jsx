import { Link, useLocation } from "react-router-dom";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import MenuFlyout from "../components-overlays/MenuFlyout";

export default function Navbar() {
  const {
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    isAuthenticated,
  } = useAuth0();
  const [userInfo, setUserInfo] = useState({});
  const firstName = user && user["https://gourier-app.com/first_name"];
  const lastName = user && user["https://gourier-app.com/last_name"];
  const location = useLocation();

  useEffect(() => {
    const token = getAccessTokenSilently().then((result) =>
      localStorage.setItem("token", result)
    );
  }, [getAccessTokenSilently, isAuthenticated]);
  return (
    <div
      className="relative"
      style={
        location.pathname !== "/" && location.pathname !== "/home"
          ? { height: "90px" }
          : null
      }
    >
      <Popover
        style={
          location.pathname !== "/" && location.pathname !== "/home"
            ? { position: "fixed", backgroundColor: "white" }
            : null
        }
        className="w-screen z-40 absolute lg:px-12 px-2 py-2"
      >
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link to="/home" className="flex">
              <span className="sr-only">Gourier</span>
              <img
                className="h-8 scale-150 w-auto sm:h-10"
                src="/assets/icons/gourier-striped.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className=" RegisterButton text-white bg-[hsla(0,0%,100%,0.2);] hover:bg-[hsla(0,0%,100%,0.4);] rounded-[16.5px]  p-2 inline-flex items-center pr-1  focus:outline-none focus:ring-2 focus:ring-inset ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6 mr-[3px]" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link
                to="/home"
                style={
                  location.pathname === "/home" || location.pathname === "/"
                    ? { color: "#FFF" }
                    : { color: "rgb(107 114 128)" }
                }
                className="text-base font-medium text-gray-500 hover:text-indigo-600"
              >
                Home
              </Link>
              <Link
                to="/pricing"
                style={
                  location.pathname === "/pricing"
                    ? { color: "rgb(79 70 229)" }
                    : location.pathname === "/" || location.pathname === "/home"
                    ? { color: "#FFF" }
                    : { color: "rgb(107 114 128)" }
                }
                className="text-base font-medium text-gray-500 hover:text-indigo-600"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                style={
                  location.pathname === "/contact"
                    ? { color: "rgb(79 70 229)" }
                    : location.pathname === "/" || location.pathname === "/home"
                    ? { color: "#FFF" }
                    : { color: "rgb(107 114 128)" }
                }
                className="text-base font-medium text-gray-500 hover:text-indigo-600"
              >
                Contact
              </Link>
              <Link
                to="/news"
                style={
                  location.pathname === "/news"
                    ? { color: "rgb(79 70 229)" }
                    : location.pathname === "/" || location.pathname === "/home"
                    ? { color: "#FFF" }
                    : { color: "rgb(107 114 128)" }
                }
                className="text-base font-medium text-gray-500 hover:text-indigo-600"
              >
                News
              </Link>
              <Link
                to="/faq"
                style={
                  location.pathname === "/faq"
                    ? { color: "rgb(79 70 229)" }
                    : location.pathname === "/" || location.pathname === "/home"
                    ? { color: "#FFF" }
                    : { color: "rgb(107 114 128)" }
                }
                className="text-base font-medium text-gray-500 hover:text-indigo-600"
              >
                FAQs
              </Link>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              {/* {!isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      loginWithRedirect();
                    }}
                    style={
                      location.pathname === "/" || location.pathname === "/home"
                        ? { color: "white", boxSizing: "content-box" }
                        : { color: "black", boxSizing: "content-box" }
                    }
                    className=" hover:opacity-60 RegisterButton"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      loginWithRedirect();
                    }}
                    style={
                      location.pathname === "/" || location.pathname === "/home"
                        ? { color: "white" }
                        : { color: "black" }
                    }
                    className="ml-8  md:px-4 RegisterButton lg:text-base md:text-xs font-medium text-white bg-[hsla(0,0%,100%,0.2);] hover:bg-[hsla(0,0%,100%,0.4);] rounded-[16.5px]"
                  >
                    Register{" "}
                  </button>
                </>
              ) : ( */}
              <MenuFlyout></MenuFlyout>
              {/* )} */}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto scale-150"
                      src="/assets/icons/gourier-striped.png"
                      alt="Gourier Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6"></div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-4">
                  <Link
                    to="/home"
                    style={
                      location.pathname === "/home" || location.pathname === "/"
                        ? { color: "rgb(79 70 229)" }
                        : { color: "rgb(107 114 128)" }
                    }
                    className="text-base ml-4 font-medium text-gray-900 hover:text-gray-700"
                  >
                    Product
                  </Link>

                  <Link
                    to="/pricing"
                    style={
                      location.pathname === "/pricing"
                        ? { color: "rgb(79 70 229)" }
                        : { color: "rgb(107 114 128)" }
                    }
                    className="text-base ml-4 font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </Link>

                  <Link
                    to="/contact"
                    style={
                      location.pathname === "/contact"
                        ? { color: "rgb(79 70 229)" }
                        : { color: "rgb(107 114 128)" }
                    }
                    className="text-base ml-4 font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact
                  </Link>

                  <Link
                    to="/news"
                    style={
                      location.pathname === "/news"
                        ? { color: "rgb(79 70 229)" }
                        : { color: "rgb(107 114 128)" }
                    }
                    className="text-base ml-4 font-medium text-gray-900 hover:text-gray-700"
                  >
                    News
                  </Link>

                  <Link
                    to="/faq"
                    style={
                      location.pathname === "/faq"
                        ? { color: "rgb(79 70 229)" }
                        : { color: "rgb(107 114 128)" }
                    }
                    className="text-base ml-4 font-medium text-gray-900 hover:text-gray-700"
                  >
                    FAQs
                  </Link>
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/app"
                        style={
                          location.pathname === "/faq"
                            ? { color: "rgb(79 70 229)" }
                            : { color: "rgb(107 114 128)" }
                        }
                        className="text-base font-medium ml-4 text-gray-500 hover:text-indigo-600"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        style={
                          location.pathname === "/faq"
                            ? { color: "rgb(79 70 229)" }
                            : { color: "rgb(107 114 128)" }
                        }
                        className="text-base font-medium ml-4 text-gray-500 hover:text-indigo-600"
                      >
                        Profile
                      </Link>
                    </>
                  ) : null}
                </div>
                <div className="mt-6">
                  {!isAuthenticated ? (
                    <>
                      <button
                        onClick={() => {
                          loginWithRedirect();
                        }}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Register
                      </button>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <button
                          onClick={() => {
                            loginWithRedirect();
                          }}
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </button>
                      </p>
                    </>
                  ) : (
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Log out
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

// <button
//         onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
//         className="ml-8 inline-flex items-center justify-center md:px-4 lg:px-8 py-2 border border-transparent rounded-md shadow-sm lg:text-base md:text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//       >
//         Log out
//       </button>
