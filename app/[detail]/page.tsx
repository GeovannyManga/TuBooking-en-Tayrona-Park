'use client';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { useParams } from 'next/navigation';
import { RoomsContext } from '../../context/roomsContext';

interface RoomDescription {
  ubicacion: string;
  alojamiento: string;
  servicios: string;
  actividades: string;
  opiniones: string[];
}

interface Room {
  id: number;
  title: string;
  location: string;
  price: number;
  img: string;
  bannerImage: string[];
  description: RoomDescription;
}

// Carrusel de imágenes sin librerías
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const next = () => setIndex(index === images.length - 1 ? 0 : index + 1);
  const goTo = (i: number) => setIndex(i);

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden">
      {/* Imagen activa */}
      <div className="relative w-full h-full">
        <Image
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          fill
          priority
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>

      {/* Puntos indicadores */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const DetailPage = () => {
  const { rooms } = useContext(RoomsContext);
  console.log(rooms)
   const params = useParams();
  const detailParam = decodeURIComponent(params?.detail as string);
  console.log(detailParam)

  

  // Dummy temporal (si no hay contexto aún)
const room = rooms.filter(
  (e) => e.title.toLowerCase() === detailParam.toLowerCase()
);
const selectedRoom: Room | undefined = room[0];


  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Carrusel */}
      <ImageCarousel images={selectedRoom.bannerImage} />

      {/* Info principal */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{selectedRoom.title}</h1>
        <p className="text-gray-600 text-lg">{selectedRoom.location}</p>
        <p className='text-gray-600 text-lg'>Desde tan solo:</p>
        <p className="text-2xl text-green-600 font-semibold">
  ${selectedRoom.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} COP
</p>

      </div>

      {/* Descripción */}
      <div className="bg-gray-100 rounded-lg p-5 space-y-4 text-base leading-relaxed">
        <p><strong>📍 Ubicación:</strong> {selectedRoom.description.ubicacion}</p>
        <p><strong>🏕 Alojamiento:</strong> {selectedRoom.description.alojamiento}</p>
        <p><strong>🛎 Servicios:</strong><br />{selectedRoom.description.servicios}</p>
        <p><strong>🎯 Actividades:</strong> {selectedRoom.description.actividades}</p>
        <div>
          <strong>💬 Opiniones:</strong>
          <ul className="list-disc pl-6 mt-1 text-gray-700 italic">
            {selectedRoom.description.opiniones.map((op, idx) => (
              <li key={idx}>“{op}”</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botón */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full text-lg">
        Reservar
      </button>
    </div>
  );
};

export default DetailPage;
