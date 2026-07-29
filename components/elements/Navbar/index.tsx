"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { NavbarItem } from "./const";
import { LogOut, UserCircle2 } from "lucide-react";
import { useState } from "react";
import Image from "~/lib/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);
  const [isNavbarVisible] = useState(true);

  const handleLogout = async () => {
    setAuthMenuOpen(false);
    router.push("/login");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav
      className={`${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 z-100 grid h-20 w-full grid-cols-[auto_1fr_auto] items-center justify-between bg-[#F8F4FF] px-12 py-2 shadow-md transition max-lg:flex max-lg:justify-between max-lg:px-10 max-sm:px-8 lg:h-24`}
    >
      <Link
        className="relative aspect-square w-16 max-lg:w-14 max-sm:w-12"
        href="/ambassador"
      >
        <Image
          alt="Logo"
          className="h-full w-full"
          imageClassName="object-contain"
          src="/design-system/logo-no-bg.svg"
        />
      </Link>
      <div className="flex items-center justify-evenly max-lg:hidden">
        {NavbarItem.map((item) => (
          <Link
            className={`flex items-center gap-1 ${
              item.disabled
                ? "text-neutral-500 hover:cursor-not-allowed"
                : pathname === item.link
                  ? "text-tertiary-70"
                  : "text-primary-80 hover:text-primary-40"
            }`}
            href={item.disabled ? "#" : item.link}
            key={item.name}
          >
            <item.icon className="size-5 stroke-2" />
            <span className="text-s7 font-aileron leading-tight font-bold">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop User Info */}
      <Link className="hidden w-fit lg:block" href="/login">
        <Button disabled={true}>Login</Button>
      </Link>
      <button
        className="bg-primary-10 flex justify-end rounded-md border p-3 lg:hidden"
        onClick={toggleMenu}
        type="button"
      >
        <div
          className={`relative flex flex-col justify-center lg:hidden ${
            isMenuOpen ? "items-center" : "items-end"
          } text-primary-500 hover:text-primary-300 transition-colors`}
        >
          <span
            className={`block h-0.5 w-4 transform rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "w-4 translate-y-0.5 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-4 transform rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "w-4 -translate-y-0.5 -rotate-45" : "translate-y-1"
            }`}
          />
        </div>
      </button>

      {/* Desktop Auth Menu */}
      <div
        className={`bg-primary-10 absolute right-0 -bottom-4 mr-12 flex min-w-52 translate-y-full transform flex-col gap-2 rounded-xl p-5 transition-all duration-300 ease-out max-lg:mr-10 max-sm:mr-8 ${
          authMenuOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
      >
        <Link
          className="text-secondary-500 text-s7 flex items-center gap-1"
          href="/profile"
        >
          <div className="group-hover:text-primary-10 rounded-full p-2 transition-all">
            <UserCircle2 className="size-5 stroke-2" />
          </div>
          <span>Profile</span>
        </Link>
        <div className="bg-secondary-500 h-px w-full" />
        <button
          className="text-s7 group flex cursor-pointer items-center gap-1 text-red-400"
          onClick={handleLogout}
          type="button"
        >
          <div className="group-hover:text-primary-10 rounded-full p-2 transition-all group-hover:bg-red-400">
            <LogOut className="size-5 stroke-2" />
          </div>
          <span>Logout</span>
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`absolute right-0 -bottom-4 mr-12 flex translate-y-full transform flex-col gap-4 rounded-xl bg-[#F8F4FF] p-5 transition-all duration-300 ease-out max-lg:mr-10 max-sm:mr-8 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
      >
        {NavbarItem.map((item) => (
          <Link
            className={`group text-primary-80 hover:text-primary-40 flex transform items-center gap-1 transition-all duration-300 ease-out ${
              item.disabled
                ? "text-neutral-500 hover:cursor-not-allowed"
                : "text-primary-80"
            } ${isMenuOpen ? "translate-y-0" : "pointer-events-none translate-y-2"} ${
              pathname === item.link && !item.disabled
                ? "active-icon-style"
                : ""
            }`}
            href={item.disabled ? "#" : item.link}
            key={item.name}
          >
            <div
              className={`rounded-full p-2 transition-all ${
                !item.disabled &&
                (pathname === item.link
                  ? "bg-tertiary-10 text-tertiary-100"
                  : "group-hover:bg-tertiary-10 group-hover:text-tertiary-100")
              }`}
            >
              <item.icon className="size-5 stroke-2" />
            </div>
            <span className="text-s7">{item.name}</span>
          </Link>
        ))}
        <Button>Login</Button>
      </div>
    </nav>
  );
};
export default Navbar;
