"use client";

import { useState, useEffect, useRef } from "react";

interface NavbarProps {
  restaurantName: string;
  waNumber: string;
}

export default function Navbar({ restaurantName, waNumber }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "#about", label: "Tentang" },
    { href: "#menu", label: "Menu" },
    { href: "#specialties", label: "Andalan" },
    { href: "#gallery", label: "Galeri" },
    { href: "#reviews", label: "Ulasan" },
    { href: "#contact", label: "Kontak" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const offset = 72; // navbar height + padding
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl py-3 shadow-sm"
          : "py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className={`font-[Playfair_Display] text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-spice-dark" : "text-white"
          }`}
        >
          {restaurantName}
        </a>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-[26px] h-[2.5px] rounded-sm transition-all duration-300 origin-center ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[5px] translate-x-[5px]" : ""}`}
          />
          <span
            className={`w-[26px] h-[2.5px] rounded-sm transition-all duration-300 ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-[26px] h-[2.5px] rounded-sm transition-all duration-300 origin-center ${
              scrolled ? "bg-gray-800" : "bg-white"
            } ${menuOpen ? "-rotate-45 translate-y-[-5px] translate-x-[5px]" : ""}`}
          />
        </button>

        {/* Menu */}
        <ul
          ref={menuRef}
          className={`flex items-center gap-8 max-md:fixed max-md:top-0 max-md:right-[-100%] max-md:w-[280px] max-md:h-screen max-md:bg-white max-md:flex-col max-md:justify-center max-md:gap-6 max-md:shadow-[-8px_0_32px_rgba(0,0,0,0.15)] max-md:transition-[right] max-md:duration-400 ${
            menuOpen ? "max-md:!right-0" : ""
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 max-md:text-lg max-md:!text-gray-800 max-md:hover:!text-spice ${
                  scrolled
                    ? "text-gray-600 hover:text-spice"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://wa.me/${waNumber}?text=Halo%20Nabas%20Rote%2C%20saya%20mau%20pesan%20makan.`}
              target="_blank"
              rel="noopener"
              className="!bg-spice !text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:!bg-spice-dark transition-colors"
              onClick={closeMenu}
            >
              Pesan Sekarang
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}