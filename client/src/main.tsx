import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add title and meta description for SEO
document.title = "Școala Complementară - Aventură, Comunicare, Autonomie";

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Școala Complementară oferă educație experiențială și învățare în natură pentru dezvoltarea abilităților de viață. Antrenament pentru viață prin aventură, comunicare și autonomie.';
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'educație experiențială, școală complementară, învățare în natură, dezvoltare personală, abilități de viață, comunicare, autonomie, aventură';
document.head.appendChild(metaKeywords);

// Open Graph tags for social media
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'Școala Complementară - Educație prin Experiență și Natură';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = 'Ne educăm prin experiențe în natură și dezvoltăm abilități esențiale pentru viață.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.setAttribute('property', 'og:type');
ogType.content = 'website';
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
