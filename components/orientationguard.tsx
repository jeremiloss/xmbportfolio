export default function OrientationGuard() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 p-6 text-center portrait:flex landscape:hidden">
      {/* Ícono animado de rotar teléfono */}
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
        <svg 
          className="h-10 w-10 text-white animate-pulse" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
        {/* Flechita de rotación */}
        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white text-zinc-950 flex items-center justify-center font-bold text-xs animate-spin [animation-duration:3s]">
          ↻
        </div>
      </div>

      <h2 className="text-xl font-bold tracking-wide text-white mb-2">
        EXPERIENCIA DE CONSOLA
      </h2>
      <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
        Para disfrutar de la interfaz XMB retro-futurista, por favor <span className="text-white font-medium">girá tu dispositivo</span> en forma horizontal.
      </p>
    </div>
  )
}