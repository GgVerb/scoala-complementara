import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Target, Lightbulb, Heart, Trophy, Home, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function PentruElevi() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleApplicationClick = () => {
    const subject = "pare interesant";
    const body = "Va transmit mai jos numărul adultului cu care trebuie sa stați de vorba tată /mamă telefon:";
    const email = "ggverb@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Scroll animation effects
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <GraduationCap className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Pentru Elevi
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl font-medium text-primary leading-relaxed">
                Eu nu știu exact ce ai nevoie tu pentru succes și vom afla asta împreună. Am pomenit AUTOdisciplină și AUTOcontrol emoțional. Aici trebuie să vrei tu foarte tare. Dacă nu ești dispus să lupți câte puțin cu tine însuți, caută-ne doar atunci când te simți motivat.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Libertate cu responsabilitate
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nu e ușor, uneori e plăcut. Metoda experiențială înseamnă mai multă libertate și decizie pentru tine. Înseamnă de asemenea responsabilitate și riscuri.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Ești pregătit pentru provocare?
              </h3>
              <p className="text-lg font-medium text-primary">
                Dacă ai înțeles că îți va fi greu, dacă ești hotărât să te antrenezi acum pentru viitor, apasă butonul de mai jos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Gata să începi această aventură?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Alătură-te comunității noastre de elevi curioși și descoperă potențialul tău adevărat într-un mediu care te susține și te provoacă.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-500 text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-10 py-4"
              onClick={handleApplicationClick}
            >
              Aplică acum
            </Button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Ce trebuie să știi
          </h2>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">📍 Experiențe în natură</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Toate activitățile noastre se desfășoară în mediul natural, unde poți experimenta învățarea prin toate simțurile. 
                  Natura devine laboratorul tău de explorare și descoperire. <strong>Aceste experiențe sunt accesibile oricărui tânăr/tânără cu acordul părinților.</strong> 
                  Acestea sunt din ce în ce mai dificile și va trebui să te descurci singur (supravegheat!) din ce în ce mai mult. 
                  Sau poți oricând să spui "Nu mai vreau".
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">💪 Descoperim motivația</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nu vrem să te ferim de momente grele sau de provocări dificile. Vrem să îți arătăm că poți să treci peste orice greutate! 
                  <strong>Când reușești să depășești ceva greu, te simți mult mai puternic și mai încrezător în tine.</strong> 
                  Aceasta este metoda noastră: să îți creștem încrederea prin provocări pe care le poți învinge. 
                  Căutăm copii și adolescenți care vor să folosească această putere în viitor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">🎒 Primul examen</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cel mai important test este când tu organizezi și conduci o expediție de 2 nopți împreună cu 3-5 prieteni sau colegi. 
                  <strong>Trebuie să planifici totul: unde mergeți, cum vă orientați, unde campați, ce mâncați și cum rezolvați problemele care apar.</strong> 
                  Adulții vor fi acolo să vă ajute dacă devine periculos, dar voi sunteți șefii expediei! 
                  Aceasta îți arată că poți avea încredere în tine și comunici eficient cu echipa.
                </p>
              </CardContent>
            </Card>



          </div>
        </div>
      </section>

      {/* Ending Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/20">
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
      </section>


    </div>
  );
}