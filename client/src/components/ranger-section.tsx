import { Link } from "wouter";
import { ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RangerSection() {
  return (
    <section id="ranger" className="py-20 bg-gradient-to-br from-stone-50 to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Icon / visual */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
              <Mountain className="text-white h-14 w-14" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Cine ține poteca
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4 leading-snug">
              Gheorghe Lungu — ranger la Parcul Național Domogled-Valea Cernei
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Lucrez cu muntele de peste opt ani. Nu predau natura — o arăt. 
              Nu îi convingem pe tineri că lumea e frumoasă. 
              Le creăm condiții să o simtă singuri, cu picioarele pe pământ.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Poteca există. Eu o țin liberă. Fiecare o parcurge în ritmul lui.
            </p>
            <a 
              href="https://gheorghe.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Despre ghid
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
