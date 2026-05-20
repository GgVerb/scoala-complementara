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
            Nu te pregătim pentru examene. Te pregătim pentru ceea ce vine după examene.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">

            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Heart className="text-accent mr-4 h-7 w-7" />
                gestionarea emoțiilor și autodisciplina
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-destructive text-destructive-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    ASTA ESTE FOARTE IMPORTANT! Dacă aici nu te descurci, dacă nu poți să lupți cu confortul și poftele tale, nu vei obține de la noi decât câteva drumeții pe munții din apropiere.
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-destructive"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Primul munte pe care îl urci nu e cel din Carpați. E cel din interiorul tău — pofta de confort, 
                oboseala care minte, momentul în care vrei să renunți fără un motiv real. 
                Abia după ce îl traversezi pe acesta, ceilalți devin posibili.
              </p>
            </div>
            
            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Leaf className="text-primary mr-4 h-7 w-7" />
                Aventură în natură
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-primary text-primary-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    Ieșirile în natură sunt concepute cu dificultate mică, dar crescătoare. Consider că ai reușit să dovedești AUTOcontrol și AUTOdisciplină când traversezi 3-4 zile fără ajutor (dar supravegheat!) un masiv muntos.
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-primary"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Nu drumeție cu poze. Zilele petrecute în munte au greutate reală: pietrele sub talpă, 
                apa rece a pârâului, oboseala cinstită după ore de mers. 
                Din asta crește ceva ce nu se poate preda în clasă — cunoașterea corpului tău 
                ca parte dintr-o lume mai largă decât ecranul.
              </p>
            </div>
            
            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.6s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Target className="text-accent mr-4 h-7 w-7" />
                Tinerii hotărăsc
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-accent text-accent-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    Primești respect, libertate și putere de decizie. Răspunzi cu respect, responsabilitate și discernământ... sau nu :-)
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-accent"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Planifici, decizi, răspunzi. Dacă traseul e greu, tu l-ai ales. 
                Dacă tabăra merge strună, tot tu ai planificat-o. 
                Responsabilitatea nu e predată — e simțită, pas cu pas, cu rucsacul în spate.
              </p>
            </div>
            
            <div className="animate-slide-up relative group card-premium p-8 rounded-2xl transition-all duration-300" style={{animationDelay: '0.8s'}}>
              <div className="absolute inset-0 w-full h-full cursor-help"></div>
              <h3 className="font-semibold text-2xl mb-4 text-primary flex items-center relative cursor-help">
                <Zap className="text-accent mr-4 h-7 w-7" />
                Metode (mai) eficiente
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 w-80 bg-accent text-accent-foreground text-lg font-bold p-6 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="text-center leading-relaxed">
                    Oh, asta este foarte distractiv! Inventăm scenarii și înregistrăm video și sonor interacțiuni. Înveți maxim despre puterea aproape magică a comunicării.
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-accent"></div>
                </div>
              </h3>
              <p className="text-foreground leading-relaxed text-lg font-medium">
                Jocuri de rol, filme improvizate, cursuri ținute de voi pentru voi. 
                Înveți maxim despre comunicare când ești și autor și actor. 
                Puterea limbajului — nu ca teorie, ci ca experiment trăit, cu greșeli reale și râs real.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
