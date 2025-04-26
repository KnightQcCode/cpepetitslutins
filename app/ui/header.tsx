"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/app/ui/nav-link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={"relative bg-white"}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark relative container mx-auto flex items-center justify-between px-5 py-7 transition-all duration-700">
        <Link href="/">
          <Image
            src="/CPElesPetitsLutinsCSP-LogoComplet-Couleur@2x.png"
            alt="Logo"
            width={162} // adjust size
            height={80} // adjust size
          />
        </Link>
        <div>
          <ul
            className={`navbar-nav text-gold flex hidden gap-7 bg-white px-5 text-sm font-bold uppercase transition-all duration-700 lg:flex lg:items-center lg:gap-4 xl:gap-7`}
          >
            <NavLink linkTo={"/"}>Accueil</NavLink>
            <NavLink linkTo={"/"}>Corporation</NavLink>
            <NavLink linkTo={"/"}>Engagement</NavLink>
            <NavLink linkTo={"/"}>Espace membre</NavLink>
            <NavLink linkTo={"/"}>Nous joindre</NavLink>
            <NavLink linkTo={"/"} className={`button`}>
              Inscrire mon enfant
            </NavLink>
          </ul>
          <button
            onClick={handleClick}
            className="relative flex h-8 w-8 flex-col items-center justify-center gap-1 lg:hidden"
          >
            <span
              className={`bg-gold absolute block h-0.75 w-8 origin-center rounded-sm transition-all duration-300 ease-out ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`bg-gold absolute block h-0.75 w-8 origin-center rounded-sm transition-all duration-300 ease-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-gold absolute block h-0.75 w-8 origin-center rounded-sm transition-all duration-300 ease-out ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
      </nav>
      <div
        className={`absolute top-full left-0 w-12/12 overflow-hidden bg-white transition-all duration-700 lg:hidden ${
          isOpen ? `max-h-screen py-5` : `max-h-0 lg:max-h-screen`
        }`}
      >
        <div className={`container mx-auto`}>
          <ul
            className={`navbar-nav text-gold mx-auto flex w-12/12 flex-col gap-7 overflow-hidden px-5 text-sm font-bold uppercase`}
          >
            <NavLink linkTo={"/"}>Accueil</NavLink>
            <NavLink linkTo={"/"}>Corporation</NavLink>
            <NavLink linkTo={"/"}>Engagement</NavLink>
            <NavLink linkTo={"/"}>Espace membre</NavLink>
            <NavLink linkTo={"/"}>Nous joindre</NavLink>
            <NavLink linkTo={"/"} className={`button`}>
              Inscrire mon enfant
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
}
