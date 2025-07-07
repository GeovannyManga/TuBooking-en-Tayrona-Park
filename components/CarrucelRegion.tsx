'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const cards = [
  { title: 'Cañaveral', img: '/cañaveral.jpg' },
  { title: 'Arrecife', img: '/arrecife.webp' },
  { title: 'Piscina natural', img: '/piscina.jpg' },
  { title: 'Cabo San Juan', img: '/cabo.jpg' },
  { title: 'Sendero final', img: '/nudista.jpeg' },
];

export default function CarouselRegion() {
  const [currentIndex, setCurrentIndex] = useState(2); // Centro inicial

  const moveLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const moveRight = () => {
    if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="w-full h-auto bg-gradient-to-b from-white to-blue-50 flex flex-col items-center py-10 overflow-hidden relative">
      <h2 className="text-2xl font-semibold mb-8">Popular Destination</h2>
      <div className="relative w-full flex justify-center items-center">
        <button onClick={moveLeft} className="absolute left-4 z-10 text-3xl">&#8592;</button>
        <div className="relative w-[800px] h-[400px]">
          {cards.map((card, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);

            // Posición horizontal y escala según distancia al centro
            const translateX = offset * 150;
            const scale = 1 - absOffset * 0.15;
            const zIndex = 5 - absOffset;
            const opacity = absOffset > 2 ? 0 : 1;
          

            return (
              <div
                key={index}
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <div className="w-60 h-96 rounded-xl overflow-hidden shadow-xl bg-white relative">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={80}
                    priority={offset === 0}
                  />
                </div>
                <p className="text-center mt-2 font-medium">{card.title}</p>
              </div>
            );
          })}
        </div>
        <button onClick={moveRight} className="absolute right-4 z-10 text-3xl">&#8594;</button>
      </div>
    </div>
  );
}
