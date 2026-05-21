"use client"

import { useState, useEffect } from "react"
import { WaveBackground } from "@/components/wave-background"
import { XMBNavigation } from "@/components/xmb-navigation"

export default function Home() {
  // 1. Estado Global del Idioma
  const [lang, setLang] = useState<'es' | 'en'>('es')

  // 2. Estado Global del Color (opcional, por si querés el flex del color)
  const [accentColor, setAccentColor] = useState('#3d4eb8') // Azul PS3 inicial

  // 3. Función para cambiar idioma que pasaremos hacia abajo
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  // 4. Efecto para actualizar el color en el Canvas o variables CSS
  useEffect(() => {
    document.documentElement.style.setProperty('--xmb-accent', accentColor)
  }, [accentColor])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0c0e]">
      {/* Pasamos el accentColor al fondo para que las ondas reaccionen */}
      <WaveBackground accentColor={accentColor} />
      
      {/* 
          Pasamos todo lo necesario a la navegación:
          - lang: para que los textos cambien
          - toggleLanguage: para que el botón de Settings funcione
          - setAccentColor: por si querés cambiar colores desde el menú
      */}
      <XMBNavigation 
        lang={lang} 
        onLanguageChange={toggleLanguage}
        onColorChange={setAccentColor}
      />
    </main>
  )
}