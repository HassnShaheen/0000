"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  companyName?: string;
  companyLogo?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

const Footer = ({
  companyName = "RevitCAD Converter",
  companyLogo = "/logo.svg",
  contactEmail = "hassanshaheen200424@gmail.com",
  contactPhone = "+966-506096730",
  contactAddress = "Al Suwaidi Al Gharbi, Exit 28, Riyadh, Saudi Arabia",
  socialLinks = {
    facebook: "https://www.facebook.com/hsn.shahyn.622345",
    linkedin: "https://www.linkedin.com/in/7assanshaheen/",
    youtube: "https://www.youtube.com/@Wok_Smart_Not_Work_Hard",
    whatsapp:
      "https://wa.me/966506096730?text=السلام%20عليكم%20مهندس%20حسن%20معاك",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "Documentation", href: "#documentation" },
    { name: "Download", href: "#download" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const resourceLinks = [
    { name: "API Reference", href: "#api-reference" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Blog", href: "#blog" },
    { name: "Support", href: "#support" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "License", href: "#license" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {companyLogo && (
                <img
                  src={companyLogo}
                  alt={companyName}
                  className="h-8 w-auto"
                />
              )}
              <h3 className="text-xl font-bold">{companyName}</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Professional CAD to Revit conversion plugin with powerful features
              for architects and engineers.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
              )}
              {socialLinks.whatsapp && (
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Phone size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-slate-300" />
                <span className="text-slate-300">{contactEmail}</span>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-slate-300" />
                <span className="text-slate-300">{contactPhone}</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-slate-300" />
                <span className="text-slate-300">{contactAddress}</span>
              </div>
            </div>
            <div className="pt-2">
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} {companyName}. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
