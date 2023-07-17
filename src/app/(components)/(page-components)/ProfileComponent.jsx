import { useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProfileComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");

  const { getAccessTokenSilently, getIdTokenClaims, user } = useAuth0();

  const firstName = user && user["https://gourier-app.com/first_name"];
  const lastName = user && user["https://gourier-app.com/last_name"];
  const country = user && user["https://gourier-app.com/country"];
  const id = user && user["https://gourier-app.com/user_id"];

  useEffect(() => {
    async function getAccessToken() {
      const access_token = await getAccessTokenSilently();
      const response = await axios.get(
        `https://gourier.us.auth0.com/userinfo`,
        {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        }
      );
      setEmail(response.data.email);
    }

    getAccessToken();
    console.log(country);
  }, []);

  return (
    <>
      <div className="h-full flex">
        {/* Static sidebar for desktop */}

        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {/* Mobile top navigation */}

          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
              <div className="flex-1 flex xl:overflow-hidden">
                {/* Secondary sidebar */}

                {/* Main content */}
                <div className="flex-1 xl:overflow-y-auto">
                  <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <div className="flex items-center justify-between">
                      <h1 className="text-3xl font-bold text-blue-gray-900">
                        Profile
                      </h1>
                      <Link
                        to={"/profile/edit"}
                        className="mt-2 sm:text-sm text-sm  lg:text-md inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm  font-medium text-white bg-orange-600 hover:bg-orange-700"
                      >
                        {" "}
                        Edit{" "}
                      </Link>
                    </div>

                    <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6"></div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            placeholder={firstName}
                            disabled="true"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            placeholder={lastName}
                            disabled="true"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">
                            Personal Information
                          </h2>
                          <p className="mt-1 text-sm text-blue-gray-500">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            disabled="true"
                            placeholder={email}
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            disabled
                            autoComplete="country-name"
                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option disabled selected>
                              {country}
                            </option>
                          </select>
                        </div>

                        {/* <p className="text-sm text-blue-gray-500 sm:col-span-6">
                          This account was created on{' '}
                          <time dateTime="2017-01-05T20:35:40">January 5, 2017, 8:35:40 PM</time>.
                        </p> */}
                      </div>

                      {/* <div className="pt-8 flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Update
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
