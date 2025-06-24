"use client";

import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./button";
import ThemeSwitcher from "./themeSwitcher";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleDropdown = () => setIsExpanded((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-3xl mx-auto">
      <div className="border glass-effect rounded-full py-2 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold">
          <span className="py-3 block">evasbr</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-9 items-center">
          <ul className="flex gap-9">
            <li>
              <Link href="/">
                <span
                  className={`py-3 px-5 rounded-xl block transition-colors duration-100 ${
                    pathname === "/"
                      ? "bg-white/25 font-semibold"
                      : "hover:bg-foreground hover:text-blue-500"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span
                  className={`py-3 px-5 block rounded-xl  transition-colors duration-100 ${
                    pathname === "/projects"
                      ? "bg-white/25 font-semibold"
                      : "hover:bg-foreground hover:text-blue-500"
                  }`}
                >
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span
                  className={`py-3 px-5 rounded-xl  block transition-colors duration-100 ${
                    pathname === "/about"
                      ? "bg-white/25 font-semibold"
                      : "hover:bg-foreground hover:text-blue-500"
                  }`}
                >
                  About Me
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button onClick={toggleDropdown} icon size="small">
            {isExpanded ? <HiX size={24} /> : <HiMenu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={dropdownRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-effect p-4 rounded-xl mx-4 mt-2">
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" onClick={() => setIsExpanded(false)}>
                <span
                  className={`py-2 px-3 block rounded-md transition-colors duration-100  ${
                    pathname === "/"
                      ? "bg-white/25 font-semibold"
                      : "hover:bg-foreground hover:text-blue-500"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsExpanded(false)}>
                <span
                  className={`py-2 px-3 block rounded-md transition-colors duration-100 ${
                    pathname === "/projects"
                      ? "bg-white/25  font-semibold"
                      : "hover:bg-foreground hover:text-blue-500"
                  }`}
                >
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsExpanded(false)}>
                <span
                  className={`py-2 px-3 block transition-colors duration-100 rounded-md ${
                    pathname === "/about"
                      ? "bg-white/25 font-semibold"
                      : "hover:bg-foreground hover:text-blue-500"
                  }`}
                >
                  About Me
                </span>
              </Link>
            </li>
            <li className="mt-3">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
