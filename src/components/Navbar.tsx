import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-2xl font-bold text-primary cursor-pointer hover:text-primary-light transition-smooth"
            onClick={() => scrollToSection("home")}
          >
            Svenbyte
          </div>
          
          <div className="hidden md:flex space-x-8">
            {["home", "about", "services", "portfolio", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground hover:text-primary transition-smooth capitalize font-medium"
              >
                {section}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-primary hover:scale-105 transition-bounce shadow-soft"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;