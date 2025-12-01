'use client';

import { FaDownload } from 'react-icons/fa';
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface LegalDocument {
  name: string;
  file: string;
  description: string;
}

const documents: LegalDocument[] = [
  {
    name: 'Reglas PNNC',
    file: '/1076.pdf',
    description: 'Reglamenta disposiciones sobre medio ambiente y desarrollo sostenible en Colombia.',
  },
  {
    name: 'Plan de Manejo PNNC',
    file: '/plan-de-manejo-del-pnn-sierra-nevada-de-santa-marta-y-tayrona.pdf',
    description: 'Documento técnico que guía la conservación y uso sostenible del Parque Tayrona.',
  },
  {
    name: 'Tarifa de transporte PNNC',
    file: '/precios-transporte.pdf',
    description: 'Listado oficial de tarifas para transporte hacia y desde el Hotel Yachay.',
  },
  {
    name: 'Tarifa de ingreso PNNC',
    file: '/695.pdf',
    description: 'Establece los valores actualizados para ingresar al Parque Nacional Tayrona en 2025.',
  },
  {
    name: 'Resolución No. 1558 - de 2019',
    file: '/resolucion-1558-de-2019.pdf',
    description: 'Regula la prestación de servicios ecoturísticos en áreas protegidas.',
  },
];

export default function LegalInfo() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Documentación Legal y Tarifas
          </h2>
          <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
            Antes de tu visita al Parque Tayrona, es importante que conozcas la documentación oficial y algunas recomendaciones clave que te ayudarán a tener una experiencia segura, informada y sin contratiempos.
          </p>

          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {documents.map((doc, i) => (
              <li
                key={i}
                className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition flex flex-col"
              >
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{doc.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                </div>
                <a
                  href={doc.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors mt-auto"
                >
                  <FaDownload />
                  Descargar PDF
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-center text-gray-500 mt-10">
            Todos los documentos están disponibles para tu consulta y descarga.
          </p>
        </div>
      </section>

      {/* NUEVA SECCIÓN INFORMATIVA */}
      <section className="bg-white py-12 px-6 md:px-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Información Importante</h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">👕 Recomendaciones de Vestimenta</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Ropa fresca, cómoda y de secado rápido.</li>
              <li>Zapatos cerrados o sandalias deportivas para caminatas.</li>
              <li>Sombrero, gorra o pañuelo para protegerte del sol.</li>
              <li>Traje de baño si deseas disfrutar del mar.</li>
              <li>Impermeable ligero en temporada de lluvias.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📄 Documentos Necesarios</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Cédula de ciudadanía o pasaporte vigente.</li>
              <li>Certificado de vacuna contra la fiebre amarilla (recomendado).</li>
              <li>Reserva o comprobante de pago del alojamiento o tour.</li>
              <li>Tarjeta de entrada al Parque Nacional (si aplica).</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
