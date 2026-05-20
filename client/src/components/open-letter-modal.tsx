import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import domogledLogo from "@assets/domogled-logo.png";

interface OpenLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OpenLetterModal({ isOpen, onClose }: OpenLetterModalProps) {
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
            onClick={(e) => e.stopPropagation()}
          >
            <div
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

              <div className="px-8 sm:px-12 py-8 sm:py-10" style={{fontFamily: "'Georgia', 'Times New Roman', serif"}}>

                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest">Domogled — Cerna, 2026</p>
                  </div>
                  <img
                    src={domogledLogo}
                    alt="Parcul Național Domogled-Valea Cernei"
                    className="w-20 h-20 object-contain"
                  />
                </div>

                <h2
                  className="text-2xl sm:text-3xl font-bold mb-2 text-center"
                  style={{color: "#2d5a27"}}
                >
                  Scrisoare deschisă
                </h2>
                <p className="text-center text-stone-400 text-sm mb-8 italic">
                  — către familiile care simt că lipsește ceva esențial —
                </p>
                <div className="w-24 h-px mx-auto mb-8" style={{background: "#2d5a27", opacity: 0.3}} />

                <div className="space-y-5 text-stone-700 leading-relaxed" style={{fontSize: "1.05rem"}}>

                  <p>Dragilor,</p>

                  <p>
                    Văd tinerii aflați în pragul pădurii.
                    Îi văd simțind-o ca pe ceva periculos, plin de sălbăticiuni, dar acolo curiozitatea
                    lor este maximă. Această curiozitate este cel mai puternic motor al învățării.
                    Au nevoie să audă doar atât:
                  </p>

                  <p
                    className="text-center font-bold"
                    style={{
                      color: "#2d5a27",
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                      padding: "0.25rem 0"
                    }}
                  >
                    "ești ok, dă-i înainte, în caz de ceva, sunt aici pentru tine".
                  </p>

                  <p>
                    Copiii știu să se întoarcă la lume. Au nevoie doar de spațiu și de un adult
                    care nu le stă în cale.
                  </p>

                  <p>
                    Școala Complementară nu e o alternativă la sistemul de educație. E un adaos —
                    un spațiu în care tinerii descoperă că natura nu e fundal, ci interlocutor.
                    Că emoțiile nu se gestionează după o metodă, ci se înțeleg prin contact direct cu lumea.
                    Că autonomia nu se acordă — se dobândește, pas cu pas, cu rucsacul în spate.
                  </p>

                  <p style={{fontWeight: 600, color: "#2d5a27"}}>Ce căutăm în 2026:</p>

                  <p>
                    Familii care simt că lipsește ceva esențial — nu mai multă educație, ci un alt tip de
                    contact cu lumea. Tineri care sunt dispuși să se obosească. Părinți care înțeleg că
                    un copil comod nu e neapărat un copil pregătit.
                  </p>

                  <p>
                    Eu voi ieși în continuare în natură cu turiști, cu tineri dispuși la efort, cu oameni
                    care împărtășesc mai mult sau mai puțin vibrația. Lucrez mai departe ca ranger dar am timp.
                    Am timp pentru un proiect în care credem împreună.
                  </p>

                  <p style={{fontWeight: 600, color: "#2d5a27"}}>Ce nu suntem:</p>

                  <p>
                    Nu suntem o tabără de vacanță. Nu suntem terapie în natură.
                    Nu transformăm pe nimeni — lăsăm natura să facă asta, și ea știe mai bine decât noi.
                  </p>

                  <p>
                    Nu vreau să învăț pe nimeni ceva anume. Vreau să fiu prezent — ofer experiența mea
                    la confluența dintre un spirit unic și natura mai mult decât umană care ne cuprinde pe toți.
                  </p>

                  <p>
                    Dacă te regăsești în aceste cuvinte, scrie-mi. Orice formă e bună:
                    un email, un mesaj pe WhatsApp.
                    Sunt la intrarea în pădure, vă aștept.
                  </p>

                  <p>Cu respect,</p>
                </div>

                <div className="mt-6 mb-2">
                  <p
                    style={{
                      fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                      color: "#2d5a27",
                      fontSize: "1.8rem",
                      marginBottom: "4px"
                    }}
                  >
                    Gheorghe Lungu
                  </p>
                  <p className="text-sm text-stone-400 italic">
                    Ranger, Parcul Național Domogled-Valea Cernei
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-stone-200">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="mailto:ggverb@gmail.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                      style={{background: "#2d5a27"}}
                    >
                      <Mail className="h-4 w-4" />
                      Scrie-mi un email
                    </a>
                    <a
                      href="https://wa.me/40721879347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-all duration-200 hover:opacity-90"
                      style={{background: "rgba(45,90,39,0.1)", color: "#2d5a27", border: "1px solid #2d5a27"}}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function OpenLetterButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="absolute bottom-20 right-6 sm:right-10 z-20"
      aria-label="Scrisoare deschisă 2026"
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
          Scrisoare deschisă<br />
          <span style={{color: "#8b4513"}}>2026</span>
        </p>
      </div>
    </motion.button>
  );
}
