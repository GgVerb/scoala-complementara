import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPrevNext } from "@/lib/articles";

// T8: navigare unică, cronologică (precedent = mai vechi, următor = mai nou),
// derivată din client/src/data/articles.json.
export default function ArticleNavigation({ currentArticleId }: { currentArticleId: string }) {
  const { previous, next } = getPrevNext(currentArticleId);
  if (!previous && !next) return null;

  return (
    <nav aria-label="Navigare între articole" className="not-prose space-y-6 mt-12 pt-8 border-t border-gray-200">
      <div className="text-center">
        <Link href="/articole">
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
            Toate articolele
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <div className="sm:flex-1">
          {previous && (
            <Link href={`/articol/${previous.id}`}>
              <Button variant="outline" className="h-auto w-full sm:w-auto flex items-center gap-2 hover:bg-primary hover:text-white transition-colors whitespace-normal">
                <ChevronLeft className="h-4 w-4 flex-shrink-0" />
                <span className="text-left">
                  <span className="block text-xs text-gray-500">Articolul precedent</span>
                  <span className="block font-medium">{previous.title}</span>
                </span>
              </Button>
            </Link>
          )}
        </div>
        <div className="sm:flex-1 sm:text-right">
          {next && (
            <Link href={`/articol/${next.id}`}>
              <Button variant="outline" className="h-auto w-full sm:w-auto flex items-center gap-2 hover:bg-primary hover:text-white transition-colors whitespace-normal sm:ml-auto">
                <span className="text-right">
                  <span className="block text-xs text-gray-500">Articolul următor</span>
                  <span className="block font-medium">{next.title}</span>
                </span>
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
