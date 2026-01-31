// app/components/layout/navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "GSE Class", href: "/gse-class" },
    { name: "GSE Mac", href: "/gse-mac" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-32">
              {/* Logo GSE Jogja */}
              <Image
                src="/logo/gse.png"
                alt="GSE Jogja Logo"
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary-navy transition-colors hover:text-primary-blue"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login/User Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden md:flex items-center space-x-2 rounded-lg bg-gradient-blue-green px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>

            {/* Mobile login icon */}
            <Link
              href="/login"
              className="md:hidden rounded-full p-2 text-primary-navy hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
