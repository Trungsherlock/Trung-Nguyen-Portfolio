import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "./Links";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ui/ThemeToggle";
import { useAnimatedLogo } from "../hooks/useAnimatedLogo";
import { LoadingScreen } from "./loading/LoadingScreen";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isDark, setIsDark } = useTheme();
  const { isLogoAnimating, handleLogoClick } = useAnimatedLogo();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#github", label: "GitHub" },
    { href: "#leetcode", label: "Leetcode" },
    { href: "#badges", label: "Badges" },
    // { href: "#blogs", label: "Blogs" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#education", label: "Education" },
  ];

  return (
    <>
      <LoadingScreen isLoading={isLogoAnimating} />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${
                      isScrolled
                        ? "bg-[#141414]/95 backdrop-blur-md shadow-lg"
                        : "bg-gradient-to-b from-black/80 to-transparent"
                    }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-6 max-w-7xl">
          {/* Logo */}
          <div
            className="cursor-pointer group"
            onClick={handleLogoClick}
          >
            <svg
              width="60"
              height="40"
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]"
            >
              {/* Netflix-style text gradient */}
              <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#E50914' }} />
                  <stop offset="100%" style={{ stopColor: '#B20710' }} />
                </linearGradient>

                {/* Shine animation gradient */}
                <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#E50914', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#FF0A16', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#E50914', stopOpacity: 0 }} />
                  <animate
                    attributeName="x1"
                    values="-100%;200%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    values="0%;300%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </linearGradient>
              </defs>

              {/* TN Text - Netflix style */}
              <text
                x="30"
                y="30"
                fontSize="32"
                fontWeight="900"
                textAnchor="middle"
                fill="url(#textGradient)"
                fontFamily="'Bebas Neue', 'Impact', 'Arial Black', sans-serif"
                letterSpacing="2"
                className="transition-all duration-300"
              >
                TN
              </text>

              {/* Shine overlay */}
              <text
                x="30"
                y="30"
                fontSize="32"
                fontWeight="900"
                textAnchor="middle"
                fill="url(#shineGradient)"
                fontFamily="'Bebas Neue', 'Impact', 'Arial Black', sans-serif"
                letterSpacing="2"
                style={{ mixBlendMode: 'screen' }}
              >
                TN
              </text>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center relative">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-netflix-red"
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  />
                )}
              </Link>
            ))}

            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded bg-netflix-dark-gray hover:bg-netflix-gray text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-netflix-black/98 backdrop-blur-md border-t border-netflix-gray">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded text-sm text-center text-white/90 hover:bg-netflix-dark-gray hover:text-white transition-colors ${
                    activeSection === link.href.substring(1) ? 'bg-netflix-dark-gray text-white' : ''
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
