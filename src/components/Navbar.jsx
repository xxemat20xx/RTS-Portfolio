import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import { motion as Motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(scrollTop > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    setMobileOpen(false);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <Motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-[9999] bg-[#0a0a0f] border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 hover:scale-105 transition-all duration-300"
        >
          <span className="text-white font-bold">RTS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-violet-500 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden w-8 h-8 flex flex-col justify-center gap-1.5 text-white hover:text-purple-500 transition-all duration-300"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center fixed inset-0 top-[72px] bg-[#0a0a0f]/90 backdrop-blur-xl z-[9998] sm:hidden"
          >
            <div className="px-6 py-10 space-y-6 w-full text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-2xl font-extrabold text-gray-200 hover:text-purple-500 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;