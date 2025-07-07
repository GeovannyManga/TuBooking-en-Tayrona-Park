'use client';

export default function Banner() {
  return (
    <div className="w-full h-[85vh] relative overflow-hidden">
      {/* Video de YouTube como fondo ajustado */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          className="w-[120vw] h-[120vh] absolute top-[-10vh] left-[-10vw] object-cover scale-125"
          src="https://www.youtube.com/embed/Zd1xwMHHqm8?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=Zd1xwMHHqm8"
          title="Video de fondo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Capa de texto encima */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h1 className="text-white text-2xl lg:text-6xl font-bold text-center">
          Bienvenido a
        </h1>
        <h6 className="text-white text-4xl lg:text-7xl font-bold text-center">
          <b>Tu Booking En Tayrona Park</b>
        </h6>
      </div>
    </div>
  );
}
