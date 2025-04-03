"use client";

import React, { useState, useEffect } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";

interface HeaderProps {
  logo?: string;
  navLinks?: Array<{ label: string; href: string }>;
}

const Header = ({
  logo = "WOK Smart Not Work Hard",
  navLinks = [
    { label: "Features", href: "#features" },
    { label: "Tools", href: "#documentation" },
    { label: "Download", href: "#download" },
    { label: "Future Plugins", href: "#future-plugins" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ],
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <AnimatedLogo size={32} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-primary">{logo}</span>
              <img
                src="https://seeklogo.com/images/A/autodesk-revit-logo-C3F5E6D48D-seeklogo.com.png"
                alt="Revit Logo"
                className="h-6 w-auto ml-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-6"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <div className="ml-4">
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <Zap className="mr-1 h-4 w-4" />
                Download Now
              </Button>
            </div>
            <ThemeSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="ml-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="sm"
                className="rounded-full w-full mt-2 bg-gradient-to-r from-primary to-secondary"
              >
                <Zap className="mr-1 h-4 w-4" />
                Download Now
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
