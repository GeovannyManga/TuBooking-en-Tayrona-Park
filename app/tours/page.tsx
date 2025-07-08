'use client';
import Image from 'next/image';
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

 const tours = [
  {
    id: 1,
    title: "Tour Cabo San Juan (Camioneta Ecológica)",
    description:
      "Explora el corazón del Parque Tayrona en camioneta ecológica hasta Cañaveral y continúa caminando hasta Cabo San Juan.",
    duration: "7-8 horas",
    difficulty: "Medio",
    price: "Desde $180.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751844401/samples/detailsTuBooking/tours/cami_bcwgvl.jpg",
  },
  {
    id: 2,
    title: "Tour Piscina Natural & Arrecifes",
    description:
      "Relájate en aguas cristalinas y playas escondidas tras una corta caminata desde Cañaveral.",
    duration: "6 horas",
    difficulty: "Baja",
    price: "Desde $160.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751844249/samples/detailsTuBooking/tours/tourarr_rethnx.jpg",
  },
  {
    id: 3,
    title: "Pueblito Chayrama + Playa Nudista",
    description:
      "Caminata guiada al ancestral poblado Tayrona con llegada a Playa Nudista. Naturaleza e historia.",
    duration: "8 horas",
    difficulty: "Alta",
    price: "Desde $200.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751844479/samples/detailsTuBooking/tours/pue_kknrfe.jpg",
  },
  {
    id: 4,
    title: "Tour Cabo San Juan (Combinado)",
    description:
      "Viaje terrestre o en lancha hasta Cabo San Juan, caminata entre selva, playas y biodiversidad.",
    duration: "8–10 horas",
    difficulty: "Media – Exigente",
    price: "Desde $160.000 – $230.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751844827/samples/detailsTuBooking/tours/caminata-cabo-san-juan_e3hlkp.webp",
  },
  {
    id: 5,
    title: "Snorkel en Cabo San Juan",
    description:
      "Descubre los arrecifes del Tayrona con equipo completo y guía experto. Apto para principiantes.",
    duration: "1–2 horas",
    difficulty: "Fácil – Moderado",
    price: "COP 90.000 – 140.000",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845028/samples/detailsTuBooking/tours/snor_j23f18.jpg",
  },
  {
    id: 6,
    title: "Mini Curso de Buceo – Isla Aguja",
    description:
      "2 inmersiones con instructor PADI. Ideal para quienes quieren iniciarse en el buceo.",
    duration: "4 horas",
    difficulty: "Baja",
    price: "$280.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845175/samples/detailsTuBooking/tours/mini_hrjkae.jpg",
  },
  {
    id: 7,
    title: "Primera Aventura de Buceo",
    description:
      "Tu primera experiencia bajo el agua con equipo e instructor en zonas como Bahía Concha.",
    duration: "3 a 4 horas",
    difficulty: "Moderada",
    price: "$250.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845175/samples/detailsTuBooking/tours/mini_hrjkae.jpg",
  },
  {
    id: 8,
    title: "Fun Dive – Buzos Certificados",
    description:
      "2 inmersiones para buzos certificados en arrecifes, naufragios y zonas especiales.",
    duration: "5 horas",
    difficulty: "Avanzada",
    price: "$220.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845678/samples/detailsTuBooking/tours/caption_u8aune.jpg",
  },
  {
    id: 9,
    title: "Combo Full Day: Buceo + Cabo San Juan",
    description:
      "Día completo de buceo, playa y naturaleza. Ideal para los que quieren vivirlo todo.",
    duration: "10 horas",
    difficulty: "Moderada",
    price: "$360.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845758/samples/detailsTuBooking/tours/open-water-600x400_ifsh8w.jpg",
  },
  {
    id: 10,
    title: "Avistamiento de Aves",
    description:
      "Guía especializado te lleva a observar aves endémicas y migratorias en su hábitat natural.",
    duration: "4 – 5 horas",
    difficulty: "Baja",
    price: "Desde $300.000 COP (1 a 4 pax)",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845815/samples/detailsTuBooking/tours/av_upjgsw.jpg",
  },
  {
    id: 11,
    title: "Wellness Tayrona – Conexión Natural",
    description:
      "Yoga, meditación y rituales con chamán en entornos naturales. Para recargar cuerpo y mente.",
    duration: "Medio día o completo",
    difficulty: "Todos los niveles",
    price: "$180.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845855/samples/detailsTuBooking/tours/yog_fpbvfd.jpg",
  },
  {
    id: 12,
    title: "Wellness & Spa Natural",
    description:
      "Masajes, baños, mascarillas naturales y aromaterapia rodeados de selva tropical.",
    duration: "4 horas",
    difficulty: "Todos los niveles",
    price: "$220.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845855/samples/detailsTuBooking/tours/yog_fpbvfd.jpg",
  },
  {
    id: 13,
    title: "Retiro de Bienestar Tayrona (Full Day)",
    description:
      "Caminata consciente, yoga, ceremonia del cacao y alimentación vegana en Cabo San Juan.",
    duration: "8 horas",
    difficulty: "Moderada",
    price: "$290.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751949541/samples/detailsTuBooking/tours/n716981544_642988_3998_hpwaaa.jpg",
  },
  {
    id: 14,
    title: "Tour Indígena Ancestral – Pueblo Tayku",
    description:
      "Recorrido guiado por sabios Kogui para conocer su cultura, rituales y senderos sagrados.",
    duration: "5 horas",
    difficulty: "Media",
    price: "Desde $120.000 COP",
    img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751949614/samples/detailsTuBooking/tours/indi_y0zprl.jpg",
  },
  {
  id: 15,
  title: "Tour a Playa Cristal",
  description: "Visita en lancha a una de las playas más cristalinas del parque (ideal para snorkel).",
  duration: "Medio día o día completo",
  difficulty: "Bajo",
  price: "Desde $120.000 COP",
  img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751950003/samples/detailsTuBooking/tours/Playa_20Cristal_20carpas-zojsp0_vkvr06.jpg",
},
{
  id: 16,
  title: "Tour a Bahía Concha",
  description: "Playa de acceso más fácil, ideal para familias, cerca de Santa Marta.",
  duration: "Medio día o día completo",
  difficulty: "Bajo",
  price: "Desde $80.000 COP",
  img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751950086/samples/detailsTuBooking/tours/velero5_cnyujc.jpg",
},
{
  id: 17,
  title: "Tour a Playa Cinto",
  description: "Playa aislada y paradisíaca, de difícil acceso, perfecta para desconectarse.",
  duration: "Día completo",
  difficulty: "Bajo",
  price: "Desde $180.000 COP",
  img: "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751950148/samples/detailsTuBooking/tours/playa-cinto-ywv_h8ps2r.jpg",
},

];



export default function TourCards() {
  return (
    <div>
        <NavBar></NavBar>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h3 className="text-green-600 text-sm font-semibold">Experiencias Transformadoras</h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Tours y Actividades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vive lo mejor del Tayrona con nuestras rutas guiadas ecológicas y culturales.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition">
              <div className="relative w-full h-52">
                <Image
                  src={tour.img}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-green-700 mb-1">{tour.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{tour.description}</p>
                <div className="text-sm text-gray-500 mb-1">⏱ {tour.duration}</div>
                <div className="text-sm text-gray-500 mb-1">🎯 Dificultad: {tour.difficulty}</div>
                <div className="text-blue-600 font-bold mb-4">{tour.price}</div>
                <a
                  href="https://wa.me/c/573106011889?text=Hola%2C%20estoy%20interesado%20en%20los%20tours%20que%20ofrecen%20en%20el%20Parque%20Tayrona%20y%20quisiera%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link  href={`https://wa.me/573106011889?text=Hola%2C%20estoy%20interesado%20en%20el%20paquete%20tur%C3%ADstico%20"${encodeURIComponent(tour.title)}"%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.`}
  target="_blank">
                    <button  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                      Quiero más información
                    </button>
                  </Link>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
