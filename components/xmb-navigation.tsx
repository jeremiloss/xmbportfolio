"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { XMBIcon } from "./xmb-icon"
import { XMBItem } from "./xmb-item"
import { DetailPanel } from "./detail-panel"

const ITEM_HEIGHT = 86
const CATEGORY_SPACING = 100
const SWIPE_THRESHOLD = 50 // Minimum swipe distance to trigger navigation


interface XMBNavigationProps {
  lang: 'es' | 'en'
  onLanguageChange: () => void
  onColorChange: (color: string) => void
}

export function XMBNavigation({ lang, onLanguageChange, onColorChange }: XMBNavigationProps) {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [itemIndices, setItemIndices] = useState<number[]>(
    portfolioData.map(() => 0)
  )
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const swipeRef = useRef({ startX: 0, startY: 0, handled: false })
  const currentCategory = portfolioData[categoryIndex]
  const currentItemIndex = itemIndices[categoryIndex]
  const currentItem = currentCategory.items[currentItemIndex]


  const navigateCategory = useCallback((direction: number) => {
    setCategoryIndex((prev) => {
      const next = prev + direction
      if (next < 0) return portfolioData.length - 1
      if (next >= portfolioData.length) return 0
      return next
    })
  }, [])

  const navigateItem = useCallback(
    (direction: number) => {
      setItemIndices((prev) => {
        const newIndices = [...prev]
        const currentItems = portfolioData[categoryIndex].items
        let next = newIndices[categoryIndex] + direction
        if (next < 0) next = currentItems.length - 1
        if (next >= currentItems.length) next = 0
        newIndices[categoryIndex] = next
        return newIndices
      })
    },
    [categoryIndex]
  )

  const openPanel = useCallback(() => {
    if (currentCategory?.id === "toolstack") {
    return 
  }
    if (currentItem.id === "language") {
      onLanguageChange()

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      const nextLang = lang === 'es' ? 'English' : 'Español'
      setNotification(lang === 'es' ? `System Language: ${nextLang}` : `Idioma del sistema: ${nextLang}`)


      timeoutRef.current = setTimeout(() => {
        setNotification(null)
        timeoutRef.current = null
      }, 1500)

      return
    }

    // Si es cualquier otro item (incluyendo 'theme'), abrimos el panel
    setIsPanelOpen(true)
  }, [currentItem, onLanguageChange])

  const closePanel = useCallback(() => {
    setIsPanelOpen(false)
  }, [])

  // Touch/Swipe handlers for mobile navigation
  const handlePanEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (isPanelOpen) return // Don't navigate when panel is open

      const { offset, velocity } = info
      const swipeX = offset.x
      const swipeY = offset.y
      const velocityX = velocity.x
      const velocityY = velocity.y

      // Determine if this is primarily a horizontal or vertical swipe
      const isHorizontal = Math.abs(swipeX) > Math.abs(swipeY)

      if (isHorizontal) {
        // Horizontal swipe - navigate categories
        if (Math.abs(swipeX) > SWIPE_THRESHOLD || Math.abs(velocityX) > 500) {
          if (swipeX > 0) {
            navigateCategory(-1) // Swipe right = go left (previous category)
          } else {
            navigateCategory(1) // Swipe left = go right (next category)
          }
        }
      } else {
        // Vertical swipe - navigate items
        if (Math.abs(swipeY) > SWIPE_THRESHOLD || Math.abs(velocityY) > 500) {
          if (swipeY > 0) {
            navigateItem(-1) // Swipe down = go up (previous item)
          } else {
            navigateItem(1) // Swipe up = go down (next item)
          }
        }
      }
    },
    [isPanelOpen, navigateCategory, navigateItem]
  )

  // Double tap to open panel (for mobile)
  const lastTapRef = useRef<number>(0)
  const handleTap = useCallback(() => {
    if (isPanelOpen) return
    
    const now = Date.now()
    const timeSinceLastTap = now - lastTapRef.current
    
    if (timeSinceLastTap < 300) {
      // Double tap detected - open panel
      openPanel()
    }
    lastTapRef.current = now
  }, [isPanelOpen, openPanel])
useEffect(() => {
  return () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }
}, [])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If panel is open, only handle Escape
      if (isPanelOpen) {
        if (e.key === "Escape") {
          e.preventDefault()
          closePanel()
        }
        return
      }

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault()
          navigateCategory(-1)
          break
        case "ArrowRight":
          e.preventDefault()
          navigateCategory(1)
          break
        case "ArrowUp":
          e.preventDefault()
          navigateItem(-1)
          break
        case "ArrowDown":
          e.preventDefault()
          navigateItem(1)
          break
        case "Enter":
          e.preventDefault()
          openPanel()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigateCategory, navigateItem, openPanel, closePanel, isPanelOpen])

  // Calculate horizontal offset so current category is centered
  const categoryOffset = -categoryIndex * CATEGORY_SPACING

  return (
    <div className="relative z-10 w-full h-screen flex items-center justify-center overflow-hidden touch-none">
      {/* Touch/Swipe detection layer for mobile */}
      <motion.div
        className="absolute inset-0 z-20"
        onPanEnd={handlePanEnd}
        onTap={handleTap}
        style={{ touchAction: "none" }}
      />
      
      {/* Main navigation container */}
      <div className="relative flex items-center z-30 pointer-events-none">
        {/* Horizontal categories row */}
        <motion.div
          className="flex items-center"
          style={{ gap: CATEGORY_SPACING }}
          animate={{ x: categoryOffset }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
          }}
        >
          {portfolioData.map((category, catIdx) => {
            const isActive = catIdx === categoryIndex
            const selectedItemIndex = itemIndices[catIdx]

            return (
              <div key={category.id} className="relative flex flex-col items-center">
                {/* Items ABOVE the category icon */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-full mb-6 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.items.map((item, itemIdx) => {
                      const offset = itemIdx - selectedItemIndex
                      // Only show items above (negative offset)
                      if (offset >= 0) return null
                      const isVisible = Math.abs(offset) <= 3

                      if (!isVisible) return null

                      return (
                        <motion.div
                          key={item.id}
                          className="absolute"
                          animate={{
                            y: offset * ITEM_HEIGHT,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <button
                            onClick={() => {
                              const newIndices = [...itemIndices]
                              newIndices[catIdx] = itemIdx
                              setItemIndices(newIndices)
                            }}
                            className="focus:outline-none pointer-events-auto"
                            aria-label={`Select ${item.label}`}
                          >
                            <XMBItem
                              item={item}
                              isActive={false}
                              offset={offset}
                              lang={lang}
                            />
                          </button>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}

                {/* Category Icon */}
                <button
                  onClick={() => setCategoryIndex(catIdx)}
                  className="focus:outline-none relative z-10 pointer-events-auto"
                  aria-label={`Navigate to ${category.label}`}
                >
                  <XMBIcon
                    icon={category.icon}
                    label={category.label[lang]}
                    isActive={isActive}
                    isInActiveColumn={true}
                  />
                </button>

                {/* Items BELOW the category icon */}
                {isActive && (
                  <motion.div
                    className="absolute top-full mt-6 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.items.map((item, itemIdx) => {
                      const offset = itemIdx - selectedItemIndex
                      // Only show items below and the active item (offset >= 0)
                      if (offset < 0) return null
                      const isVisible = offset <= 3

                      if (!isVisible) return null

                      return (
                        <motion.div
                          key={item.id}
                          className="absolute"
                          animate={{
                            y: offset * ITEM_HEIGHT,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <button
                            onClick={() => {
                              const newIndices = [...itemIndices]
                              newIndices[catIdx] = itemIdx
                              setItemIndices(newIndices)
                              // Open panel on click
                              openPanel()
                            }}
                            onDoubleClick={openPanel}
                            className="focus:outline-none pointer-events-auto"
                            aria-label={`Select ${item.label}`}
                          >
                            <XMBItem
                              item={item}
                              isActive={itemIdx === selectedItemIndex}
                              offset={offset}
                              lang={lang}
                            />
                          </button>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Detail panel - right side */}
      <DetailPanel
        item={currentItem}
        categoryLabel={currentCategory.label}
        lang={lang}
        onColorChange={onColorChange}
        isOpen={isPanelOpen}
        onClose={closePanel}
      />

      {/* Navigation hints - Desktop */}
      <motion.div
        className="fixed bottom-8 right-8 text-white/40 text-xs space-y-1 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPanelOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">←</kbd>
          <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">→</kbd>

        </p>
        <p className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">↑</kbd>
          <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">↓</kbd>

        </p>
        <p className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">Enter</kbd>

        </p>
      </motion.div>

      {/* Navigation hints - Mobile */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPanelOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-white/50">
            {lang === 'es' ? 'Desliza para navegar' : 'Swipe to navigate'}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40">← →</span>
            <span className="text-white/30">|</span>
            <span className="text-white/40">↑ ↓</span>
          </div>
          <p className="text-[10px] text-white/30 mt-1">
            {lang === 'es' ? 'Doble tap para abrir' : 'Double tap to open'}
          </p>
        </div>
      </motion.div>

      {/* Time display tipo PS3 */}
      <motion.div
        className="fixed top-8 right-12 text-white/60 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Traducimos el texto superior usando un ternario directo */}
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 block mb-1">
          {lang === 'es' ? 'Sistema en línea' : 'System Online'}
        </span>


        <TimeDisplay lang={lang} />
      </motion.div>
      {/* NOTIFICACIÓN DE SISTEMA PS3 */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed top-28 right-8 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-black/10 backdrop-blur-md border border-white/10 text-white shadow-2xl select-none"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}

          >
            <span className="text-xs font-light tracking-wide">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>


  )

}


interface TimeDisplayProps {
  lang: 'es' | 'en'
}

function TimeDisplay({ lang }: TimeDisplayProps) {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="text-right">
        <div className="text-2xl font-light tracking-wider opacity-40">--:--</div>
        <div className="text-xs text-white/20 tracking-wide">
          {lang === 'es' ? 'Cargando...' : 'Loading...'}
        </div>
      </div>
    )
  }


  const localeStr = lang === 'es' ? 'es-AR' : 'en-US'

  return (
    <div className="text-right select-none">
      {/* HORA */}
      <div className="text-2xl font-light tracking-wider text-white/90">
        {time.toLocaleTimeString(localeStr, { // <-- Inyectamos la localización acá
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>

      {/* FECHA */}
      <div className="text-xs text-white/40 tracking-wide mt-0.5 capitalize">
        {time.toLocaleDateString(localeStr, { // <-- Y acá
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  )
}
