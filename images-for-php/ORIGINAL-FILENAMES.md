# Maparea Numelor Originale - Imagini Site PHP

## Corespondența dintre numele din cod și fișierele originale

### Imagini Galerie

| Nume în cod PHP | Nume original fișier | Descriere |
|----------------|---------------------|-----------|
| `image1.jpg` | `IMG-20250717-WA0004_1752723512417.jpg` | Grup mare de copii și voluntari în drumeție |
| `image2.jpg` | `20240802180427_IMG_0080 (1)_1751079248067.jpg` | Făcutul focului și abilități |
| `image3.jpg` | `20230816113348_IMG_1074_1751078861340.jpg` | Aventuri în copaci și escaladă |
| `image4.jpg` | `20230817101244_IMG_1415_1751078861368.jpg` | Pauze de reflecție în natură |
| `image5.jpg` | `20230817105227_IMG_1442_1751078861386.jpg` | Plimbări ghidate și explorare |

### Imagine Hero Section

| Nume în cod PHP | Nume original fișier | Descriere |
|----------------|---------------------|-----------|
| `hero-nature.jpg` | `file-VaTWYi7N17KnQAKqVwBYTq_1749852875650.webp` | Fundal principal (convertit din WebP la JPG) |

### Imagini Voluntari

| Nume în cod PHP | Nume original fișier | Descriere |
|----------------|---------------------|-----------|
| `voluntar1.jpg` | `20240802181219_IMG_0099_1751305891721.jpg` | Voluntari entuziaști în natură |
| `voluntar2.jpg` | `20240802181210_IMG_0098_1751305947271.jpg` | Energia pozitivă a voluntarilor |
| `voluntar3.jpg` | `20240802181140_IMG_0092_1751305947331.jpg` | Momentele creative cu voluntarii |
| `voluntar4.jpg` | `20240802181003_IMG_0085_1751305947375.jpg` | Joacă și învățare împreună |
| `voluntar8.jpg` | `20230817143701_IMG_1542_1751306389939.jpg` | Moment de învățare în natură |
| `voluntar9.jpg` | `20230816170254_IMG_1251_1751306390041.jpg` | Tânăr voluntar scout |
| `noua-imagine-voluntar.jpg` | `IMG_20241030_125214_1751310249967.jpg` | Voluntari pe munte |
| `noua-imagine-voluntar2.jpg` | `IMG-20250717-WA0003_1752723434328.jpg` | Voluntar în drumeție pe pod natural |

### Imagini Fondatori

| Nume în cod PHP | Nume original fișier | Descriere |
|----------------|---------------------|-----------|
| `fondator1.jpg` | `20240802180954_IMG_0084-1_1751308595702.jpg` | Fondator principal în acțiune |
| `fondator2.jpg` | `20240802181140_IMG_0092-1_1751308595731.jpg` | Co-fondator în cadru natural |
| `fondator3.jpg` | `20240802165449_IMG_0024-1_1751308595756.jpg` | Membru echipa fondatoare |

### Imagini Suplimentare

| Nume în cod PHP | Nume original fișier | Descriere |
|----------------|---------------------|-----------|
| `de-ce-eu.jpg` | `2c2525d2-88d7-4b14-802d-689156ea1ad8_1751307511629.jpeg` | Imagine pentru articolul "De ce eu" |
| `ecosystem.png` | `ChatGPT Image May 24, 2025, 06_48_54 AM_1749854137851.png` | Diagrama ecosistemului educațional |
| `tabere.jpg` | `20240803064950_IMG_0103_1751305305733.jpg` | Imagini de la tabere și expediții |

## Referințe în codul PHP

### În fișierul `index.php`:

```php
// Hero section
<img src="/assets/images/hero-nature.jpg" alt="Copii explorând natura" class="hero-img">

// Galeria
<img src="/assets/images/gallery/image1.jpg" alt="Activități de grup în natură" class="gallery-image">
<img src="/assets/images/gallery/image2.jpg" alt="Jocuri și activități recreative" class="gallery-image">
<img src="/assets/images/gallery/image3.jpg" alt="Făcutul focului și abilități de supraviețuire" class="gallery-image">
<img src="/assets/images/gallery/image4.jpg" alt="Aventuri în copaci și escaladă" class="gallery-image">
<img src="/assets/images/gallery/image5.jpg" alt="Pauze de reflecție în natură" class="gallery-image">
<img src="/assets/images/gallery/image6.jpg" alt="Plimbări ghidate și explorare" class="gallery-image">
```

### În JavaScript pentru navigare galerie:

```javascript
const galleryImages = [
    { src: '/assets/images/gallery/image1.jpg', alt: 'Activități de grup în natură' },
    { src: '/assets/images/gallery/image2.jpg', alt: 'Jocuri și activități recreative' },
    { src: '/assets/images/gallery/image3.jpg', alt: 'Făcutul focului și abilități de supraviețuire' },
    { src: '/assets/images/gallery/image4.jpg', alt: 'Aventuri în copaci și escaladă' },
    { src: '/assets/images/gallery/image5.jpg', alt: 'Pauze de reflecție în natură' },
    { src: '/assets/images/gallery/image6.jpg', alt: 'Plimbări ghidate și explorare' }
];
```

## Notă

Toate imaginile au fost redenumite pentru a fi ușor de gestionat în codul PHP, păstrând ordinea logică pentru galerie (image1.jpg până la image6.jpg) și nume descriptive pentru alte secțiuni (hero-nature.jpg).

Fișierele originale au fost conservate cu numele lor complete pentru referință viitoare.