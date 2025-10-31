import { Button } from "@/components/ui/button";
import { Users, Home } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function PentruAdulti() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleContactClick = () => {
    const subject = "aș vrea să aflu mai multe";
    const body = `Numele meu este:
Telefon:`;
    const email = "ggverb@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

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
          
          {/* Welcome Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Pentru Adulți
            </h1>
            <h2 className="text-3xl font-bold text-primary mb-6">Bun venit la Școala Complementară!</h2>
            
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Învățarea prin aventură în siguranță
            </h3>
            <p className="text-xl mb-6 text-primary font-medium">
              La noi, învățarea este o aventură! Căci știm să facem asta în siguranță. Educația experiențială înseamnă ca elevii să învețe făcând lucruri practice și interesante.
            </p>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              Pregătire completă pentru viață
            </h3>
            <p className="text-lg mb-8">
              Aceste activități îi ajută să se pregătească pentru viață într-un mod pe care școala clasică nu îl poate oferi. Elevii vor încerca practic și își vor clădi mai întâi inteligența emoțională și autodisciplina. Pe aceste baze vor deprinde abilități de comunicare, reziliență și adaptare. Atunci când decid să se dedice unei pasiuni, vor avea abilitățile necesare de a învăța și de a munci singuri. Dacă apăsați pe butonul de mai jos:
            </p>

            <div className="text-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-12 py-4"
                onClick={handleContactClick}
              >
                Hai să discutăm
              </Button>
            </div>

            <h3 className="text-2xl font-semibold text-primary mb-4">
              Procesul de înscriere și comunicare
            </h3>
            <p className="text-lg mb-8">
              Veți fi contactați și o să stam de vorbă. Dacă fiul/fiica dvs completează formularul de înscriere (aflat la pagina dedicată elevilor) o să vă sunăm pe dvs mai întâi. Până atunci puteți citi mai departe.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-6">Rolurile adulților în Școala Complementară</h3>
              
              <p className="text-lg mb-6">
                În Școala Complementară, adulții – părinți, profesori și mentori – joacă un rol esențial în crearea unui mediu educațional liber, motivant și adaptat nevoilor fiecărui elev. Nu sunteți doar observatori sau autorități, ci parteneri activi în procesul de învățare. Iată care sunt rolurile pe care le puteți asuma și cum veți interacționa cu elevii:
              </p>

              <h4 className="text-2xl font-bold text-primary mb-4">1. Roluri posibile pentru adulți</h4>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                  <h5 className="text-xl font-semibold text-primary mb-3">Părinți voluntari:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Organizatori de activități:</strong> Propuneți și coordonați activități în funcție de pasiunile și abilitățile voastre – fie că sunt ateliere practice, proiecte creative sau activități în natură.</li>
                    <li><strong>Parteneri în decizii:</strong> Aveți drept de veto în privința activităților la care participă copii dumneavoastră, asigurând că acestea sunt sigure și potrivite.</li>
                    <li><strong>Suport emoțional:</strong> Sprijiniți elevii să-și mențină motivația și îi încurajați să-și asume responsabilități.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                  <h5 className="text-xl font-semibold text-primary mb-3">Profesori:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Facilitatori:</strong> Îndrumați elevii fără a impune soluții, ajutându-i să găsească propriile răspunsuri și să învețe prin experiență.</li>
                    <li><strong>Mentori:</strong> Puneți la dispoziție cunoștințele voastre în domenii specifice, inspirând elevii și oferindu-le un model de colaborare și gândire critică.</li>
                    <li><strong>Feedback constructiv:</strong> Observați și evaluați progresul elevilor, oferindu-le sugestii pentru a se dezvolta mai departe.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                  <h5 className="text-xl font-semibold text-primary mb-3">Mentori:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Surse de inspirație:</strong> Împărtășiți cu elevii experiențele voastre de viață și profesionale, deschizându-le noi perspective.</li>
                    <li><strong>Ghidare personalizată:</strong> Lucrați îndeaproape cu elevii în proiectele lor, ajutându-i să-și descopere pasiunile și să își dezvolte abilitățile.</li>
                    <li><strong>Conectori:</strong> Facilitați accesul elevilor la resurse externe, evenimente sau persoane care îi pot ajuta să crească.</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-primary mb-4">2. Interacțiunea cu elevii</h4>
              
              <p className="text-lg mb-4">
                Elevii sunt cei care conduc procesul educațional, dar sprijinul și ghidarea adulților sunt esențiale. Colaborarea cu elevii este bazată pe respect reciproc, încredere și responsabilitate comună:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Ascultați și încurajați:</strong> Fiecare elev are un cuvânt de spus în activități. Rolul vostru este să îi ascultați, să îi încurajați și să le respectați alegerile.</li>
                  <li><strong>Sprijiniți autonomia:</strong> Elevii decid ritmul, structura și finalitatea proiectelor. Voi sunteți acolo pentru a le oferi suport logistic, emoțional sau intelectual.</li>
                  <li><strong>Facilitați învățarea:</strong> Nu oferiți soluții directe, ci creați contexte în care elevii să învețe prin explorare, experimentare și reflecție.</li>
                </ul>
              </div>

              <h4 className="text-2xl font-bold text-primary mb-4">3. Etapele în implicarea adulților</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                  <div>
                    <h6 className="font-semibold text-primary">Propunerea activităților:</h6>
                    <p className="text-gray-700">Vă puteți implica prin inițierea unor activități în care aveți expertiză sau interes. Acestea vor fi anunțate dar le demarăm doar dacă elevi își exprimă dorința de a participa.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                  <div>
                    <h6 className="font-semibold text-primary">Colaborarea cu elevii:</h6>
                    <p className="text-gray-700">Activitățile sunt adaptate și co-create împreună cu elevii, astfel încât să fie relevante pentru nevoile lor.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                  <div>
                    <h6 className="font-semibold text-primary">Feedback și reflecție:</h6>
                    <p className="text-gray-700">La finalul fiecărei activități, veți participa la sesiuni de reflecție alături de elevi, în care împărtășiți impresii, lecții învățate și sugestii pentru viitor.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-2xl font-bold text-primary mb-4">De ce este important rolul vostru</h4>
                
                <p className="text-lg mb-4">
                  În Școala Complementară, adulții nu sunt doar „ghizi" ai elevilor, ci și modele de învățare continuă. Fiecare activitate, interacțiune sau decizie este o oportunitate de a inspira elevii și de a crea un mediu educațional bazat pe încredere, colaborare și respect.
                </p>
                
                <p className="text-lg font-medium text-primary mb-4">
                  Împreună, contribuim la formarea unor tineri responsabili, motivați și pregătiți pentru provocările vieții. Implicarea voastră face diferența!
                </p>
                
                <p className="text-xl font-bold text-primary text-center">
                  Suntem aici să îi susținem și să învățăm împreună!
                </p>
              </div>
            </div>
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