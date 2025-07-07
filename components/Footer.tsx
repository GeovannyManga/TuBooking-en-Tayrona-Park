'use client';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-3 text-green-700">Tu Booking en Tayrona</h2>
          <p className="text-sm">
            Vive la experiencia del Parque Tayrona con comodidad y seguridad. Reserva con nosotros y conéctate con la naturaleza.
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-3">Enlaces</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#home" className="hover:text-green-700">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-green-700">Servicios</a></li>
            <li><a href="#habitaciones" className="hover:text-green-700">Habitaciones</a></li>
            <li><a href="#sectores" className="hover:text-green-700">Sectores</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-3">Contacto</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Santa Marta, Magdalena</li>
            <li>📧 contacto@tayronabooking.com</li>
            <li>📞 +57 300 000 0000</li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-3">Síguenos</h3>
          <div className="flex space-x-4 text-green-700 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-center text-sm py-4 border-t">
        © {new Date().getFullYear()} Tu Booking Tayrona. Todos los derechos reservados.
      </div>
    </footer>
  );
}
