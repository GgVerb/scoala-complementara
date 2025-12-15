import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChapterSectionProps {
  number: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const ChapterSection = ({ number, title, isOpen, onToggle, children }: ChapterSectionProps) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-left",
          isOpen && "bg-primary/5 border-primary/30"
        )}
        data-testid={`chapter-toggle-${number}`}
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold text-sm shrink-0">
          {number}
        </span>
        <span className="flex-1 text-lg font-semibold text-gray-900">{title}</span>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-500 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 p-6 md:p-8 bg-white rounded-lg border border-gray-100 shadow-sm animate-in slide-in-from-top-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface FigureProps {
  number: number;
  caption: string;
  src: string;
  alt: string;
}

const Figure = ({ number, caption, src, alt }: FigureProps) => {
  return (
    <figure className="my-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex justify-center">
        <img src={src} alt={alt} className="max-w-full h-auto rounded" loading="lazy" />
      </div>
      <figcaption className="mt-4 text-sm text-gray-600 text-center">
        <strong>Figura {number}:</strong> {caption}
      </figcaption>
    </figure>
  );
};

const ArticleHeader = () => {
  return (
    <header className="mb-10 pb-8 border-b border-gray-200">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">Recenzie</span>
        <span className="text-sm text-gray-500">Publicat 19 mai 2025</span>
        <a
          href="https://doi.org/10.3389/fcomm.2025.1547489"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
          data-testid="link-doi"
        >
          DOI: 10.3389/fcomm.2025.1547489
        </a>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
        Ignoranta multimii: gandirea disfunctionala in retelele sociale
      </h1>
      <div className="flex flex-wrap items-start gap-8 mb-6">
        <div>
          <p className="font-semibold mb-1 text-gray-700">Autori:</p>
          <p className="text-lg text-gray-900">
            Fatima Seeme<sup>1</sup>, David Green<sup>2</sup>, Carlo Kopp<sup>2</sup>*
          </p>
        </div>
        <div className="text-sm text-gray-600">
          <p><sup>1</sup> Universitatea Federala din Pelotas, Brazilia</p>
          <p><sup>2</sup> Facultatea de Tehnologia Informatiei, Universitatea Monash, Clayton, VIC, Australia</p>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">*Corespondenta: Carlo Kopp — <a href="mailto:Carlo.Kopp@Monash.edu" className="text-primary">Carlo.Kopp@Monash.edu</a></p>
      </div>
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-500 mb-2">Cuvinte cheie:</p>
        <div className="flex flex-wrap gap-2">
          {["cognitie", "eroare cognitiva", "eroare cognitiva sociala", "retea sociala", "inteligenta artificiala", "emergenta", "sisteme complexe", "manipulare psihologica"].map((keyword) => (
            <span key={keyword} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p>
          © 2025 Seeme, Green si Kopp. Acesta este un articol cu acces deschis distribuit conform termenilor{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Licentei Creative Commons Attribution (CC BY)
          </a>.
        </p>
      </div>
    </header>
  );
};

const Chapter1 = () => (
  <article className="prose prose-lg max-w-none">
    <p>Societatea umana a fost mult timp afectata de comportamente disfunctionale care apar din gandirea si interactiunile sociale defectuoase. Unele dintre cele mai raspandite esecuri cognitive apar in cadrul grupurilor de oameni. <a href="https://en.wikipedia.org/wiki/Extraordinary_Popular_Delusions_and_the_Madness_of_Crowds" target="_blank" rel="noopener noreferrer">Mackay (1841)</a> a pictat o imagine vie a „iluziilor populare si a nebuniei multimilor".</p>
    <p>O problema sociala majora a timpului nostru este ca mediile digitale si Inteligenta Artificiala (IA) agraveaza problemele sociale care apar din gandirea si perceptia disfunctionala. In special, acestea permit teoriilor conspiratiei si altor sisteme de credinte false sa se raspandeasca rapid si sa creeze probleme sociale.</p>
    <p>Retelele sociale, in special Facebook si Twitter, au avut un impact imens asupra opiniei publice in timpul revolutiilor „Primaverii Arabe". In timpul protestelor din Piata Tahrir, regimul nu a putut controla informatiile distribuite pe retelele sociale, care au jucat un rol esential in modelarea atat a protestelor, cat si a rezultatelor acestora.</p>
    <Figure number={1} caption="Modelul arata cum disfunctiile cognitive la indivizi se propaga prin retelele sociale, sunt amplificate de mediile digitale si pot fi exploatate." src="/images/articles/disfunctie-cognitiva/figure1.webp" alt="Diagrama care arata disfunctiile cognitive propagandu-se de la nivel individual la nivel global" />
    <h3 className="text-xl font-semibold mt-8 mb-4">Argumente principale</h3>
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Impulsurile evoluate si mecanismele de simplificare</strong> se combina cu limitarile cognitive, creand potentialul pentru erori cognitive si prejudecati la indivizi.</li>
      <li><strong>Disfunctiile cognitive se raspandesc in cadrul grupurilor</strong>, in special prin interactiuni peer-to-peer. Mai multe mecanisme permit disfunctiilor cognitive sa se propage prin retelele sociale.</li>
      <li><strong>Comunicatiile moderne</strong>, in special retelele si mediile digitale, accelereaza si extind raspandirea credintelor si interpretarilor false.</li>
      <li><strong>Prejudecatile si disfunctiile cognitive sunt vulnerabilitati</strong> care au dus la o multitudine de metode evoluate pentru a permite exploatarea maligna.</li>
    </ol>
    <h3 className="text-xl font-semibold mt-8 mb-4">Definitii</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Disfunctie cognitiva:</strong> Orice pierdere sau esec al capacitatii de a percepe sau interpreta lumea in modul intentionat sau asteptat.</li>
      <li><strong>Efect cognitiv:</strong> Orice mecanism psihologic care modifica cognitia unei persoane si comportamentul rezultat.</li>
      <li><strong>Comportament:</strong> Reactiile indivizilor sau grupurilor la stimuli care includ mediul social asa cum este perceput sau perceput gresit.</li>
    </ul>
  </article>
);

const Chapter2 = () => (
  <article className="prose prose-lg max-w-none">
    <h3 className="text-xl font-semibold mb-4">2.1 Originile evolutive ale erorilor si prejudecatilor cognitive</h3>
    <p>Prin evolutie, oamenii sunt adaptati sa aiba impulsuri si comportamente care asigura supravietuirea. Acestea includ afilierea cu un grup, statutul si succesul reproductiv. Aceste impulsuri adanc inradacinate au fost esentiale pentru supravietuire in mediile in care au evoluat. Cu toate acestea, ele duc adesea la cognitie si comportament disfunctional.</p>
    <p>Cand proceseaza multi stimuli pentru a interpreta si a reactiona la o situatie complexa, o abordare comuna este de a simplifica problema prin sacrificarea acuratetii rationamentului pentru viteza. Dar mecanismele de simplificare a problemelor complicate duc adesea la erori cognitive.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">2.2 Limitari cognitive</h3>
    <p>Creierul si simturile umane au o capacitate limitata de interpretare a informatiilor complexe, astfel incat complexitatea mediului face imposibil sa se analizeze fiecare scenariu rapid si in detaliu.</p>
    <p>Cand observatiile realitatii sunt inconsistente cu credintele sau asteptarile interne ale unei persoane, apare <strong>Disonanta Cognitiva</strong>. Cand confrunta disonanta cognitiva, indivizii cauta sa evite disconfortul rezultat.</p>
    <Figure number={2} caption="Modele de teoria informatiei ale inselaciunii si efectele lor. Cele doua inselaciuni predominante sunt degradarea, unde opiniile reale sunt ascunse, si coruptia, unde opinia altora este imitata." src="/images/articles/disfunctie-cognitiva/figure2.webp" alt="Model de inselaciune aratand subversiunea, coruptia, degradarea, negarea" />
    <h3 className="text-xl font-semibold mt-8 mb-4">2.3 Prejudecati legate de incredere</h3>
    <p>O problema bine studiata in psihologie este <strong>supraincrederea</strong>, pe care unii o considera cea mai importanta prejudecata cognitiva. Moore si Healy (2008) au identificat trei definitii distincte ale supraincrederii:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Supraestimarea propriei performante (Kruger si Dunning, 1999)</li>
      <li>Supraestimarea propriei performante in raport cu altii</li>
      <li>Supraincrederea in acuratetea propriilor credinte („supra-precizie")</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-4">2.4 Prejudecata de confirmare</h3>
    <p><strong>Prejudecata de confirmare</strong> este probabil cea mai problematica eroare inferentiala in rationamentul uman. Indivizii care experimenteaza prejudecata de confirmare colecteaza inadvertent dovezi selectiv, acceptand dovezi si opinii care le sustin credintele anterioare si respingand dovezile opuse.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">2.5 Prejudecata falsului consens</h3>
    <p>Sub <strong>prejudecata falsului consens</strong>, perceptia unui individ asupra preferintelor de grup devine partinitoare de propriile preferinte. Acestia tind sa supraestimeze sprijinul pentru propriile puncte de vedere.</p>
    <p>Indivizii sub prejudecata falsului consens sunt predispusi sa interactioneze cu oameni cu gandire similara. Aceste interactiuni pot produce un <strong>„Efect de Camera de Ecou"</strong>.</p>
  </article>
);

const Chapter3 = () => (
  <article className="prose prose-lg max-w-none">
    <p>Interactiunile dintre indivizi in grupuri sociale necesita comunicare. Aceasta duce la formarea retelelor sociale, care permit credintelor si interpretarilor false sa se propage in intregul grup.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">3.1 Propagarea credintelor in retelele sociale</h3>
    <p>Termenul <strong>retea sociala</strong> se refera aici la orice grup de indivizi care interactioneaza unii cu altii. Ideile si credintele se raspandesc de obicei printr-o retea sociala prin interactiuni locale intre indivizi.</p>
    <Figure number={3} caption="Topologii comune in retelele sociale. (a) O ierarhie (graf arbore) este comuna in organizatii. (b) Lumile mici sunt comune in societatile traditionale. (c) Retelele fara scara sunt comune in grupurile sociale online." src="/images/articles/disfunctie-cognitiva/figure3.webp" alt="Trei topologii de retea: Ierarhie, Lume mica si Retele fara scara" />
    <p>Aparitia retelelor sociale online a permis formarea unor comunitati online uriase. Acestea iau frecvent forma <strong>Retelelor fara Scara</strong>. Aceasta tendinta a dus la aparitia influencerilor, indivizi foarte conectati si de incredere.</p>
    <Figure number={4} caption="O credinta cascadeaza, raspandindu-se ca o epidemie in trei retele sociale separate. Initial, o noua credinta este detinuta de un singur individ, dar se raspandeste rapid prin conexiunile de retea." src="/images/articles/disfunctie-cognitiva/figure4.webp" alt="Sase pasi de timp aratand cascada de credinte" />
    <h3 className="text-xl font-semibold mt-8 mb-4">3.2 Ignoranta pluralista</h3>
    <p><strong>Ignoranta Pluralista</strong> este o eroare cognitiva sociala in care practic fiecare membru al unui grup respinge in privat o credinta, dar crede ca practic fiecare alt membru o accepta in privat.</p>
    <p>Ignoranta pluralista apare in multe forme, inclusiv:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Consumul de alcool in randul studentilor universitari</li>
      <li>Atitudinile fata de intalniri si sex</li>
      <li>Impedimente in calea egalitatii de gen</li>
      <li>Inactiune asupra schimbarilor climatice</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-4">3.3 Gandirea de grup si Paradoxul Abilene</h3>
    <p><strong>Gandirea de grup</strong> este o disfunctie a luarii deciziilor de grup. Apare cand membrii unui grup se straduiesc colectiv sa atinga consensul, chiar daca aceasta inseamna ignorarea propriilor puncte de vedere individuale.</p>
    <Figure number={5} caption="Gandirea de grup vs Paradoxul Abilene: Ambele sunt esecuri ale luarii deciziilor de grup, dar difera in dinamica lor de baza." src="/images/articles/disfunctie-cognitiva/figure5.webp" alt="Diagrama aratand originile disfunctiilor cognitive" />
  </article>
);

const Chapter4 = () => (
  <article className="prose prose-lg max-w-none">
    <p>Internetul si dispozitivele mobile au transformat fundamental modul in care oamenii comunica. Un numar mare de indivizi comunica si partajeaza acum informatii electronic. Retelele sociale s-au dovedit a fi un vehicul puternic pentru influentarea opiniei publice.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">4.1 Efecte emergente in retelele digitale</h3>
    <p>Dezinformarea in mediile digitale se raspandeste mai repede si mai larg decat in mediile conventionale deoarece canalele digitale au urmatoarele proprietati:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Anonimat:</strong> Anonimatul le permite actorilor rau intentionati sa raspandeasca dezinformarea ascunzandu-si identitatile</li>
      <li><strong>Viteza:</strong> Informatia se poate raspandi instantaneu in intreaga lume</li>
      <li><strong>Scara:</strong> O singura postare poate ajunge la milioane in cateva ore</li>
      <li><strong>Cost redus:</strong> Crearea si distribuirea continutului este practic gratuita</li>
      <li><strong>Amplificare algoritmica:</strong> Algoritmii platformelor pot amplifica continutul captivant indiferent de acuratete</li>
    </ul>
    <Figure number={6} caption="Mediile digitale permit continutului sa migreze rapid intre diferite canale. Efectele cognitiei sociale disfunctionale sunt accelerate in timp peste populatii cu ordine de marime mai mari." src="/images/articles/disfunctie-cognitiva/figure6.webp" alt="Diagrama aratand retelele sociale in medii digitale" />
    <p>Cercetarile au aratat ca stirile false se raspandesc mai repede, mai departe si mai profund decat povestile adevarate. Falsurile aveau 70% mai multe sanse sa fie redistribuite decat povestile exacte.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">4.2 IA si accelerarea impacturilor adverse</h3>
    <p>Aplicatiile timpurii ale IA au aratat paralele tulburatoare cu probleme binecunoscute in cognitia umana. De exemplu, <strong>efectul de „halucinatie"</strong>, in care sistemele IA produc raspunsuri absurde la probleme triviale.</p>
    <h4 className="text-lg font-semibold mt-6 mb-3">Amenintari activate de IA</h4>
    <ul className="list-disc pl-6 space-y-3">
      <li><strong>Deep fakes:</strong> Imagini si video sintetice convingătoare cu fidelitate din ce in ce mai mare</li>
      <li><strong>Otravirea datelor de antrenament:</strong> Injectarea propagandei in seturile de date de antrenament IA</li>
      <li><strong>Microtargetare:</strong> Utilizarea IA generativa pentru a produce mesaje personalizate la vulnerabilitatile anumitor indivizi</li>
      <li><strong>Bule de filtrare:</strong> Algoritmi IA care sugereaza linkuri bazate pe istoricul de acces al utilizatorului</li>
    </ul>
  </article>
);

const Chapter5 = () => (
  <article className="prose prose-lg max-w-none">
    <p>Gandirea disfunctionala la indivizi si grupuri prezinta oportunitati de manipulare si exploatare. O astfel de manipulare are o istorie colorata, implicand in special propaganda, manipularea psihologica si inselaciunea politica.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">5.1 Manipularea psihologica, propaganda, post-adevarul</h3>
    <p><strong>Manipularea psihologica (gaslighting)</strong> se refera la practica sistematica de a alimenta o victima cu falsuri, astfel incat aceasta sa inceapa sa se indoiasca de propria memorie, perceptie sau judecata.</p>
    <p>Indivizii au folosit manipularea psihologica in multe contexte diferite:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>Pentru a acoperi aventurile extraconjugale</li>
      <li>Abuz legat de identitate al copiilor transgender de catre parintii lor</li>
      <li>Manipulare psihologica rasiala pentru a mentine suprematia alba</li>
      <li>Violenta domestica</li>
      <li>Suprimarea denuntatorilor in cadrul institutiilor</li>
    </ul>
    <p><strong>Post-adevarul</strong> descrie declaratii care fac apel la emotiile publicului, ocolind adevarul si ignorand opiniile expertilor sau verificarea faptelor.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">5.2 Ascensiunea negationismului si teoriilor conspiratiei</h3>
    <p><strong>Teoriile conspiratiei</strong> impartasesc unele caracteristici cu negationismul. Ambele implica respingerea faptelor bine stabilite. Caracteristici:</p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>Credinta in actori ascunsi, malevolenti care lucreaza in culise</li>
      <li>Respingerea explicatiilor oficiale ca acoperiri</li>
      <li>Cautarea de tipare in evenimente nerelationate</li>
      <li>Rezistenta la dovezile contrare</li>
    </ul>
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
      <h4 className="font-semibold mb-3">Tehnici cheie de exploatare</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div><p className="font-medium">Dezinformare</p><p className="text-gray-600">Informatii in mod deliberat false raspandite pentru a insela</p></div>
        <div><p className="font-medium">Informatii false</p><p className="text-gray-600">Informatii false distribuite fara intentia de a face rau</p></div>
        <div><p className="font-medium">Malinformare</p><p className="text-gray-600">Informatii adevarate distribuite pentru a cauza rau</p></div>
        <div><p className="font-medium">Propaganda</p><p className="text-gray-600">Promovarea sistematica a unei anumite cauze</p></div>
      </div>
    </div>
  </article>
);

const Chapter6 = () => (
  <article className="prose prose-lg max-w-none">
    <p>Contramasurile impotriva cognitiei sociale disfunctionale pot fi aplicate la mai multe scale, de la nivel individual la nivel societal.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">6.1 Contramasuri la nivel individual</h3>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Alfabetizare mediatica:</strong> Invatarea oamenilor sa evalueze critic sursele</li>
      <li><strong>Constientizarea prejudecatilor cognitive:</strong> Intelegerea propriei susceptibilitati la prejudecata de confirmare</li>
      <li><strong>Inoculare psihologica:</strong> Expunerea preventiva la forme slabite de dezinformare poate construi rezistenta</li>
      <li><strong>Gandire lenta:</strong> Angajarea constienta a rationamentului analitic</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-4">6.2 Contramasuri la nivel de platforma</h3>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Moderarea continutului:</strong> Eliminarea sau etichetarea continutului fals</li>
      <li><strong>Parteneriate de verificare a faptelor:</strong> Colaborarea cu verificatori de fapte independenti</li>
      <li><strong>Ajustari ale algoritmilor:</strong> Reducerea amplificarii continutului senzational</li>
      <li><strong>Deplatformare:</strong> Eliminarea conturilor care raspandesc sistematic continut daunator</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-4">6.3 Contramasuri la nivel societal</h3>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Reglementare:</strong> Legi care cer transparenta in publicitatea politica</li>
      <li><strong>Sprijin pentru jurnalism:</strong> Finantarea mass-media independente</li>
      <li><strong>Rezilienta democratica:</strong> Construirea institutiilor rezistente la manipulare</li>
      <li><strong>Cooperare internationala:</strong> Coordonarea raspunsurilor la razboiul informational</li>
    </ul>
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
      <h4 className="font-semibold mb-3">Cadrul de contramasuri</h4>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">1</div>
          <div><p className="font-medium">Preventie</p><p className="text-sm text-gray-600">Educatie, alfabetizare mediatica, inoculare psihologica</p></div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">2</div>
          <div><p className="font-medium">Detectare</p><p className="text-sm text-gray-600">Verificarea faptelor, analiza continutului asistata de IA</p></div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">3</div>
          <div><p className="font-medium">Raspuns</p><p className="text-sm text-gray-600">Moderarea continutului, deplatformare, contra-mesaje</p></div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">4</div>
          <div><p className="font-medium">Recuperare</p><p className="text-sm text-gray-600">Reconstruirea increderii, corectarea credintelor false</p></div>
        </div>
      </div>
    </div>
  </article>
);

const Chapter7 = () => (
  <article className="prose prose-lg max-w-none">
    <p>Aceasta recenzie a explorat modul in care disfunctiile cognitive la indivizi se propaga prin retelele sociale si sunt amplificate de mediile digitale si IA.</p>
    <h3 className="text-xl font-semibold mt-8 mb-4">Rezumatul constatarilor cheie</h3>
    <div className="space-y-4">
      <div className="border-l-4 border-primary pl-4 py-2">
        <p className="font-semibold">1. Origini evolutive</p>
        <p>Prejudecatile cognitive nu sunt erori aleatorii, ci adaptari evoluate care au sacrificat acuratetea pentru viteza si coeziune sociala.</p>
      </div>
      <div className="border-l-4 border-primary pl-4 py-2">
        <p className="font-semibold">2. Amplificare sociala</p>
        <p>Erorile cognitive individuale sunt amplificate prin retelele sociale prin mecanisme precum ignoranta pluralista si gandirea de grup.</p>
      </div>
      <div className="border-l-4 border-primary pl-4 py-2">
        <p className="font-semibold">3. Accelerare digitala</p>
        <p>Retelele digitale au schimbat fundamental dinamica raspandirii informatiilor. Viteza, scala si amplificarea algoritmica creaza conditii pentru aparitia rapida a gandirii disfunctionale.</p>
      </div>
      <div className="border-l-4 border-primary pl-4 py-2">
        <p className="font-semibold">4. Exacerbare de catre IA</p>
        <p>Inteligenta artificiala atat mosteneste prejudecatile umane, cat si creeaza noi riscuri prin halucinatie si colapsul modelului.</p>
      </div>
      <div className="border-l-4 border-primary pl-4 py-2">
        <p className="font-semibold">5. Exploatare maligna</p>
        <p>Vulnerabilitatile cognitive sunt exploatate sistematic prin manipulare psihologica, propaganda si dezinformare.</p>
      </div>
    </div>
    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
      <h4 className="font-semibold mb-3">Contributii ale autorilor</h4>
      <p className="text-sm">FS: Conceptualizare, Investigatie, Vizualizare, Scriere – draft original, Scriere – revizuire & editare. DG: Conceptualizare, Investigatie, Supervizare. CK: Conceptualizare, Investigatie, Vizualizare.</p>
    </div>
  </article>
);

const ReferencesSection = () => {
  const references = [
    { authors: "Kahneman, D.", year: "2011", title: "Thinking, Fast and Slow", journal: "Farrar, Straus and Giroux" },
    { authors: "Mackay, C.", year: "1841", title: "Extraordinary Popular Delusions and the Madness of Crowds", journal: "Richard Bentley" },
    { authors: "Vosoughi, S., Roy, D., and Aral, S.", year: "2018", title: "The spread of true and false news online", journal: "Science", volume: "359", pages: "1146–1151" },
    { authors: "Janis, I. L.", year: "1972", title: "Victims of Groupthink", journal: "Houghton Mifflin" },
    { authors: "Festinger, L.", year: "1957", title: "A Theory of Cognitive Dissonance", journal: "Stanford University Press" },
    { authors: "Pariser, E.", year: "2011", title: "The Filter Bubble: What the Internet Is Hiding from You", journal: "Penguin Press" },
    { authors: "McIntyre, L.", year: "2018", title: "Post-truth", journal: "MIT Press" },
    { authors: "Helmus, T. C.", year: "2022", title: "Artificial Intelligence, Deepfakes, and Disinformation: A Primer", journal: "RAND Corporation" },
  ];
  return (
    <article>
      <p className="text-gray-500 mb-6">Aceasta sectiune contine o selectie a referintelor cheie din lucrarea completa.</p>
      <div className="space-y-4">
        {references.map((ref, index) => (
          <div key={index} className="text-sm border-b border-gray-200 pb-3 last:border-0">
            <p><span className="font-medium">{ref.authors}</span> ({ref.year}). <em>{ref.title}</em>. <span className="text-gray-500">{ref.journal}{ref.volume && `, ${ref.volume}`}{ref.pages && `, ${ref.pages}`}.</span></p>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-8 italic">
        Lista completa de referinte disponibila in publicatia originala la{" "}
        <a href="https://doi.org/10.3389/fcomm.2025.1547489" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frontiers in Communication</a>.
      </p>
    </article>
  );
};

const AppendixSection = () => {
  const biases = [
    { name: "Gandire rapida", definition: "Raspuns imediat la evenimente, folosind euristici in loc de procesare cognitiva complexa." },
    { name: "Disonanta cognitiva", definition: "Observatiile realitatii sunt inconsistente cu credintele interne." },
    { name: "Supraincredere", definition: "Supraestimarea propriei performante sau acuratete in raport cu altii." },
    { name: "Efectul Dunning-Kruger", definition: "Supraincrederea afisata de indivizi incapabili sa-si evalueze competentele." },
    { name: "Efectul camerei de ecou", definition: "Credintele anterioare sunt consolidate prin expunere repetata la valori coerente." },
    { name: "Prejudecata de confirmare", definition: "Indivizii tind sa-si confirme credintele alegand selectiv dovezi." },
  ];
  const behaviours = [
    { name: "Ignoranta pluralista", definition: "Cand oamenii dintr-un grup se conformeaza unei norme percepand gresit pozitia colegilor lor." },
    { name: "Efectul spectatorului", definition: "Indivizii sunt mai putin predispusi sa ofere ajutor in prezenta altora." },
    { name: "Spirala tacerii", definition: "Disponibilitatea de a-si exprima pozitia depinde de perceptia sentimentului public." },
    { name: "Gandirea de grup", definition: "Un grup coeziv se straduieste sa atinga consensul ignorand punctele de vedere individuale." },
    { name: "Paradoxul Abilene", definition: "Membrii unui grup decid colectiv asupra unui curs de actiune contrar preferintelor lor." },
  ];
  return (
    <article>
      <h3 className="text-xl font-semibold mb-6">Anexa I: Prejudecati si comportamente disfunctionale comune</h3>
      <h4 className="text-lg font-semibold mb-4">Prejudecati si erori</h4>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left p-3 w-1/3">Prejudecata / Eroare</th>
              <th className="text-left p-3">Definitie</th>
            </tr>
          </thead>
          <tbody>
            {biases.map((bias, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-3 font-medium">{bias.name}</td>
                <td className="p-3 text-gray-600">{bias.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="text-lg font-semibold mb-4">Comportamente disfunctionale</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left p-3 w-1/3">Comportament</th>
              <th className="text-left p-3">Definitie</th>
            </tr>
          </thead>
          <tbody>
            {behaviours.map((b, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-3 font-medium">{b.name}</td>
                <td className="p-3 text-gray-600">{b.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default function DisfunctieCognitiva() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["1"]));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const chapters = [
    { id: "1", number: "1", title: "Introducere", component: <Chapter1 /> },
    { id: "2", number: "2", title: "Disfunctia cognitiva la indivizi", component: <Chapter2 /> },
    { id: "3", number: "3", title: "Disfunctia cognitiva in grupuri", component: <Chapter3 /> },
    { id: "4", number: "4", title: "Retele digitale si amplificare", component: <Chapter4 /> },
    { id: "5", number: "5", title: "Exploatarea maligna a gandirii disfunctionale", component: <Chapter5 /> },
    { id: "6", number: "6", title: "Contramasuri", component: <Chapter6 /> },
    { id: "7", number: "7", title: "Concluzie", component: <Chapter7 /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/articole">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-gray-100 transition-colors" data-testid="button-back-articles">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Inapoi la articole</span>
              </button>
            </Link>
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <span className="text-sm font-medium text-gray-500 mr-2">Sari la:</span>
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => {
                  if (!openSections.has(chapter.id)) {
                    toggleSection(chapter.id);
                  }
                  setTimeout(() => {
                    document.getElementById(`chapter-${chapter.id}`)?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className={cn(
                  "px-3 py-1 text-sm rounded-full transition-colors",
                  openSections.has(chapter.id) ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                data-testid={`nav-chapter-${chapter.id}`}
              >
                {chapter.number}
              </button>
            ))}
            <button
              onClick={() => {
                if (!openSections.has("references")) toggleSection("references");
                setTimeout(() => {
                  document.getElementById("chapter-references")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className={cn("px-3 py-1 text-sm rounded-full transition-colors", openSections.has("references") ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}
              data-testid="nav-references"
            >
              Ref.
            </button>
            <button
              onClick={() => {
                if (!openSections.has("appendix")) toggleSection("appendix");
                setTimeout(() => {
                  document.getElementById("chapter-appendix")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className={cn("px-3 py-1 text-sm rounded-full transition-colors", openSections.has("appendix") ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}
              data-testid="nav-appendix"
            >
              Anexa
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <ArticleHeader />
        <div className="space-y-2">
          {chapters.map((chapter) => (
            <div key={chapter.id} id={`chapter-${chapter.id}`}>
              <ChapterSection number={chapter.number} title={chapter.title} isOpen={openSections.has(chapter.id)} onToggle={() => toggleSection(chapter.id)}>
                {chapter.component}
              </ChapterSection>
            </div>
          ))}
          <div id="chapter-references">
            <ChapterSection number="R" title="Referinte" isOpen={openSections.has("references")} onToggle={() => toggleSection("references")}>
              <ReferencesSection />
            </ChapterSection>
          </div>
          <div id="chapter-appendix">
            <ChapterSection number="A" title="Anexa" isOpen={openSections.has("appendix")} onToggle={() => toggleSection("appendix")}>
              <AppendixSection />
            </ChapterSection>
          </div>
        </div>
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Articol original publicat in <a href="https://www.frontiersin.org/journals/communication" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frontiers in Communication</a>, 19 mai 2025</p>
          <p className="mt-2"><a href="https://doi.org/10.3389/fcomm.2025.1547489" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://doi.org/10.3389/fcomm.2025.1547489</a></p>
          <p className="mt-4">Versiune HTML creata pentru citire interactiva. Toate drepturile rezervate autorilor originali.</p>
        </footer>
      </main>
    </div>
  );
}
