import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Sprout } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ScaleOnHover } from "./page-transition";

export default function Navigation() {
  // Immediately return null for all article pages
  const currentPath = window.location.pathname;
  if (currentPath.startsWith('/articol/')) {
    return null;
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
    return (
      <>
        <ScaleOnHover>
          <Link href="/despre-noi">
            <motion.button 
              onClick={isMobile ? () => setIsSheetOpen(false) : undefined}
              className="nav-button transition-colors"
              whileHover={{ color: "rgb(34 197 94)" }}
              transition={{ duration: 0.2 }}
            >
              oameni și proiect
            </motion.button>
          </Link>
        </ScaleOnHover>
      </>
    );
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 nav-blur border-b border-gray-100 bg-white/95 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Sprout className="text-white text-lg" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-primary">Școala Complementară</h1>
              <p className="text-xs text-gray-600 font-medium">Aventură • Comunicare • Autonomie</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
          
          {/* Mobile menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Meniu de navigare</SheetTitle>
              <SheetDescription>
                Selectați o secțiune pentru a naviga prin conținutul site-ului
              </SheetDescription>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}