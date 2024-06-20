"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="font-semibold text-xl tracking-tight" href={"/"}>
            Logo
          </Link>
        </div>

        {/* Links */}
        <div className="links-container">
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
              </svg>
            </button>
          </div>

          <div
            className={`lg:flex lg:items-center lg:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <div className="text-sm lg:flex-grow">
              <Link
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
              >
                Home
              </Link>
              <Link
                href="/createPost"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
              >
                Create Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
