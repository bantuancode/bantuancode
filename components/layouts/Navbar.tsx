"use client";

import React, { useState, useEffect, startTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

// Navigation structure
const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Layanan",
    href: "/layanan",
    submenu: [
      { name: "Software Development", href: "/layanan/software-development" },
      { name: "Data Science & AI", href: "/layanan/data-science" },
      { name: "Cybersecurity", href: "/layanan/cybersecurity" },
      { name: "Infrastructure", href: "/layanan/infrastructure" },
    ],
  },
  {
    name: "Tech Stack",
    href: "/tech",
  },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    startTransition(() => {
      setIsMenuOpen(false);
      setOpenSubmenu(null);
    });
  }, [pathname]);

  // Handle scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  // Toggle submenu on mobile
  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          sticky top-0 z-50 w-full
          bg-background/95 backdrop-blur-md
          border-b border-border
          transition-shadow duration-300
          ${isScrolled ? "shadow-lg" : "shadow-sm"}
        `}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group z-50"
              onClick={closeMobileMenu}
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Bantuancode Logo"
                  fill
                  sizes="40px"
                  className="object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </div>
              <span className="text-foreground text-base md:text-lg font-semibold tracking-wide whitespace-nowrap">
                Bantuancode
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    // Dropdown menu item
                    <>
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`
                          flex items-center gap-1
                          px-3 lg:px-4 py-2
                          rounded-md
                          text-sm font-medium
                          transition-colors duration-200
                          ${
                            isActive(item.href)
                              ? "text-accent bg-accent/10"
                              : "text-muted hover:text-foreground hover:bg-background-card"
                          }
                        `}
                      >
                        {item.name}
                        <IoChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown content */}
                      <div
                        className="
                          absolute top-full left-0 mt-0 pt-2
                          w-56
                          opacity-0 invisible
                          group-hover:opacity-100 group-hover:visible
                          transition-all duration-200
                          pointer-events-none group-hover:pointer-events-auto
                        "
                      >
                        <div
                          className="
                            bg-background-card
                            border border-border
                            rounded-lg
                            shadow-xl
                            overflow-hidden
                            py-2
                          "
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              className={`
                                block px-4 py-2.5
                                text-sm font-medium
                                transition-colors duration-150
                                ${
                                  pathname === subitem.href
                                    ? "text-accent bg-accent/10"
                                    : "text-muted hover:text-foreground hover:bg-background-elevated"
                                }
                              `}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Regular menu item
                    <Link
                      href={item.href}
                      className={`
                        block px-3 lg:px-4 py-2
                        rounded-md
                        text-sm font-medium
                        transition-colors duration-200
                        ${
                          isActive(item.href)
                            ? "text-accent bg-accent/10"
                            : "text-muted hover:text-foreground hover:bg-background-card"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button Desktop */}
              <a
                href="https://wa.me/6285182380899"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ml-2 lg:ml-4
                  inline-flex items-center gap-2
                  px-4 lg:px-5 py-2.5
                  bg-accent hover:bg-accent-hover
                  text-white
                  text-sm font-medium
                  rounded-md
                  shadow-md hover:shadow-glow
                  transition-all duration-200
                  hover:-translate-y-0.5
                  whitespace-nowrap
                "
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                <span className="hidden lg:inline">Konsultasi Gratis</span>
                <span className="lg:hidden">Konsultasi</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                md:hidden
                relative z-50
                p-2
                text-foreground
                hover:bg-background-card
                rounded-md
                transition-colors
                flex items-center justify-center
              "
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="
            fixed inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            md:hidden
          "
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0
          h-full w-full max-w-sm
          z-40
          md:hidden
          bg-background
          border-l border-border
          shadow-2xl
          overflow-y-auto
          transition-transform duration-300 ease-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Menu Header */}
        <div className="sticky top-0 bg-background  px-4 py-4 flex items-center justify-between z-10">
          <span className="text-foreground text-lg font-semibold">Menu</span>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-foreground hover:bg-background-card rounded-md transition-colors"
            aria-label="Close menu"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="px-4 py-6 space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                // Mobile dropdown
                <>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`
                      w-full
                      flex items-center justify-between
                      px-4 py-3
                      rounded-lg
                      text-sm font-medium
                      transition-all duration-200
                      ${
                        isActive(item.href)
                          ? "text-accent bg-accent/10"
                          : "text-muted hover:text-foreground hover:bg-background-card"
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    <IoChevronDown
                      className={`
                        w-5 h-5
                        transition-transform duration-200
                        ${openSubmenu === item.name ? "rotate-180" : "rotate-0"}
                      `}
                    />
                  </button>

                  {/* Mobile submenu */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all duration-300 ease-in-out
                      ${
                        openSubmenu === item.name
                          ? "max-h-96 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="pl-4 space-y-1 py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className={`
                            block px-4 py-2.5
                            rounded-lg
                            text-sm font-medium
                            transition-colors duration-200
                            ${
                              pathname === subitem.href
                                ? "text-accent bg-accent/10"
                                : "text-text-secondary hover:text-foreground hover:bg-background-card"
                            }
                          `}
                          onClick={closeMobileMenu}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                // Regular mobile menu item
                <Link
                  href={item.href}
                  className={`
                    block px-4 py-3
                    rounded-lg
                    text-sm font-medium
                    transition-colors duration-200
                    ${
                      isActive(item.href)
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-foreground hover:bg-background-card"
                    }
                  `}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* CTA Button Mobile */}
          <div className="pt-4 border-t border-slate-700 mt-4">
            <Link
              href="https://wa.me/6285182380899"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <FaWhatsapp className="w-5 h-5" />
              Konsultasi Gratis via WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
