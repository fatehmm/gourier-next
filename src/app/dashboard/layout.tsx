"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserButton, currentUser, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { store } from "@/store";
import { setPersonState } from "@/store/personSlice";
import ReactiveHeader from "./ReactiveHeader";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded, isSignedIn } = useUser();

  if (isSignedIn && user)
    return (
      <>
        <div className="min-h-full">
          <ReactiveHeader></ReactiveHeader>

          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-medium tracking-tight text-blue-900">
                Welcome, {user?.firstName}!
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </>
    );
}
