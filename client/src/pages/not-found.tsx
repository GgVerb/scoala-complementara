import { Link, useLocation } from "wouter";
import { Compass, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";

// T6: pagină 404 în română. Statusul HTTP 404 real vine din netlify.toml.
export default function NotFound() {
  const [location] = useLocation();
  usePageMeta({ title: "Pagina nu există", path: location, noindex: true });

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Compass className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Poteca asta nu duce nicăieri</h1>
        <p className="text-gray-600 mb-8">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Înapoi acasă
            </Button>
          </Link>
          <Link href="/articole">
            <Button variant="outline" className="w-full sm:w-auto">
              <BookOpen className="h-4 w-4 mr-2" />
              Toate articolele
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
