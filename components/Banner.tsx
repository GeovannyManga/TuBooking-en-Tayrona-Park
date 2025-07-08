'use client';

import { useState } from 'react';

export default function Banner() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-black">
      {/* Loader mientras se carga el video */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video de fondo de YouTube */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[350vw] lg:w-full h-[300vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/Zd1xwMHHqm8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=Zd1xwMHHqm8"
          title="Video de fondo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setLoading(false)} // Oculta loader al cargar
        ></iframe>
      </div>

      {/* Capa de oscurecimiento suave */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      {/* Texto encima del video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 pointer-events-none">
        <h1 className="text-white text-xl sm:text-2xl lg:text-6xl font-bold">
          Bienvenido a
        </h1>
        <h6 className="text-white text-3xl sm:text-4xl lg:text-7xl font-bold">
          <b>Tu Booking En Tayrona Park</b>
        </h6>
      </div>
    </div>
  );
}
