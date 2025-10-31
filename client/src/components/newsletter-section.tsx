import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function NewsletterSection() {
  const handleSubscribe = () => {
    const subject = "Mă interesează să aflu despre activitățile și proiectele Scolii Complementare";
    const body = `Bună ziua,

Doresc să mă abonez la newsletter-ul Școlii Complementare pentru a primi informații despre:
- Programele și activitățile din natură
- Evenimentele și workshop-urile organizate
- Articolele și resursele educaționale

Vă mulțumesc!

Numele meu:
Telefon:`;
    
    const email = "ggverb@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="newsletter" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newspaper Double Page Frame */}
        <div className="relative bg-white shadow-2xl border border-gray-300" style={{
          transform: 'perspective(1000px) rotateX(2deg)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          
          {/* Center fold line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-px z-10"></div>
          
          {/* Left page */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
            <div className="p-8 md:p-12 border-r border-gray-200">
              {/* Fake newspaper header */}
              <div className="border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-2xl font-bold tracking-wider text-gray-800 uppercase" style={{ fontFamily: 'serif' }}>
                  Școala Complementară
                </h1>
                <div className="text-xs text-gray-600 mt-1 uppercase tracking-wide">
                  Newsletter Educațional
                </div>
              </div>

              {/* Fake article columns */}
              <div className="space-y-4">
                <div className="border-b border-gray-300 pb-3">
                  <h3 className="font-bold text-sm uppercase tracking-wide text-gray-800">Experiențe în natură</h3>
                  <div className="mt-1 space-y-1">
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="border-b border-gray-300 pb-3">
                  <h3 className="font-bold text-sm uppercase tracking-wide text-gray-800">A magic story</h3>
                  <div className="mt-1 space-y-1">
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wide text-gray-800">Resurse educaționale</h3>
                  <div className="mt-1 space-y-1">
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right page - Newsletter subscription */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'serif' }}>
                  Rămâi conectat cu noi
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Primește informații despre programe și evenimente
                </p>
                
                {/* Newsletter subscription box with newspaper style */}
                <div className="border-4 border-gray-800 p-6 bg-gray-50">
                  <div className="border border-gray-400 p-4 bg-white">
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-4 font-bold">
                      Newsletter Gratuit
                    </div>
                    
                    <Button
                      onClick={handleSubscribe}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-bold hover:shadow-lg transition-all text-lg uppercase tracking-wide"
                      style={{ fontFamily: 'serif' }}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Abonează-te aici
                    </Button>
                    
                    <p className="mt-4 text-xs text-gray-500 uppercase tracking-wide">
                      Nu trimitem spam • Dezabonare oricând
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Shadow effect */}
          <div className="absolute -bottom-2 -right-2 left-2 h-2 bg-gray-400 rounded-b-lg opacity-30 blur-sm"></div>
        </div>
      </div>
    </section>
  );
}