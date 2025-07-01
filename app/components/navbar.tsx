"use client";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import { usePathname } from "next/navigation";
import { FaPuzzlePiece, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoHomeFill } from "react-icons/go";

type NavbarItem = {
  name: string;
  url: string;
  icon: React.ReactElement;
};

const navbarData: NavbarItem[] = [
  { name: "Home", url: "/", icon: <GoHomeFill size={20} /> },
  { name: "Projects", url: "/projects", icon: <FaPuzzlePiece size={20} /> },
  { name: "About", url: "/about", icon: <FaUser size={18} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const path = "/" + pathname.split("/")[1];

  return (
    <nav className="fixed bottom-0 lg:bottom-auto lg:top-2 left-0 right-0 z-50 lg:max-w-3xl lg:mx-auto">
      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center glass-effect rounded-2xl py-2 px-6">
        <div className="font-bold">
          <span className="py-3 block">evasbr</span>
        </div>

        <ul className="flex gap-9 items-center relative">
          {navbarData.map((item) => (
            <li key={item.url} className="relative">
              <Link href={item.url}>
                <span
                  className={`py-3 px-5 rounded-xl block transition-colors duration-200 ${
                    pathname === item.url
                      ? "text-white font-semibold"
                      : " hover:text-blue-300"
                  }`}
                >
                  {item.name}
                  {pathname === item.url && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 z-[-1] bg-white/25 rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ThemeSwitcher />
      </div>

      {/* Mobile */}
      <div className="lg:hidden bg-white text-blue-500 px-6 flex justify-around items-center rounded-t-2xl w-full">
        {navbarData.map((item) => (
          <Link key={item.url} href={item.url} className="flex-1">
            <div className="relative flex flex-col justify-center items-center text-center gap-2.5 py-3">
              {path === item.url && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute inset-0 bg-blue-400/20 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.icon}
              <p className="font-thin text-xs">{item.name}</p>
            </div>
          </Link>
        ))}

        {/* Theme Switcher - juga ikut flex-1 agar rata */}
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-1 py-3 -translate-y-1">
          <ThemeSwitcher />
          <p className="font-thin text-xs">Theme</p>
        </div>
      </div>
    </nav>
  );
}
