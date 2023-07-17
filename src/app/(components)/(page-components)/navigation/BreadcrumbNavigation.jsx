import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const pagess = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

export default function BreadcrumbNavigation() {
  const [pages, setPages] = useState([]);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/app/orders/create":
        setPages([
          { name: "Orders", href: "/app/orders", current: false },
          { name: "Create", href: "/app/orders/create", current: true },
        ]);
        break;
      case "/app/trips/create":
        setPages([
          { name: "Trips", href: "/app/trips", current: false },
          { name: "Create", href: "/app/create", current: true },
        ]);
        break;
      case "/app/orders":
        setPages([{ name: "Orders", href: "/app/orders", current: true }]);
        break;
      case "/app/trips":
        setPages([{ name: "Trips", href: "/app/trips", current: true }]);
        break;
      case "/app":
        setPages([]);
        break;

      default:
        break;
    }
  }, [location]);

  return (
    <nav className="flex px-4 sm:px-6 lg:px-[72px]" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/app" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Link
                to={page.href}
                style={
                  page.current
                    ? { color: "rgb(17, 24, 39)" }
                    : { color: "rgb(107, 114, 128)" }
                }
                className="ml-4 text-sm font-medium hover:text-gray-900"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
