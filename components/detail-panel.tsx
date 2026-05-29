"use client"

import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { X } from "lucide-react"
import type { MenuItem } from "@/lib/portfolio-data"

const SYSTEM_COLORS = [
  { id: 'classic', name: { es: 'Azul Sly', en: 'Sly Blue' }, value: '#3d4eb8' },
  { id: 'kratos', name: { es: 'Rojo espartano', en: 'Spartan Red' }, value: '#9b252d' },
  { id: 'legacy', name: { es: 'Gris de legado', en: 'Legacy Grey' }, value: '#7d7979' },
  { id: 'midnight', name: { es: 'Caballero oscuro', en: 'Dark Knight' }, value: '#070b1c' },
  { id: 'lavender', name: { es: 'Lavanda', en: 'Lavender' }, value: '#cd50e1' },
  { id: 'green', name: { es: 'Verde Nathan', en: 'Nathan Green' }, value: '#475f1f' },
  { id: 'gold', name: { es: 'Oro puro', en: 'Pure Gold' }, value: '#bf8c33' }
]

interface DetailPanelProps {
  item: MenuItem | null
  categoryLabel: any
  isOpen: boolean
  onClose: () => void
  lang: 'es' | 'en'
  onColorChange: (color: string) => void
}

export function DetailPanel({ item, categoryLabel, isOpen, onClose, lang, onColorChange }: DetailPanelProps) {
  if (!item) return null

  const isThemeSelector = item.id === "theme"

  const handlePanEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100 || info.velocity.x > 500) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {!isThemeSelector && (
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}

          <motion.div
            /* 🛠️ MAGIA ACÁ: Si tiene imagen, el panel se ensancha a 550px con una transición suave */
            className={`fixed top-0 right-0 h-full z-50 bg-white/5 backdrop-blur-2xl border-l border-white/10 text-white shadow-2xl touch-pan-y ${
              item.image ? "w-[550px]" : "w-[400px]"
            } max-w-[90vw]`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.5 }}
            onDragEnd={handlePanEnd}
          >
            <div className="h-full overflow-y-auto custom-scrollbar p-10 flex flex-col">
              
              {/* Botón Cerrar */}
              <button onClick={onClose} className="ml-auto mb-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6 text-white/50" />
              </button>

              {/* Categoría */}
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">
                {typeof categoryLabel === 'string' ? categoryLabel : categoryLabel[lang]}
              </p>

              {/* Título Principal */}
              <h2 className="text-3xl font-light mb-6 leading-tight">
                {item.label[lang]}
              </h2>

              {/* 🖼️ SECCIÓN NUEVA: Renderizador de Captura con marco premium */}
              {item.image && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 aspect-video shadow-2xl flex items-center justify-center group mb-6"
                >
                  <img
                    src={item.image}
                    alt={item.label[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Filtro sutil de barrido tipo monitor de consola */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-black/20" />
                </motion.div>
              )}

              {/* DESCRIPCIÓN (Sirve para textos comunes y epígrafes de fotos) */}
              {item.description && (
                <div className="mb-8">
                  <p className="text-white/70 text-base font-light leading-relaxed whitespace-pre-wrap">
                    {item.description[lang]}
                  </p>
                </div>
              )}

              {/* Botón de Enlace Externo */}
              {item.url && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium tracking-wide text-white transition-all group w-full sm:w-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                  >
                    <span>
                      {lang === 'es' ? 'Chequealo' : 'Take a look'}
                    </span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </motion.div>
              )}

              {/* SELECTOR DE COLORES */}
              {item.id === "theme" && (
                <motion.div
                  className="flex flex-col gap-3 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">
                    {lang === 'es' ? 'Paleta del sistema' : 'System palette'}
                  </p>
                  {SYSTEM_COLORS.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => onColorChange(color.value)}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color.value, boxShadow: `0 0 10px ${color.value}66` }}
                      />
                      <span className="text-sm text-white/60 group-hover:text-white">{color.name[lang]}</span>
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Hint de cierre al final */}
              <div className="mt-auto pt-10 opacity-30 text-[10px] uppercase tracking-widest">
                <span className="hidden md:inline">{lang === 'es' ? 'Presiona Esc para volver' : 'Press Esc to go back'}</span>
                <span className="md:hidden">{lang === 'es' ? 'Desliza hacia la derecha para volver' : 'Swipe right to go back'}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}