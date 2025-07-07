'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState, useMemo } from 'react';
import { RoomsContext } from '../context/roomsContext';

export default function RoomCards() {
  const { rooms } = useContext(RoomsContext);
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(1000000); // Precio máximo inicial

  const locations = [
    'Cañaveral',
    'Arrecifes',
    'Piscina',
    'Cabo San Juan',
    'Playa Brava',
    'Zaino',
  ];

  // Filtrar habitaciones según ubicación y precio
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const locationMatch = locationFilter
        ? room.location.toLowerCase().includes(locationFilter.toLowerCase())
        : true;

      const priceMatch = room.price <= maxPrice;

      return locationMatch && priceMatch;
    });
  }, [rooms, locationFilter, maxPrice]);

  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-6">
        <h3 className="text-sm text-blue-600 font-semibold">Tayrona Rooms</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Hospedajes disponibles en el Parque Tayrona
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Explora nuestras mejores opciones para disfrutar del paraíso natural con comodidad.
        </p>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-8">
          {/* Filtro por ubicación */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">Todas las ubicaciones</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Filtro por precio */}
          <div className="flex items-center gap-2">
            <label htmlFor="priceRange" className="text-sm text-gray-700">
              Hasta ${maxPrice.toLocaleString('es-CO')}
            </label>
            <input
              type="range"
              id="priceRange"
              min={0}
              max={1000000}
              step={50000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-40"
            />
          </div>
        </div>
      </div>

      {/* Tarjetas filtradas */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRooms.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No hay resultados con estos filtros.</p>
        ) : (
          filteredRooms.map((room, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(room.title)}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition block"
            >
              <div className="relative w-full h-52">
                <Image
                  src={room.bannerImage[0]}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{room.title}</h4>
                <p className="text-sm text-gray-500 mb-2">Desde solo:</p>
                <p className="text-blue-600 font-bold text-lg">
                  ${room.price.toLocaleString('es-CO')}/Noche
                </p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>⏱ Por día</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    Reservar
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
