import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";
import { useNavbarScroll } from "../../hooks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll(50);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 bg-black/80 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none" style={{ transform: "translate3d(0, 0, 0)" }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo - Hide when scrolled on desktop */}
          <div className={`flex items-center gap-4 transition-all duration-300 ${isScrolled ? "md:opacity-0 md:pointer-events-none" : "opacity-100"}`}>
            <img src="/images/asset/logor.png" alt="Logo" className="w-10 h-8 text-[#4BCFEC]" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-linear-to-r from-[#4BCFEC] via-[#3BB5D6] to-[#2A9CC0] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
              aria-label="home"
            >
              Portofolio
            </button>
          </div>

          {/* Desktop Navigation - Pill design when scrolled, normal when at top */}
          <nav className={`hidden md:flex items-center gap-1 transition-all duration-300 ${isScrolled ? "bg-white/5 backdrop-blur-xl rounded-full px-2 py-1.5 border border-white/10" : ""}`}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? `px-5 py-2 rounded-full text-sm font-medium ${activeSection === link.id ? "bg-white/10 text-white" : "text-white/75 hover:text-white hover:bg-white/5"}`
                    : `px-4 text-base font-medium ${activeSection === link.id ? "text-white" : "text-white/75 hover:text-white"}`
                }`}
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* CTA BUTTON - Hide when scrolled on desktop */}
          <div className={`hidden md:flex items-center gap-2 transition-all duration-300 ${isScrolled ? "md:opacity-0 md:pointer-events-none" : "opacity-100"}`}>
            <button onClick={() => handleNavClick("contact")} className="px-4 py-2 bg-white text-[#212121] font-medium text-base border border-white hover:bg-white/90 transition-all duration-300 rounded-[17px]">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="menu" className="md:hidden p-4 text-white hover:text-white/80 transition-colors " aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="w-6 h-6 " /> : <Menu className="w-6 h-6 " />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10  px-5 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"}`}
            >
              {link.title}
            </button>
          ))}
          <button onClick={() => handleNavClick("contact")} className="w-full px-7 py-3.5  bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
