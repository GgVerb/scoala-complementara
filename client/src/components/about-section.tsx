import { Heart, Leaf, Target, Zap } from "lucide-react";
import ecosystemImage from "@assets/ChatGPT Image May 24, 2025, 06_48_54 AM_1749854137851.png";

export default function AboutSection() {
  return (
    <section id="despre" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold text-5xl mb-6">
            <span className="gradient-text">Antrenament pentru viață</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Poți mai mult decât îți cere școala clasică sau ai vrea ca să înveți altfel?
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Heart className="text-accent mr-4 h-7 w-7" />
                gestionarea emoțiilor și autodisciplina
                
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-destructive text-destructive-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    ASTA ESTE FOARTE IMPORTANT! Dacă aici nu te descurci, dacă nu poți să lupți cu confortul și poftele tale, nu vei obține de la noi decât câteva drumeții pe munții din apropiere.
                  </div>
                  {/* Arrow pointer */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-destructive"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Pe aceste baze vei deprinde abilități de comunicare, reziliență și adaptare. 
                Apoi tot restul devine simplu.
              </p>
            </div>
            
            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Leaf className="text-primary mr-4 h-7 w-7" />
                Aventură în natură
                
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-primary text-primary-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    Ieșirile în natură sunt concepute cu dificultate mică, dar crescătoare. Consider că ai reușit să dovedești AUTOcontrol și AUTOdisciplină când traversezi 3-4 zile fără ajutor (dar supravegheat!) un masiv muntos.
                  </div>
                  {/* Arrow pointer */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-primary"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Înseamnă să ieși afară, să explorezi și să descoperi lucruri noi și utile despre tine, 
                despre relația cu ceilalți și cu mediul înconjurător.
              </p>
            </div>
            
            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.6s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Target className="text-accent mr-4 h-7 w-7" />
                Tinerii hotărăsc
                
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-accent text-accent-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    Primești respect, libertate și putere de decizie. Răspunzi cu respect, responsabilitate și discernământ... sau nu :-)
                  </div>
                  {/* Arrow pointer */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-accent"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Pe măsură ce elevii și elevele decid, planifică și conduc experiențele, își asumă responsabilități și capătă încredere în forțele proprii.
              </p>
            </div>
            
            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.8s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Zap className="text-accent mr-4 h-7 w-7" />
                Metode (mai) eficiente
                
                {/* Tooltip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-accent text-accent-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    Oh, asta este foarte distractiv! Inventăm scenarii și înregistrăm video și sonor interacțiuni. Înveți maxim despre puterea aproape magică a comunicării.
                  </div>
                  {/* Arrow pointer */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-accent"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Jocuri de rol, cursuri ținute de elevi, faceți filme, si începi proiectele tale. Toate astea și multe altele pentru cei care trec de "examenele" Școlii Complementare
              </p>
            </div>
            

          </div>
          

        </div>
      </div>
    </section>
  );
}
