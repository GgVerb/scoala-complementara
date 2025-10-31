import { useEffect, useState } from "react";
import { Link } from "wouter";
import Footer from "@/components/footer";
import { PageTransition, FadeInWhenVisible, StaggerContainer, StaggerItem } from "@/components/page-transition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Home, Calendar } from "lucide-react";

// Articles available in the blog section (excluding "voluntarii" and "de ce eu") - ordered by publication date (most recent first)
const articles = [
  {
    id: "evolutia-calatoria-timp",
    title: "Evoluția: O Călătorie de 4.6 Kilometri",
    description: "O perspectivă fascinantă asupra timpului profund prin analogii creative care transformă miliardele de ani în distanțe măsurabile.",
    date: "26 septembrie 2025"
  },
  {
    id: "ghidul-educatie-inovatoare",
    title: "Ghidul pentru o Educație Inovatoare",
    description: "Un ghid interactiv pentru părinți și educatori care doresc să exploreze metode alternative de învățământ și să descopere resurse educaționale din România.",
    date: "17 iunie 2025"
  },
  {
    id: "educatie-experientiala",
    title: "Educație experiențială",
    description: "Principiile și metodele educației experiențiale și contribuțiile marilor educatori în acest domeniu.",
    date: "15 iunie 2025"
  },
  {
    id: "natura-ca-profesor",
    title: "Natura ca profesor",
    description: "Cum natura poate deveni cel mai bun profesor și ce învățăm din observarea ecosistemelor naturale.",
    date: "15 iunie 2025"
  },
  {
    id: "abilitati-complementare",
    title: "Abilități complementare",
    description: "Cele 9 abilități esențiale pentru viață pe care sistemul educațional tradițional nu le predă suficient.",
    date: "3 februarie 2025"
  },
  {
    id: "scoala-in-padure",
    title: "Școala în pădure",
    description: "Explorează conceptul de școală în aer liber și beneficiile educației în natură pentru dezvoltarea copiilor.",
    date: "29 ianuarie 2025"
  },
  {
    id: "outward-bound-experimente",
    title: "Outward Bound și alte experimente",
    description: "Istoria și filosofia programelor Outward Bound și alte experimente în educația experiențială.",
    date: "29 ianuarie 2025"
  },
  {
    id: "einstein-problema",
    title: "O variantă a problemei lui Einstein",
    description: "O provocare logică complexă care testează capacitatea de gândire sistematică și deducție.",
    date: "29 ianuarie 2025"
  },
  {
    id: "curriculum-propunere",
    title: "Curriculum - propunere",
    description: "O propunere comprehensivă pentru un curriculum educațional alternativ bazat pe experiență și dezvoltare holistică.",
    date: "28 ianuarie 2025"
  },
  {
    id: "scolile-democratice",
    title: "Școlile democratice",
    description: "Descoperă cum funcționează școlile democratice și ce le face diferite de sistemul educațional tradițional.",
    date: "17 ianuarie 2025"
  }
];



export default function Articole() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle URL hash scrolling on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navHeight = 80;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            const targetPosition = elementTop - navHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
            });
          }
        }, 200);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => window.removeEventListener('hashchange', handleHashScroll);
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
      {/* Custom header with "înapoi acasa" link */}
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
      
      <PageTransition>
        <main id="articole-top" className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Articole și info utile
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explorează colecția noastră de articole despre educație alternativă, metode inovatoare de învățământ și dezvoltarea personală prin experiențe în natură.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Articles list */}
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <StaggerItem key={article.id}>
                    <Link href={`/articol/${article.id}`}>
                      <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-gray-200 hover:border-primary/30">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground mt-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            {article.date}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 line-clamp-3">
                            {article.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Back to home link */}
            <FadeInWhenVisible>
              <div className="text-center mt-16">
                <Link href="/">
                  <button className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-lg font-medium">
                    <Home className="h-4 w-4 mr-2" />
                    Înapoi acasă
                  </button>
                </Link>
              </div>
            </FadeInWhenVisible>
            
          </div>
        </main>
      </PageTransition>
      
      <Footer />
    </div>
  );
}