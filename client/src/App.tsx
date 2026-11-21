import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { PageTransition } from "@/components/page-transition";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// T10: paginile în afară de homepage se încarcă la cerere (fișiere JS separate),
// ca prima vizită să nu descarce și textele tuturor articolelor.
const PentruElevi = lazy(() => import("@/pages/pentru-elevi"));
const PentruAdulti = lazy(() => import("@/pages/pentru-adulti"));
const PentruInstitutii = lazy(() => import("@/pages/pentru-institutii"));
const PentruMentori = lazy(() => import("@/pages/pentru-mentori"));
const DespreNoi = lazy(() => import("@/pages/despre-noi"));
const Articol = lazy(() => import("@/pages/articol"));
const Articole = lazy(() => import("@/pages/articole"));
const Confidentialitate = lazy(() => import("@/pages/confidentialitate"));

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
