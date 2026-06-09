'use client';

import { Settings2, Building2, Truck, Thermometer, Factory, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceCategories = [
  {
    icon: Settings2,
    title: 'Mantenimiento Industrial',
    color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
    services: [
      'Moldes de inyección',
      'Máquinas industriales',
      'Ductos contraincendio',
      'Cortinas automatizadas y Louvers',
      'Ductos para compresores',
    ],
  },
  {
    icon: Building2,
    title: 'Obra Civil',
    color: 'bg-amber-50 text-amber-600 group-hover:bg-amber-100',
    services: [
      'Construcción de tanques',
      'Estructuras IPR',
      'Naves industriales',
      'Cimentación y zapatas',
      'Mejoramiento de áreas industriales',
    ],
  },
  {
    icon: Truck,
    title: 'Maniobras & Traslado',
    color: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
    services: [
      'Grúas en todos los tonelajes',
      'Alineación de tubería',
      'Traslado de materiales',
      'Movilización de maquinaria',
      'Montaje de equipos pesados',
    ],
  },
  {
    icon: Thermometer,
    title: 'Instalaciones',
    color: 'bg-teal-50 text-teal-600 group-hover:bg-teal-100',
    services: [
      'Aire acondicionado industrial',
      'Aire acondicionado residencial',
      'Gas / Tubería de polietileno',
      'Ductos con extractor',
      'Puestas en gas',
    ],
  },
  {
    icon: Factory,
    title: 'Fabricación',
    color: 'bg-violet-50 text-violet-600 group-hover:bg-violet-100',
    services: [
      'Ductos de extracción',
      'Sistemas de extracción',
      'Venta e instalación de extractores',
      'Fabricación a medida',
      'Instalación especializada',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id='servicios' className='py-24 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>

        {/* Header */}
        <div className='max-w-2xl mx-auto text-center mb-16'>
          <span className='text-orange-500 font-semibold text-sm uppercase tracking-widest'>
            Lo que ofrecemos
          </span>
          <h2
            className='text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Servicios especializados para cada necesidad
          </h2>
          <p className='text-slate-600 text-lg'>
            Más de 15 servicios disponibles, cubriendo los sectores industrial, civil y residencial.
          </p>
        </div>

        {/* Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {serviceCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className='bg-white rounded-2xl border border-slate-100 p-7 hover:border-orange-200 hover:shadow-lg transition-all duration-200 group cursor-default'
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 ${category.color}`}
                >
                  <Icon className='w-6 h-6' />
                </div>

                <h3
                  className='text-lg font-semibold text-slate-800 mb-4'
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {category.title}
                </h3>

                <ul className='space-y-2'>
                  {category.services.map((service) => (
                    <li key={service} className='flex items-start gap-2 text-slate-600 text-sm'>
                      <ChevronRight className='w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0' />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className='bg-orange-500 rounded-2xl p-7 flex flex-col justify-between'
          >
            <div>
              <h3
                className='text-xl font-bold text-white mb-3'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                ¿Necesitas un servicio personalizado?
              </h3>
              <p className='text-orange-100 text-sm leading-relaxed'>
                Contáctanos y te brindaremos una solución a la medida de tu empresa o proyecto.
              </p>
            </div>
            <a
              href='#contacto'
              className='mt-8 inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors duration-200 cursor-pointer'
            >
              Solicitar Cotización
              <ChevronRight className='w-4 h-4' />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
