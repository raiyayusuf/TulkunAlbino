// app/components/layout/footer.tsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "GSE Class", href: "/gse-class" },
      { name: "GSE Service", href: "/gse-service" },
      { name: "GSE Mac", href: "/gse-mac" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="mt-auto border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-24 rounded-md bg-gradient-gse flex items-center justify-center">
                <span className="text-sm font-bold text-white">GSE JOGJA</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Pusat edukasi teknologi dan service Apple terpercaya di
              Yogyakarta.
            </p>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-primary-navy">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-primary-blue"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GSE Jogja. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary-blue"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary-blue"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary-blue"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
