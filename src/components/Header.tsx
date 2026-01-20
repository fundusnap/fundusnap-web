"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fundusnap-white/90 backdrop-blur-md border-b border-angel-blue/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo size={44} />
            <span className="font-display font-semibold text-xl md:text-2xl text-bleached-cedar">
              Fundusnap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-bleached-cedar/80 hover:text-venice-blue transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-bleached-cedar/80 hover:text-venice-blue transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className="text-bleached-cedar/80 hover:text-venice-blue transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#download"
              className="px-6 py-2.5 bg-venice-blue text-white rounded-full font-medium hover:bg-venice-blue/90 transition-all hover:shadow-lg hover:shadow-venice-blue/25"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-bleached-cedar"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-angel-blue/20">
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-bleached-cedar/80 hover:text-venice-blue transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-bleached-cedar/80 hover:text-venice-blue transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#about"
                className="text-bleached-cedar/80 hover:text-venice-blue transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#download"
                className="px-6 py-2.5 bg-venice-blue text-white rounded-full font-medium text-center hover:bg-venice-blue/90 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Download App
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
