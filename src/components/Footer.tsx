import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 mt-16 border-t border-orange-900/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex flex-col items-start gap-3">
              <img 
                src="/stons bar and grill images/2021-08-08.jpg" 
                alt="Stones Bar and Grill Logo" 
                className="h-16 w-16 rounded-full object-cover border-2 border-orange-600" 
              />
              <span className="font-serif text-xl font-semibold tracking-tight text-orange-500">Stones Bar and Grill</span>
            </Link>
            <p className="text-orange-200/80">
              Casual dining with quality food and a relaxed outdoor atmosphere. The perfect place to unwind and enjoy good company.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="p-2 text-orange-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 text-orange-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 text-orange-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium font-serif text-orange-500">Opening Hours</h3>
            <ul className="space-y-2 text-orange-200">
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
            <h3 className="text-lg font-medium font-serif text-orange-500">Contact</h3>
            <ul className="space-y-2 text-orange-200">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-orange-500" />
                <span>Corner Soutpansberg and, Steve Biko Rd, Prinshof, Pretoria, 0028</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange-500" />
                <span>012 001 7950</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-orange-500" />
                <span>info@stonesbarandgrill.co.za</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium font-serif text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-orange-200 hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-orange-200 hover:text-orange-400 transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/reservation" className="text-orange-200 hover:text-orange-400 transition-colors">Reservations</Link>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-orange-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-orange-400 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-900/30 text-center text-sm text-orange-200/60">
          <p>&copy; {year} Stones Bar and Grill. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
