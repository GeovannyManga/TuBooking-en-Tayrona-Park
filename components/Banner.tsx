'use client';

export default function Banner() {
  return (
    <div className="w-full h-[85vh] relative overflow-hidden">
      {/* Video de YouTube como fondo ajustado y responsive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2 sm:w-[120vw] sm:h-[120vh] sm:top-[-10vh] sm:left-[-10vw] sm:translate-x-0 sm:translate-y-0 sm:scale-125"
          src="https://www.youtube.com/embed/Zd1xwMHHqm8?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=Zd1xwMHHqm8"
          title="Video de fondo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Capa de texto encima */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4 text-center">
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
