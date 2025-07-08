'use client';

import { FaDownload } from 'react-icons/fa';
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface LegalDocument {
  name: string;
  file: string;
}

const documents: LegalDocument[] = [
  {
    name: 'Resolución 042 de Turismo Responsable',
    file: '/docs/resolucion-042.pdf',
  },
  {
    name: 'Tarifas vigentes Parque Tayrona 2025',
    file: '/docs/tarifas-2025.pdf',
  },
  {
    name: 'Política de Sostenibilidad',
    file: '/docs/politica-sostenibilidad.pdf',
  },
  {
    name: 'Certificación Registro Nacional de Turismo (RNT)',
    file: '/docs/certificado-rnt.pdf',
  },
  {
    name: 'Autorización para operación dentro del Parque',
    file: '/docs/autorizacion-operacion.pdf',
  },
  // Agrega más según lo necesites
];

export default function LegalInfo() {
  return (
    <div>
            <Navbar></Navbar>
        <section className="bg-gray-50 py-12 px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
              Documentación Legal y Tarifas
            </h2>
            <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              Para garantizar la transparencia y confianza de nuestros servicios, te compartimos los documentos legales y oficiales que respaldan nuestras operaciones como agencia autorizada dentro del Parque Nacional Tayrona.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc, i) => (
                <li
                  key={i}
                  className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-800 mb-3">{doc.name}</h3>
                  <a
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
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
        <Footer></Footer>
    </div>
  );
}
