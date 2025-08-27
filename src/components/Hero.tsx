import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 197, 253, 0.8)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Svenbyte{" "}
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Innovations
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in animation-delay-300 opacity-90">
          Innovating Tomorrow's Solutions Today
        </p>
        
        <p className="text-lg md:text-xl mb-10 animate-fade-in animation-delay-500 max-w-2xl mx-auto opacity-80">
          We specialize in cutting-edge software development, cloud solutions, and digital transformation services that drive your business forward.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-700">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-bounce shadow-large font-semibold px-8 py-4"
          >
            Get in Touch
          </Button>
          <Button
            onClick={() => scrollToSection("services")}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 hover:scale-105 transition-bounce font-semibold px-8 py-4"
          >
            Our Services
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;