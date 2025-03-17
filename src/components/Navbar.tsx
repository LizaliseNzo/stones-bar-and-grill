
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";
  
  // Determine text color based on page and scroll state
  const getLinkClasses = (path: string) => {
    return cn(
      "nav-link", 
      {
        "active": isActive(path),
        "text-gray-200": isHomePage && !scrolled, // Light gray on home when not scrolled
      }
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl font-semibold tracking-tight transition-opacity duration-300 hover:opacity-80",
            isHomePage && !scrolled ? "text-white" : "text-terra-950"
          )}
          aria-label="Home"
        >
          Bella Italia
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={getLinkClasses("/")}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={getLinkClasses("/menu")}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className={getLinkClasses("/about")}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/reservation"
            className={getLinkClasses("/reservation")}
            onClick={closeMenu}
          >
            Reservations
          </Link>
          <Link 
            to="/reservation" 
            className={cn(
              "btn-primary",
              isHomePage && !scrolled && "bg-white text-terra-800 hover:bg-gray-100"
            )}
          >
            Book a Table
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className={cn(
            "md:hidden p-2 focus:outline-none",
            isHomePage && !scrolled ? "text-white" : "text-foreground"
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-6 transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          <Link
            to="/"
            className={cn(
              "text-lg nav-link",
              isActive("/") && "active"
            )}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={cn(
              "text-lg nav-link",
              isActive("/menu") && "active"
            )}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-lg nav-link",
              isActive("/about") && "active"
            )}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/reservation"
            className={cn(
              "text-lg nav-link",
              isActive("/reservation") && "active"
            )}
            onClick={closeMenu}
          >
            Reservations
          </Link>
          <Link to="/reservation" className="btn-primary w-full text-center" onClick={closeMenu}>
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
