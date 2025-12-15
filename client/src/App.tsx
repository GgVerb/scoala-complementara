import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { PageTransition } from "@/components/page-transition";
import Home from "@/pages/home";
import PentruElevi from "@/pages/pentru-elevi";
import PentruAdulti from "@/pages/pentru-adulti";
import PentruInstitutii from "@/pages/pentru-institutii";
import PentruMentori from "@/pages/pentru-mentori";
import DespreNoi from "@/pages/despre-noi";
import Articol from "@/pages/articol";
import Articole from "@/pages/articole";
import DisfunctieCognitiva from "@/pages/disfunctie-cognitiva";

import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pentru-elevi" component={PentruElevi} />
        <Route path="/pentru-adulti" component={PentruAdulti} />
        <Route path="/pentru-institutii" component={PentruInstitutii} />
        <Route path="/pentru-mentori" component={PentruMentori} />
        <Route path="/despre-noi" component={DespreNoi} />
        <Route path="/articole" component={Articole} />
        <Route path="/articol/:id" component={Articol} />
        <Route path="/disfunctie-cognitiva" component={DisfunctieCognitiva} />

        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  // Initialize Google Analytics when app loads
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
