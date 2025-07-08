'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function KnowBeforeGo() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Información útil para tu visita
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Todo lo que necesitas saber antes de ingresar al Parque Nacional Tayrona
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">

        {/* Imágenes informativas */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="rounded-3xl overflow-hidden shadow-md h-64 relative">
            <Image
              src="https://res.cloudinary.com/drpyfh8bw/image/upload/v1751953346/samples/detailsTuBooking/legal/Senderismo-Panama_LPRIMA20170330_0018_35.jpg_c7zdfn.webp"
              alt="Ropa adecuada"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md h-64 relative mt-8">
            <Image
              src="https://res.cloudinary.com/drpyfh8bw/image/upload/v1751953423/samples/detailsTuBooking/legal/14664158758889_n6fsij.jpg"
              alt="Mapa del parque"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Texto explicativo */}
        <div className="text-gray-800">
          <p className="text-green-700 uppercase font-semibold tracking-wide mb-2">Antes de tu viaje</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            ¿Qué necesitas saber antes de visitar el Tayrona?
          </h3>
          <p className="text-lg mb-6 text-gray-600">
            Te compartimos información esencial como tarifas, reglas del parque, horarios, recomendaciones de ropa, documentos necesarios y más. ¡Prepárate para disfrutar de tu viaje sin contratiempos!
          </p>

          <Link
            href="/legalInfo"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Ver información completa
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
