import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Fereastra deschisă din butonul-plic din Hero.
// Conținutul anterior („Scrisoare deschisă 2026”) a fost mutat ca articol:
// /articol/scrisoare-deschisa-2026. Textul pentru 2027 e provizoriu („Lucrăm la asta”).

interface OpenLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OpenLetterModal({ isOpen, onClose }: OpenLetterModalProps) {
  // Închidere cu tasta Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="proiecte-2027-titlu"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl"
              style={{
                background: "#fdf8f0",
                border: "1px solid #d4b896",
                boxShadow: "0 25px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.6)"
              }}
            >
              <div className="h-2 w-full rounded-t-sm" style={{background: "#2d5a27"}} />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors z-10"
                aria-label="Închide"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-8 sm:px-12 py-10 sm:py-14" style={{fontFamily: "'Georgia', 'Times New Roman', serif"}}>
                <h2
                  id="proiecte-2027-titlu"
                  className="text-2xl sm:text-3xl font-bold text-center"
                  style={{color: "#2d5a27"}}
                >
                  Proiecte și vise pentru 2027
                </h2>
                <div className="w-24 h-px mx-auto mt-6 mb-6" style={{background: "#2d5a27", opacity: 0.3}} />
                <p className="text-center text-stone-700 leading-relaxed" style={{fontSize: "1.1rem"}}>
                  Lucrăm la asta
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// T7: poziția vine din `className` — în Hero se folosesc două instanțe:
// în flux sub butoane pe ecrane mici, în colțul din dreapta jos pe desktop.
export function OpenLetterButton({ onClick, className = "" }: { onClick: () => void; className?: string }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`z-20 ${className}`}
      aria-label="Proiecte și vise pentru 2027"
    >
      <div
        className="relative flex flex-col items-center justify-center w-36 h-24 sm:w-44 sm:h-28 rounded-sm"
        style={{
          background: "#fef9f2",
          border: "1.5px solid #c8a96e",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(200,169,110,0.3)"
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-1/2 opacity-20"
          style={{
            background: "linear-gradient(135deg, transparent 50%, #c8a96e 50%)",
            borderBottom: "1px solid #c8a96e"
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center z-10 shadow-md"
          style={{background: "#8b1a1a"}}
        >
          <span className="text-white text-xs font-bold">GL</span>
        </div>
        <p
          className="absolute bottom-3 text-center text-xs font-bold tracking-wide leading-tight px-2"
          style={{color: "#5a3e1b", fontFamily: "Georgia, serif"}}
        >
          Proiecte și vise<br />
          <span style={{color: "#8b4513"}}>pentru 2027</span>
        </p>
      </div>
    </motion.button>
  );
}
