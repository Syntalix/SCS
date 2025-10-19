"use client";

import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";
import scs from "../../assets/syntalix_logo.svg";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const handleContactClick = () => {
    window.location.href = "mailto:syntalix.ai@gmail.com";
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar className="p-5 bg-background/90 backdrop-blur-md border-b sticky top-0 z-[100] shadow-sm">
      <Navbar.Brand href="/">
        <Image
          className="h-8 sm:h-12"
          src={scs}
          width={120}
          height={40}
          alt="Syntalix Consultancy Services Logo"
        ></Image>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-2 items-center">
        <ThemeToggle />
        <button
          onClick={handleContactClick}
          className="syntalix-heading bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 px-[2vw] py-[1.2vh] rounded-3xl text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Contact Us
        </button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <button
          onClick={() => scrollToSection("about")}
          className="syntalix-body text-foreground text-base font-bold hover:text-primary transition-colors duration-300"
        >
          About Us
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className="syntalix-body text-foreground text-base font-bold hover:text-primary transition-colors duration-300"
        >
          Services
        </button>
        <Navbar.Link
          href="#"
          className="syntalix-body text-foreground text-base font-bold hover:text-primary transition-colors duration-300"
        >
          Pricing
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
