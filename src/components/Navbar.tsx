import { useState, useEffect } from "react";
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
            ? "bg-black/95 backdrop-blur-sm shadow-md py-2 border-b border-orange-600/30"
            : isInternalPage 
              ? "bg-black/80 backdrop-blur-sm py-3 border-b border-orange-600/20" 
              : "bg-transparent py-4",
          isInternalPage && "internal-page"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center transition-opacity duration-300 hover:opacity-80"
            aria-label="Stones Bar and Grill - Home"
          >
            <img 
              src="/stons bar and grill images/2021-08-08.jpg" 
              alt="Stones Bar and Grill Logo" 
              className="h-16 w-auto rounded-full object-cover border-3 border-orange-500"
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn("nav-link text-base", isActive("/") && "active")}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={cn("nav-link text-base", isActive("/menu") && "active")}
              onClick={closeMenu}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className={cn("nav-link text-base", isActive("/gallery") && "active")}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              to="/events"
              className={cn("nav-link text-base", isActive("/events") && "active")}
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              to="/reservation"
              className={cn("nav-link text-base", isActive("/reservation") && "active")}
              onClick={closeMenu}
            >
              Reservations
            </Link>
            <Link to="/reservation" className="btn-primary text-sm py-2 px-4">
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
              <X size={20} className="text-orange-500" />
            ) : (
              <Menu size={20} className={isHomePage && !scrolled ? "text-orange-300" : "text-orange-500"} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu - completely separate from header */}
      <div 
        className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ 
          backgroundColor: '#000000',
          display: isOpen ? 'block' : 'none'
        }}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div className="mb-6">
            <img 
              src="/stons bar and grill images/2021-08-08.jpg" 
              alt="Stones Bar and Grill Logo" 
              className="h-20 w-auto rounded-full object-cover border-2 border-orange-500"
            />
          </div>
          <nav className="flex flex-col space-y-6 items-center">
            <Link
              to="/"
              className={cn(
                "text-xl text-orange-400 font-medium hover:text-orange-500",
                isActive("/") && "underline underline-offset-8 decoration-orange-500"
              )}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={cn(
                "text-xl text-orange-400 font-medium hover:text-orange-500",
                isActive("/menu") && "underline underline-offset-8 decoration-orange-500"
              )}
              onClick={closeMenu}
            >
              Menu
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "text-xl text-orange-400 font-medium hover:text-orange-500",
                isActive("/gallery") && "underline underline-offset-8 decoration-orange-500"
              )}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              to="/events"
              className={cn(
                "text-xl text-orange-400 font-medium hover:text-orange-500",
                isActive("/events") && "underline underline-offset-8 decoration-orange-500"
              )}
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              to="/reservation"
              className={cn(
                "text-xl text-orange-400 font-medium hover:text-orange-500",
                isActive("/reservation") && "underline underline-offset-8 decoration-orange-500"
              )}
              onClick={closeMenu}
            >
              Reservations
            </Link>
            <Link 
              to="/reservation" 
              className="mt-6 px-6 py-2 bg-orange-500 text-black rounded-md hover:bg-orange-600 font-medium text-base"
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
