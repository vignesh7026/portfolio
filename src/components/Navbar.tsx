"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Command, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  return (
    <header className="fixed top-3 inset-x-0 z-50 select-none">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between md:grid md:grid-cols-[120px_1fr_120px] items-center h-12">
          
          {/* Left: Square initials logo linking to home */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-neutral-850 bg-neutral-950 flex items-center justify-center text-[13px] font-extrabold tracking-wider text-white transition-all duration-300 group-hover:border-green-500 group-hover:glow-green">
                VG
              </div>
            </Link>
          </div>

          {/* Center: Floating Pill Navigation */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center min-h-[42px] border border-neutral-900 bg-neutral-950/70 px-1.5 py-1 backdrop-blur-md rounded-full shadow-sm">
              <ul className="flex items-center gap-0.5 list-none m-0 p-0">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`relative block px-3 py-1 rounded-full text-[13px] font-medium transition-colors ${
                          isActive 
                            ? "bg-neutral-900 text-white shadow-sm" 
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <span className="relative z-10">{link.name}</span>
                      </Link>
                    </li>
                  );
                })}

                {/* More Dropdown Menu */}
                <li className="relative">
                  <button
                    onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                    onMouseEnter={() => setShowMoreDropdown(true)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                      showMoreDropdown ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    More
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${showMoreDropdown ? "rotate-180" : ""}`} />
                  </button>
                  
                  {showMoreDropdown && (
                    <div 
                      onMouseLeave={() => setShowMoreDropdown(false)}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-40 origin-top rounded-2xl border border-neutral-900 bg-black p-1.5 shadow-xl z-50"
                    >
                      <Link
                        href="/about#education"
                        onClick={() => setShowMoreDropdown(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-xs text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors"
                      >
                        Education
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                      <Link
                        href="/about#certifications"
                        onClick={() => setShowMoreDropdown(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-xs text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors"
                      >
                        Certifications
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </li>

                {/* Book a Call button embedded in the pill */}
                <li>
                  <Link
                    href="mailto:user.vignesh7026@gmail.com"
                    className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[13px] font-medium text-black bg-green-500 hover:bg-green-600 transition-colors shadow-sm ml-1"
                  >
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Command palette trigger style button */}
          <div className="hidden md:flex justify-end">
            <Link
              href="mailto:user.vignesh7026@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900 bg-neutral-950/80 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all"
              aria-label="Contact"
            >
              <Command className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900 bg-neutral-950 text-neutral-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-neutral-900 bg-black/95 backdrop-blur-md md:hidden overflow-hidden w-full absolute left-0 top-full"
          >
            <div className="space-y-1.5 px-6 pb-6 pt-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive ? "bg-neutral-900 text-white" : "text-neutral-400 hover:bg-neutral-950 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/about#education"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-950 hover:text-white transition-colors"
              >
                Education
              </Link>
              <Link
                href="/about#certifications"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-950 hover:text-white transition-colors"
              >
                Certifications
              </Link>
              <div className="pt-4">
                <Link
                  href="mailto:user.vignesh7026@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-1 rounded-xl bg-green-500 py-2.5 text-center text-sm font-semibold text-black hover:bg-green-600 transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
