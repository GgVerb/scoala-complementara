import { Sprout } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Brand Section */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center">
                <Sprout className="text-white text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Școala Complementară</h3>
                <p className="text-sm opacity-75">Aventură • Comunicare • Autonomie</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ne educăm prin experiențe în natură și dezvoltăm abilități esențiale pentru viață.
            </p>
          </div>
        </div>
        
        <div className="border-t border-secondary/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Școala Complementară. Toate drepturile rezervate.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0 flex items-center gap-4">
            <span>
              Un produs{" "}
              <a 
                href="/portfolio/index.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-testid="link-ggverb"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/portfolio/index.html', '_blank');
                }}
              >
                <span className="text-accent hover:text-accent/80 cursor-pointer transition-colors duration-200 underline decoration-accent/50 hover:decoration-accent">
                  GgVerb
                </span>
              </a>
            </span>
            <a 
              href="/attached_assets/Gheorghe_Lungu_Resume.pdf" 
              download="Gheorghe_Lungu_CV.pdf"
              className="px-4 py-1 bg-accent/20 border border-accent/50 text-accent font-bold rounded-md hover:bg-accent/30 transition-all text-xs"
            >
              DOWNLOAD CV (PDF)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
