"use client";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { NavLinks } from "../NavLinks";
import { useUser } from "@auth0/nextjs-auth0/client";

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink({ children, href, ...props }) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
}

export function Header() {
  const { user, isLoading } = useUser();
  if (!isLoading)
    return (
      <header>
        <nav>
          <Container className="relative z-50 flex justify-between py-8">
            <div className="relative z-10 flex items-center gap-16">
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto" />
              </Link>
              <div className="hidden lg:flex lg:gap-10">
                <NavLinks />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                          >
                            <div className="space-y-4">
                              <MobileNavLink href="/home">Home</MobileNavLink>
                              <MobileNavLink href="/pricing">
                                Pricing
                              </MobileNavLink>
                              <MobileNavLink href="/contact">
                                Contact
                              </MobileNavLink>
                              <MobileNavLink href="/faq">FAQs</MobileNavLink>
                            </div>
                            <div className="mt-8 flex flex-col gap-4">
                              {user ? (
                                <>
                                  <a className="text-black" href="/dashboard">
                                    Dashboard
                                  </a>
                                </>
                              ) : (
                                <>
                                  <a
                                    className="text-black"
                                    href="/api/auth/login?returnTo=/dashboard"
                                  >
                                    Log in
                                  </a>
                                  <a
                                    className=" text-black"
                                    href="/api/auth/login?returnTo=/dashboard"
                                  >
                                    Register
                                  </a>
                                </>
                              )}
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
              {!user ? (
                <>
                  <a
                    href="/api/auth/login?returnTo=/dashboard"
                    className="hidden outline-1 text-black hover:bg-gray-300 py-2 px-3 rounded-lg  transition duration-75 lg:block"
                  >
                    Log in
                  </a>
                  <a
                    href="/api/auth/login?returnTo=/dashboard"
                    className="hidden lg:block bg-gray-900 text-white hover:bg-gray-600 px-3 py-2 rounded-lg"
                  >
                    Register
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/dashboard"
                    className="hidden lg:inline-flex  items-center rounded-md border border-transparent bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Dashboard
                    <ArrowRightIcon
                      className="ml-2 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </>
              )}
            </div>
          </Container>
        </nav>
      </header>
    );
}
