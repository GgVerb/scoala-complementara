import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Home } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function PentruInstitutii() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleIconClick = (e: React.MouseEvent) => {
    const icon = e.currentTarget.querySelector('.animate-icon');
    if (icon) {
      icon.classList.add('animate-bounce');
      setTimeout(() => icon.classList.remove('animate-bounce'), 600);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${
          headerVisible ? '' : 'hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <button 
                className="flex items-center space-x-2 text-primary hover:text-secondary transition-all duration-300 font-medium hover:scale-105"
                onClick={handleIconClick}
              >
                <Home className="h-5 w-5 animate-icon transition-transform duration-200" />
                <span>Înapoi acasă</span>
              </button>
            </Link>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Building className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Pentru Instituții
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-primary mb-6">Colaborare cu Școala Complementară</h2>
              
              <p className="text-lg mb-6">
                <strong>Stimați parteneri,</strong>
              </p>

              <p className="text-lg mb-8">
                Școala Complementară este un proiect educațional inovator care își propune să dezvolte abilități esențiale pentru viață printr-un model bazat pe învățare experiențială, colaborare și respect reciproc. Suntem deschiși să colaborăm cu organizații, școli și alte instituții pentru a crea oportunități educaționale semnificative.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-6">Cum putem colabora:</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold text-primary mb-3">Proiecte comune:</h4>
                  <p>Organizăm prezentări, ateliere, drumeții, tabere și alte activități care implică tineri și adulți în învățare activă.</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-semibold text-primary mb-3">Resurse educaționale:</h4>
                  <p>Suntem interesați să împărtășim materiale, metodologii și experiențe pentru a sprijini educația alternativă.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-semibold text-primary mb-3">Evenimente și schimburi de experiență:</h4>
                  <p>Participăm la conferințe, întâlniri sau alte evenimente educaționale care promovează abordările inovatoare.</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-xl font-semibold text-primary mb-3">Sprijin pentru comunitate:</h4>
                  <p>Dezvoltăm activități ecologice, sociale sau culturale care pot aduce un impact pozitiv asupra comunității.</p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg border-l-4 border-teal-500">
                  <h4 className="text-xl font-semibold text-primary mb-3">Program de mentorat:</h4>
                  <p>Invităm specialiști din diverse domenii să colaboreze cu elevii noștri pentru a le oferi îndrumare personalizată.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/20 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Să colaborăm pentru o educație mai bună
                </h3>
                <p className="text-lg mb-6">
                  Credem că educația este mai puternică atunci când este sprijinită de o comunitate diversă. Dacă sunteți interesați de o colaborare cu inițiativa Școala Complementară, vă rugăm să ne contactați. Împreună putem transforma învățarea într-o experiență semnificativă pentru toți cei implicați.
                </p>

                <div className="text-center mb-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-12 py-4"
                    onClick={() => {
                      const subject = "Colaborare instituțională cu Școala Complementară";
                      const body = `Nume:
Instituția:
Telefonul meu:`;
                      const email = "ggverb@gmail.com";
                      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = mailtoLink;
                    }}
                  >
                    Contactează-ne pentru colaborare
                  </Button>
                </div>

                <div className="text-right">
                  <p className="text-lg font-medium text-primary">
                    Cu respect,<br />
                    <strong>Echipa Școlii Complementare</strong>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    P.S. Alte detalii despre proiectul <Link href="/despre-noi" className="text-primary hover:text-secondary font-medium underline">Școala Complementară aici</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}