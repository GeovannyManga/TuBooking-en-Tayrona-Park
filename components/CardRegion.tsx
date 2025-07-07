'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const cards = [
  { title: 'Cañaveral', img: '/cañaveral.jpg', rotate: '-rotate-[6deg]', link:'https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20los%20paquetes%20que%20ofrecen%20y%20quisiera%20más%20información.', offset: 'translate-y-10' },
  { title: 'Arrecife', img: '/arrecife.webp', rotate: '-rotate-[3deg]', link:'https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20los%20paquetes%20que%20ofrecen%20y%20quisiera%20más%20información.', offset: 'translate-y-3' },
  { title: 'Piscina natural', img: '/piscina.jpg', rotate: 'rotate-0', link:'https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20los%20paquetes%20que%20ofrecen%20y%20quisiera%20más%20información.', offset: 'translate-y-0' },
  { title: 'Cabo San Juan', img: '/cabo.jpg', rotate: 'rotate-[3deg]', link:'https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20los%20paquetes%20que%20ofrecen%20y%20quisiera%20más%20información.', offset: 'translate-y-3' },
  { title: 'Playa Brava', img: '/nudista.jpeg', rotate: 'rotate-[6deg]', link:'https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20los%20paquetes%20que%20ofrecen%20y%20quisiera%20más%20información.', offset: 'translate-y-10' },
];

export default function CardRegion() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollX = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.children[0].clientWidth + 16;
    const index = Math.round(scrollX / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].clientWidth + 16;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 flex flex-col items-center py-16 px-4 overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-center">Tour Categories</h2>

      {/* 🖥️ Desktop arco */}
      
      <div className="hidden  lg:flex gap-4 justify-center items-start w-full max-w-6xl flex-wrap">
        {cards.map((card, index) => (
          <a href={card.link}
            key={index}
            className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl cursor-pointer ${card.offset} ${card.rotate}`}
          >
            <div className="w-44 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-white relative mx-2">
              <Image
                src={card.img}
                alt={card.title}
                fill
                style={{ objectFit: 'cover' }}
                quality={85}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-center mt-3 text-base font-medium text-gray-800">{card.title}</p>
          </a>
        ))}
      </div>

      {/* 📱 Mobile carrusel con dots */}
      <div className="w-full lg:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
        >
          {cards.map((card, index) => (
            <a href={card.link}
              key={index}
              className="flex-shrink-0 snap-center w-[140px] aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-white relative transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-center py-1">
                <p className="text-sm font-semibold text-gray-700">{card.title}</p>
              </div>
            </a>
          ))}
        </div>

        {/* 🔘 Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
