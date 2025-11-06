import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function DespreNoi() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fondatorImages = [
    "20240802165449_IMG_0024_1_1751308595756_",
    "20240802181140_IMG_0092_1_1751308595731_",
    "20240802181210_IMG_0098_1751305947271_jp"
  ];
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === fondatorImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [fondatorImages.length]);

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
                <BookOpen className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Despre noi și acest proiect
            </h1>
            
            {/* Founders Photo Gallery */}
            <div className="mb-12">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                <picture>
                  <source
                    media="(min-width: 640px)"
                    srcSet={`/images/founders/${fondatorImages[currentImageIndex]}_800.webp`}
                    type="image/webp"
                  />
                  <img
                    src={`/images/founders/${fondatorImages[currentImageIndex]}_500.webp`}
                    alt={`Fondator ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <p className="text-sm text-gray-600 mt-4">Fondatorii proiectului</p>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8 text-primary font-medium">
              Suntem un grup de voluntari dedicați, ne interesează crearea un mediu sănătos, educativ și sigur, dedicat adolescenților. De-a lungul timpului, am organizat două tabere de vară și numeroase drumeții, iar acum lucrăm să extindem activitățile cu experiențe valoroase pentru tineri. În viitorul apropiat, pregătim mici expediții, ieșiri tematice și sesiuni interactive de comunicare. În 2025 începem să lucrăm metodic. Ne aflăm la primii pași ai unui proces continuu de dezvoltare.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Viziune</h2>
              <p className="text-lg">
                În următorii 10 ani, ne propunem să avem cel puțin 50 de elevi care urmează un program personalizat de dezvoltare a aptitudinilor de viață. Vom construi o infrastructură solidă și vom colabora cu oameni resursă, devenind o alternativă viabilă la învățământul clasic. Reputația câștigată ne va asigura sprijinul comunității.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Misiunea Școlii Complementare</h2>
              <p className="text-lg">
                Misiunea noastră este să oferim tinerilor un mediu educațional alternativ, bazat pe învățare experiențială, autonomie și colaborare, care să le dezvolte abilități practice, sociale și emoționale esențiale pentru viață. Prin conectarea cu natura, prin implicarea directă în proiecte și prin sprijinul unei comunități diverse, ne propunem să formăm indivizi responsabili, motivați și capabili să-și atingă potențialul.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-orange-100 rounded-lg p-8 border-l-4 border-accent mb-12">
              <h3 className="text-2xl font-bold text-primary mb-4">Scopul final - autonomia</h3>
              <p className="text-lg font-medium text-primary">
                Tânărul/tânăra știe că are resurse pentru provocări și poate învăța singur(ă) orice.
              </p>
            </div>

            {/* Article Links Section */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
              <Link href="/articol/voluntarii">
                <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer max-w-md">
                  <h3 className="text-lg font-bold text-center mb-2">VOLUNTARII</h3>
                  <p className="text-sm text-center text-white/90">fără de care nu ar fi fost nimic</p>
                </div>
              </Link>
              
              <Link href="/articol/de-ce-eu">
                <div className="bg-gradient-to-r from-accent to-orange-500 text-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer max-w-md">
                  <h3 className="text-lg font-bold text-center mb-2">Lungu Gheorghe</h3>
                  <p className="text-sm text-center text-white/90">răspunde la întrebarea "De ce eu?"</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-primary mb-6">Valorile Școlii Complementare</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Respect:</h4>
                  <p>Pentru încercările tinerilor de a-și găsi drumul în viață și respect pentru implicarea si eforturile părinților. Procesul educațional este centrat pe elev, cu acordul și participarea părinților.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Autonomia elevilor:</h4>
                  <p>Credem în puterea tinerilor de a-și conduce propriul proces de învățare. Ei sunt principalii actori ai dezvoltării lor. Încurajând și hrănind curiozitatea învățarea devine naturală.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Învățarea prin experiență:</h4>
                  <p>Considerăm că lecțiile cele mai valoroase se învață prin explorare, experimentare și reflecție.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Comunicarea:</h4>
                  <p>Pentru a obține un mediu bazat pe respect, cooperare și susținere între participanți. Cheia succesului social stă în abilitatea de a comunica.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Discernământ:</h4>
                  <p>Gândirea critică este doar o etapă; scopul este să învățăm să luăm decizii asumate și responsabile. Fiecare este responsabil pentru alegerile, acțiunile și contribuția sa la comunitate.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Feedback:</h4>
                  <p>Învățăm din greșeli și progresăm prin comunicare deschisă și evaluare continuă.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-primary mb-6">Principii</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Primum non nocere:</h4>
                  <p>În primul rând, să nu faci rău: Adaptat la educația alternativă, acest principiu subliniază importanța protejării integrității emoționale, intelectuale și morale a elevului. Fiecare intervenție educațională este evaluată pentru a sprijini. Atmosfera creată trebuie să fie una de siguranță, libertate, încurajare și sprijin.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Elevii decid:</h4>
                  <p>Proiectele pot fi propuse de părinți sau mentori, însă decizia, ritmul și finalul aparțin elevului. Ne asigurăm că tinerii au rolul principal în procesul de învățare. Orice activitate sau proiect începe doar atunci când elevii își exprimă dorința clară de a participa.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Natura este sala noastră de clasă:</h4>
                  <p>De la drumeții și tabere la expediții mai complexe, natura este locul în care învățarea prinde viață și orice lecție se află sub ochii noștri.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Reflectăm și ajustăm:</h4>
                  <p>După fiecare activitate, reflectăm împreună – elevi și/sau adulți – pentru a îmbunătăți constant procesul de învățare.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Participarea activă:</h4>
                  <p>Elevii și adulții contribuie împreună la decizii și organizare, asigurând un mediu bazat pe implicare egală.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Comunitatea sprijină educația:</h4>
                  <p>Implicarea ONG-urilor, instituțiilor și a altor parteneri aduce resurse și oportunități valoroase.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-secondary">
                <p className="text-lg font-medium text-gray-700 italic">
                  Toate cele spuse mai sus sunt o schiță a unei temelii.
                </p>
                <p className="mt-2">
                  Urmează revizuiri după feedback-ul participanților și pe baza experiențelor acumulate, pentru a asigura un mediu educațional sănătos și eficient.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-6">Angajamentul nostru</h2>
              <div className="space-y-4 text-lg">
                <p>
                  În Școala Complementară, fiecare tânăr este tratat cu respect și sprijinit să își urmeze propriul drum. Construim o comunitate bazată pe curiozitate, colaborare și discernământ, în care fiecare participant are un rol activ și semnificativ.
                </p>
                <p>
                  Credem că educația este mai mult decât o simplă transmitere de cunoștințe – este o experiență care transformă vieți și deschide uși către noi posibilități. Prin valorile și principiile noastre, ne asumăm să fim un partener de încredere în această călătorie a descoperirii și învățării.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}