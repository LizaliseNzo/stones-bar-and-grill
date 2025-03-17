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

  // Toggle body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;
  
  // Check if we're on an internal page (menu, gallery, reservation, events)
  const isInternalPage = ['/menu', '/gallery', '/reservation', '/events'].includes(location.pathname);
  
  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
            : isInternalPage 
              ? "bg-white/80 backdrop-blur-sm py-4" 
              : "bg-transparent py-5",
          isInternalPage && "internal-page"
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
            Wise Crax
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={cn("nav-link text-lg", isActive("/") && "active")}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={cn("nav-link text-lg", isActive("/menu") && "active")}
              onClick={closeMenu}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className={cn("nav-link text-lg", isActive("/gallery") && "active")}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              to="/events"
              className={cn("nav-link text-lg", isActive("/events") && "active")}
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              to="/reservation"
              className={cn("nav-link text-lg", isActive("/reservation") && "active")}
              onClick={closeMenu}
            >
              Reservations
            </Link>
            <Link to="/reservation" className="btn-primary">
              Book a Table
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className={isHomePage && !scrolled ? "text-white" : "text-foreground"} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu - completely separate from header */}
      <div 
        className={`fixed inset-0 bg-[#8B4513] z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ 
          backgroundColor: '#8B4513',
          display: isOpen ? 'block' : 'none'
        }}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col space-y-8 items-center">
            <Link
              to="/"
              className={cn(
                "text-2xl text-white font-medium hover:text-yellow-100",
                isActive("/") && "underline underline-offset-8"
              )}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={cn(
                "text-2xl text-white font-medium hover:text-yellow-100",
                isActive("/menu") && "underline underline-offset-8"
              )}
              onClick={closeMenu}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "text-2xl text-white font-medium hover:text-yellow-100",
                isActive("/gallery") && "underline underline-offset-8"
              )}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              to="/events"
              className={cn(
                "text-2xl text-white font-medium hover:text-yellow-100",
                isActive("/events") && "underline underline-offset-8"
              )}
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              to="/reservation"
              className={cn(
                "text-2xl text-white font-medium hover:text-yellow-100",
                isActive("/reservation") && "underline underline-offset-8"
              )}
              onClick={closeMenu}
            >
              Reservations
            </Link>
            <Link 
              to="/reservation" 
              className="mt-8 px-8 py-3 bg-white text-terra-800 rounded-md hover:bg-yellow-50 font-medium text-lg"
              onClick={closeMenu}
            >
              Book a Table
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
