import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { PageTransition } from "@/components/page-transition";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Dacă un fișier JS nu se mai găsește (de ex. tab deschis înainte de un deploy nou,
// iar Netlify a înlocuit fișierele), reîncarcă pagina o singură dată în loc să o lase albă.
function lazyWithReload<T extends React.ComponentType<any>>(load: () => Promise<{ default: T }>) {
  const KEY = "sc-chunk-reload";
  return lazy(() =>
    load()
      .then((mod) => {
        try {
          sessionStorage.removeItem(KEY);
        } catch {
          /* fără sessionStorage: nimic de curățat */
        }
        return mod;
      })
      .catch((err) => {
        let reloaded = false;
        try {
          reloaded = sessionStorage.getItem(KEY) === "1";
          if (!reloaded) sessionStorage.setItem(KEY, "1");
        } catch {
          reloaded = true; // fără sessionStorage nu riscăm o buclă de reîncărcări
        }
        if (!reloaded) {
          window.location.reload();
          return new Promise<{ default: T }>(() => {});
        }
        throw err;
      }),
  );
}

// T10: paginile în afară de homepage se încarcă la cerere (fișiere JS separate),
// ca prima vizită să nu descarce și textele tuturor articolelor.
const PentruElevi = lazyWithReload(() => import("@/pages/pentru-elevi"));
const PentruAdulti = lazyWithReload(() => import("@/pages/pentru-adulti"));
const PentruInstitutii = lazyWithReload(() => import("@/pages/pentru-institutii"));
const PentruMentori = lazyWithReload(() => import("@/pages/pentru-mentori"));
const DespreNoi = lazyWithReload(() => import("@/pages/despre-noi"));
const Articol = lazyWithReload(() => import("@/pages/articol"));
const Articole = lazyWithReload(() => import("@/pages/articole"));
const Confidentialitate = lazyWithReload(() => import("@/pages/politica-confidentialitate"));

// Rută nouă aici → adaug-o și în netlify.toml (altfel răspunde cu 404).
function Router() {
  // Track page views when routes change
  useAnalytics();

  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pentru-elevi" component={PentruElevi} />
          <Route path="/pentru-adulti" component={PentruAdulti} />
          <Route path="/pentru-institutii" component={PentruInstitutii} />
          <Route path="/pentru-mentori" component={PentruMentori} />
          <Route path="/despre-noi" component={DespreNoi} />
          <Route path="/articole" component={Articole} />
          <Route path="/articol/:id" component={Articol} />
          <Route path="/confidentialitate" component={Confidentialitate} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </PageTransition>
  );
}

function App() {
  // Google Analytics se inițializează doar dacă VITE_GA_MEASUREMENT_ID e setat.
  // Atenție: dacă îl activezi, ai nevoie de banner de consimțământ și de
  // actualizarea paginii /confidentialitate (Legea 506/2004).
  useEffect(() => {
    initGA();
  }, []);

  return (
    <TooltipProvider>
      <Router />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
