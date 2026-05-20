import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Compass, Users, ChevronDown, Sprout } from "lucide-react";
import forestBackground from "@assets/file-VaTWYi7N17KnQAKqVwBYTq_1749852875650.webp";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/page-transition";
import { OpenLetterModal, OpenLetterButton } from "@/components/open-letter-modal";

export default function HeroSection() {
  const quotes = [
    {
      text: "Natura nu greșește niciodată: ea doar îți arată că ai înțeles greșit.",
      author: "Constantin Noica"
    },
    {
      text: "Natura nu e un loc de vizitat. E acasă.",
      author: "Gary Snyder"
    },
    {
      text: "Magia nu a dispărut niciodată. Pur și simplu am uitat cum o vedem.",
      author: "Gheorghe Lungu — ranger, Parcul Național Domogled-Valea Cernei"
    }
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsVisible(true);
      }, 600);
    }, 7000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed" 
          style={{ backgroundImage: `url(${forestBackground})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-4 h-4 bg-secondary/40 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}} />

        {/* Open Letter floating button */}
        <OpenLetterButton onClick={() => setIsLetterOpen(true)} />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="mb-4">
              <div className="rotating-banners">
                <div className="banner active">
                  <span className="banner-word" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>provocare</span>
                  <span className="banner-separator" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>-</span>
                  <span className="banner-word" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>aventură</span>
                </div>
                <div className="banner">
                  <span className="banner-word" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>povești</span>
                  <span className="banner-separator" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>-</span>
                  <span className="banner-word" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>comunicare</span>
                </div>
                <div className="banner">
                  <span className="banner-word" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>încredere</span>
                  <span className="banner-separator" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>-</span>
                  <span className="banner-word" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>autonomie</span>
                </div>
              </div>
            </div>

            {/* Tagline — ancora ontologică */}
            <p className="text-base sm:text-lg text-gray-200 mb-6 tracking-widest uppercase font-light" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.9)', letterSpacing: '0.15em'}}>
              Carpații — spațiu de trecere de la privitor la participant
            </p>
            
            <div className="text-2xl sm:text-3xl mb-8 text-gray-100 font-bold leading-relaxed min-h-[120px] flex flex-col justify-center">
              <p className={`italic transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
                "{quotes[currentQuoteIndex].text}"
              </p>
              <p className={`text-base text-accent font-semibold mt-3 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                — {quotes[currentQuoteIndex].author}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("despre")}
                size="lg"
                className="bg-primary/90 backdrop-blur-sm border-2 border-primary text-white hover:bg-accent hover:border-accent transition-all duration-300 text-lg px-10 py-4 w-64 animate-vibrate font-bold shadow-lg hover:shadow-xl"
                style={{animationDelay: '2s'}}
              >
                <Compass className="mr-2 h-5 w-5" />
                Descoperă aventura
              </Button>
              <Button
                onClick={() => scrollToSection("pentru-cine")}
                size="lg"
                className="bg-transparent backdrop-blur-sm border-2 border-orange-500 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 text-lg px-10 py-4 w-64 animate-vibrate font-bold shadow-lg hover:shadow-xl"
                style={{animationDelay: '2.3s'}}
              >
                <Users className="mr-2 h-5 w-5" />
                Pentru cine
              </Button>
              <Button
                onClick={() => scrollToSection("blog")}
                size="lg"
                className="bg-accent/90 backdrop-blur-sm border-2 border-accent text-white hover:bg-primary hover:border-primary transition-all duration-300 text-lg px-10 py-4 w-64 animate-vibrate font-bold shadow-lg hover:shadow-xl"
                style={{animationDelay: '2.6s'}}
              >
                <Sprout className="mr-2 h-5 w-5" />
                Citește articolele
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white text-2xl opacity-70" />
        </div>
      </section>

      {/* Open Letter Modal */}
      <OpenLetterModal isOpen={isLetterOpen} onClose={() => setIsLetterOpen(false)} />
    </>
  );
}
