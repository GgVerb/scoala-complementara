import { useState, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection() {
  const images = [
    {
      name: "IMG_20250717_WA0004_1752723512417_jpg",
      alt: "Grup mare de copii și voluntari în drumeție"
    },
    {
      name: "20240802180427_IMG_0080_1_1751079248067_",
      alt: "Învățăm să aprindem focul"
    },
    {
      name: "20230816113348_IMG_1074_1751078861340_jp",
      alt: "Aventură în pădurea cu platforme"
    },
    {
      name: "20230817101244_IMG_1415_1751078861368_jp",
      alt: "Pauză în natură cu tinerii"
    },
    {
      name: "20230817105227_IMG_1442_1751078861386_jp",
      alt: "Plimbare pe drumul de țară"
    },
    {
      name: "20240803064950_IMG_0103_1751305305733_jp",
      alt: "Foc de tabără în natură"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Schimbă la fiecare 2 secunde

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Reactivează autoplay după 3 secunde
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Reactivează autoplay după 3 secunde
  };

  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Reactivează autoplay după 3 secunde
  };

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    setIsAutoPlaying(false); // Pause auto-play when lightbox opens
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsAutoPlaying(true); // Resume auto-play when lightbox closes
  };

  const nextLightboxImage = () => {
    setLightboxImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevLightboxImage = () => {
    setLightboxImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevLightboxImage();
          break;
        case 'ArrowRight':
          nextLightboxImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Galeria principală */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer group">
            <picture onClick={() => openLightbox(currentImageIndex)}>
              <source
                media="(min-width: 1200px)"
                srcSet={`/images/gallery/${images[currentImageIndex].name}_1920.webp`}
                type="image/webp"
              />
              <source
                media="(min-width: 800px)"
                srcSet={`/images/gallery/${images[currentImageIndex].name}_1200.webp`}
                type="image/webp"
              />
              <img
                src={`/images/gallery/${images[currentImageIndex].name}_800.webp`}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                loading="lazy"
                decoding="async"
              />
            </picture>

            {/* Butoane de navigare */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Zoom icon hint */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox(currentImageIndex);
                }}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Vizualizare mărită"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            {/* Indicator autoplay */}
            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-white text-xs">
                {isAutoPlaying ? 'Auto' : 'Manual'}
              </span>
            </div>
          </div>

          {/* Indicator puncte */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Mergi la imaginea ${index + 1}`}
              />
            ))}
          </div>


        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200"
              aria-label="Închide vizualizarea mărită"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightboxImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightboxImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Main image */}
            <div 
              className="relative max-w-full max-h-full mb-16"
              onClick={(e) => e.stopPropagation()}
            >
              <picture>
                <source
                  media="(min-width: 1200px)"
                  srcSet={`/images/gallery/${images[lightboxImageIndex].name}_1920.webp`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 800px)"
                  srcSet={`/images/gallery/${images[lightboxImageIndex].name}_1200.webp`}
                  type="image/webp"
                />
                <img
                  src={`/images/gallery/${images[lightboxImageIndex].name}_800.webp`}
                  alt={images[lightboxImageIndex].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </picture>
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium mb-2">
                  {images[lightboxImageIndex].alt}
                </p>
                <p className="text-white/80 text-sm">
                  Imagine {lightboxImageIndex + 1} din {images.length}
                </p>
              </div>
            </div>

            {/* Thumbnail navigation - moved outside image container */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImageIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === lightboxImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Mergi la imaginea ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
