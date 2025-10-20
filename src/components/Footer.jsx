"use client";

import Link from "next/link";
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export function Foot() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:pr-8">
            <h3 className="text-xl font-bold mb-4">Syntalix</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with innovative IT solutions and consulting services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: syntalix.ai@gmail.com</li>
              <li>Phone: +91 9831970136</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/syntalix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/syntalix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://wa.me/919831970136"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Syntalix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
