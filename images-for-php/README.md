# Imagini pentru Site-ul PHP - Școala Complementară

## Descriere

Această arhivă conține toate imaginile necesare pentru versiunea PHP a site-ului "Școala Complementară". Imaginile sunt organizate conform structurii așteptate de codul PHP.

## Structura directoarelor

```
assets/
└── images/
    ├── hero-nature.jpg          # Imaginea principală din secțiunea hero
    ├── de-ce-eu.jpg            # Imagine pentru articolul "De ce eu"
    ├── ecosystem.png           # Diagrama ecosistemului educațional
    ├── tabere.jpg              # Imagini de la tabere și expediții
    ├── gallery/                # Galeria de imagini principale
    │   ├── image1.jpg          # Grup mare de copii și voluntari în drumeție
    │   ├── image2.jpg          # Făcutul focului și abilități de supraviețuire
    │   ├── image3.jpg          # Aventuri în copaci și escaladă
    │   ├── image4.jpg          # Pauze de reflecție în natură
    │   └── image5.jpg          # Plimbări ghidate și explorare
    ├── volunteers/             # Imagini voluntari pentru articolul "Voluntarii"
    │   ├── voluntar1.jpg       # Voluntari entuziaști în natură
    │   ├── voluntar2.jpg       # Energia pozitivă a voluntarilor
    │   ├── voluntar3.jpg       # Momentele creative cu voluntarii
    │   ├── voluntar4.jpg       # Joacă și învățare împreună
    │   ├── voluntar8.jpg       # Moment de învățare în natură
    │   ├── voluntar9.jpg       # Tânăr voluntar scout
    │   ├── noua-imagine-voluntar.jpg # Voluntari pe munte
    │   └── noua-imagine-voluntar2.jpg # Voluntar în drumeție pe pod natural
    └── founders/               # Imagini fondatori pentru pagina "Despre noi"
        ├── fondator1.jpg       # Fondator principal
        ├── fondator2.jpg       # Co-fondator
        └── fondator3.jpg       # Membru echipa fondatoare
```

## Instalare

### Pentru site-ul PHP:
1. Extrageți arhiva în directorul rădăcină al site-ului PHP
2. Asigurați-vă că structura este: `/assets/images/...`
3. Verificați permisiunile fișierelor: `chmod 644 assets/images/*.jpg`

### Dimensiuni imagini:
- **hero-nature.jpg**: 615KB - Imaginea principală optimizată pentru web
- **Gallery images**: 64KB - 6MB fiecare - Imagini autentice activități outdoor
- **Volunteer images**: 2.6MB - 5.5MB fiecare - Fotografii voluntari și activități
- **Founders images**: 3.9MB - 5.9MB fiecare - Fotografii echipa fondatoare
- **Additional images**: 358KB - 6MB - Imagini pentru articole și conținut

## Caracteristici imagini

### Hero Section
- **hero-nature.jpg**: Fundal natural pentru secțiunea principală

### Galeria principală (5 imagini)
- **image1.jpg**: Grup mare de copii și voluntari în drumeție
- **image2.jpg**: Făcutul focului - învățarea abilităților practice
- **image3.jpg**: Aventuri în copaci - activități de aventură
- **image4.jpg**: Pauze de reflecție - momente de contemplare în natură
- **image5.jpg**: Plimbări ghidate - explorarea mediului natural

### Imaginile voluntarilor (8 imagini)
- **voluntar1.jpg**: Voluntari entuziaști în natură
- **voluntar2.jpg**: Energia pozitivă a voluntarilor
- **voluntar3.jpg**: Momentele creative cu voluntarii
- **voluntar4.jpg**: Joacă și învățare împreună
- **voluntar8.jpg**: Moment de învățare în natură
- **voluntar9.jpg**: Tânăr voluntar scout
- **noua-imagine-voluntar.jpg**: Voluntari pe munte
- **noua-imagine-voluntar2.jpg**: Voluntar în drumeție pe pod natural

### Imaginile fondatorilor (3 imagini)
- **fondator1.jpg**: Fondator principal în acțiune
- **fondator2.jpg**: Co-fondator în cadru natural
- **fondator3.jpg**: Membru echipa fondatoare

### Imagini suplimentare
- **de-ce-eu.jpg**: Imagine pentru articolul personal "De ce eu"
- **ecosystem.png**: Diagrama ecosistemului educațional
- **tabere.jpg**: Imagini reprezentative de la tabere și expediții

## Compatibilitate

### Browsere
- Toate imaginile sunt în format JPEG standard
- Compatibile cu toate browserele moderne
- Optimizate pentru încărcare rapidă

### Responsive Design
- Imaginile se adaptează automat la toate dimensiunile de ecran
- CSS-ul site-ului gestionează scalarea automată
- Suport complet pentru mobile și tablet

## Notă tehnică

Aceste imagini sunt referențiate în codul PHP prin:
```php
/assets/images/hero-nature.jpg
/assets/images/gallery/image1.jpg
/assets/images/gallery/image2.jpg
// etc.
```

Site-ul PHP va funcționa corect doar dacă imaginile sunt plasate în această structură exactă.