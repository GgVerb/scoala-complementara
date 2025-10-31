import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Home, Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import voluntar1 from "@assets/20240802181219_IMG_0099_1751305891721.jpg";
import voluntar2 from "@assets/20240802181210_IMG_0098_1751305947271.jpg";
import voluntar3 from "@assets/20240802181140_IMG_0092 (1)_1751308595731.jpg";
import voluntar4 from "@assets/20240802181003_IMG_0085_1751305947375.jpg";
import voluntar8 from "@assets/20230817143701_IMG_1542_1751306389939.jpg";
import voluntar9 from "@assets/20230816170254_IMG_1251_1751306390041.jpg";
import nouaImagineVoluntar from "@assets/IMG_20241030_125214_1751310249967.jpg";
import nouaImagineVoluntar2 from "@assets/20240802181140_IMG_0092 (1)_1751308595731.jpg";
import nouaImagineVoluntar3 from "@assets/IMG-20250717-WA0003_1752723434328.jpg";
import deCeEuImage from "@assets/2c2525d2-88d7-4b14-802d-689156ea1ad8_1751307511629.jpeg";

interface ArticleContentProps {
  articleId: string;
}

// Article navigation order (articles that appear in blog section)
const blogArticles = [
  { id: "ghidul-educatie-inovatoare", title: "Ghidul pentru o Educație Inovatoare" },
  { id: "scoala-in-padure", title: "Școala în pădure" },
  { id: "scolile-democratice", title: "Școlile democratice" },
  { id: "outward-bound-experimente", title: "Outward Bound și alte experimente" },
  { id: "educatie-experientiala", title: "Educație experiențială" },
  { id: "natura-ca-profesor", title: "Natura ca profesor" },
  { id: "abilitati-complementare", title: "Abilități complementare" },
  { id: "einstein-problema", title: "O variantă a problemei lui Einstein" },
  { id: "curriculum-propunere", title: "Curriculum - propunere" },
  { id: "evolutia-calatoria-timp", title: "Evoluția: O Călătorie de 4.6 Kilometri" }
];

// Component for navigation buttons
function ArticleNavigation({ currentArticleId }: { currentArticleId: string }) {
  const currentIndex = blogArticles.findIndex(article => article.id === currentArticleId);
  
  if (currentIndex === -1) return null; // Article not in blog list
  
  const previousArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;
  
  return (
    <div className="space-y-6 mt-12 pt-8 border-t border-gray-200">
      {/* Back to Articles button */}
      <div className="text-center">
        <Link href="/articole">
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
            Toate articolele
          </Button>
        </Link>
      </div>
      
      {/* Previous/Next navigation */}
      <div className="flex justify-between items-center">
        <div className="flex-1">
          {previousArticle && (
            <Link href={`/articol/${previousArticle.id}`}>
              <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                <ChevronLeft className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Articolul precedent</div>
                  <div className="font-medium">{previousArticle.title}</div>
                </div>
              </Button>
            </Link>
          )}
        </div>
        
        <div className="flex-1 text-right">
          {nextArticle && (
            <Link href={`/articol/${nextArticle.id}`}>
              <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                <div className="text-right">
                  <div className="text-xs text-gray-500">Articolul următor</div>
                  <div className="font-medium">{nextArticle.title}</div>
                </div>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced resource data for Romanian educational organizations with functional links
const resourcesData = [
  { name: "Fundația Noi Orizonturi", category: "experiential", description: "Proiecte comunitare, leadership și comunicare, cu accent pe tinerii din medii defavorizate.", url: "https://www.noi-orizonturi.ro/" },
  { name: "Asociația Greenitiative & parteneri", category: "nature", description: "Platforma 'Școli Verzi' pentru integrarea educației ecologice în curriculum.", url: "https://www.greenitiative.ro/" },
  { name: "Schubz Râșnov", category: "nature", description: "Centru de educație ecologică ce folosește metode interactive și 'flow learning'.", url: "https://schubz.ro/" },
  { name: "Asociația Nevoia de Educație", category: "experiential", description: "Proiecte precum 'Bacopedia' și 'Pauza de teatru' care încurajează învățarea prin joc.", url: "https://nevoiadeeducatie.ro/" },
  { name: "Wow Lab", category: "experiential", description: "Ateliere de științe (fizică, chimie, anatomie) bazate pe experimente distractive.", url: "https://wowlab.ro/" },
  { name: "Centrul Step by Step", category: "experiential", description: "Program educațional alternativ bine stabilit, centrat pe elev și pe implicarea familiei.", url: "https://www.stepbystep.ro/" },
  { name: "Asociația Young Initiative (AYI)", category: "experiential", description: "Împuternicirea tinerilor și educatorilor prin dezvoltarea abilităților de leadership.", url: "https://www.younginitiative.org/" },
  { name: "Edu Apps", category: "digital", description: "Agregator de resurse educaționale digitale, de la video la modelare 3D.", url: "https://eduapps.ro/" },
  { name: "Digitaledu.ro", category: "digital", description: "Platformă cu peste 12.000 de RED-uri și sugestii de activități create de profesori.", url: "https://digitaledu.ro/" },
  { name: "LIVRESQ", category: "digital", description: "Cea mai mare bibliotecă de Resurse Educaționale Deschise (RED) din România.", url: "https://livresq.com/" },
  { name: "Proiectul CRED", category: "digital", description: "Oferă RED-uri aliniate la noul curriculum bazat pe competențe.", url: "https://www.educred.ro/" },
  { name: "Asociația Ascendis", category: "experiential", description: "Proiectul 'KATA în clasă' pentru dezvoltarea gândirii științifice prin practică.", url: "https://www.ascendis.ro/" },
  { name: "WWF România", category: "nature", description: "Proiecte de educație pentru dezvoltare durabilă și ghiduri practice ('Exploratori ai sălbăticiei').", url: "https://www.wwf.ro/" },
  { name: "Kinder Trips", category: "nature", description: "Idei de activități simple în natură și promovarea wildschooling-ului.", url: "https://kindertrips.ro/" },
  { name: "UNICEF România", category: "parenting", description: "Promovează educația parentală de calitate și oferă resurse extinse pentru părinți.", url: "https://www.unicef.org/romania/" },
  { name: "ParentED Fest", category: "parenting", description: "Cel mai mare eveniment de parenting din România, cu experți internaționali.", url: "https://parentedfest.ro/" },
  { name: "Psihoteca.ro", category: "parenting", description: "Articole și resurse psihologice despre parenting pozitiv și stiluri parentale.", url: "https://psihoteca.ro/" },
  { name: "Asociația Școala pentru Democrație", category: "experiential", description: "Sprijină profesorii în aducerea educației democratice mai aproape de elevi.", url: "https://scoalapentrudemocratie.ro/" },
  { name: "Cerehard - Fundația ReDesign", category: "experiential", description: "Platformă inovatoare care conectează educația cu tehnologia pentru a crea experiențe de învățare memorabile și angajante.", url: "https://redesignngo.com/" },
  { name: "Free Learning Festival", category: "experiential", description: "Festival european dedicat educației libere și alternative, reunind educatori și părinți pasionați de metodele inovatoare de învățare.", url: "https://freelearningfestival.eu/" }
];

export default function ArticleContent({ articleId }: ArticleContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredResources, setFilteredResources] = useState(resourcesData);
  const [expandedParentingCard, setExpandedParentingCard] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll function for navigation links
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  // Header animation effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleIconClick = (e: React.MouseEvent) => {
    const icon = e.currentTarget.querySelector('.animate-icon');
    if (icon) {
      icon.classList.add('animate-bounce');
      setTimeout(() => icon.classList.remove('animate-bounce'), 600);
    }
  };

  // Filter and search functionality
  useEffect(() => {
    const filtered = resourcesData.filter(resource => {
      const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredResources(filtered);
  }, [searchTerm, selectedCategory]);

  // Initialize charts after component mounts
  useEffect(() => {
    const loadChartsScript = () => {
      if (typeof window !== 'undefined' && !(window as any).Chart) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = () => initializeCharts();
        document.head.appendChild(script);
      } else if ((window as any).Chart) {
        initializeCharts();
      }
    };

    const initializeCharts = () => {
      setTimeout(() => {
        // Parenting Practices Chart
        const parentingCtx = document.getElementById('parentingPracticesChart') as HTMLCanvasElement;
        if (parentingCtx && (window as any).Chart) {
          new (window as any).Chart(parentingCtx, {
            type: 'doughnut',
            data: {
              labels: ['Recunosc că ridică vocea', 'Folosesc pedepse fizice', 'Alte metode'],
              datasets: [{
                label: 'Practici Parentale în România (%)',
                data: [50, 11, 39],
                backgroundColor: ['#f59e0b', '#ef4444', '#10b981'],
                borderColor: '#fdfdfc',
                borderWidth: 4
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                  callbacks: {
                    label: function(context: any) {
                      return `${context.label}: ${context.raw}%`;
                    }
                  }
                }
              }
            }
          });
        }

        // Civic Education Chart
        const civicCtx = document.getElementById('civicEducationChart') as HTMLCanvasElement;
        if (civicCtx && (window as any).Chart) {
          new (window as any).Chart(civicCtx, {
            type: 'bar',
            data: {
              labels: ['Scor Mediu România', 'Media Internațională'],
              datasets: [{
                label: 'Punctaj Educație Civică',
                data: [478, 519],
                backgroundColor: ['#34d399', '#a7f3d0'],
                borderColor: ['#059669', '#6ee7b7'],
                borderWidth: 1
              }]
            },
            options: {
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { beginAtZero: true, max: 600 }
              },
              plugins: {
                legend: { display: false }
              }
            }
          });
        }
      }, 100);
    };

    loadChartsScript();
  }, []);

  const toggleParentingCard = (cardId: string) => {
    setExpandedParentingCard(expandedParentingCard === cardId ? null : cardId);
  };

  // Handle different article types
  if (articleId === "scoala-in-padure") {
    return (
      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Ce este Școala în Pădure?</h2>
            <p className="text-lg mb-6">
              Școala în Pădure este un model de educație în aer liber, unde elevii vizitează regulat spații naturale pentru a-și dezvolta abilități personale, sociale și tehnice. Este un proces inspirațional care oferă oportunități de a dobândi încredere prin învățarea practică într-un mediu forestier. Este atât o pedagogie, cât și o entitate fizică.
            </p>
            
            <h3 className="text-xl font-semibold text-primary mb-4">Principii Fundamentale:</h3>
            <p className="mb-4">
              Etosul Școlii în Pădure se bazează pe șase principii directoare, care asigură calitatea și coerența programelor:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Proces pe termen lung:</strong> Sesiuni regulate și frecvente, ideal pe o perioadă extinsă, pentru a experimenta diferite condiții meteorologice și anotimpuri.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Locație în mediu natural:</strong> Se desfășoară în păduri sau medii naturale, promovând o relație profundă cu natura.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Abordare holistică a dezvoltării:</strong> Promovează dezvoltarea fizică, socială, cognitivă, lingvistică, emoțională și spirituală, cultivând reziliența, încrederea, independența și creativitatea.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Asumarea riscului sprijinită:</strong> Oferă oportunități de a-și asuma riscuri adecvate, contribuind la dezvoltarea rezilienței și a abilităților de luare a deciziilor.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Practicieni calificați:</strong> Programele sunt conduse de practicieni calificați, instruiți în dezvoltarea copilului și teoriile învățării.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Centrată pe elev:</strong> Utilizează o abordare pedagogică centrată pe elev, răspunzând nevoilor și intereselor individuale, cu accent pe învățarea inițiată de copil și joc.
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Beneficiile Școlii în Pădure</h2>
            <p className="text-lg mb-6">
              Școala în Pădure are un impact pozitiv semnificativ asupra dezvoltării copiilor, conform cercetărilor.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Îmbunătățirea Abilităților Fizice și a Sănătății:</strong> Dezvoltă abilitățile motorii grosiere și fine, coordonarea, echilibrul și rezistența prin activități precum cățăratul în copaci și explorarea terenului. Contribuie la un sistem imunitar mai puternic.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Promovarea Competențelor Socio-Emoționale (SEAL):</strong> Crește încrederea, stima de sine, independența, comunicarea, munca în echipă și abilitățile de rezolvare a problemelor. Ajută la reglarea emoțională și reziliență.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Stimularea Abilităților Cognitive și Restaurarea Atenției:</strong> Încurajează curiozitatea, creativitatea, imaginația, gândirea critică și rezolvarea problemelor. Contribuie la o concentrare și o durată de atenție îmbunătățite.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Cultivarea Conexiunii și a Alfabetizării Ecologice:</strong> Dezvoltă o conexiune profundă cu natura și cultivă atitudini și practici durabile față de mediu.
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Curriculum și Activități Specifice</h2>
            <p className="text-lg mb-6">
              Curriculumul este amplu și transdisciplinar, integrând materii precum mediul natural, geografie, matematică, comunicare, științe și arte, mediul natural fiind resursa principală.
            </p>
            
            <h3 className="text-xl font-semibold text-primary mb-4">Exemple de Activități:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-3">Explorare și Observare a Naturii</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Jurnalism de natură</li>
                  <li>• Vânători de comori cu insecte</li>
                  <li>• Observarea schimbărilor sezoniere</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-3">Arte Creative și Meșteșuguri</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Crearea de jucării din obiecte naturale</li>
                  <li>• Construirea de căsuțe de zâne</li>
                  <li>• Pictarea frunzelor</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-3">Construcție și Inginerie</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Construirea de adăposturi și structuri din materiale naturale</li>
                  <li>• Construirea de poduri</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-3">Abilități Fizice și Motorii</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cățăratul în copaci</li>
                  <li>• Slacklining</li>
                  <li>• Săritul în bălți</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-3">Știință și Ecologie</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Experimente cu semințe</li>
                  <li>• Capcane pentru insecte</li>
                  <li>• Identificarea florei și faunei locale</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-3">Matematică</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Numărarea obiectelor</li>
                  <li>• Măsurarea copacilor</li>
                  <li>• Explorarea modelelor Fibonacci</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Școala în Pădure în România</h2>
            <p className="text-lg mb-6">
              Există un interes crescând pentru educația bazată pe natură în România, cu diverse inițiative și grădinițe inspirate de modelul Școlii în Pădure.
            </p>
            
            <h3 className="text-xl font-semibold text-primary mb-4">Inițiative și Organizații Notabile:</h3>
            <ul className="space-y-4 mb-8">
              <li className="border-l-4 border-primary pl-4">
                <strong><a href="https://scoalainpadure.ro/" target="_blank" className="text-blue-600 hover:text-blue-800">Școala în Pădure (inițiativa Oradea)</a>:</strong> Accent pe învățarea prin joacă, comunicare nonviolentă și conectarea cu natura.
              </li>
              <li className="border-l-4 border-primary pl-4">
                <strong><a href="https://www.peterpanforestkids.ro/" target="_blank" className="text-blue-600 hover:text-blue-800">Peter Pan Forest Kids (Mureș)</a>:</strong> Oferă programe de creșă și grădiniță în natură, cu joc ghidat de copii și asumarea riscului sprijinită.
              </li>
              <li className="border-l-4 border-primary pl-4">
                <strong><a href="https://forestschool.ro/" target="_blank" className="text-blue-600 hover:text-blue-800">Forest School Romania</a>:</strong> Combină abordarea Waldorf cu curriculumul național românesc, cu activități variate.
              </li>
              <li className="border-l-4 border-primary pl-4">
                <strong><a href="https://www.youtube.com/watch?v=JAvSZce5tI4" target="_blank" className="text-blue-600 hover:text-blue-800">Asociația Nature Talks („Școala din Pădure")</a>:</strong> A organizat programe de educație ecologică în Pepiniera Cozieni, Ilfov.
              </li>
              <li className="border-l-4 border-primary pl-4">
                <strong><a href="https://padureademaine.ro/" target="_blank" className="text-blue-600 hover:text-blue-800">Fundația Pădurea de Mâine („Școala de Pădure")</a>:</strong> Oferă ateliere de învățare experiențială despre ecosisteme forestiere pentru copii și adulți, cu scopul de a crea o rețea națională.
              </li>
              <li className="border-l-4 border-primary pl-4">
                <strong><a href="https://www.rosilva.ro/" target="_blank" className="text-blue-600 hover:text-blue-800">Regia Națională a Pădurilor – Romsilva</a>:</strong> Oferă resurse educaționale, inclusiv manuale și caiete de lucru pentru educația forestieră.
              </li>
              <li className="border-l-4 border-primary pl-4">
                <strong><a href="https://outwardbound.ro/" target="_blank" className="text-blue-600 hover:text-blue-800">Outward Bound Romania (OBR)</a>:</strong> Oferă programe „Școala Naturii" pentru grupuri școlare, axate pe învățare experiențială, leadership și educație ecologică.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Resurse Online Recomandate</h2>
            <p className="text-lg mb-6">
              Pentru părinți, educatori și comunități interesate, iată câteva dintre cele mai bune și complete resurse online:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <div className="border-b border-blue-200 pb-4">
                <strong>Ghid de activități în natură (Școala în Pădure Oradea):</strong> Oferă ghiduri de activitate și fișe de lucru pentru activități educative în natură. 
                <a href="https://scoalainpadure.ro/resurse/" target="_blank" className="text-blue-600 hover:text-blue-800 block mt-1">scoalainpadure.ro/resurse/</a>
              </div>
              
              <div className="border-b border-blue-200 pb-4">
                <strong>Manual de educație forestieră „Prin Pădurile României" (Romsilva):</strong> Un manual și caiete de lucru pentru elevi și profesori, pentru orele de educație forestieră.
                <a href="https://www.rosilva.ro/articole/biblioteca_de_resurse__p_3003.htm" target="_blank" className="text-blue-600 hover:text-blue-800 block mt-1">rosilva.ro/articole/biblioteca_de_resurse__p_3003.htm</a>
              </div>
              
              <div className="border-b border-blue-200 pb-4">
                <strong>Forest School Association (FSA) (UK):</strong> Organism profesional și voce la nivelul Regatului Unit pentru Școala în Pădure, promovând cele mai bune practici și calitate.
                <a href="https://forestschoolassociation.org/" target="_blank" className="text-blue-600 hover:text-blue-800 block mt-1">forestschoolassociation.org/</a>
              </div>
              
              <div className="border-b border-blue-200 pb-4">
                <strong>Forest School Learning Initiative (FSLI):</strong> Furnizor de formare acreditat pentru lideri de Școală în Pădure, cu resurse despre beneficiile și aplicabilitatea modelului.
                <a href="https://fsli.co.uk/" target="_blank" className="text-blue-600 hover:text-blue-800 block mt-1">fsli.co.uk/</a>
              </div>
              
              <div className="border-b border-blue-200 pb-4">
                <strong>28 Forest School Activities To Entice Kids Outside (Rediscovered Families):</strong> O listă bogată de idei practice de activități pentru Școala în Pădure.
                <a href="https://rediscoveredfamilies.com/forest-school-activities/" target="_blank" className="text-blue-600 hover:text-blue-800 block mt-1">rediscoveredfamilies.com/forest-school-activities/</a>
              </div>
              
              <div className="border-b border-blue-200 pb-4">
                <strong>K-5 Forest Lessons (Green Schoolyards America):</strong> Exemple de cadre curriculare și lecții pentru grădinițe și școli primare.
                <a href="https://www.greenschoolyards.org/elementary-forest-lessons" target="_blank" className="text-blue-600 hover:text-blue-800 block mt-1">greenschoolyards.org/elementary-forest-lessons</a>
              </div>
              
              <div>
                <strong>Forest School For All (Seasonal Curriculums):</strong> Oferă programe de natură descărcabile, structurate pe sezoane, cu teme și activități săptămânale.
                <a href="https://forestschoolforall.com/curriculum/" target="_blank" className="text-blue-600 hover:text-blue-800 block mt-1">forestschoolforall.com/curriculum/</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (articleId === "scolile-democratice") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">

          <p className="text-lg">
            Școlile democratice sunt neobișnuite în comparație cu sistemele de învățământ tradiționale datorită modului în care abordează procesul educațional și relația dintre elevi, profesori și curriculum. Câteva caracteristici distinctive includ:
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Elevii își aleg ce, cum și când să învețe
          </h2>
          <p className="text-lg">
            În școlile democratice, nu există un curriculum fix. Elevii au libertatea de a-și decide singuri activitățile și subiectele pe care doresc să le exploreze. De exemplu, un elev poate alege să petreacă o zi studiind științe naturale, iar altul poate opta să lucreze la un proiect artistic.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Deciziile sunt luate democratic
          </h2>
          <p className="text-lg">
            Toți membrii comunității școlare, inclusiv elevii și profesorii, au drepturi egale în luarea deciziilor. De exemplu, în școala Summerhill din Marea Britanie, fiecare elev are un vot egal cu cel al profesorilor în cadrul adunărilor școlare, unde se discută reguli sau probleme administrative.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Nu există note sau evaluări standardizate
          </h2>
          <p className="text-lg">
            Elevii nu sunt evaluați prin teste sau note clasice. În schimb, progresul lor este măsurat prin observații, proiecte sau auto-reflecție. De exemplu, un elev poate lucra la un proiect personal și să primească feedback detaliat în loc de o notă.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Metode specifice
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <strong>Învățarea bazată pe proiecte:</strong> Multe școli democratice pun accentul pe învățarea bazată pe proiecte, în care elevii se implică în proiecte practice și activități din lumea reală.
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <strong>Întâlniri cu comunitatea:</strong> Întâlnirile regulate ale comunității oferă un forum pentru elevi, profesori și personal pentru a discuta probleme.
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <strong>Guvernanța democratică:</strong> Unele școli democratice au un consiliu de conducere care joacă un rol în guvernarea școlii.
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Rezolvarea conflictelor
          </h2>
          <p className="text-lg">
            Rezolvarea conflictelor în școlile democratice este un mare capitol din activitatea acestora datorită libertății maxime care se acordă elevilor. Se concentrează pe promovarea unei culturi a comunicării deschise, a empatiei și a colaborării.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
            <p className="text-lg font-medium text-primary">
              Prin punerea în aplicare a metodelor de rezolvare a conflictelor, școlile democratice creează un mediu în care conflictele sunt văzite ca oportunități de creștere, de învățare și de construire a unor relații mai puternice în cadrul comunității școlare.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (articleId === "outward-bound-experimente") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">

          <p className="text-lg font-medium text-primary">
            În România avem o școală la Sovata. Recomand fără nici o rezervă centrul <a href="https://outwardbound.ro/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-bold">Outward Bound România</a>. Oamenii de acolo nu sunt doar pasionați, au zeci de ani experiență, cursuri de perfecționare și toate astea în mediu internațional.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Primele Inițiative Educaționale Experiențiale
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-primary mb-2">Experiența de la Marina Ewald și Kurt Hahn (1925)</h3>
              <p className="text-lg">În 1925, Marina Ewald și Kurt Hahn au organizat o expediție de patru săptămâni în Finlanda pentru 20 de studenți. Acesta a fost unul dintre primele exemple de învățare prin experiență, implicând călătorie pe lacuri și trasee terestre, trăită în natură.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-primary mb-2">Salem School (1920)</h3>
              <p className="text-lg">Kurt Hahn a fondat Școala Salem în Germania, unde educația se concentra pe dezvoltarea caracterului și a lideranței prin experiențe practice și expediții.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-primary mb-2">Gordonstoun School (1934)</h3>
              <p className="text-lg">Hahn a continuat să dezvolte aceleași principii la Școala Gordonstoun din Scoția, unde educația a inclus expediții și activități de aventură pentru a dezvolta competențe practice și spirit de echipă.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Programul Outward Bound
          </h2>
          <p className="text-lg">
            Outward Bound a fost fondat în 1941 de Lawrence Holt și Kurt Hahn în Aberdyfi, Wales, în timpul celui de-al Doilea Război Mondial. Inițial, programul a fost creat pentru a îmbunătăți șansele de supraviețuire a tinerilor marini în cazul în care navele lor ar fi fost torpilate în Atlantic.
          </p>

          <h3 className="text-xl font-bold text-primary mt-6 mb-3">Evoluția Programului</h3>
          <div className="space-y-3">
            <p className="text-lg">
              <strong>Primul Program pentru Femei (1951):</strong> În 1951, Outward Bound a lansat primul program pentru femei, extinzând accesul la experiențe de învățare prin experiență.
            </p>
            <p className="text-lg">
              <strong>Expansiunea Internațională (1950-1960):</strong> Începând cu anii '50, au apărut școli Outward Bound în alte țări, inclusiv Australia și Marea Britanie.
            </p>
            <p className="text-lg">
              <strong>Impactul pe Organizații și Programe (1950-1980):</strong> Programul Outward Bound a influențat numeroase organizații și programe, inclusiv Peace Corps-ul SUA și Premiul Prințului Filip.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Alte programe educaționale experiențiale
          </h2>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <strong>NOLS (National Outdoor Leadership School):</strong> Fondată în 1965, oferă programe de formare în leadership și supraviețuire în mediul natural, inclusiv expediții pe munte și cursuri de navigație.
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <strong>EcoChallenge:</strong> Un program internațional care încurajează echipe să participe la provocări de aventură și de mediu, combinând activități de explorare a naturii cu educație despre durabilitate.
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <strong>Wilderness Inquiry:</strong> O organizație care oferă experiențe de aventură și explorare a naturii pentru persoanele cu dizabilități și comunitățile marginalizate.
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <strong>Project Adventure:</strong> Un program de educație bazat pe aventură implementat în numeroase școli din SUA, concentrat pe dezvoltarea competențelor sociale, emoționale și fizice.
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <strong>Teton Science Schools:</strong> O organizație educațională care oferă programe de experiență în mediul natural pentru elevi și profesori, cu accent pe învățarea prin observație și explorare.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (articleId === "educatie-experientiala") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">

          <p className="text-lg">
            Este cea mai veche metodă și probabil în același timp cea mai nouă metodă de educație.
          </p>

          <p className="text-lg">
            Imaginați-vă învățământul înainte de a exista învățământ, școală sau profesori. Ți se punea în mână o sapă și 2-3 săptămâni mai târziu știai ce ai de făcut. Sau în meseriile mai complicate erai (slugă) trei-cinci ani, apoi ucenic alți ani, și calfă până ajungeai "meșter". Din metoda de educație folosită atunci s-a scos partea abuzivă și se numește acum educație experiențială.
          </p>

          <p className="text-lg font-medium text-primary">
            Metoda experiențială în educație se bazează pe ideea că învățarea este cel mai eficientă atunci când elevii participă activ și își folosesc propriile experiențe pentru a înțelege conceptele.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Contribuții semnificative la metoda experiențială
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-primary mb-2">1. John Dewey (1859-1952)</h3>
              <p className="text-lg">Considerat unul dintre pionierii educației progresive, Dewey a promovat ideea că învățarea ar trebui să fie activă și centrată pe elev. El a susținut că educația ar trebui să fie legată de experiențele reale ale copiilor.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-primary mb-2">2. Jean Piaget (1896-1980)</h3>
              <p className="text-lg">Psiholog elvețian cunoscut pentru teoria sa despre stadiile de dezvoltare cognitivă. Piaget a subliniat importanța învățării prin acțiune și explorare pentru dezvoltarea intelectuală a copiilor.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-primary mb-2">3. Lev Vygotsky (1896-1934)</h3>
              <p className="text-lg">Psiholog rus care a dezvoltat teoria dezvoltării socio-culturale, punând accent pe rolul interacțiunii sociale în procesul de învățare. El a propus conceptul de „zonă de dezvoltare proximală", evidențiind importanța mentoratului și sprijinului în învățare.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-primary mb-2">4. David Kolb (n. 1939)</h3>
              <p className="text-lg">Psiholog american cunoscut pentru „modelul ciclic al învățării experiențiale" care descrie învățarea ca un proces continuu format din patru etape: experiență concretă, reflecție, conceptualizare abstractă și experimentare activă.</p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-primary mb-2">5. Carl Rogers (1902-1987)</h3>
              <p className="text-lg">Psiholog american care a promovat conceptul de „învățare centrată pe elev", subliniind importanța experienței personale și a dezvoltării individului în procesul de învățare.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Importanța Metodei Experiențiale
          </h2>

          <p className="text-lg mb-6">
            Metoda experiențială oferă o alternativă valoroasă la educația tradițională, în care elevii sunt adesea receptori prea pasivi ai informațiilor. Prin implicarea activă în procesul de învățare, elevii dezvoltă abilități critice de gândire, înțeleg mai bine conceptele și își dezvoltă competențele practice necesare în viața reală.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
            <p className="text-lg font-medium text-primary">
              Aici, la Școala Complementară, noi astia mai adulți ("mentorii") putem expune idei, propunem programe/proiecte dar nu facem nimic până nu avem decizia elevului. Beneficiarul procesului, cel care se formează, doar el decide startul, ritmul, traseul și finalul procesului/proiectului/activității.
            </p>
          </div>

          {/* Buton pentru raportul extins */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                const htmlContent = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educația Experiențială: Ghid Sintetizat</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 20px auto;
            padding: 0 15px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
        }
        details {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        summary {
            font-weight: bold;
            padding: 15px 20px;
            cursor: pointer;
            outline: none;
            list-style: none; /* Remove default arrow */
            position: relative;
        }
        summary::-webkit-details-marker {
            display: none; /* Remove default arrow for WebKit browsers */
        }
        summary::before {
            content: '►'; /* Custom arrow */
            position: absolute;
            left: 10px;
            font-size: 0.8em;
            transition: transform 0.2s;
        }
        details[open] summary::before {
            transform: rotate(90deg);
        }
       .content {
            padding: 10px 20px 15px 20px;
            border-top: 1px solid #eee;
        }
       .content ul {
            list-style-type: disc;
            margin-left: 20px;
            padding-left: 0;
        }
       .content ul ul {
            list-style-type: circle;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <h1>Educația Experiențială: Ghid Sintetizat</h1>

    <details open>
        <summary><h2>1. Introducere în Educația Experiențială</h2></summary>
        <div class="content">
            <p>Educația experiențială este o filozofie pedagogică ce implică angajarea elevilor în experiențe directe și reflecția conștientă asupra acestora, pentru a le amplifica cunoștințele, a le dezvolta abilitățile și a le consolida capacitatea de a contribui în comunități. Se diferențiază de învățarea tradițională, bazată pe memorare, prin accentul pe aplicarea practică și participarea activă.</p>
        </div>
    </details>

    <details>
        <summary><h2>2. Explicația Metodei de Învățare Experiențială</h2></summary>
        <div class="content">
            <details>
                <summary><h3>2.1. Principii Fundamentale</h3></summary>
                <div class="content">
                    <ul>
                        <li><strong>Angajament Activ:</strong> Elevii pun întrebări, investighează, experimentează, rezolvă probleme și își asumă responsabilitatea.</li>
                        <li><strong>Experiență Directă:</strong> Cunoașterea se dobândește prin interacțiune nemijlocită cu situații autentice.</li>
                        <li><strong>Reflecție Focalizată:</strong> Învățarea profundă apare prin reflecția asupra experiențelor, conectându-le la cunoștințe preexistente.</li>
                        <li><strong>Învățare Holistică:</strong> Procesul angajează elevii intelectual, emoțional, social și fizic.</li>
                        <li><strong>Dezvoltarea Relațiilor:</strong> Cultivă relația elevului cu sine, cu ceilalți și cu lumea.</li>
                        <li><strong>Acceptarea Incertitudinii și a Riscului:</strong> Procesul poate include succesul, eșecul și asumarea de riscuri.</li>
                        <li><strong>Rolul Facilitatorului:</strong> Educatorul creează experiențe, stabilește limite, sprijină elevii și asigură siguranța.</li>
                        <li><strong>Context Social:</strong> Cunoștințele sunt construite social, bazându-se pe experiențe într-un mediu social.</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary><h3>2.2. Teoreticieni Cheie și Evoluția Istorică</h3></summary>
                <div class="content">
                    <p>Rădăcinile învățării experiențiale se găsesc la filosofi antici precum Aristotel.</p>
                    <ul>
                        <li><strong>John Dewey</strong> (1859–1952): A subliniat importanța învățării active, unde elevii se angajează în experiențe, reflectă și își construiesc cunoștințele. Lucrarea sa <a href="https://eric.ed.gov/?id=ED481922">"Experience and Education"</a> (1938) este fundamentală. El a distins între experiența imediată și cea mediată (reflecția).</li>
                        <li><strong>Jean Piaget:</strong> Prin teoria sa a dezvoltării cognitive, a conectat învățarea activă (acționarea asupra realității) cu procesul de învățare și cunoaștere.</li>
                        <li><strong>David A. Kolb:</strong> A popularizat conceptul, dezvoltând teoria învățării experiențiale, bazată pe ideea că învățarea este un proces prin care cunoașterea este creată prin transformarea experienței. Teoria sa a fost influențată de Piaget, Dewey și Kurt Lewin.</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary><h3>2.3. Ciclul de Învățare Experiențială al lui Kolb</h3></summary>
                <div class="content">
                    <p>Kolb a propus un ciclu de învățare din patru etape continue:</p>
                    <ol>
                        <li><strong>Experiență Concretă (CE):</strong> "A simți" – implicarea într-o activitate practică sau situație reală.</li>
                        <li><strong>Observare Reflectivă (RO):</strong> "A privi" – reflecția asupra experienței pentru a înțelege semnificația.</li>
                        <li><strong>Conceptualizare Abstractă (AC):</strong> "A gândi" – conectarea experiențelor la cunoștințe existente sau teorii.</li>
                        <li><strong>Experimentare Activă (AE):</strong> "A face" – aplicarea noilor idei în situații noi pentru a testa și rafina înțelegerea.</li>
                    </ol>
                    <p>Elevii pot intra în ciclu în orice moment, având preferințe naturale pentru stilul de învățare. Kolb a identificat patru stiluri:</p>
                    <ul>
                        <li><strong>Acomodator (CE și AE):</strong> Adaptabil, rezolvator de probleme.</li>
                        <li><strong>Divergent (CE și RO):</strong> Analitic, preferă să observe și să reflecte.</li>
                        <li><strong>Asimilator (AC și RO):</strong> Interesat de idei și concepte, observator.</li>
                        <li><strong>Convergent (AC și AE):</strong> Tehnic, independent, practic, îi place să aplice învățarea.</li>
                    </ul>
                </div>
            </details>
        </div>
    </details>

    <details>
        <summary><h2>3. Metodologii și Aplicații Practice</h2></summary>
        <div class="content">
            <details>
                <summary><h3>3.1. Învățarea Bazată pe Proiecte (Project-Based Learning - PBL)</h3></summary>
                <div class="content">
                    <p>Elevii se angajează în situații reale pentru a dobândi cunoștințe și abilități prin experiență directă și reflecție.</p>
                    <ul>
                        <li><strong>Exemple:</strong> Crearea unui site web pentru un produs, producerea unui videoclip PSA, proiectarea unui pod, crearea unei picturi murale comunitare, cercetarea și acțiunea asupra evenimentelor curente, producerea unui podcast, proiectarea unui loc de joacă, scrierea de cărți de matematică cu scenarii reale, analiza nutrițională a rețetelor, cercetarea dispariției dinozaurilor, conceperea unei civilizații antice.</li>
                        <li><strong>Beneficii:</strong> Gândire critică, aplicarea cunoștințelor, colaborare, rezolvare de probleme.</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary><h3>3.2. Învățarea prin Serviciu în Comunitate (Service-Learning)</h3></summary>
                <div class="content">
                    <p>Elevii colaborează cu organizații non-profit pentru a învăța conținutul cursului, abordând o nevoie reală a comunității.</p>
                    <ul>
                        <li><strong>Tipuri:</strong>
                            <ul>
                                <li><strong>Serviciu Direct:</strong> Angajament interpersonal (tutorat, citire pentru vârstnici).</li>
                                <li><strong>Serviciu Indirect:</strong> Îndeplinirea unei nevoi comunitare fără angajament direct (planificare strângere de fonduri, dezvoltare strategie social media, curățare parc).</li>
                            </ul>
                        </li>
                        <li><strong>Exemple:</strong> Colaborarea cu organizații de sănătate, predarea scrierii creative, campanii de sănătate, sondaje în școli, colectarea de haine, proiecte de mediu (plantare copaci), producerea de piese de teatru anti-criminalitate, organizarea de clase de artă, crearea de hărți pentru nou-veniți, programe de tutorat, voluntariat la centre de criză.</li>
                        <li><strong>Componente esențiale:</strong> Vocea comunității și a elevilor, acțiunea bine gândită, orientarea și instruirea, reflecția și evaluarea.</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary><h3>3.3. Educația în Aer Liber (Outdoor Education)</h3></summary>
                <div class="content">
                    <p>Învățare organizată în mediul natural, utilizându-l ca sală de clasă.</p>
                    <ul>
                        <li><strong>Exemple:</strong> Excursii pe teren pentru studiu flora/fauna, programe de aventură (alpinism, canotaj, orientare), experimente științifice în aer liber, proiecte de serviciu comunitar (plantare copaci), studiu ecologie, activități de team-building, învățarea abilităților de supraviețuire (construire adăposturi, aprindere foc), tir cu arcul, pescuit, camping, drumeții.</li>
                        <li><strong>Beneficii:</strong> Sănătate fizică, responsabilitate față de mediu, muncă în echipă, leadership.</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary><h3>3.4. Alte Forme de Aplicare</h3></summary>
                <div class="content">
                    <ul>
                        <li><strong>Stagii (Internships) și Muncă Clinică:</strong> Expunere directă la lumea reală și aplicarea cunoștințelor.</li>
                        <li><strong>Proiecte de Cercetare Ghidată:</strong> Explorarea aprofundată a subiectelor de interes.</li>
                        <li><strong>Simulări și Jocuri de Rol:</strong> Replicarea situațiilor reale într-un mediu controlat.</li>
                        <li><strong>Organizații Studențești și Comunități de Învățare Rezidențiale:</strong> Oportunități de învățare experiențială în afara cursului formal.</li>
                        <li><strong>Proiecte de Curs și Lucrări de Licență/Disertație (Capstones):</strong> Aplicarea și sintetizarea cunoștințelor într-un proiect amplu.</li>
                    </ul>
                </div>
            </details>
        </div>
    </details>

    <details>
        <summary><h2>4. Diferențierea Învățării Experiențiale de Concepte Similare</h2></summary>
        <div class="content">
            <ul>
                <li><strong>Constructivismul:</strong> O teorie a învățării unde elevii își construiesc propriul sens și cunoștințe prin reflecția și interpretarea experiențelor. Este un proces activ, cu rol de colaborare între instructor și student, și importanța contextului.</li>
                <li><strong>Învățarea Activă (Active Learning):</strong> Termen umbrelă cu rădăcini în constructivism, care subliniază învățarea prin construirea pe cunoștințe anterioare. Elevii sunt participanți activi (discuții, proiecte de grup).</li>
                <li><strong>Învățarea Experiențială (Experiential Learning - EL):</strong> Se definește prin învățarea prin participare semnificativă și reflecție structurată asupra experiențelor reale sau simulate. Implică aplicarea teoriei în situații din lumea reală. Este înrădăcinată în teoria lui Kolb.</li>
            </ul>
        </div>
    </details>

    <details>
        <summary><h2>5. Instituții și Școli care Utilizează Educația Experiențială</h2></summary>
        <div class="content">
            <details>
                <summary><h3>5.1. Exemple Globale (Universități și Școli Alternative)</h3></summary>
                <div class="content">
                    <h4>Universități:</h4>
                    <ul>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">Northeastern University</a></strong> (Boston, MA, SUA): Renumită pentru programul co-op, alternând studii cu experiență de muncă.</li>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">Drexel University</a></strong> (Philadelphia, PA, SUA): Program co-op puternic, cu până la 18 luni de experiență de muncă.</li>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">Antioch College</a></strong> (Yellow Springs, OH, SUA): Combină academicul cu experiența de muncă.</li>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">College of the Atlantic</a></strong> (Bar Harbor, ME, SUA): Model interdisciplinar cu învățare bazată pe proiecte.</li>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">Warren Wilson College</a></strong> (Asheville, NC, SUA): Studenții lucrează în campus și participă la programe de implicare comunitară.</li>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">Colorado College</a></strong> (Colorado Springs, CO, SUA): Funcționează pe un "Block Plan" pentru studii intensive și oportunități experiențiale.</li>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">Elon University</a></strong> (Elon, NC, SUA): Accent pe învățarea experiențială în toate disciplinele (studii în străinătate, stagii, cercetare, service-learning).</li>
                        <li><strong><a href="https://www.collegevine.com/faq/30203/experiential-learning-focused-colleges">Dartmouth College</a></strong> (Hanover, NH, SUA): Calendarul "D-plan" permite perioade libere pentru cercetare sau experiențe de muncă.</li>
                        <li><strong><a href="https://www.qu.edu/academics/experiential-learning/">Quinnipiac University</a></strong> (SUA): Abordare transformatoare cu stagii, muncă clinică, service-learning, cercetare ghidată, organizații studențești și proiecte multidisciplinare.</li>
                    </ul>
                    <h4>Școli Alternative:</h4>
                    <ul>
                        <li><strong><a href="https://eslexpat.com/blog/experimental-education-9-world-famous-alternative-schools/">The Waldorf School</a></strong> (Stuttgart, Germania, 1919).</li>
                        <li><strong><a href="https://eslexpat.com/blog/experimental-education-9-world-famous-alternative-schools/">Decroly School</a></strong> (Bruxelles, Belgia, 1907): Motto-ul "a acționa pentru a învăța, nu a studia pentru a acționa".</li>
                        <li><strong><a href="https://eslexpat.com/blog/experimental-education-9-world-famous-alternative-schools/">Dalton School</a></strong> (New York, SUA, 1919): Elevii semnează contracte de învățare, profesorii sunt consultanți.</li>
                        <li><strong><a href="https://eslexpat.com/blog/experimental-education-9-world-famous-alternative-schools/">Summerhill School</a></strong> (Dresda, Germania, 1921; Suffolk, Anglia, 1927): Școala se adaptează copilului.</li>
                        <li><strong><a href="https://eslexpat.com/blog/experimental-education-9-world-famous-alternative-schools/">THINK Global</a></strong> (SUA, 2010): Elevii își schimbă țara la fiecare semestru, cu imersiune totală.</li>
                        <li><strong><a href="https://eslexpat.com/blog/experimental-education-9-world-famous-alternative-schools/">ALPHA Alternative School</a></strong> (Toronto, Canada, 1972): Fiecare copil este unic și se dezvoltă în ritmul propriu.</li>
                        <li><strong><a href="https://eslexpat.com/blog/experimental-education-9-world-famous-alternative-schools/">Ørestad Gymnasium</a></strong> (Copenhaga, Danemarca, 2005): Elevii se familiarizează cu lumea media.</li>
                        <li><strong><a href="https://www.gov.gg/CHttpHandler.ashx?id=121630&p=0">Experiential Education (EXE)</a></strong> în Flandra și Olanda (începând cu 1976): Model educațional nou pentru preșcolari, răspândit în aproximativ 20 de țări.</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary><h3>5.2. Educația Experiențială în România (Asociații, Școli și Proiecte)</h3></summary>
                <div class="content">
                    <h4>Asociații și Organizații:</h4>
                    <ul>
                        <li><strong><a href="https://demetrius.ro/">Asociația Demetrius</a></strong> (Iași): Misiunea de a crea o societate împlinită. Implementează proiecte cu elemente de învățare experiențială și non-formală, precum:
                            <ul>
                                <li>"Digital Eco-Leadership" (DigiEco): Dezvoltă abilități în educația ecologică și competențe digitale.</li>
                                <li>ECOSTAND: Îmbunătățește cunoștințele elevilor privind problemele de mediu și prevenirea dezastrelor prin jocuri.</li>
                                <li>FINGO: Îmbunătățește alfabetizarea financiară prin metode experimentale bazate pe jocuri.</li>
                                <li>EInMU (Inclusive and Interactive Education in Museums): Utilizează muzeele pentru activități educaționale inovatoare.</li>
                                <li>ECOSTREAM: Creșterea conștientizării efectelor schimbărilor climatice prin simulare socială și jocuri.</li>
                                <li>Alte proiecte: "Artă pentru autism", "Burnout Blueprint", "Face Equality", "Me-Rest", "YES4eLearning", "EcoExpress", "Youth's Creative Voice", "NOT ME", "Împreună dăm voce drepturilor tale!", "Creativity STOPS Bullying", "SIGE", "ArtTera", "CyberAware" și "JOY".</li>
                            </ul>
                        </li>
                        <li><strong><a href="https://pedex.ro/">Asociația Juvenala</a></strong> (Piatra Neamț): Implementează proiectul "Pedagogie experiențială" în parteneriat cu Newschool AS din Norvegia, vizând îmbunătățirea procesului educațional și incluziunea socială.</li>
                        <li><strong><a href="https://www.scoalababel.ro/formare/">Asociația Părinți în Dialog</a></strong> (sub umbrela Babel Școală + Liceu, Timișoara): A creat Centrul pentru Formare în Educație Experiențială, oferind formări și materiale.</li>
                        <li><strong><a href="https://wwf.ro/ce-facem/educatie/scoli-verzi/">WWF România</a>:</strong> Prin proiectul "Școli Verzi", aduce în școli contactul direct cu natura și învățarea experiențială.</li>
                        <li><strong><a href="https://www.microregiuneacarastimis.ro/ong-uri">Asociația "EDULOGIA"</a>:</strong> (Caraș-Severin): Susține și promovează alternative educaționale pentru dezvoltare durabilă bazate pe tehnologia informațională.</li>
                    </ul>
                    <h4>Școli:</h4>
                    <ul>
                        <li><strong><a href="https://www.scoalababel.ro/formare/">Babel Școală + Liceu</a></strong> (Timișoara): Prezentată ca fiind "singura școală" din România care a adoptat și adaptat principiile educației experiențiale la sistemul românesc, cu 7 ani de experiență (clasele 0-12).</li>
                        <li><strong><a href="https://pedex.ro/">Școli din Județul Neamț și Suceava</a>:</strong> 11 școli partenere în proiectul "Pedagogie experiențială" al Asociației Juvenala.</li>
                    </ul>
                </div>
            </details>
        </div>
    </details>

    <details>
        <summary><h2>6. Informații Suplimentare Relevante și Resurse</h2></summary>
        <div class="content">
            <details>
                <summary><h3>6.1. Asociații Profesionale și Rețele</h3></summary>
                <div class="content">
                    <ul>
                        <li><strong><a href="https://www.aee.org/member-resources">Association for Experiential Education (AEE)</a>:</strong> Comunitate globală de cercetători și practicieni, oferă resurse, publicații (Journal of Experiential Education), dezvoltare profesională, conferințe și certificări.</li>
                        <li><strong><a href="https://www.societyforee.org/">National Society for Experiential Education (NSEE)</a>:</strong> Organizație non-profit de top, reunește cercetători și practicieni, promovând stagii, micro-experiențe, service-learning și experiențe globale. Oferă certificarea Experiential Education Academy (EEA).</li>
                        <li><strong><a href="https://www.iseeninfo.com/">ISEEN (Independent Schools Experiential Education Network)</a>:</strong> Rețea care conduce și extinde predarea și învățarea experiențială transformatoare. Oferă institute de formare specializate (Catalyst Institute, Winter Institute, Summer Institute).</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary><h3>6.2. Publicații și Jurnale Academice</h3></summary>
                <div class="content">
                    <ul>
                        <li><strong>Jurnale Cheie Specifice Educației Experiențiale:</strong>
                            <ul>
                                <li><a href="https://www.aee.org/journal-of-experiential-education"><em>Journal of Experiential Education</em></a>.</li>
                                <li><em>Experiential Learning and Teaching in Higher Education</em>.</li>
                            </ul>
                        </li>
                        <li><strong>Alte Jurnale Relevante:</strong> <em>Active Learning in Higher Education</em>, <em>Career and Technical Education Research</em>, <em>International Journal for the Scholarship of Teaching and Learning</em>, <em>Journal of Student Affairs Research and Practice</em>, <em>Journal of the Scholarship of Teaching and Learning</em>, <em>Journal of Transformative Education</em>, <em>Journal of Transformative Learning</em>, <em>Metropolitan Universities Journal</em>, <em>Teaching and Learning Inquiry</em>, <em>International Journal of Educational Research</em>, <em>International Journal for Students as Partners</em>, <em>Journal of College Student Development</em>.</li>
                        <li><strong>Jurnale Sub-tip (axate pe aspecte specifice):</strong> <em>Gateways: International Journal of Community Research and Engagement</em>, <em>International Journal of Research on Service-Learning and Community Engagement</em>, <em>International Journal of Work-Integrated Learning</em>.</li>
                        <li><strong>Lucrări Fundamentale:</strong>
                            <ul>
                                <li>"Experience and Education" de John Dewey (1938).</li>
                                <li>"Experiential Learning: Experience as the Source of Learning and Development" de David Kolb (1984).</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </details>
        </div>
    </details>

    <div style="text-align: center; margin: 30px 0; padding: 20px;">
        <button onclick="window.close()" style="
            background-color: white;
            color: #2c3e50;
            border: 2px solid #f97316;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.2s;
        " onmouseover="this.style.backgroundColor='#fff7ed'; this.style.transform='scale(1.05)'" onmouseout="this.style.backgroundColor='white'; this.style.transform='scale(1)'">
            ← Înapoi
        </button>
    </div>

</body>
</html>`;
                
                const blob = new Blob([htmlContent], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const newWindow = window.open(url, '_blank');
                
                // Cleanup the URL after the window is loaded
                if (newWindow) {
                  newWindow.onload = () => {
                    URL.revokeObjectURL(url);
                  };
                }
              }}
              className="bg-white text-primary border-2 border-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 font-medium text-lg shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📊 Un raport extins despre EE
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (articleId === "natura-ca-profesor") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">

          <p className="text-lg">
            Trăim într-o lume în care complexitatea tinde să fie văzută ca o problemă, nu ca o resursă. Căutăm soluții rapide, structuri simple, rețete clare. Însă dacă ne uităm atent la natură, descoperim o lecție profundă: viața nu este simplă, ci diversă, imprevizibilă și profund interconectată.
          </p>

          <p className="text-lg font-medium text-primary">
            Diversitate. Biodiversitate. Complexitate.
          </p>

          <p className="text-lg">
            Acestea nu sunt doar concepte ecologice, ci și fundamente ale dezvoltării durabile – fie că vorbim despre ecosisteme, societăți sau ființe umane. Natura nu are un plan rigid. Ea evoluează prin încercări, prin eșecuri, prin adaptări. Când o cale pare blocată, natura găsește alta. Nu prin forță, ci prin creativitate biologică.
          </p>

          <p className="text-lg">
            Un exemplu revelator este relația dintre prădător și pradă. La suprafață, pare un conflict brutal. În realitate, e o relație de reglaj fin: prădătorul menține sănătatea populației de pradă, eliminând indivizii slabi sau bolnavi. În același timp, prada evoluează, devine mai agilă, mai inteligentă, mai bine adaptată. Rezultatul? Un echilibru dinamic care susține viața.
          </p>

          <p className="text-lg font-medium">
            Dar ce legătură are asta cu educația?
          </p>

          <p className="text-lg">
            Mai mult decât am crede.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Provocare vs. protecție: o ecologie a educației
          </h2>

          <p className="text-lg">
            În educație, ne confruntăm cu o tensiune asemănătoare: pe de-o parte, vrem să oferim elevilor un mediu sigur, empatic, în care să se simtă înțeleși. Pe de altă parte, știm că provocările reale, dificultățile și eșecurile sunt cele care formează caractere puternice și autonomi în gândire.
          </p>

          <p className="text-lg">
            Este un aparent paradox: cum putem oferi provocări semnificative fără să facem rău? Cum învățăm copiii să gestioneze stresul și incertitudinea, fără să-i expunem la suferință inutilă?
          </p>

          <p className="text-lg">
            Aici intervine lecția naturii: nu orice stres e dăunător. Există un tip de stres benefic – cel care apare atunci când cineva este provocat puțin peste nivelul său de confort, dar într-un mediu sigur, cu sprijin și încredere. Așa se formează reziliența. Așa se activează curajul.
          </p>

          <p className="text-lg">
            Protecția excesivă duce la stagnare. Dar și provocarea fără susținere devine abuz. Echilibrul între cele două este arta educației – o artă care seamănă izbitor cu echilibrul delicat al unui ecosistem sănătos.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Profesorul ca prădător (blând)
          </h2>

          <p className="text-lg">
            Pare o metaforă riscantă, dar este una profundă: profesorul ideal nu este nici protectorul care înlătură orice obstacol, nici judecătorul care pedepsește greșelile. El este "prădătorul blând" – acela care provoacă gândirea, cere mai mult, forțează limitele, dar o face cu respect pentru ritmurile individuale ale fiecărui elev.
          </p>

          <p className="text-lg">
            În acest ecosistem educațional, eșecul nu e un capăt de drum, ci un pas firesc în procesul de învățare. Confuzia nu e un defect, ci o poartă către înțelegere. Dialogul între diversități devine resursa centrală, nu problema de evitat.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Înapoi la natură, înainte spre educație
          </h2>

          <p className="text-lg">
            Dacă vrem să construim o educație care chiar pregătește copiii pentru viață, trebuie să ne reamintim cum funcționează viața. Nu e liniară. Nu e controlabilă în întregime. Dar este adaptabilă, creativă și surprinzător de rezistentă.
          </p>

          <p className="text-lg font-medium text-primary">
            Să nu ne temem de complexitate. Să nu ne ferim de tensiune. Să învățăm din natură cum să cultivăm inteligențe care gândesc, dar și suflete care simt. Așa cum natura găsește mereu o cale, și educația își va găsi drumul dacă rămâne vie, autentică și atentă la echilibrul fragil dintre provocare și siguranță.
          </p>
        </div>
      </div>
    );
  }

  if (articleId === "einstein-problema") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">

          <p className="text-lg">
            Aceasta este o variantă a așa zisei Probleme a lui Einstein. Varianta 4 case nefumători de mai jos este relativ ușoară și testează gândirea de tip designer și capacitatea de concentrare (în minute).
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-bold text-primary mb-4">Regulile problemei:</h2>
            <ul className="space-y-2 text-lg">
              <li>• Există 4 case vopsite în patru culori diferite.</li>
              <li>• În fiecare casă locuiește o persoană cu o naționalitate diferită.</li>
              <li>• Cei patru proprietari beau un anumit tip de băutură și au un anumit animal de companie.</li>
              <li>• Niciun proprietar nu are același animal de companie și nu bea aceeași băutură.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-xl font-bold text-primary mb-4">Indiciile:</h2>
            <ul className="space-y-2 text-lg">
              <li>• Românul locuiește în casa albastră</li>
              <li>• Suedezul are câini ca animale de companie</li>
              <li>• Francezul bea ceai</li>
              <li>• Casa verde este prima din stânga casei albe</li>
              <li>• Proprietarul casei verzi bea cafea</li>
              <li>• Proprietarul casei galbene crește pisici</li>
              <li>• Bărbatul din a 2-a casă bea lapte</li>
              <li>• Olandezul locuiește în prima casă</li>
              <li>• Bărbatul care ține cai locuiește lângă cel care crește pisici</li>
              <li>• Olandezul locuiește lângă casa albastră</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Întrebarea:</h2>
            <p className="text-xl font-semibold text-gray-800">
              Cine bea apă și cine are un pește?
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
            <h3 className="text-lg font-bold text-primary mb-3">Provocare pentru gândirea logică</h3>
            <p className="text-lg">
              Această problemă testează capacitatea de raționament logic, atenția la detalii și persistența în rezolvarea problemelor complexe. Este un exercițiu excelent pentru dezvoltarea gândirii sistematice și metodice.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (articleId === "curriculum-propunere") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">

          <p className="text-lg">
            Iată ce nu se predă la școală.
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-primary mb-3">1. Inteligența emoțională</h3>
              <p className="text-lg">Capacitatea de a înțelege și gestiona emoțiile proprii și pe ale celorlalți.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-primary mb-3">2. Autodisciplină și reziliență</h3>
              <p className="text-lg">Abilitatea de a-și gestiona timpul și resursele eficient, de a-și atinge obiectivele și de a se adapta și recupera în fața dificultăților.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-primary mb-3">3. Discernământul</h3>
              <p className="text-lg">Capacitatea de a analiza și evalua informațiile critic și de a lua decizii înțelepte.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-primary mb-3">4. Abilitățile de comunicare</h3>
              <p className="text-lg">Dezvoltarea abilităților de comunicare verbală și non-verbală.</p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-primary mb-3">5. Dezvoltarea abilităților de viață</h3>
              <p className="text-lg">Abilități practice precum gătitul, întreținerea locuinței și gestionarea timpului.</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-primary mb-3">6. Educația financiară</h3>
              <p className="text-lg">Cunoștințe de bază despre gestionarea banilor, economisire, investiții și bugetare.</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-primary mb-3">7. Gândirea tip designer (design thinking)</h3>
              <p className="text-lg">Abordarea creativă și inovativă în soluționarea problemelor.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Ce și Cum
          </h2>

          <p className="text-lg">
            Pentru a stabili o <strong>școală complementară</strong> care dezvoltă abilități adesea neglijate în educația tradițională, este esențial să ne concentrăm pe <strong>învățarea experiențială</strong> și metodele de predare inovatoare. Această abordare pune accent pe experiențe practice, aplicații în lumea reală și învățare centrată pe elev.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Ce să dezvolți
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-2">1. Gândire critică și rezolvare de probleme</h3>
              <p className="text-lg">Încurajează elevii să abordeze problemele din lumea reală prin învățarea bazată pe proiecte, unde cercetează, proiectează și implementează soluții.</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-2">2. Abilități de colaborare și comunicare</h3>
              <p className="text-lg">Promovează munca în echipă prin proiecte colaborative și predare între colegi, permițându-le elevilor să învețe unii de la alții, dezvoltând în același timp abilități interumane.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-2">3. Creativitate și inovație</h3>
              <p className="text-lg">Implementați activități care stimulează gândirea creativă, cum ar fi provocările de design sau proiectele artistice care necesită gândire originală.</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-2">4. Inteligență emoțională</h3>
              <p className="text-lg">Învățați elevii să recunoască și să-și gestioneze emoțiile, precum și să înțeleagă emoțiile altora, prin jocuri de rol și discuții de grup.</p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-2">5. Alfabetizare digitală</h3>
              <p className="text-lg">Echipați elevii cu abilitățile tehnologice necesare prin integrarea instrumentelor digitale în activitățile de învățare, cum ar fi proiectele de programare sau utilizarea multimedia pentru prezentări.</p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-2">6. Conștientizare globală</h3>
              <p className="text-lg">Expuneți elevii la culturi diverse și probleme globale prin simulări, dezbateri sau schimburi virtuale cu colegi din diferite țări.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Cum să folosești învățarea experiențială
          </h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-primary mb-2">Tehnici de învățare activă</h4>
              <p>Folosiți metode precum învățarea bazată pe întrebări, unde elevii pun întrebări și explorează subiectele activ, mai degrabă decât să primească informații pasiv.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-primary mb-2">Învățarea bazată pe proiecte</h4>
              <p>Implementați proiecte extinse care necesită ca elevii să se angajeze în cercetare și să aplice cunoștințele lor în contexte practice.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-primary mb-2">Modelul de clasă inversată</h4>
              <p>Atribuiți conținut instructiv pentru studiu acasă în timp ce dedicați timpul din clasă activităților practice și discuțiilor.</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-primary mb-2">Mediile de învățare flexibile</h4>
              <p>Creați spații care sprijină diverse stiluri de învățare prin aranjamente flexibile ale locurilor și diferite stații de activitate.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-primary mb-2">Aplicații din lumea reală</h4>
              <p>Conectați lecțiile la scenarii din viața reală implicând proiecte comunitare sau parteneriate cu organizații locale.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Propuneri de activități experiențiale
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h4 className="font-bold text-primary mb-2">Învățarea bazată pe proiecte</h4>
              <p className="text-sm">Cultivă curiozitatea, autonomia, rezolvarea problemelor și gândirea critică.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h4 className="font-bold text-primary mb-2">Cluburi de dezbateri</h4>
              <p className="text-sm">Încurajează gândirea critică, comunicarea eficientă și empatia.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h4 className="font-bold text-primary mb-2">Hackathons</h4>
              <p className="text-sm">Promovează creativitatea, rezolvarea problemelor și lucrul în echipă.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h4 className="font-bold text-primary mb-2">Proiecte comunitare</h4>
              <p className="text-sm">Dezvoltă empatia, comunicarea și adaptabilitatea.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h4 className="font-bold text-primary mb-2">Ateliere conduse de studenți</h4>
              <p className="text-sm">Promovează autonomia și abilitățile de comunicare.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border">
              <h4 className="font-bold text-primary mb-2">Crearea de conținut digital</h4>
              <p className="text-sm">Încurajează creativitatea și competențele digitale.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (articleId === "de-ce-eu") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">
              {/* Image */}
              <div className="mb-8">
                <img 
                  src={deCeEuImage}
                  alt="Despre autorul proiectului"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto object-cover"
                />
              </div>
          
              <p className="text-xl font-medium text-primary mb-8">
                De ce inițiez această școală complementară
              </p>

              <p className="text-lg">
                De 40 de ani sunt profesor de matematică, însă parcursul meu profesional s-a desfășurat în afara sistemului clasic de învățământ. Am avut ocazia să lucrez în câteva multinaționale, în domenii precum publicitate, vânzări și resurse umane – toate legate, în esență, de comunicare și de oameni.
              </p>

              <p className="text-lg">
                Pe lângă asta, am investit timp și energie în protecția naturii și reciclare, iar acum lucrez ca ranger într-un Parc Național. Aici, am organizat drumeții, expediții și tabere cu corturi alături de tineri, învățând împreună despre natură, responsabilitate și adaptare.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg font-medium">
                  Nu inițiez acest proiect pentru că mă consider un model de urmat. Lecțiile importante din viață le-am învățat greșind – uneori dureros, dar mereu cu un scop.
                </p>
              </div>

              <p className="text-lg">
                Tocmai din acest motiv îmi doresc să creez un spațiu în care tinerii să poată învăța și crește fără teama de a greși, sprijiniți de oameni pasionați și dedicați.
              </p>

              <p className="text-lg font-medium text-primary">
                Și simt că tot ceea ce am făcut în viață m-a pregătit pentru asta.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <p className="text-lg">
                  Această școală complementară este mai mult decât un proiect personal – este un loc de întâlnire pentru cei care cred în educația diferită, adaptată fiecărei persoane, și în puterea comunității. Nu pot face acest lucru singur.
                </p>
              </div>

              <p className="text-lg">
                De aceea, caut oameni la fel de implicați și entuziasmați, care să contribuie cu ideile, energia și experiența lor la construirea acestui vis.
              </p>

              <p className="text-lg">
                Pentru mine, acesta nu este doar un proiect educațional, ci o șansă de a transforma greșelile, lecțiile și experiențele mele într-un loc care să inspire și să sprijine generațiile viitoare.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-lg font-medium">
                  Nu caut încredere, caut parteneri autentici pentru dezbateri și acțiune. N-o să salvăm lumea de mâine dar încercăm și orice pas contează.
                </p>
              </div>

              <p className="text-lg">
                Sper că va veni vremea să înființez un ONG dedicat acestei școli. Adică sper într-o administrație a țării mai prietenoasă decât acum, și sper să întâlnesc un contabil mai curajos decât mine.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 mt-8">
                <h3 className="text-lg font-bold text-primary mb-3">Parcursul meu profesional:</h3>
                <ul className="space-y-2">
                  <li>• Profesor de matematică (în afara sistemului)</li>
                  <li>• Experiență în multinaționale: publicitate, vânzări, resurse umane</li>
                  <li>• Activist pentru protecția naturii și reciclare</li>
                  <li>• Ranger în Parc Național</li>
                  <li>• Organizator de drumeții, expediții și tabere pentru tineri</li>
                </ul>
              </div>

              {/* Back button specific for "de ce eu" article */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <Link href="/despre-noi">
                  <Button variant="default" className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
                    înapoi
                  </Button>
                </Link>
              </div>
        </div>
      </div>
    );
  }

  if (articleId === "abilitati-complementare") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">

          <p className="text-lg">
            Abilități care fie lipsesc, fie sunt „predate" în loc să fie exersate în școala clasică.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-primary mb-3">1. Inteligența emoțională</h3>
              <p className="text-lg">Capacitatea de a înțelege și gestiona emoțiile proprii și pe ale celorlalți.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-primary mb-3">2. Autodisciplină și reziliență</h3>
              <p className="text-lg">Abilitatea de a-și gestiona timpul și resursele eficient, de a-și atinge obiectivele și de a se adapta și recupera în fața dificultăților.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-primary mb-3">3. Discernământul</h3>
              <p className="text-lg">Capacitatea de a analiza și evalua informațiile critic și de a lua decizii înțelepte.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-primary mb-3">4. Abilitățile de comunicare</h3>
              <p className="text-lg">Dezvoltarea abilităților de comunicare verbală și non-verbală.</p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-primary mb-3">5. Dezvoltarea abilităților de viață</h3>
              <p className="text-lg">Abilități practice precum gătitul, întreținerea locuinței și gestionarea timpului.</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-primary mb-3">6. Educația financiară</h3>
              <p className="text-lg">Cunoștințe de bază despre gestionarea banilor, economisire, investiții și bugetare.</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-primary mb-3">7. Gândirea tip designer (design thinking)</h3>
              <p className="text-lg">Abordarea creativă și inovativă în soluționarea problemelor.</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-primary mb-3">8. Educația civică și etică</h3>
              <p className="text-lg">Înțelegerea drepturilor și responsabilităților civice și dezvoltarea unui simț etic puternic.</p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-primary mb-3">9. Tehnologia și competențele digitale</h3>
              <p className="text-lg">Competențe în utilizarea tehnologiei și înțelegerea securității cibernetice.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 mt-8">
            <p className="text-lg font-medium text-primary">
              Această listă reflectă o abordare holistică a educației, punând accent pe dezvoltarea abilităților esențiale pentru succesul personal și profesional în viața reală.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            De ce sunt importante aceste abilități?
          </h2>

          <p className="text-lg">
            Sistemul educațional tradițional se concentrează în principal pe transmiterea de cunoștințe teoretice, dar adesea neglijează dezvoltarea competențelor practice și emoționale necesare pentru navigarea cu succes în lumea reală. Aceste abilități complementare umplu golurile critice din educația formală.
          </p>

          <p className="text-lg">
            La Școala Complementară, recunoaștem că învățarea adevărată se întâmplă atunci când tinerii au libertatea de a explora, de a experimenta și de a învăța prin practică, nu doar prin teorie. Fiecare dintre aceste nouă abilități poate fi dezvoltată prin experiențe concrete și reflecție ghidată.
          </p>
        </div>
      </div>
    );
  }

  if (articleId === "voluntarii") {
    return (
      <div className="prose prose-lg prose-emerald max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Voluntarii vin din diverse domenii - de la educatori și părinți, la profesionști din sectoare variate care doresc să contribuie la formarea unei generații libere să își urmeze propriul drum de dezvoltare. Fiecare aduce experiența și perspectiva sa unică.
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <img 
              src={voluntar2}
              alt="Energia pozitivă a voluntarilor"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={voluntar3}
              alt="Momentele creative cu voluntarii"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={voluntar4}
              alt="Joacă și învățare împreună"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={voluntar8}
              alt="Moment de învățare în natură"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={voluntar9}
              alt="Tânăr voluntar scout"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={nouaImagineVoluntar}
              alt="Voluntari pe munte"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={nouaImagineVoluntar2}
              alt="Voluntar în drumeție pe pod natural"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={nouaImagineVoluntar3}
              alt="Voluntar cu rucsac pe podul metalic"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src={voluntar1}
              alt="Voluntari entuziaști în natură"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>

          {/* Back button */}
          <div className="mt-12 text-center">
            <Link href="/despre-noi">
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-50 text-gray-700 border-gray-300 px-8 py-3 text-lg"
              >
                înapoi
              </Button>
            </Link>
          </div>
      </div>
    );
  }

  if (articleId === "curriculum-propunere") {
    return (
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg">
            Această propunere de curriculum este rezultatul unei reflecții profunde asupra nevoilor educaționale reale ale tinerilor de astăzi. În loc să urmez rigiditatea sistemelor tradiționale, propun o abordare flexibilă și adaptabilă care pune experiența practică în centrul învățării.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-4">Principiile fundamentale</h3>
            <ul className="space-y-2 text-lg">
              <li>• <strong>Învățarea prin experiență:</strong> Fiecare concept este explorat prin practică directă</li>
              <li>• <strong>Dezvoltarea holistică:</strong> Echilibru între intelect, emoții și abilități practice</li>
              <li>• <strong>Conexiunea cu natura:</strong> Mediul natural ca sală de clasă și laborator</li>
              <li>• <strong>Responsabilitate socială:</strong> Proiecte care contribuie la comunitate</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Structura curriculumului
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-primary mb-3">Modulul 1: Cunoașterea de sine</h3>
              <p className="text-lg mb-3">Dezvoltarea conștiinței de sine și a inteligenței emotionale prin:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Reflecție personală și jurnal de dezvoltare</li>
                <li>Exerciții de mindfulness în natură</li>
                <li>Identificarea punctelor forte și a pasiunilor</li>
                <li>Gestionarea emoțiilor și a stresului</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-primary mb-3">Modulul 2: Abilități de viață practică</h3>
              <p className="text-lg mb-3">Competențe esențiale pentru autonomia personală:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Gestionarea financiară personală și bugetarea</li>
                <li>Abilități domestice și întreținerea locuinței</li>
                <li>Nutriție și gătit sănătos</li>
                <li>Planificarea timpului și organizarea activităților</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-primary mb-3">Modulul 3: Comunicare și relații</h3>
              <p className="text-lg mb-3">Dezvoltarea abilităților interpersonale prin:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Ascultare activă și empatie</li>
                <li>Comunicare asertivă și rezolvarea conflictelor</li>
                <li>Leadership și lucrul în echipă</li>
                <li>Prezentare publică și storytelling</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-primary mb-3">Modulul 4: Gândire critică și creativitate</h3>
              <p className="text-lg mb-3">Dezvoltarea capacității de analiză și inovație:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Analiza informațiilor și evaluarea surselor</li>
                <li>Rezolvarea creativă de probleme (design thinking)</li>
                <li>Experimentare științifică și observație</li>
                <li>Proiecte artistice și exprimarea creativă</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-primary mb-3">Modulul 5: Responsabilitate socială și civică</h3>
              <p className="text-lg mb-3">Formarea cetățenilor activi și responsabili:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Înțelegerea sistemelor democratice și a drepturilor civice</li>
                <li>Proiecte de voluntariat în comunitate</li>
                <li>Educație ecologică și sustenabilitate</li>
                <li>Antreprenoriat social și inițiative locale</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-primary mb-3">Modulul 6: Aventura și provocări</h3>
              <p className="text-lg mb-3">Construirea încrederii prin depășirea limitelor:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Expediții în natură și supraviețuire de bază</li>
                <li>Sporturi de aventură și activități outdoor</li>
                <li>Provocări fizice și mentale progresive</li>
                <li>Dezvoltarea resilienței și a curajului</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Metodologia de predare
          </h2>

          <p className="text-lg">
            Curriculumul se bazează pe <strong>învățarea experiențială</strong>, unde fiecare modul combină teoria cu practica intensivă. Mentorilor li se oferă libertatea de a adapta conținutul în funcție de nevoile specifice ale grupului și de contextul local.
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-primary mb-3">Ciclul de învățare</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li><strong>Experiența directă:</strong> Activități practice și provocări reale</li>
              <li><strong>Reflecția:</strong> Discuții de grup și auto-analiză</li>
              <li><strong>Conceptualizarea:</strong> Legarea experiențelor de principii generale</li>
              <li><strong>Aplicarea:</strong> Testarea cunoștințelor în contexte noi</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
            Evaluarea progresului
          </h2>

          <p className="text-lg">
            În loc de note tradiționale, evaluarea se face prin:
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg ml-4">
            <li><strong>Portofolii de dezvoltare:</strong> Documentarea călătoriei de învățare</li>
            <li><strong>Proiecte concrete:</strong> Realizări tangibile care demonstrează competențele</li>
            <li><strong>Auto-evaluarea:</strong> Reflecția critică asupra propriului progres</li>
            <li><strong>Feedback-ul comunității:</strong> Aprecierea contribuțiilor la grup</li>
          </ul>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 mt-8">
            <h3 className="text-xl font-bold text-primary mb-3">Obiectivul final</h3>
            <p className="text-lg">
              Absolvenții acestui curriculum vor fi tineri autonomi, responsabili și creativi, capabili să navigheze cu încredere în lumea complexă de astăzi. Vor avea nu doar cunoștințe teoretice, ci și competențele practice și emoționale necesare pentru a contribui pozitiv la societate.
            </p>
          </div>

          <p className="text-lg">
            Această propunere nu este finală - ea evoluează în funcție de feedback-ul primit de la mentori, tineri și părinți. Flexibilitatea și adaptabilitatea sunt cheia succesului oricărui program educațional autentic.
          </p>
        </div>
        
      </div>
    );
  }

  if (articleId === "evolutia-calatoria-timp") {
    return (
      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-lg mb-6 leading-relaxed">
                Mintea noastră este obișnuită să măsoare timpul în secunde, zile și ani. Cum am putea oare să înțelegem miliarde de ani de evoluție? E ca și cum am încerca să cuprindem un ocean cu o găleată. Dar există un truc. Hai să transformăm timpul în ceva ce putem măsura cu pașii noștri: distanța.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">1. Călătoria de 4.6 Kilometri</h2>
              <p className="text-lg mb-4">
                Imaginează-ți că mergi pe un drum drept. Fiecare metru de drum reprezintă un milion de ani de istorie.
              </p>
              <p className="text-lg mb-4">
                Întregul drum, de la capăt până la tine, are <span className="font-bold text-orange-600">4.6 kilometri</span>. Aceasta este întreaga istorie a Pământului, de la formarea sa până în prezent.
              </p>
              <p className="text-lg mb-4">Mergând pe acest drum, vei trece prin momente cheie:</p>
              <ul className="space-y-3 mb-6 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  La <span className="font-bold text-orange-600">3.8 kilometri</span> distanță: Apar primele forme de viață unicelulare.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  La <span className="font-bold text-orange-600">800 de metri</span> distanță: Apar primele forme de viață multicelulare.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  La <span className="font-bold text-orange-600">66 de metri</span> distanță: Extincția dinozaurilor. Ei dominau Pământul, iar acum sunt la o aruncătură de băț în spatele tău!
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  La <span className="font-bold text-orange-600">20 de centimetri</span> distanță: Apare specia noastră, <em>Homo sapiens</em>.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 font-bold">•</span>
                  La doar <span className="font-bold text-orange-600">5.5 milimetri</span> de tine: A început istoria scrisă. <span className="font-bold">Toată</span> istoria cunoașterii umane, de la piramide la internet, se petrece pe o distanță mai mică decât un bob de orez.
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500 mt-4">
                <p className="italic text-lg">
                  Stai o clipă. Oricât de lungă ți s-ar părea istoria scrisă, ea este doar o fărâmă din întreaga istorie a vieții. Acest raport de mărime este <span className="font-bold text-orange-600">șocant</span>. Noi suntem niște nou-veniți.
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">2. Vălul Timpului: O Lățime de Brațe</h2>
              <p className="text-lg mb-4">
                O altă analogie, la fel de puternică, folosește corpul tău drept instrument. Întinde-ți brațele de-a latul, de la un vârf de deget la celălalt. Această distanță reprezintă <span className="font-bold text-orange-600">întreaga istorie a Pământului</span>.
              </p>
              <ul className="space-y-3 mb-6 text-lg">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  Un vârf de deget reprezintă nașterea planetei.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  La încheietura mâinii, viața multicelulară apare.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  Pe degetele tale sunt extinși dinozaurii.
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg font-semibold">
                  Dar iată șocul: <span className="font-bold text-orange-600">întreaga istorie a omenirii poate fi ștearsă cu o singură trecere a unei pile de unghii pe vârful degetului tău</span>!
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">3. Calendarul Cosmic</h2>
              <p className="text-lg mb-4">
                Poate că cel mai faimos exemplu este <span className="font-bold text-orange-600">Calendarul Cosmic</span>, popularizat de Carl Sagan. Aici, întreaga istorie a universului, de la Big Bang, este comprimată într-un singur an calendaristic.
              </p>
              <p className="text-lg mb-4">Privește cum se așează evenimentele:</p>
              <ul className="space-y-3 mb-6 text-lg">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span className="font-bold text-orange-600">1 Ianuarie</span>: Big Bang-ul.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span className="font-bold text-orange-600">1 Martie</span>: Se formează Calea Lactee.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span className="font-bold text-orange-600">9 Septembrie</span>: Sistemul nostru solar ia naștere.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span className="font-bold text-orange-600">31 Decembrie, ora 22:24</span>: Apar primii hominini, strămoșii noștri.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span className="font-bold text-orange-600">31 Decembrie, ora 23:59:47</span>: Începe istoria scrisă.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span className="font-bold text-orange-600">Ultimele 10 secunde</span>: Civilizațiile clasice, Evul Mediu, Renașterea, revoluția industrială, cele două războaie mondiale și, da, chiar și acest text pe care-l citești, toate se întâmplă într-un ritm amețitor.
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <p className="italic text-lg">
                  În acest an cosmic, toată existența umană se petrece în <span className="font-bold text-orange-600">ultimele secunde</span>. Acesta nu este doar un fapt, este o lecție de modestie și o invitație la uimire.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Bonus: Stele vs. Fire de Nisip</h2>
              <p className="text-lg mb-4">
                Dacă numerele mari te-au copleșit, gândește-te la asta: oare există mai multe stele în univers decât fire de nisip pe toate plajele Pământului? Răspunsul este da, și nu doar cu puțin. Există de aproximativ <span className="font-bold text-orange-600">10.000 de ori mai multe stele decât fire de nisip</span>. O cantitate care pare infinită pentru noi este, de fapt, minusculă în raport cu vastitatea cosmosului.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 text-center">
              <p className="text-lg font-medium">
                Aceste analogii nu sunt doar comparații. Ele sunt o cheie pentru a debloca o înțelegere mai profundă a locului nostru în univers. Sper că te-au făcut să te simți mic, dar și uimit.
              </p>
            </div>

            <div className="mt-8 text-right">
              <div className="text-sm text-gray-500">
                <h4 className="font-semibold mb-2">Surse de cercetare:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• <a href="https://stiintasitehnica.com/geometria-la-scara-planck-universului/" target="_blank" className="text-blue-600 hover:text-blue-800">Știință și Tehnică - Geometria la scara Planck</a></li>
                  <li>• <a href="https://www.nps.gov/subjects/geology/geotime.htm" target="_blank" className="text-blue-600 hover:text-blue-800">National Park Service - Geologic Time</a></li>
                  <li>• <a href="https://en.wikipedia.org/wiki/Cosmic_Calendar" target="_blank" className="text-blue-600 hover:text-blue-800">Wikipedia - Cosmic Calendar</a></li>
                  <li>• <a href="http://palaeos.com/time/cosmic_calendar.html" target="_blank" className="text-blue-600 hover:text-blue-800">Palaeos - Cosmic Calendar</a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <ArticleNavigation currentArticleId={articleId} />
      </div>
    );
  }

  // Handle all other articles that don't have content yet
  if (articleId !== "ghidul-educatie-inovatoare") {
    return (
      <div className="prose prose-lg max-w-none">
        <p>Acest articol va fi adăugat în curând. Vă rugăm să reveniți mai târziu pentru conținut actualizat.</p>
        <p className="text-sm text-gray-500 mt-4">
          Articol ID: {articleId} - în curs de dezvoltare
        </p>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 text-stone-800 font-sans">
      {/* Sticky Navigation */}
      <header className="bg-amber-50/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-emerald-800">Educație Complementară</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-stone-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">Acasă</button>
                <button onClick={() => scrollToSection('principles')} className="text-stone-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">Principii</button>
                <button onClick={() => scrollToSection('resources')} className="text-stone-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">Resurse</button>
                <button onClick={() => scrollToSection('solutions')} className="text-stone-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">Soluții</button>
                <button onClick={() => scrollToSection('parenting')} className="text-stone-600 hover:text-emerald-700 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">Parenting</button>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none"
              >
                <span className="sr-only">Deschide meniul</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-3">
              <button onClick={() => scrollToSection('home')} className="block text-stone-600 hover:text-emerald-700 px-3 py-2 rounded-md text-base font-medium border-l-4 border-transparent w-full text-left">Acasă</button>
              <button onClick={() => scrollToSection('principles')} className="block text-stone-600 hover:text-emerald-700 px-3 py-2 rounded-md text-base font-medium border-l-4 border-transparent w-full text-left">Principii</button>
              <button onClick={() => scrollToSection('resources')} className="block text-stone-600 hover:text-emerald-700 px-3 py-2 rounded-md text-base font-medium border-l-4 border-transparent w-full text-left">Resurse</button>
              <button onClick={() => scrollToSection('solutions')} className="block text-stone-600 hover:text-emerald-700 px-3 py-2 rounded-md text-base font-medium border-l-4 border-transparent w-full text-left">Soluții</button>
              <button onClick={() => scrollToSection('parenting')} className="block text-stone-600 hover:text-emerald-700 px-3 py-2 rounded-md text-base font-medium border-l-4 border-transparent w-full text-left">Parenting</button>
            </div>
          )}
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Home Section */}
        <section id="home" className="py-16 md:py-24 text-center">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-stone-600">Explorați un univers de soluții educaționale alternative, de la învățarea în natură și metode experiențiale, la parenting conștient și modele școlare democratice. Această platformă este o resursă dedicată părinților și educatorilor din România care caută alternative practice, ieftine și simple pentru a îmbogăți parcursul de învățare al copiilor.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
              <p className="text-3xl font-bold text-emerald-700">30%</p>
              <p className="mt-2 text-stone-600">Conținut relevant, ancorat în contextul și resursele din România.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
              <p className="text-3xl font-bold text-emerald-700">22%</p>
              <p className="mt-2 text-stone-600">Doar atât de puțini profesori văd cercetarea academică o sursă de inovație. Misiunea noastră este să schimbăm asta.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
              <p className="text-3xl font-bold text-emerald-700">100+</p>
              <p className="mt-2 text-stone-600">Organizații, resurse și unelte practice, selectate pentru tine.</p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section id="principles" className="py-16 md:py-24 bg-white rounded-2xl shadow-lg my-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 tracking-tight">Principii Fundamentale</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">Educația complementară se bazează pe ideea că învățarea cea mai profundă are loc prin acțiune directă și conectare cu lumea înconjurătoare. Explorăm aici două coloane vertebrale ale acestei filozofii: învățarea experiențială și educația în natură, metode care cultivă creativitatea, gândirea critică și o relație armonioasă cu mediul.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-emerald-800">Educația Experiențială: A Învăța Făcând</h3>
              <p className="mt-4 text-stone-600">Inspirată de gânditori precum John Dewey și David Kolb, învățarea experiențială mută accentul de la memorare la rezolvarea de probleme. Elevii nu mai sunt receptori pasivi, ci participanți activi în propriul proces de cunoaștere, dezvoltând abilități esențiale precum autonomia, colaborarea și gândirea de nivel superior.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start"><span className="text-emerald-600 mr-3 mt-1">✓</span><span>Cultivă toleranța, empatia și abilitățile de comunicare.</span></li>
                <li className="flex items-start"><span className="text-emerald-600 mr-3 mt-1">✓</span><span>Stimulează creativitatea, flexibilitatea și gândirea critică.</span></li>
                <li className="flex items-start"><span className="text-emerald-600 mr-3 mt-1">✓</span><span>Permite elevilor să învețe în ritm propriu și să își asume responsabilitatea.</span></li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-emerald-800">Educația în Natură: Conectare și Bunăstare</h3>
              <p className="mt-4 text-stone-600">Contactul direct cu natura are un impact profund asupra dezvoltării copiilor. Reduce anxietatea, stimulează curiozitatea și imaginația, și îmbunătățește concentrarea. Învățarea outdoor nu este doar o activitate, ci o cale spre o dezvoltare holistică și o atitudine responsabilă față de mediu.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start"><span className="text-emerald-600 mr-3 mt-1">✓</span><span>Întărește sistemul imunitar și previne probleme de sănătate.</span></li>
                <li className="flex items-start"><span className="text-emerald-600 mr-3 mt-1">✓</span><span>Dezvoltă alfabetizarea ecologică și o etică de mediu durabilă.</span></li>
                <li className="flex items-start"><span className="text-emerald-600 mr-3 mt-1">✓</span><span>Influențează pozitiv performanțele școlare și realizările viitoare.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 tracking-tight">Resurse și Actori Cheie din România</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">Peisajul educației alternative din România este vibrant și plin de inițiative valoroase. Aici găsiți un director interactiv de organizații, platforme digitale și proiecte care promovează activ educația experiențială, în natură și parentingul modern. Folosiți filtrele pentru a explora resursele care vi se potrivesc.</p>
          </div>
          <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
            <div className="grid sm:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Caută după nume..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="col-span-3 sm:col-span-2 w-full p-2 border border-stone-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-stone-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="all">Toate Categoriile</option>
                <option value="experiential">Educație Experiențială</option>
                <option value="nature">Educație în Natură</option>
                <option value="parenting">Parenting</option>
                <option value="digital">Resurse Digitale (RED)</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-stone-200 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-lg">
                  {resource.url ? (
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-800 hover:text-emerald-600 hover:underline transition-colors"
                    >
                      {resource.name}
                    </a>
                  ) : (
                    <span className="text-emerald-800">{resource.name}</span>
                  )}
                </h4>
                <p className="mt-2 text-sm text-stone-600">{resource.description}</p>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold mt-4 px-2.5 py-0.5 rounded-full">
                  {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                </span>
              </div>
            ))}
          </div>
          {filteredResources.length === 0 && (
            <p className="text-center text-stone-500 mt-8">Nu am găsit rezultate care să corespundă căutării.</p>
          )}
        </section>
        
        {/* Solutions Section */}
        <section id="solutions" className="py-16 md:py-24 bg-white rounded-2xl shadow-lg my-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 tracking-tight">Soluții Practice: Ieftine și Simple</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">Democratizarea educației inovatoare este un pilon central al viziunii noastre. Vă prezentăm două modele puternice, clasa inversată și școlile democratice, care pot fi adaptate și implementate cu resurse minime, dar cu un impact maxim asupra implicării și autonomiei elevilor. Descoperiți cum funcționează și ce spun datele.</p>
          </div>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 text-center">Clasa Inversată (Flipped Classroom)</h3>
              <p className="text-center mt-2 max-w-3xl mx-auto text-stone-600">Acest model inversează logica tradițională: elevii parcurg materialul teoretic acasă (prin video, lecturi), iar timpul la clasă este eliberat pentru activități practice, dezbateri și lucru pe proiecte, sub ghidajul profesorului.</p>
              <div className="mt-8 relative">
                <div className="border-l-2 border-dashed border-emerald-300 absolute h-full top-0 left-1/2 -ml-px"></div>
                <div className="mt-6 space-y-12">
                  <div className="flex items-center w-full">
                    <div className="w-1/2 flex justify-end pr-8"><div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div></div>
                    <div className="w-1/2 pl-8"><div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200"><h4 className="font-semibold">Acasă: Studiul</h4><p className="text-sm text-stone-600">Elevii explorează conținutul teoretic în ritm propriu.</p></div></div>
                  </div>
                  <div className="flex items-center w-full">
                    <div className="w-1/2 pr-8"><div className="bg-amber-50 p-4 rounded-lg border border-amber-200"><h4 className="font-semibold">La Clasă: Aplicarea</h4><p className="text-sm text-stone-600">Timpul este dedicat interacțiunii, colaborării și aprofundării.</p></div></div>
                    <div className="w-1/2 flex justify-start pl-8"><div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div></div>
                  </div>
                  <div className="flex items-center w-full">
                    <div className="w-1/2 flex justify-end pr-8"><div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div></div>
                    <div className="w-1/2 pl-8"><div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200"><h4 className="font-semibold">Feedback & Adaptare</h4><p className="text-sm text-stone-600">Profesorul oferă suport personalizat și evaluează înțelegerea.</p></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 text-center">Școlile Democratice și Educația Civică</h3>
              <p className="text-center mt-2 max-w-3xl mx-auto text-stone-600">Modelul școlilor democratice pune elevul în centrul procesului decizional, cultivând responsabilitatea, autonomia și implicarea civică. Totuși, datele arată că România are un drum de parcurs în pregătirea civică a tinerilor.</p>
              <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                <div className="p-4">
                  <h4 className="font-bold text-lg text-stone-700">Principii Cheie ale Școlilor Democratice</h4>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start"><span className="text-emerald-600 font-bold mr-3 mt-1">●</span><div><h5 className="font-semibold">Autonomie în Învățare</h5><p className="text-sm text-stone-600">Elevii își urmăresc propriile interese și pasiuni.</p></div></li>
                    <li className="flex items-start"><span className="text-emerald-600 font-bold mr-3 mt-1">●</span><div><h5 className="font-semibold">Auto-guvernare</h5><p className="text-sm text-stone-600">Regulile școlii sunt decise colectiv, cu vot egal pentru elevi și personal.</p></div></li>
                    <li className="flex items-start"><span className="text-emerald-600 font-bold mr-3 mt-1">●</span><div><h5 className="font-semibold">Responsabilitate Partajată</h5><p className="text-sm text-stone-600">Educația este văzută ca responsabilitatea copilului, susținut de comunitate.</p></div></li>
                  </ul>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-center text-stone-700 mb-4">Performanța în Educație Civică (ICCS 2022)</h4>
                  <div className="relative w-full max-w-md mx-auto h-80">
                    <canvas id="civicEducationChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parenting Section */}
        <section id="parenting" className="py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 tracking-tight">Parenting Conștient și Suport</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">Rolul părintelui este fundamental în orice formă de educație. Această secțiune explorează stilurile de parenting, cu accent pe abordarea pozitivă și autoritativă, și prezintă date relevante despre practicile din România, oferind o perspectivă asupra zonelor unde sprijinul este cel mai necesar.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">Explorarea Stilurilor de Parenting</h3>
              <div 
                onClick={() => toggleParentingCard('autoritativ')} 
                className="cursor-pointer bg-white p-6 rounded-lg shadow-md border border-amber-200 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-lg text-stone-800">Autoritativ (Democratic) 👍</h4>
                {expandedParentingCard === 'autoritativ' && (
                  <p className="mt-2 text-stone-600">Considerat cel mai benefic, acest stil echilibrează reguli clare cu sprijin emoțional, comunicare deschisă și încurajarea autonomiei. Copiii tind să fie mai fericiți, independenți și cu rezultate academice mai bune.</p>
                )}
              </div>
              <div 
                onClick={() => toggleParentingCard('autoritar')} 
                className="cursor-pointer bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-lg text-stone-800">Autoritar</h4>
                {expandedParentingCard === 'autoritar' && (
                  <p className="mt-2 text-stone-600">Se bazează pe reguli stricte și pedepse, cu o comunicare unidirecțională. Așteptările sunt mari, dar receptivitatea la nevoile copilului este scăzută.</p>
                )}
              </div>
              <div 
                onClick={() => toggleParentingCard('permisiv')} 
                className="cursor-pointer bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-lg text-stone-800">Permisiv</h4>
                {expandedParentingCard === 'permisiv' && (
                  <p className="mt-2 text-stone-600">Caracterizat prin puține reguli și cerințe, dar cu multă căldură. Părinții acționează mai mult ca prieteni, ceea ce poate duce la dificultăți de auto-control la copii.</p>
                )}
              </div>
              <div 
                onClick={() => toggleParentingCard('neglijent')} 
                className="cursor-pointer bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-lg text-stone-800">Neglijent</h4>
                {expandedParentingCard === 'neglijent' && (
                  <p className="mt-2 text-stone-600">Implicare redusă atât la nivel de reguli, cât și la nivel emoțional. Părinții sunt detașați, iar copiii sunt lăsați să se descurce singuri.</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-center text-stone-700 mb-4">Practici Parentale în România (Studiu UNICEF)</h3>
              <p className="text-center text-stone-600 mb-4">Datele arată o nevoie clară de sprijin pentru adoptarea unor strategii de disciplină non-violente.</p>
              <div className="relative w-full max-w-md mx-auto h-80">
                <canvas id="parentingPracticesChart"></canvas>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Article Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 mt-16">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-stone-500">
          <p>&copy; 2025 Ghid Interactiv de Educație Complementară. Creat pentru a sprijini inovația în educație.</p>
          <p className="text-sm mt-2">Toate informațiile sunt sintetizate din raportul "Resurse și Strategii pentru Newsletter-ul 'Educație Complementară'".</p>
        </div>
      </footer>
    </div>
  );
}