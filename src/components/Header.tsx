import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between px-4 md:px-36 py-6 md:py-8">
          <div className="flex items-center">
            <img 
              src="/images/banke-capital-logo.png" 
              alt="Banke Capital" 
              className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          <nav className="hidden md:block">
            <div className="flex items-center gap-8 text-white text-sm font-light">
              <Link to="/" className={`group relative hover:text-yellow-400 transition-all duration-300 ${isActive("/") ? "text-yellow-400" : ""}`}>
                <span>Home</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
              <Link to="/about" className={`group relative hover:text-yellow-400 transition-all duration-300 ${isActive("/about") ? "text-yellow-400" : ""}`}>
                <span>About Us</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
              <Link to="/projects" className={`group relative hover:text-yellow-400 transition-all duration-300 ${isActive("/projects") ? "text-yellow-400" : ""}`}>
                <span>Exclusive Projects</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"}`}></span>

              </Link>
              <Link to="/team" className={`group relative hover:text-yellow-400 transition-all duration-300 ${isActive("/team") ? "text-yellow-400" : ""}`}>
                <span>Meet Our Team</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive("/team") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                
              </Link>
              <Link to="/contact" className={`group relative hover:text-yellow-400 transition-all duration-300 ${isActive("/contact") ? "text-yellow-400" : ""}`}>
                <span>Contact Us</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                
              </Link>
            </div>
          </nav>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-yellow-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="px-4 md:px-36 -mt-4 md:-mt-6">
          <div className="h-px bg-white opacity-40"></div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)}></div>
          <nav className="relative h-full flex flex-col items-center justify-center gap-8 text-white text-xl">
            <Link 
              to="/" 
              className={`hover:text-yellow-400 transition-all duration-300 ${isActive("/") ? "text-yellow-400" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-yellow-400 transition-all duration-300 ${isActive("/about") ? "text-yellow-400" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="#projects" 
              className="hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Exclusive Projects
            </a>
            <a 
              href="#team" 
              className="hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Meet Our Team
            </a>
            <a 
              href="#contact" 
              className="hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} bg-black/95 backdrop-blur-md shadow-lg`}>
        <div className="flex items-center justify-between px-4 md:px-36 py-3 md:py-4">
          <div className="flex items-center">
            <img 
              src="/images/banke-capital-logo.png" 
              alt="Banke Capital" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          <nav className="hidden md:block">
            <div className="flex items-center gap-8 text-white text-sm font-light">
              <Link to="/" className={`group relative hover:text-yellow-400 transition-all duration-300 ${isActive("/") ? "text-yellow-400" : ""}`}>
                <span>Home</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
              <Link to="/about" className={`group relative hover:text-yellow-400 transition-all duration-300 ${isActive("/about") ? "text-yellow-400" : ""}`}>
                <span>About Us</span>
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
              <a href="#projects" className="group relative hover:text-yellow-400 transition-all duration-300">
                <span>Exclusive Projects</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#team" className="group relative hover:text-yellow-400 transition-all duration-300">
                <span>Meet Our Team</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="group relative hover:text-yellow-400 transition-all duration-300">
                <span>Contact Us</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </nav>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-yellow-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
};
