// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment, useEffect } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";

// const solutions = [
//   { name: "Dashboard", href: "/app", click: "null" },
//   { name: "Profile", href: "/profile", click: "null" },

//   //   { name: 'Log out',  href: '#', click:'' },
//   //   { name: 'Events',  href: '#' },
//   //   { name: 'Security', href: '#' },
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function MenuFlyout() {
//   const location = useLocation();
//   const { logout, getAccessTokenSilently, isAuthenticated } = useAuth0();
//   useEffect(() => {
//     const token = getAccessTokenSilently();
//     localStorage.setItem("token", token);
//   }, [getAccessTokenSilently, isAuthenticated]);
//   return (
//     <Popover className="relative">
//       {({ open }) => (
//         <>
//           <Popover.Button
//             className={classNames(
//               open ? "text-gray-900" : "",
//               location.pathname == "/home" || location.pathname == "/"
//                 ? "text-white"
//                 : "text-black",
//               "group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             )}
//           >
//             <span>Menu</span>
//             <ChevronDownIcon
//               className={classNames(
//                 open ? "text-gray-900" : "",
//                 location.pathname == "/home" || location.pathname == "/"
//                   ? "text-white"
//                   : "text-black",
//                 "ml-2 h-5 w-5 group-hover:text-gray-900"
//               )}
//               aria-hidden="true"
//             />
//           </Popover.Button>

//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-200"
//             enterFrom="opacity-0 translate-y-1"
//             enterTo="opacity-100 translate-y-0"
//             leave="transition ease-in duration-150"
//             leaveFrom="opacity-100 translate-y-0"
//             leaveTo="opacity-0 translate-y-1"
//           >
//             <Popover.Panel className="absolute z-10 left-1/2 transform lg:-translate-x-[80%] md:-translate-x-[90%] mt-3  w-screen max-w-xs sm:px-0">
//               <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                 <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8 sm:p-8">
//                   {solutions.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       onClick={item.click}
//                       className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
//                     >
//                       <p className="text-base  font-medium text-gray-900">
//                         {item.name}
//                       </p>
//                     </Link>
//                   ))}
//                   <button
//                     onClick={() =>
//                       logout({
//                         logoutParams: { returnTo: window.location.origin },
//                       })
//                     }
//                     className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
//                   >
//                     <p className="text-base text-left font-medium text-red-600">
//                       Log out
//                     </p>
//                   </button>
//                 </div>
//               </div>
//             </Popover.Panel>
//           </Transition>
//         </>
//       )}
//     </Popover>
//   );
// }
