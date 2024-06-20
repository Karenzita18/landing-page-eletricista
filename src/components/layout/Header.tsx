"use client";

import React, { Fragment, useEffect, useState } from "react";
import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link as Scroll } from "react-scroll";
import { Icone } from "../common/icon";

declare const window: any;


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <header>
        <div className="bg-brand-100 md:px-5 z-20 font-light text-white ">
          <div className="max-w-7xl mx-auto flex place-content-between">
            <div className="flex place-items-center gap-x-5">
              <a
                href="mailto:brenoleitejoaquim21@gmail.com"
                className="text-sm hidden sm:block"
              >
                <span className="inline-block text-lg -mb-1 mx-2">
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                  brenoleitejoaquim21@gmail.com
              </a>
              <a
                href="tel:5519997387492"
                className="text-sm hidden sm:block"
              >
                <span className="inline-block text-lg -mb-1 mx-2">
                  <FaPhoneAlt />
                </span>
                  (19) 99738-7492
              </a>
            </div>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/breno-leite-joaquim-0a5318262/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </div>
        <nav
          className={
            navbar
              ? "bg-white shadow-lg fixed w-full z-50 px-5 top-0 animate-slideInDown"
              : "bg-white shadow-lg fixed w-full z-50 px-5 "
          }
        >
          <div className="row ">
            <div className="flex items-center h-24 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 max-w-[240px] md:max-w-[300px]">
                  <Link
                    href="/"
                    className="cursor-pointer max-w-[26rem] md:max-w-[28rem] text-brand-100 "
                  >
                    <Icone />
                  </Link>
                </div>
                <div className="hidden mr-5 lg:flex flex-nowrap items-center">
                  <Scroll
                    to="home"
                    smooth
                    offset={-100}
                    className="text-brand-100 hover:text-brand-200 transition-500 text-lg px-5 py-5 cursor-pointer"
                  >
                    Home
                  </Scroll>
                  <Scroll
                    to="about"
                    smooth
                    offset={-100}
                    className="text-brand-100 hover:text-brand-200 transition-500 text-lg px-5 py-5 cursor-pointer"
                  >
                    About
                  </Scroll>
                  <Scroll
                    to="services"
                    smooth
                    offset={-100}
                    className="text-brand-100 hover:text-brand-200 transition-500 text-lg px-5 py-5 cursor-pointer"
                  >
                    Services
                  </Scroll>
                  <Scroll
                    to="projects"
                    smooth
                    offset={-100}
                    className="text-brand-100 hover:text-brand-200 transition-500 text-lg px-5 py-5 cursor-pointer"
                  >
                    Projects
                  </Scroll>
                  <Scroll
                    to="feedback"
                    smooth
                    offset={-100}
                    className="text-brand-100 hover:text-brand-200 transition-500 text-lg px-5 py-5 cursor-pointer"
                  >
                    FeedBack
                  </Scroll>
                  <Scroll
                    to="contact"
                    smooth
                    offset={-100}
                    className="text-brand-100 hover:text-brand-200 transition-500 text-lg px-5 py-5 cursor-pointer"
                  >
                    Contact
                  </Scroll>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-brand-100 bg-white outline-none shadow-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu">
                <div className="bg-zinc-100 -mx-5 px-2 sm:px-3 py-5">
                  <div className="space-y-5 cursor-pointer text-brand-300 block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                    <Scroll
                      to="home"
                      smooth
                      offset={-100}
                      className="block text-brand-100 hover:text-brand-200 transition-500 text-lg cursor-pointer"
                    >
                      Home
                    </Scroll>
                    <Scroll
                      to="about"
                      smooth
                      offset={-100}
                      className="block text-brand-100 hover:text-brand-200 transition-500 text-lg cursor-pointer"
                    >
                      About
                    </Scroll>
                    <Scroll
                      to="services"
                      smooth
                      offset={-100}
                      className="block text-brand-100 hover:text-brand-200 transition-500 text-lg cursor-pointer"
                    >
                      Services
                    </Scroll>
                    <Scroll
                      to="projects"
                      smooth
                      offset={-100}
                      className="block text-brand-100 hover:text-brand-200 transition-500 text-lg cursor-pointer"
                    >
                      Projects
                    </Scroll>
                    <Scroll
                      to="feedback"
                      smooth
                      offset={-100}
                      className="block text-brand-100 hover:text-brand-200 transition-500 text-lg cursor-pointer"
                    >
                      FeedBack
                    </Scroll>
                    <Scroll
                      to="contact"
                      smooth
                      offset={-100}
                      className="block text-brand-100 hover:text-brand-200 transition-500 text-lg cursor-pointer"
                    >
                      Contact
                    </Scroll>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
}