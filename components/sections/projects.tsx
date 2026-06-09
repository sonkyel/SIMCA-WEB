'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['Mantenimiento', 'Obra Civil', 'Maniobras', 'Instalaciones'];

const projects = [
  {
    id: 1,
    title: 'Mantenimiento de Moldes de Inyección',
    category: 'Mantenimiento',
    image: '/images/projects/molde_inyeccion.jpeg',
  },
  {
    id: 2,
    title: 'Mantenimiento de Maquinaria Industrial',
    category: 'Mantenimiento',
    image: '/images/projects/maquinas_moldes.jpeg',
  },
  {
    id: 3,
    title: 'Mantenimiento e Instalación Industrial',
    category: 'Mantenimiento',
    image: '/images/projects/mant_industrial.jpeg',
  },
  {
    id: 4,
    title: 'Soldadura y Procesos Industriales',
    category: 'Mantenimiento',
    image: '/images/projects/soldadura.jpeg',
  },
  {
    id: 5,
    title: 'Mantenimiento de Cortinas y Limpieza de Louvers',
    category: 'Mantenimiento',
    image: '/images/projects/louvers.jpeg',
  },
  {
    id: 6,
    title: 'Mantenimiento en Altura — Ductos y Sistemas',
    category: 'Mantenimiento',
    image: '/images/projects/mantenimiento_altura.jpeg',
  },
  {
    id: 7,
    title: 'Construcción de Naves Industriales',
    category: 'Obra Civil',
    image: '/images/projects/naves_industriales.jpeg',
  },
  {
    id: 8,
    title: 'Estructura a Base de IPR — Armado de Acero',
    category: 'Obra Civil',
    image: '/images/projects/estructura_acero.jpeg',
  },
  {
    id: 9,
    title: 'Cimentación y Zapatas',
    category: 'Obra Civil',
    image: '/images/projects/zapatas.jpeg',
  },
  {
    id: 10,
    title: 'Instalación de Acero y Cimentaciones',
    category: 'Obra Civil',
    image: '/images/projects/cimentacion.jpeg',
  },
  {
    id: 11,
    title: 'Maniobras con Grúa SANY — Traslado de Estructuras',
    category: 'Maniobras',
    image: '/images/projects/grua_sany.jpeg',
  },
  {
    id: 12,
    title: 'Izaje y Traslado de Tanques Industriales',
    category: 'Maniobras',
    image: '/images/projects/grua_tanque.jpeg',
  },
  {
    id: 13,
    title: 'Alineación y Maniobra de Tuberías',
    category: 'Maniobras',
    image: '/images/projects/alineacion_tuberia.jpeg',
  },
  {
    id: 14,
    title: 'Movilización con Montacargas en Planta',
    category: 'Maniobras',
    image: '/images/projects/montacargas.jpeg',
  },
  {
    id: 15,
    title: 'Traslado de Equipos y Tanques en Almacén',
    category: 'Maniobras',
    image: '/images/projects/traslado_tanque.jpeg',
  },
  {
    id: 16,
    title: 'Señalización de Puntos de Encuentro',
    category: 'Instalaciones',
    image: '/images/projects/senalizacion.jpeg',
  },
  {
    id: 17,
    title: 'Fabricación e Instalación de Ductos de Extracción',
    category: 'Instalaciones',
    image: '/images/projects/ductos_extraccion.jpeg',
  },
  {
    id: 18,
    title: 'Piso Industrial — Planta de Manufactura',
    category: 'Instalaciones',
    image: '/images/projects/piso_fabrica.jpeg',
  },
  {
    id: 19,
    title: 'Puesta en Gas — Tubería de Polietileno',
    category: 'Instalaciones',
    image: '/images/projects/tuberia_gas.jpeg',
  },
  {
    id: 20,
    title: 'Fusión de Tubería Industrial',
    category: 'Instalaciones',
    image: '/images/projects/fusion_tuberia.jpeg',
  },
];

interface LightboxProps {
  project: typeof projects[0];
  all: typeof projects;
  onClose: () => void;
}

function Lightbox({ project, all, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(project);
  const idx = all.findIndex((p) => p.id === current.id);

  const prev = () => setCurrent(all[(idx - 1 + all.length) % all.length]);
  const next = () => setCurrent(all[(idx + 1) % all.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-5xl max-h-[90vh] flex flex-col'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className='absolute -top-10 sm:-top-12 right-0 text-white/80 hover:text-white cursor-pointer transition-colors duration-200'
          aria-label='Cerrar'
        >
          <X className='w-8 h-8' />
        </button>

        {/* Image */}
        <div className='relative w-full rounded-2xl overflow-hidden' style={{ aspectRatio: '16/9' }}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className='absolute inset-0'
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                className='object-cover'
                sizes='100vw'
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className='absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors duration-200'
            aria-label='Anterior'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>
          <button
            onClick={next}
            className='absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors duration-200'
            aria-label='Siguiente'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>

        {/* Caption */}
        <div className='mt-4 text-center'>
          <span className='text-orange-400 text-xs font-semibold uppercase tracking-widest'>
            {current.category}
          </span>
          <p className='text-white font-semibold text-lg mt-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
            {current.title}
          </p>
          <p className='text-white/50 text-sm mt-1'>
            {idx + 1} / {all.length}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('Mantenimiento');
  const [lightbox, setLightbox] = useState<typeof projects[0] | null>(null);

  const filtered = projects.filter((p) => p.category === activeFilter);

  return (
    <section id='proyectos' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>

        {/* Header */}
        <div className='max-w-2xl mx-auto text-center mb-12'>
          <span className='text-orange-500 font-semibold text-sm uppercase tracking-widest'>
            Nuestro Trabajo
          </span>
          <h2
            className='text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Proyectos realizados
          </h2>
          <p className='text-slate-600 text-lg'>
            Trabajos ejecutados en empresas industriales, residencias y espacios comerciales a lo largo de México.
          </p>
        </div>

        {/* Filter tabs — no "Todos" */}
        <div className='flex overflow-x-auto pb-2 gap-3 mb-12 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(project)}
                className='group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer'
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                />
                {/* Permanent gradient + title */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <span className='inline-block text-orange-300 text-xs font-semibold uppercase tracking-wider mb-1'>
                    {project.category}
                  </span>
                  <p className='text-white font-semibold text-sm leading-snug drop-shadow-md'>
                    {project.title}
                  </p>
                </div>
                {/* Hover: zoom icon hint */}
                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6' />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            project={lightbox}
            all={filtered}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
