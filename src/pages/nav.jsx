import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:px-12 bg-white shadow relative">
      {/* Logo */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/zeepay-replica/logo.svg"
            alt="logo"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-sm sm:text-base md:text-lg">Zeepay</span>
        </Link>
      </div>

      {/* Hamburger Button (Mobile/Tablet) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {isOpen ? (
          // Close Icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-6 text-sm md:text-base lg:text-lg">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex gap-2">
        <Link
          to="/login"
          className="border border-blue-500 text-blue-500 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base hover:bg-blue-50"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base hover:bg-blue-600"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu (Slide Down) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-4 text-sm">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <div className="flex flex-col gap-2 mt-2">
            <Link
              to="/login"
              className="border border-blue-500 text-blue-500 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;