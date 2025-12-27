import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // -- Scroll Detection --
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -- Navigation Logic --
  const handleNavigation = useCallback((section) => {
    setIsMobileMenuOpen(false);
    // Remove focus from element to close dropdown on click
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [navigate]);

  const handleHomeClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // -- Mobile Menu Scroll Lock & Outside Click --
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClickOutside = (e) => {
      const target = e.target;
      if (!target.closest('.mobile-menu-panel') && !target.closest('[aria-controls="mobile-menu"]')) {
        setIsMobileMenuOpen(false);
      }
    };

    // Save current scroll position and body styles so we can restore them
    const scrollY = window.scrollY || window.pageYOffset;
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;

    // Lock scrolling by fixing the body and preserving scroll position
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      // Restore body styles
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;

      // Restore the original scroll position
      window.scrollTo(0, scrollY);

      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
    { id: 'courses', label: 'Courses' },
  ], []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b
    ${isScrolled 
      ? "py-3 bg-primary/60 backdrop-blur-xl border-white/10 shadow-lg" 
      : "py-5 bg-transparent border-transparent"
    }
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* --- Logo --- */}
        <div
          onClick={handleHomeClick}
          className="relative group cursor-pointer flex items-center gap-1 z-50"
          aria-label="Home"
        >
          <div className="flex text-2xl lg:text-3xl font-bold tracking-tighter">
            <span className="text-secondary transition-transform duration-300 group-hover:-translate-y-0.5">M</span>
            <span className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 delay-75">C</span>
            <span className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 delay-100">B</span>
            <span className="text-tertiary transition-transform duration-300 group-hover:-translate-y-0.5 delay-150">P</span>
          </div>
        </div>

        {/* --- Desktop Hover Navbar --- */}
        <nav className="flex items-center">
          
          {/* If not on home, show a quick 'Home' link outside the menu */}
          {location.pathname !== "/" && (
            <button 
              onClick={handleHomeClick}
              className="mr-6 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Home
            </button>
          )}

          {/* HOVER MENU CONTAINER */}
          <div className="relative group">
            {/* Trigger Button */}
            <button 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 min-w-[180px] justify-between"
            >
              <span className="text-sm font-medium text-white">Menu</span>
              <ChevronDown size={16} className="text-white/60 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Invisible Bridge (Prevents menu closing when moving mouse down) */}
            <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

            {/* Dropdown Content */}
            <div className="absolute top-[calc(100%+8px)] right-0 w-56 p-2 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 ease-out origin-top-right">
              
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 group/item text-left"
                  >
                    {item.label}
                    {/* Subtle arrow that appears on item hover */}
                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-secondary" />
                  </button>
                ))}
              </div>

              {/* Decorative bottom edge */}
              <div className="mt-2 pt-2 border-t border-white/5 px-2">
                <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">Navigation</p>
              </div>
            </div>
          </div>
        </nav>
      </div>

     
    </header>
  );
}

export default Header;