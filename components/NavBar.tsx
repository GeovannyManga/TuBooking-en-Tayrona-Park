'use client';

import React, { useState } from "react";
import Link from "next/link";
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
        <div className="hidden sm:flex gap-4 items-center whitespace-nowrap">
          <a
            target="_blank"
            href="https://wa.me/573106011889?text=Hola%2C%20me%20interesan%20sus%20tours%20por%20el%20Parque%20Tayrona%20y%20tengo%20algunas%20preguntas%20comunes%3A%0A1.%20%C2%BFCu%C3%A1les%20son%20las%20fechas%20disponibles%3F%0A2.%20%C2%BFCu%C3%A1l%20es%20el%20precio%20y%20qu%C3%A9%20incluye%20cada%20paquete%3F%0A3.%20%C2%BFQu%C3%A9%20duraci%C3%B3n%20y%20nivel%20de%20dificultad%20tiene%20cada%20actividad%3F%0A4.%20%C2%BFNecesito%20llevar%20equipo%20especial%3F%0A5.%20%C2%BFOfrecen%20gu%C3%ADas%20biling%C3%BCes%3F%0A%C2%A1Gracias%21"
            className="hover:text-cyan-700 transition-colors duration-200"
          >
            Preguntas
          </a>
          <a
            target="_blank"
            href="https://wa.me/573106011889?text=Hola%2C%20necesito%20ayuda%20con%20un%20tema%20relacionado%20con%20los%20tours%20o%20mi%20reserva.%20%C2%BFPodr%C3%ADan%20ayudarme%2C%20por%20favor%3F"
            className="hover:text-cyan-700 transition-colors duration-200"
          >
            Soporte
          </a>
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
            <li><Link  href="/" className="hover:text-cyan-700 transition-colors duration-200">Home</Link></li>
            <li><Link href="/tours" className="hover:text-cyan-700 transition-colors duration-200">Tours</Link></li>
            <li><Link href="/#cards" className="hover:text-cyan-700 transition-colors duration-200">Habitaciones</Link></li>
            <li><Link href="/about" className="hover:text-cyan-700 transition-colors duration-200">Sobre Nosotros</Link></li>
          </ul>
        </div>

        {/* Botón reservar */}
        <Link
          target="_blank"
          href="https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20hacer%20una%20reserva%20dentro%20del%20Parque%20Tayrona.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20opciones%20disponibles%2C%20fechas%20y%20precios%3F%20Gracias."
          className="hidden lg:flex h-[70%] w-60 bg-cyan-700 text-center items-center justify-center mr-10 rounded-4xl hover:bg-cyan-800 hover:brightness-110 transition-colors duration-200"
        >
          <h6 className="text-white font-bold">¡Reserva Ahora!</h6>
        </Link>

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
          <Link href="/" className="hover:text-cyan-700 transition-colors duration-200">Home</Link>
          <Link href="/tours" className="hover:text-cyan-700 transition-colors duration-200">Tours</Link>
          <Link href="/#cards" className="hover:text-cyan-700 transition-colors duration-200">Habitaciones</Link>
          <Link href="/about" className="hover:text-cyan-700 transition-colors duration-200">Sobre Nosotros</Link>
          <Link
            target="_blank"
            href="https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20hacer%20una%20reserva%20dentro%20del%20Parque%20Tayrona.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20opciones%20disponibles%2C%20fechas%20y%20precios%3F%20Gracias."
            className="bg-cyan-700 text-white text-center rounded-2xl py-2 mt-2 hover:bg-cyan-800 hover:brightness-110 transition-colors duration-200"
          >
            ¡Reserva Ahora!
          </Link>
        </div>
      )}
    </div>
  );
}
