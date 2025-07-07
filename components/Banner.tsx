/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 310;
const FRAME_TIME = 5000 / 50; // ~16.67ms (60 FPS)

export default function Banner() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [frameIndex, setFrameIndex] = useState(1);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Precargar todas las imágenes
  useEffect(() => {
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/banner/${i}.jpg`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };

      imagesRef.current[i] = img;
    }
  }, []);

  // Iniciar la animación cuando estén todas las imágenes cargadas
  useEffect(() => {
    if (!imagesLoaded) return;

    intervalRef.current = setInterval(() => {
      setFrameIndex(prev => (prev >= TOTAL_FRAMES ? 1 : prev + 1));
    }, FRAME_TIME);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="w-full h-[85vh] flex items-center justify-center bg-black text-white">
        Cargando animación...
      </div>
    );
  }

  return (
  <div className="w-full h-[85vh] relative overflow-hidden">
    <img
      src={imagesRef.current[frameIndex].src}
      alt={`frame ${frameIndex}`}
      className="object-cover w-full h-full"
    />

    {/* Capa encima sin usar z-index */}
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <h1 className="text-white text-2xl lg:text-6xl font-bold text-center">
        Bienvenido a
      </h1>
      <h6 className='text-white text-4xl lg:text-7xl font-bold text-center'><b>Tu Booking En Tayrona Park</b></h6>
    </div>
  </div>
);

}
