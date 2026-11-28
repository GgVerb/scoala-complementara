import { useEffect } from "react";
import { Link } from "wouter";
import { Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { usePageMeta } from "@/hooks/use-page-meta";

// L1: politica de confidențialitate (GDPR art. 13).
// Dacă se activează Google Analytics (VITE_GA_MEASUREMENT_ID) sau se adaugă
// formulare, video-uri încorporate ori alte servicii externe, pagina trebuie actualizată.
const ULTIMA_ACTUALIZARE = "28 noiembrie 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed text-lg">{children}</div>
    </section>
  );
}

export default function Confidentialitate() {
  usePageMeta({
    title: "Politica de confidențialitate",
    description:
      "Ce date personale primește Școala Complementară când ne contactați, de ce, cât timp le păstrăm, cum protejăm datele minorilor și ce drepturi aveți.",
    path: "/confidentialitate",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/">
              <Button
                variant="outline"
                className="flex items-center space-x-2 text-primary font-medium border-primary/20 hover:border-primary/40"
              >
                <Home className="h-4 w-4" />
                <span>Înapoi acasă</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Politica de confidențialitate</h1>
            <p className="text-gray-500">Ultima actualizare: {ULTIMA_ACTUALIZARE}</p>
          </header>

          <Section title="Pe scurt">
            <p>
              Site-ul nu are conturi, formulare care trimit date către un server, cookie-uri de analiză sau de
              marketing. Numărăm vizitele cu un serviciu de statistică fără cookie-uri, care nu vă identifică
              (detalii la punctul 7). Primim date personale doar atunci când ne scrieți sau ne sunați. Le folosim ca să vă
              răspundem și nu le vindem nimănui.
            </p>
          </Section>

          <Section title="1. Cine răspunde de datele dumneavoastră">
            <p>
              Operatorul datelor este <strong>Gheorghe Lungu</strong>, inițiatorul Școlii Complementare, persoană fizică
              din Drobeta Turnu Severin, România.
            </p>
            <p>
              Contact pentru orice întrebare despre date:{" "}
              <a href="mailto:ggverb@gmail.com" className="text-primary underline">ggverb@gmail.com</a>, telefon{" "}
              <a href="tel:+40721879347" className="text-primary underline">+40 721 879 347</a>.
            </p>
          </Section>

          <Section title="2. Ce date primim">
            <p>
              Butoanele de contact de pe site deschid aplicația dumneavoastră de email (sau WhatsApp) cu un mesaj
              precompletat. Nimic nu se trimite până nu apăsați dumneavoastră „Trimite”. Primim astfel:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>numele, adresa de email și numărul de telefon pe care ni le scrieți;</li>
              <li>instituția pe care o reprezentați, dacă ne scrieți ca instituție;</li>
              <li>conținutul mesajului și orice altă informație pe care alegeți să ne-o dați.</li>
            </ul>
            <p>
              Testul „Testează-ți sănătatea spirituală” se calculează doar în browserul dumneavoastră: răspunsurile nu
              ne sunt trimise și nu sunt salvate.
            </p>
          </Section>

          <Section title="3. De ce le folosim și pe ce temei">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Ca să vă răspundem</strong> și să discutăm despre participarea la activități, o colaborare sau
                voluntariat — temei: demersuri făcute la cererea dumneavoastră (art. 6 alin. (1) lit. b) din
                Regulamentul (UE) 2016/679, „GDPR”) și interesul nostru legitim de a răspunde corespondenței
                (art. 6 alin. (1) lit. f)).
              </li>
              <li>
                <strong>Ca să vă anunțăm despre activități</strong>, doar dacă ne cereți explicit acest lucru — temei:
                consimțământul dumneavoastră (art. 6 alin. (1) lit. a)), pe care îl puteți retrage oricând, cu un simplu
                mesaj.
              </li>
            </ul>
          </Section>

          <Section title="4. Minorii">
            <p>
              Activitățile noastre sunt pentru tineri de 10–18 ani, dar <strong>nu cerem date personale direct de la
              minori</strong>. Primul contact îl face un părinte sau tutorele legal, de pe{" "}
              <Link href="/pentru-adulti" className="text-primary underline">pagina pentru adulți</Link>.
            </p>
            <p>
              Dacă un minor ne scrie direct, îi răspundem doar ca să-l rugăm să implice un părinte. Dacă acest lucru nu
              se întâmplă, ștergem mesajul în cel mult 30 de zile.
            </p>
            <p>
              Participarea unui minor la activități se face numai cu acordul scris al părintelui sau tutorelui. Publicăm
              fotografii în care apar minori numai cu acordul scris al părinților; puteți cere oricând, prin email,
              retragerea unei fotografii, iar noi o scoatem de pe site.
            </p>
          </Section>

          <Section title="5. Cât timp păstrăm datele">
            <ul className="list-disc pl-6 space-y-1">
              <li>corespondența: cât timp este necesar pentru a vă răspunde și pentru eventuala colaborare, dar nu mai mult de 2 ani de la ultimul contact;</li>
              <li>datele folosite pentru anunțuri: până când vă retrageți consimțământul.</li>
            </ul>
          </Section>

          <Section title="6. Cine mai are acces la date">
            <p>Nu vindem și nu transmitem datele în scop de marketing. Le prelucrează, în numele nostru, doar furnizorii tehnici:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google (Gmail), pentru email;</li>
              <li>WhatsApp (Meta), dacă alegeți să ne scrieți pe WhatsApp;</li>
              <li>Netlify, care găzduiește site-ul, și Cloudflare, prin care trece traficul spre site; ambii văd tehnic adresa IP a vizitatorilor și o pot înregistra în jurnale, pentru livrarea paginilor și pentru securitate.</li>
            </ul>
            <p>
              Acești furnizori pot prelucra date și în afara Spațiului Economic European (de exemplu în SUA), cu
              garanțiile prevăzute de GDPR (decizia de adecvare pentru Cadrul UE–SUA privind protecția datelor sau
              clauze contractuale standard).
            </p>
          </Section>

          <Section title="7. Cookie-uri și servicii externe">
            <p>
              Site-ul nu folosește cookie-uri de analiză sau de marketing și nu încarcă servicii externe care să
              plaseze cookie-uri. Video-urile recomandate sunt doar linkuri: dacă le deschideți, ajungeți pe YouTube,
              unde se aplică politica Google.
            </p>
            <p className="mt-4">
              Pentru statistici de trafic folosim Cloudflare Web Analytics. Serviciul nu folosește cookie-uri sau
              stocare locală în browser și nu creează profiluri ale vizitatorilor. Vedem doar date agregate: câte
              vizite au avut paginile, din ce site-uri ați venit (de ex. Google, Facebook), țara, tipul de dispozitiv
              și viteza de încărcare. Furnizor: Cloudflare, Inc., conform politicii sale de confidențialitate
              (cloudflare.com/privacypolicy).
            </p>
          </Section>

          <Section title="8. Drepturile dumneavoastră">
            <p>Conform GDPR, aveți dreptul:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>să aflați ce date avem despre dumneavoastră și să primiți o copie;</li>
              <li>să cereți corectarea sau ștergerea lor;</li>
              <li>să cereți restricționarea prelucrării sau să vă opuneți prelucrării;</li>
              <li>să primiți datele într-un format care poate fi transmis altcuiva (portabilitate);</li>
              <li>să vă retrageți oricând consimțământul, fără să fie afectată prelucrarea făcută înainte.</li>
            </ul>
            <p>
              Scrieți-ne la <a href="mailto:ggverb@gmail.com" className="text-primary underline">ggverb@gmail.com</a>;
              răspundem în cel mult o lună.
            </p>
            <p>
              Aveți și dreptul să depuneți o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
              Caracter Personal (ANSPDCP): B-dul G-ral Gheorghe Magheru nr. 28-30, sector 1, cod poștal 010336,
              București;{" "}
              <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                www.dataprotection.ro
              </a>
              ; anspdcp@dataprotection.ro.
            </p>
          </Section>

          <Section title="9. Modificări">
            <p>
              Dacă schimbăm modul în care folosim datele, actualizăm această pagină și data de mai sus.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
