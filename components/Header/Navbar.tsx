"use client";
import logo from "@/asset/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const Navbar = () => {
  const openMenuLogo = useRef<HTMLDivElement | null>(null);
  const closeMenuLogo = useRef<HTMLDivElement | null>(null);
  const openMenu = useRef<HTMLDivElement | null>(null);

  const handleMenu = (): void => {
    openMenu.current?.classList.toggle("hidden");
    openMenuLogo.current?.classList.toggle("block");
    openMenuLogo.current?.classList.toggle("hidden");
    closeMenuLogo.current?.classList.toggle("hidden");
  };
  return (
    <header className="bg-black bg-opacity-90 fixed w-[100dvw] z-50 backdrop-blur-sm ">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 max-md:mx-4">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => handleMenu()}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <div ref={openMenuLogo} className="block">
                <svg
                  className=" h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <div ref={closeMenuLogo} className="hidden">
                <svg
                  className=" h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-lg text-white font-light font-Great-Vibes cursor-pointer">
                <Link href="/">
                  <Image src={logo} alt="logo" width={75} height={75} />
                </Link>
              </div>
            </div>
            <div
              ref={openMenu}
              className="hidden max-md:w-full max-md:bg-secondary-color max-md:backdrop-blur-md max-md:opacity-90 md:bg-transparent absolute md:relative top-16  md:top-0 md:block md:ml-6"
            >
              <div className="flex max-md:flex-col  p-2 items-center justify-center gap-x-1">
                <div className="flex flex-col  justify-center max-md:items-center max-md:m-12 md:flex-row max-md:space-y-3 md:space-x-1">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link
                    href="/"
                    className="text-white  hover:text-orange-600 px-3 py-2 rounded-md text-sm font-bold max-md:text-center"
                  >
                    Accuiel
                  </Link>
                  <Link
                    href="/#plats"
                    className="text-gray-300  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Nos Services
                  </Link>
                  <Link
                    href="/#restaurants"
                    className="text-gray-300  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Categories
                  </Link>
                  <Link
                    href="/#menus"
                    className="text-gray-300  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Voiture d{"'"}occasion
                  </Link>
                  <Link
                    href="/#menus"
                    className="text-gray-300  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Voiture neuve
                  </Link>
                  <Link
                    href="/#menus"
                    className="text-primary-color  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Ou nous sommes?
                  </Link>
                  <Link
                    href="/sign-up"
                    className="text-white hover:bg-white  hover:text-black px-6 py-2 rounded-full text-sm  bg-primary-color font-bold max-md:text-center max-md:w-2/3"
                  >
                    Contactez-nous
                  </Link>
                </div>
                <div className="flex items-center m-2">
                  <ul className="list-none flex items-center gap-2 justify-center">
                    <li className="">
                      <a
                        href="#"
                        className="hover:text-orange-500 text-blue-600"
                      >
                        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_614_448)">
                            <path d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM25 13.3333H22.75C21.8533 13.3333 21.6667 13.7017 21.6667 14.63V16.6667H25L24.6517 20H21.6667V31.6667H16.6667V20H13.3333V16.6667H16.6667V12.82C16.6667 9.87167 18.2183 8.33333 21.715 8.33333H25V13.3333Z" fill="#F1BC00"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_614_448">
                            <rect width="40" height="40" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                      </a>
                    </li>
                    <li className="">
                      <a href="#" className="hover:text-orange-500 ">
                        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM30.11 16.075C30.415 22.8083 25.3933 30.315 16.5033 30.315C13.8 30.315 11.285 29.5217 9.16667 28.1633C11.7067 28.4633 14.2417 27.7567 16.2533 26.1817C14.16 26.1433 12.3917 24.7583 11.78 22.8567C12.5317 23 13.2717 22.9583 13.9433 22.775C11.6417 22.3117 10.0517 20.2383 10.1033 18.02C10.75 18.3783 11.4867 18.5933 12.2717 18.6183C10.14 17.1933 9.53667 14.3783 10.79 12.2267C13.15 15.1233 16.6783 17.0283 20.6567 17.2283C19.9583 14.235 22.23 11.35 25.3217 11.35C26.6967 11.35 27.9417 11.9317 28.815 12.8617C29.905 12.6483 30.9317 12.2483 31.855 11.7C31.4967 12.8183 30.7383 13.755 29.75 14.3483C30.7183 14.2317 31.6417 13.975 32.4983 13.5933C31.8583 14.5567 31.0483 15.4 30.11 16.075Z" fill="#F1BC00"/>
                        </svg>

                      </a>
                    </li>
                    <li className="">
                      <a
                        href="#"
                        className="hover:text-orange-500 text-red-500"
                      >
                        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.715 10.5033C23.485 10.4467 23.115 10.4367 20 10.4367C16.885 10.4367 16.5167 10.4483 15.2867 10.5033C12.1217 10.6483 10.6483 12.1467 10.5033 15.2867C10.4483 16.5167 10.435 16.885 10.435 20C10.435 23.115 10.4483 23.4833 10.5033 24.715C10.6483 27.8467 12.115 29.3533 15.2867 29.4983C16.515 29.5533 16.885 29.5667 20 29.5667C23.1167 29.5667 23.485 29.555 24.715 29.4983C27.88 29.355 29.3517 27.8517 29.4983 24.715C29.5533 23.485 29.565 23.115 29.565 20C29.565 16.885 29.5533 16.5167 29.4983 15.2867C29.3517 12.1483 27.8767 10.6483 24.715 10.5033ZM20 25.9917C16.6917 25.9917 14.0083 23.31 14.0083 20C14.0083 16.6917 16.6917 14.01 20 14.01C23.3083 14.01 25.9917 16.6917 25.9917 20C25.9917 23.3083 23.3083 25.9917 20 25.9917ZM26.2283 15.1733C25.455 15.1733 24.8283 14.5467 24.8283 13.7733C24.8283 13 25.455 12.3733 26.2283 12.3733C27.0017 12.3733 27.6283 13 27.6283 13.7733C27.6283 14.545 27.0017 15.1733 26.2283 15.1733ZM23.8883 20C23.8883 22.1483 22.1467 23.8883 20 23.8883C17.8533 23.8883 16.1117 22.1483 16.1117 20C16.1117 17.8517 17.8533 16.1117 20 16.1117C22.1467 16.1117 23.8883 17.8517 23.8883 20ZM20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM31.5967 24.81C31.405 29.0517 29.0433 31.4017 24.8117 31.5967C23.5667 31.6533 23.1683 31.6667 20 31.6667C16.8317 31.6667 16.435 31.6533 15.19 31.5967C10.95 31.4017 8.59833 29.0483 8.40333 24.81C8.34667 23.5667 8.33333 23.1683 8.33333 20C8.33333 16.8317 8.34667 16.435 8.40333 15.19C8.59833 10.95 10.9517 8.59833 15.19 8.405C16.435 8.34667 16.8317 8.33333 20 8.33333C23.1683 8.33333 23.5667 8.34667 24.8117 8.405C29.0533 8.6 31.4067 10.9583 31.5967 15.19C31.6533 16.435 31.6667 16.8317 31.6667 20C31.6667 23.1683 31.6533 23.5667 31.5967 24.81Z" fill="#F1BC00"/>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

export function NavbarSkeleton() {
  return (
    <nav className="bg-slate-900 bg-opacity-70 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* Skeleton for menu button */}
              <div className="animate-pulse h-6 w-6 bg-gray-400 rounded-full"></div>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-between">
            <div className="flex-shrink-0 flex items-center">
              {/* Skeleton for logo */}
              <div className="animate-pulse h-8 w-auto bg-gray-400 rounded-full"></div>
              <div className="text-lg text-white font-light font-Great-Vibes cursor-pointer">
                <div className="animate-pulse h-4 w-24 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="hidden max-md:w-full max-md:bg-slate-900 max-md:backdrop-blur-md opacity-70 md:bg-transparent absolute md:relative top-16 md:top-0 md:block md:ml-6">
              <div className="flex flex-col justify-center max-md:items-center max-md:m-12 md:flex-row max-md:space-y-6 md:space-x-4">
                {/* Skeleton for menu items */}
                <div className="animate-pulse h-4 w-24 bg-gray-400 rounded mb-2"></div>
                <div className="animate-pulse h-4 w-24 bg-gray-400 rounded mb-2"></div>
                <div className="animate-pulse h-4 w-24 bg-gray-400 rounded mb-2"></div>
                <div className="animate-pulse h-4 w-24 bg-gray-400 rounded mb-2"></div>
                <div className="animate-pulse h-4 w-24 bg-gray-400 rounded mb-2"></div>
                <div className="animate-pulse h-4 w-24 bg-gray-400 rounded mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
