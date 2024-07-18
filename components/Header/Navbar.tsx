"use client";
import logo from "@/asset/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaInstagram, FaMap, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMdMap } from "react-icons/io";
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
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 z-30">
        <div className="relative flex items-center justify-between h-16 max-md:mx-4">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => handleMenu()}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
              className="hidden max-md:w-full max-md:h-screen max-md:bg-secondary-color max-md:backdrop-blur-md max-md:opacity-90 md:bg-transparent absolute md:relative top-16  md:top-0 md:block md:ml-6"
            >
              <div className="flex max-md:flex-col  p-2 items-center justify-center gap-x-1">
                <div className="flex flex-col w-full justify-center max-md:items-center max-md:m-12 md:flex-row max-md:space-y-3 md:space-x-1">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link
                    href="/"
                    className="text-white  hover:text-orange-600 px-3 py-2 rounded-md text-sm font-bold max-md:text-center"
                  >
                    Accuiel
                  </Link>
                  <a
                    href="#services"
                    className="text-gray-300  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Nos Services
                  </a>
                  <a
                    href="#category"
                    className="text-gray-300 hidden  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Categories
                  </a>
                  <a
                    href="#voitures"
                    className="text-gray-300  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Nos Voitures
                  </a>
                  <a
                    href="#photos"
                    className="text-gray-300  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Photos
                  </a>
                  <a
                    href="/#lieu"
                    className="text-primary-color  hover:text-primary-color px-1 py-2 rounded-md text-sm font-medium max-md:text-center"
                  >
                    Ou nous sommes?
                  </a>
                  <a
                    href="#contact"
                    className="text-white hover:bg-white  hover:text-black px-6 py-2 rounded-full text-sm  bg-primary-color font-bold max-md:text-center max-md:w-2/3"
                  >
                    Contactez-nous
                  </a>
                </div>
                <div className="flex items-center m-2">
                  <ul className="list-none flex items-center gap-4 justify-center">
                    <li className="">
                      <a href="https://www.google.com/maps/@-11.6522620,27.4438210,15z" target='_blank' className="hover:text-orange-500 text-white">
                        <FaMap/>
                      </a>
                    </li>
                    <li className="">
                      <a href="https://www.instagram.com/autoprordc?igsh=MXBzc2Frb2h6bDVnYg==" className="hover:text-orange-500 text-white">
                        <FaInstagram size={16}/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <a
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              href="https://wa.me/243992099990"
            >
              <FaWhatsapp />
            </a>
          </div>
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
