"use client"

import { motion } from "framer-motion"
import type { MenuItem } from "@/lib/portfolio-data"

interface XMBItemProps {
  item: MenuItem
  isActive: boolean
  offset: number
  lang: 'es' | 'en'
  
}

export function XMBItem({ item, isActive, offset, lang }: XMBItemProps) {
  const Icon = item.icon as any
  const absOffset = Math.abs(offset)

  return (
    <motion.div
      className="relative flex items-center h-20" // Altura fija para mantener el ritmo vertical
      animate={{
        // El desplazamiento vertical (Y) lo maneja el componente padre, 
        // acá nos centramos en escala y opacidad.
        scale: isActive ? 2.2 : 1.2 - absOffset * 0.05,
        opacity: isActive ? 1 : 0.8 - absOffset * 0.1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Icono: Este es el ancla. No se mueve hacia los costados */}
      <motion.div
        className={`relative flex items-center justify-center w-10 h-10 rounded-lg flex-shrink: 0 ${isActive ? "bg-white/15" : "bg-white/5"
          }`}
        animate={{
          boxShadow: isActive
            ? "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)"
            : "0 0 0px rgba(255,255,255,0)",
        }}
      >
        <Icon
          className={`w-5 h-5 ${isActive ? "text-white" : "text-white/60"}`}
          strokeWidth={0.75}
        />
      </motion.div>

      {/* Label: Posicionado de forma absoluta o con margen fijo para no empujar el eje */}
      <motion.span
        className={`absolute left-14 text-sm font-medium tracking-wide whitespace-nowrap ${isActive ? "text-white xmb-text-glow" : "text-white/50"
          }`}
        initial={false}
        animate={{
          x: isActive ? 0 : 5, // Un pequeño desplazamiento lateral cuando no está activo
          opacity: isActive ? 1 : 0.7,
        }}
      >
        {item.label[lang]}
      </motion.span>
    </motion.div>
  )
}