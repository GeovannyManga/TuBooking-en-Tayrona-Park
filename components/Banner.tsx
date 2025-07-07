'use client';

export default function Banner() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Video de YouTube como fondo adaptado sin bordes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/Zd1xwMHHqm8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=Zd1xwMHHqm8"
          title="Video de fondo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Capa de texto encima */}
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
