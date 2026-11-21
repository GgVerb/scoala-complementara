import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Home, Users } from "lucide-react";
import { Link, useParams } from "wouter";
import { useEffect, useState } from "react";
import ArticleContent from "@/components/article-content";
import ArticleNavigation from "@/components/article-navigation";
import Footer from "@/components/footer";
import NotFound from "@/pages/not-found";
import { getArticle, formatDate } from "@/lib/articles";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Articol() {
  const params = useParams();
  const articleId = params.id;
  const article = getArticle(articleId);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  usePageMeta({
    title: article?.title ?? "Articol negăsit",
    description: article?.description,
    path: `/articol/${articleId ?? ""}`,
    noindex: !article,
    type: "article",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeaderVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleIconClick = (e: React.MouseEvent) => {
    const icon = e.currentTarget.querySelector(".animate-icon");
    if (icon) {
      icon.classList.add("animate-bounce");
      setTimeout(() => icon.classList.remove("animate-bounce"), 600);
    }
  };

  if (!article || !articleId) {
    return <NotFound />;
  }

  const backToTeam = article.backTo === "despre-noi";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Floating Header */}
      <nav
        className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${
          headerVisible ? "" : "hidden"
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
            <Link href={backToTeam ? "/despre-noi" : "/articole"}>
              <Button
                variant="outline"
                className="flex items-center space-x-2 text-primary hover:text-secondary transition-all duration-300 font-medium border-primary/20 hover:border-primary/40 hover:scale-105"
                onClick={handleIconClick}
              >
                {backToTeam ? (
                  <Users className="h-4 w-4 animate-icon transition-transform duration-200" />
                ) : (
                  <BookOpen className="h-4 w-4 animate-icon transition-transform duration-200" />
                )}
                <span>{backToTeam ? "Echipa și proiectul" : "Toate articolele"}</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-24 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              {article.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* key: remontează conținutul la schimbarea articolului (altfel pagina devine albă, vezi T1) */}
            <ArticleContent key={articleId} articleId={articleId} />
          </div>

          <ArticleNavigation currentArticleId={articleId} />
        </div>
      </article>
      <Footer />
    </div>
  );
}
