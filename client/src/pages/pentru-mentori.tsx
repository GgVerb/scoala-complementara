import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Home } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function PentruMentori() {
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
                <Users className="text-white text-sm" />
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
              Pentru Mentori
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Ce înseamnă să fi mentor
              </h2>
              <p className="text-lg mb-6">
                Părinții implicați în Școala Complementară sunt mentori pentru toți tinerii cu care interacționează. Profesorii de-asemenea. Tot mentori îi numim pe cei care sunt de acord să ofere expertiză în anumite domenii și/sau meserii. Toți sunt voluntari pentru că investesc timp și efort în generația viitoare. Așadar,
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6">Dragi mentori voluntari</h2>
              
              <p className="text-lg mb-8">
                Vă invităm să faceți parte dintr-un proiect educațional care își propune să schimbe modul în care tinerii învață, colaborează și cresc – Școala Complementară. Acesta este un spațiu dedicat învățării experiențiale, în care elevii și adulții lucrează împreună pentru a dezvolta abilități esențiale pentru viață, într-un mod liber și personalizat.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-6">Rolul vostru în Școala Complementară</h3>

              <p className="text-lg mb-6">
                Ca mentori, veți avea o contribuție semnificativă la formarea elevilor, oferindu-le ghidare, inspirație și sprijin. Rolurile voastre includ:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <strong>Ghidare și inspirație:</strong> Împărtășiți din experiențele voastre de viață și profesionale, deschizându-le elevilor noi perspective și orizonturi.
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <strong>Organizarea de activități:</strong> Propuneți proiecte, ateliere, drumeții sau alte activități care să stimuleze curiozitatea și dezvoltarea personală a elevilor.
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <strong>Sprijin emoțional:</strong> Ajutați elevii să își gestioneze emoțiile, să își păstreze motivația și să aibă încredere în propriile forțe.
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <strong>Feedback constructiv:</strong> Oferiți observații și sugestii care să îi ajute să crească și să învețe din experiențe.
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-6">Cum veți colabora cu elevii</h3>

              <p className="text-lg mb-8">
                În Școala Complementară, elevii sunt cei care conduc procesul educațional, iar voi sunteți partenerii lor de învățare. Veți lucra împreună pentru a dezvolta activitățile, iar elevii vor avea libertatea de a decide detaliile și ritmul fiecărui proiect. Rolul vostru este să le oferiți sprijin, fără a le impune soluții, și să îi ajutați să descopere răspunsurile pe cont propriu.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-6">Ce ne dorim de la voi</h3>

              <p className="text-lg mb-8">
                Căutăm oameni pasionați, deschiși și implicați, dornici să contribuie la dezvoltarea unei noi generații. Nu este nevoie să fiți experți în educație – experiențele voastre de viață, abilitățile practice și dorința de a ajuta sunt cele mai importante.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-6">De ce să vă implicați</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-teal-50 p-4 rounded-lg">
                  • Veți avea ocazia să lucrați direct cu tineri motivați, sprijinindu-i să își dezvolte abilitățile și să își atingă potențialul.
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  • Veți face parte dintr-o comunitate diversă, în care ideile și contribuțiile voastre sunt apreciate.
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  • Veți experimenta satisfacția de a contribui la un proiect educațional unic, care are un impact real asupra vieților celor implicați.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-6">Rolurile mentorilor în Școala Complementară</h3>

              <p className="text-lg mb-6">
                Școala Complementară este un spațiu educațional alternativ, unde profesorii, voluntarii și mentorii au un rol esențial în crearea unui mediu de învățare liber, personalizat și colaborativ. Iată cum vă puteți implica și contribui:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">Profesori</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Facilitatori ai învățării:</strong> Ghidează elevii în descoperirea soluțiilor</li>
                    <li><strong>Sprijin academic:</strong> Oferă expertiză în domeniul lor</li>
                    <li><strong>Modele de învățare:</strong> Demonstrează învățarea continuă</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">Voluntari</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Organizatori de activități:</strong> Propun ateliere și proiecte</li>
                    <li><strong>Suport logistic:</strong> Se implică în organizarea evenimentelor</li>
                    <li><strong>Sprijin moral:</strong> Încurajează elevii</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">Mentori</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Inspirație personală:</strong> Împărtășesc experiențe de viață</li>
                    <li><strong>Ghidare personalizată:</strong> Dezvoltă abilități specifice</li>
                    <li><strong>Conectori către resurse:</strong> Creează oportunități</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-bold text-primary mb-4">Interacțiunea cu elevii</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong>Parteneriat activ:</strong> Elevii conduc procesul educațional, dar sprijinul adulților este esențial.
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong>Feedback constant:</strong> Reflectați alături de elevi asupra progresului lor.
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong>Respect pentru autonomie:</strong> Ajutați elevii să-și asume responsabilitatea deciziilor.
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                <h4 className="text-lg font-bold text-primary mb-2">Elevii decid</h4>
                <p>Elevii joacă un rol central în toate activitățile. Ei decid ritmul, detaliile și modul de desfășurare al proiectelor, dezvoltându-și astfel autonomia și spiritul de responsabilitate.</p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-8">
                <h4 className="text-lg font-bold text-primary mb-2">Gestionarea situațiilor dificile</h4>
                <p>Pentru a preveni și rezolva conflictele sau alte situații neplăcute, vom avea o comisie de etică. Aceasta contribuie la menținerea unui mediu sigur și armonios pentru toți participanții.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/20 mb-8">
              <p className="text-lg mb-6">
                Dacă sunteți pregătiți să vă alăturați acestei aventuri educaționale, vă invităm să ne contactați. Împreună, putem crea un mediu în care învățarea devine o experiență autentică, plină de sens și bucurie.
              </p>

              <p className="text-lg mb-6">
                Credem că educația este mai puternică atunci când este sprijinită de o comunitate diversă. Împreună putem transforma învățarea într-o experiență semnificativă pentru toți cei implicați.
              </p>

              <div className="text-center mb-6">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-12 py-4"
                  onClick={() => {
                    const subject = "putem discuta despre asta";
                    const body = "iată nr meu de telefon:";
                    const email = "ggverb@gmail.com";
                    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.location.href = mailtoLink;
                  }}
                >
                  Putem discuta despre asta
                </Button>
              </div>

              <div className="text-right">
                <p className="text-lg font-medium text-primary">
                  Cu entuziasm și recunoștință,<br />
                  <strong>Echipa Școlii Complementare</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  P.S. Alte detalii despre proiectul <Link href="/despre-noi" className="text-primary hover:text-secondary font-medium underline">Școala Complementară aici</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}