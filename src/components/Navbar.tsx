import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-blue-600 shadow-lg" : "bg-slate-600"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            href="#"
            className="text-white text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            HR Solutions
          </a>
          <div className="hidden md:flex space-x-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-white hover:text-blue-200 transition-all duration-300 ease-in-out transform hover:scale-110 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-2 transition-all duration-300 ease-in-out">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="block text-white py-2 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
