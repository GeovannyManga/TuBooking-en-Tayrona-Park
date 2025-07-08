'use client';

import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const documents = [
  { name: "Registro Nacional de Turismo (RNT)", file: "/docs/rnt.pdf" },
  { name: "Certificación de operador turístico", file: "/docs/certificado-operador.pdf" },
  // Puedes seguir agregando más...
];

const gallery = [
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845678/samples/detailsTuBooking/tours/caption_u8aune.jpg",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845175/samples/detailsTuBooking/tours/mini_hrjkae.jpg",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751844827/samples/detailsTuBooking/tours/caminata-cabo-san-juan_e3hlkp.webp",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773109/samples/detailsTuBooking/bamboo/AC9h4nrqA3PMusbiN-07mn28-o7bUraBJsLTJ1EIU7s4-W9tYGXQfyCSbfyZo58Wh4XN_7aJX2Zy-Zlvatv3cf8rHtThMETV_BiqTRsSg5jzKve_0gD9qExKEeJsZvY3oJawiGTkr9x0_s1360-w1360-h1020-rw_glns5y.webp",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780284/samples/detailsTuBooking/amanecer/AC9h4npwdXPiA5QGFkX74ZQuWg90vEyW8j0bFpzSxzwzOhU_J8ayQ-ypG25AZQIB22wFVnijLFEktQoLcTig4_TKh3hgacsGPoao0XcQsn7qmRSrJFaWqmFg_wv2-EGkYZqpHSROPcmU0Q_s1360-w1360-h1020-rw_ocg1zw.webp",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845855/samples/detailsTuBooking/tours/yog_fpbvfd.jpg",
];

export default function AboutUs() {
  return (
    <div>
            <NavBar></NavBar>
        <section className="px-6 py-12 md:px-20 bg-white text-gray-800">
          {/* Presentación */}
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">Sobre Nosotros</h2>
            <p className="text-lg md:text-xl text-gray-600">
              En <span className="font-semibold text-green-800">TuBooking en Tayrona Park</span>, somos una agencia turística especializada en crear experiencias inolvidables en uno de los destinos más mágicos de Colombia. Ofrecemos tours guiados, hospedajes seleccionados, paquetes completos y atención personalizada para que descubras lo mejor del Parque Tayrona con confianza y tranquilidad.
            </p>
          </div>
          {/* Galería */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center text-green-700">Lo que hacemos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((src, idx) => (
                <div key={idx} className="relative w-full h-64 rounded overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                  <Image
                    src={src}
                    alt={`Actividad ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Sección legal */}
          <div className="bg-gray-100 rounded-xl p-8 shadow-inner max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-6 text-green-700">Legalidad y Confianza</h3>
            <p className="text-center text-gray-700 mb-6">
              Estamos plenamente certificados para operar dentro del Parque Nacional Natural Tayrona y cumplir con todos los requisitos legales del sector turístico. Nuestro compromiso es ofrecerte un servicio seguro, legal y de alta calidad.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-green-600 text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors duration-200 shadow"
                >
                  {doc.name}
                </a>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Puedes consultar o descargar cada documento legal cuando lo desees.
            </p>
          </div>
        </section>
        <Footer></Footer>
    </div>
  );
}
