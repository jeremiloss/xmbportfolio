"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

// 1. Definimos la interfaz para recibir el color dinámico
interface WaveBackgroundProps {
  accentColor: string
}

export function WaveBackground({ accentColor }: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const getWaveY = (x: number, baseY: number, time: number, config: any) => {
      return (
        baseY +
        Math.sin(x * config.freq1 + time * config.speed1) * config.amp1 +
        Math.sin(x * config.freq2 + time * config.speed2 + Math.PI * 0.5) * config.amp2 +
        Math.sin(x * config.freq3 + time * config.speed3 + Math.PI * 0.25) * config.amp3
      )
    }

    const drawOrganicWave = (baseY: number, config: any, gradientColors: any, opacity: number) => {
      ctx.beginPath()
      for (let x = -10; x <= canvas.width + 10; x += 3) {
        const y = getWaveY(x, baseY, time, config)
        if (x === -10) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.lineTo(canvas.width + 10, canvas.height + 10)
      ctx.lineTo(-10, canvas.height + 10)
      ctx.closePath()

      const gradient = ctx.createLinearGradient(0, baseY - 100, 0, canvas.height)
      gradient.addColorStop(0, gradientColors.top)
      gradient.addColorStop(1, gradientColors.bottom)

      ctx.globalAlpha = opacity
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.globalAlpha = 1
    }

    const animate = () => {
      // 2. Usamos el accentColor para el gradiente diagonal
      // Mantenemos tu estructura: Superior Izquierda -> Inferior Derecha
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      // Usamos el color dinámico como base. 
      // TIP: Podés jugar con la opacidad del color dinámico para los stops
      bgGradient.addColorStop(0, `${accentColor}CC`); // El color con 80% opacidad (brillante)
      bgGradient.addColorStop(0.4, accentColor);     // El color puro en el centro
      bgGradient.addColorStop(1, "#0b0c0e");          // Siempre terminamos en casi negro para la profundidad

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // CAPAS DE ONDAS (Mantenemos tu configuración que quedó criminal)
      drawOrganicWave(
        canvas.height * 0.45,
        { amp1: 10, freq1: 0.002, speed1: 0.2, amp2: 60, freq2: 0.004, speed2: 0.15, amp3: 30, freq3: 0.008, speed3: 0.1 },
        { top: "rgba(255, 255, 255, 0.03)", bottom: "rgba(255, 255, 255, 0.01)" },
        0.8
      )

      drawOrganicWave(
        canvas.height * 0.5,
        { amp1: 10, freq1: 0.0025, speed1: 0.65, amp2: 10, freq2: 0.005, speed2: 0.68, amp3: 40, freq3: 0.01, speed3: 0.62 },
        { top: "rgba(255, 255, 255, 0.15)", bottom: "rgba(255, 255, 255, 0)" },
        0.6
      )

      drawOrganicWave(
        canvas.height * 0.52,
        { amp1: 90, freq1: 0.003, speed1: 0.3, amp2: 40, freq2: 0.006, speed2: 0.2, amp3: 20, freq3: 0.012, speed3: 0.15 },
        { top: "rgba(255, 255, 255, 0.1)", bottom: "rgba(255, 255, 255, 0.02)" },
        0.5
      )

      time += 0.008
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [accentColor]) // 3. IMPORTANTE: El efecto se reinicia si cambias el color

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}