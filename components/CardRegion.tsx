'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const cards = [
  { title: 'Tours en la naturaleza', img: 'https://res.cloudinary.com/drpyfh8bw/image/upload/v1764543880/samples/Tubooking/WhatsApp_Image_2025-11-30_at_17.45.06_1_axoocx.jpg', rotate: '-rotate-[6deg]', link:'https://wa.me/573106011889?text=Hola,%20he%20visto%20los%20tours%20que%20ofrecen%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20%C2%BFQu%C3%A9%20tours%20disponibles%20tienen%20en%20la%20naturaleza?', offset: 'translate-y-3' },
  { title: 'Tours culturales e historicos', img: 'https://res.cloudinary.com/drpyfh8bw/image/upload/v1764543881/samples/Tubooking/WhatsApp_Image_2025-11-30_at_17.45.06_enfxaz.jpg', rotate: '-rotate-[2deg]', link:'https://wa.me/573106011889?text=Hola,%20he%20visto%20los%20tours%20que%20ofrecen%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20%C2%BFQu%C3%A9%20tours%20culturales%20e%20hist%C3%B3ricos%20tienen%20disponibles', offset: 'translate-y-0' },
  { title: 'Experiencias Acuaticas', img: 'https://res.cloudinary.com/drpyfh8bw/image/upload/v1764543880/samples/Tubooking/WhatsApp_Image_2025-11-30_at_17.45.03_hedaat.jpg', rotate: 'rotate-[2deg]', link:'https://wa.me/573106011889?text=Hola%2C%20he%20visto%20los%20tours%20que%20ofrecen%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20%C2%BFQu%C3%A9%20experiencias%20acu%C3%A1ticas%20tienen%20disponibles', offset: 'translate-y-0' },
  { title: 'Experiencias de bienestar', img: 'https://res.cloudinary.com/drpyfh8bw/image/upload/v1764544373/samples/Tubooking/WhatsApp_Image_2025-11-30_at_17.54.25_u21v31.jpg', rotate: 'rotate-[6deg]', link:'https://wa.me/573106011889?text=Hola,%20he%20visto%20los%20tours%20que%20ofrecen%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20%C2%BFQu%C3%A9%20experiencias%20acu%C3%A1ticas%20tienen%20disponibles%3F', offset: 'translate-y-3' },
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
    <section id='region' className="w-full bg-gradient-to-b from-white to-blue-50 flex flex-col items-center py-16 px-4 overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-center">Tour Categories</h2>

      {/* 🖥️ Desktop arco */}
      
      <div className="hidden  lg:flex gap-4 justify-center items-start w-full max-w-6xl flex-wrap">
        {cards.map((card, index) => (
          <a   target="_blank" href={card.link}
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
            <a   target="_blank" href={card.link}
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
