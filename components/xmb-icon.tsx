"use client"

import { motion } from "framer-motion"
import { ComponentType, SVGProps} from "react"

interface XMBIconProps {
  icon: ComponentType<{ className?: string }>
  label: string
  isActive: boolean
  isInActiveColumn: boolean
}

export function XMBIcon({ icon: Icon, label, isActive, isInActiveColumn }: XMBIconProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      animate={{
        scale: isActive ? 1.2 : isInActiveColumn ? 0.9 : 0.75,
        opacity: isActive ? 1 : isInActiveColumn ? 0.7 : 0.35,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <motion.div
        className={`relative p-4 rounded-2xl ${isActive ? "xmb-glow" : ""
          }`}
        animate={{
          backgroundColor: isActive
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <Icon
          className={`w-12 h-12 transition-colors duration-300 ${isActive ? "text-white" : "text-white/60"
            }`}
          strokeWidth={1.5}
        />
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
            }}
          />
        )}
      </motion.div>
      <motion.span
        className={`text-sm font-medium tracking-wide whitespace-nowrap ${isActive ? "xmb-text-glow text-white" : "text-white/60"
          }`}
        animate={{
          opacity: isActive ? 1 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}
