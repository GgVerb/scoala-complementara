import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, BookOpen, Home, Users } from "lucide-react";
import { Link, useParams } from "wouter";
import { useEffect, useState } from "react";
import ArticleContent from "@/components/article-content";
import Footer from "@/components/footer";

export default function Articol() {
  const params = useParams();
  const articleId = params.id;
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

  const articles = {
    "autoevaluare-spirituala": {
      date: "8 ianuarie 2026",
      title: "Testează-ți sănătatea spirituală",
    },
    "ghid-educatie-experientiala-sintetizat": {
      date: "23 decembrie 2025",
      title: "Educația Experiențială: Ghid Sintetizat",
    },
    "voluntarii": {
      date: "28 iunie 2025",
      title: "Voluntarii",
    },
    "ghidul-educatie-inovatoare": {
      date: "17 iunie 2025",
      title: "Ghidul pentru o Educație Inovatoare",
    },
    "scoala-in-padure": {
      date: "29 ianuarie 2025",
      title: "Școala în pădure",
    },
    "scolile-democratice": {
      date: "17 ianuarie 2025", 
      title: "Școlile democratice",
    },
    "outward-bound-experimente": {
      date: "29 ianuarie 2025",
      title: "Outward Bound și alte experimente",
    },
    "educatie-experientiala": {
      date: "15 iunie 2025",
      title: "Educație experiențială",
    },
    "natura-ca-profesor": {
      date: "15 iunie 2025",
      title: "Natura ca profesor",
    },
    "abilitati-complementare": {
      date: "3 februarie 2025",
      title: "Abilități complementare",
    },
    "einstein-problema": {
      date: "29 ianuarie 2025",
      title: "O variantă a problemei lui Einstein",
    },
    "curriculum-propunere": {
      date: "28 ianuarie 2025",
      title: "Curriculum - propunere",
    },
    "de-ce-eu": {
      date: "25 ianuarie 2025",
      title: "De ce eu?",
    },
    "evolutia-calatoria-timp": {
      date: "26 septembrie 2025",
      title: "Evoluția: O Călătorie de 4.6 Kilometri",
    }
  };

  const article = articleId ? articles[articleId as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Articol negăsit</h1>
          <Link href="/despre-noi">
            <Button>Proiect și echipa</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Floating Header */}
      <nav 
        className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${
          headerVisible ? '' : 'hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Button 
                variant="outline" 
                className="flex items-center space-x-2 text-primary hover:text-secondary transition-all duration-300 font-medium border-primary/20 hover:border-primary/40 hover:scale-105"
                onClick={handleIconClick}
              >
                <Home className="h-4 w-4 animate-icon transition-transform duration-200" />
                <span>Înapoi acasă</span>
              </Button>
            </Link>
            {(articleId === "voluntarii" || articleId === "de-ce-eu") ? (
              <Link href="/despre-noi">
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-all duration-300 font-medium border-primary/20 hover:border-primary/40 hover:scale-105"
                  onClick={handleIconClick}
                >
                  <Users className="h-4 w-4 animate-icon transition-transform duration-200" />
                  <span>Echipa și proiectul</span>
                </Button>
              </Link>
            ) : (
              <Link href="/articole">
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-all duration-300 font-medium border-primary/20 hover:border-primary/40 hover:scale-105"
                  onClick={handleIconClick}
                >
                  <BookOpen className="h-4 w-4 animate-icon transition-transform duration-200" />
                  <span>Toate articolele</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-24 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {article.date}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              {article.title}
            </h1>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {articleId && <ArticleContent articleId={articleId} />}
          </div>

          {/* Article Navigation */}
          {articleId && ["ghidul-educatie-inovatoare", "scoala-in-padure", "scolile-democratice", "outward-bound-experimente", "educatie-experientiala", "natura-ca-profesor", "abilitati-complementare", "einstein-problema", "curriculum-propunere"].includes(articleId) && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              {/* Previous/Next navigation */}
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  {/* Previous article */}
                  {articleId === "scoala-in-padure" && (
                    <Link href="/articol/ghidul-educatie-inovatoare">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">Ghidul pentru o Educație Inovatoare</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  {articleId === "scolile-democratice" && (
                    <Link href="/articol/scoala-in-padure">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">Școala în pădure</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  {articleId === "outward-bound-experimente" && (
                    <Link href="/articol/scolile-democratice">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">Școlile democratice</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  {articleId === "educatie-experientiala" && (
                    <Link href="/articol/outward-bound-experimente">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">Outward Bound și alte experimente</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  {articleId === "natura-ca-profesor" && (
                    <Link href="/articol/educatie-experientiala">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">Educație experiențială</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  {articleId === "abilitati-complementare" && (
                    <Link href="/articol/natura-ca-profesor">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">Natura ca profesor</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  {articleId === "einstein-problema" && (
                    <Link href="/articol/abilitati-complementare">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">Abilități complementare</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  {articleId === "curriculum-propunere" && (
                    <Link href="/articol/einstein-problema">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500">Articolul precedent</div>
                          <div className="font-medium">O variantă a problemei lui Einstein</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>
                
                <div className="flex-1 text-right">
                  {/* Next article */}
                  {articleId === "ghidul-educatie-inovatoare" && (
                    <Link href="/articol/scoala-in-padure">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">Școala în pădure</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                  {articleId === "scoala-in-padure" && (
                    <Link href="/articol/scolile-democratice">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">Școlile democratice</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                  {articleId === "scolile-democratice" && (
                    <Link href="/articol/outward-bound-experimente">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">Outward Bound și alte experimente</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                  {articleId === "outward-bound-experimente" && (
                    <Link href="/articol/educatie-experientiala">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">Educație experiențială</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                  {articleId === "educatie-experientiala" && (
                    <Link href="/articol/natura-ca-profesor">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">Natura ca profesor</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                  {articleId === "natura-ca-profesor" && (
                    <Link href="/articol/abilitati-complementare">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">Abilități complementare</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                  {articleId === "abilitati-complementare" && (
                    <Link href="/articol/einstein-problema">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">O variantă a problemei lui Einstein</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                  {articleId === "einstein-problema" && (
                    <Link href="/articol/curriculum-propunere">
                      <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Articolul următor</div>
                          <div className="font-medium">Curriculum - propunere</div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </article>
      <Footer />
    </div>
  );
}