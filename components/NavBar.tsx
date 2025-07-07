'use client';

import React, { useState } from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Barra superior */}
   <div className="w-full h-10 flex flex-row justify-between items-center px-2 sm:px-4 md:px-8 bg-slate-100 text-xs sm:text-sm md:text-base">
  {/* 🗺️ Ubicación */}
  <div className="flex items-center overflow-hidden whitespace-nowrap">
    <IoLocationOutline className="mr-1 sm:mr-2 md:mr-4 flex-shrink-0" />
    <span className="truncate">
      Santa Marta, Magdalena, Colombia | Parque Nacional Tayrona
    </span>
  </div>

  {/* ❓ Soporte solo visible en pantallas medianas hacia arriba */}
  <div className="hidden sm:flex gap-2 items-center whitespace-nowrap">
    <span>Preguntas</span>
    <span>Soporte</span>
  </div>
</div>


      {/* Navbar principal */}
      <div className="w-full h-20 flex justify-between items-center relative">
        <div className="h-full w-full flex items-center">
          {/* Logo */}
          <div className="h-full flex">
            <div className="h-full w-28 bg-green-950 flex justify-center items-center rounded-tr-[42px]">
              <Image
                width={100}
                height={100}
                alt="logo"
                src={"/logo.png"}
              />
            </div>
            <div className="h-full w-10 bg-green-950">
              <div className="h-full w-full rounded-bl-[110px] bg-white"></div>
            </div>
          </div>

          {/* Menú para escritorio */}
          <ul className="hidden lg:flex h-full items-center ml-10 gap-12 font-bold">
            <li>Home</li>
            <li>Servicios</li>
            <li>Habitaciones</li>
            <li>Sectores</li>
          </ul>
        </div>

        {/* Botón reservar */}
        <div className="hidden lg:flex h-[70%] w-60 bg-cyan-700 text-center items-center justify-center mr-10 rounded-4xl">
          <h6 className="text-white font-bold">{`¡Reserva Ahora!`}</h6>
        </div>

        {/* Menú hamburguesa */}
        <div className="flex lg:hidden px-4 z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable mobile */}
      {isOpen && (
        <div className="lg:hidden w-full px-6 py-4 flex flex-col gap-4 font-bold bg-white shadow-md animate-fade-in">
          <a href="#">Home</a>
          <a href="#">Servicios</a>
          <a href="#">Habitaciones</a>
          <a href="#">Sectores</a>
          <a href="#" className="bg-cyan-700 text-white text-center rounded-2xl py-2 mt-2">
            ¡Reserva Ahora!
          </a>
        </div>
      )}
    </div>
  );
}
