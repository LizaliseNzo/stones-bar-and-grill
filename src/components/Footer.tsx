
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive-50 py-16 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="font-serif text-3xl font-semibold tracking-tight text-terra-950">
              Bella Italia
            </Link>
            <p className="text-muted-foreground">
              Authentic Italian cuisine made with love and tradition. Experience the true flavors of Italy.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="p-2 text-terra-700 hover:text-terra-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 text-terra-700 hover:text-terra-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 text-terra-700 hover:text-terra-900 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium font-serif">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>12:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium font-serif">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-terra-800" />
                <span>123 Italian Street, Foodville, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-terra-800" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-terra-800" />
                <span>info@bellaitalia.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-terra-800 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-terra-800 transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/reservation" className="text-muted-foreground hover:text-terra-800 transition-colors">Reservations</Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-terra-800 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-terra-800 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-olive-200 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Bella Italia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
