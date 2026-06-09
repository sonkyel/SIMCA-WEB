'use client';

import { Users, Wrench, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Users,
    title: 'Personal Calificado',
    description:
      'Contamos con un equipo de ingenieros, arquitectos y técnicos especializados con amplia experiencia en el sector industrial.',
  },
  {
    icon: Wrench,
    title: 'Equipos & Maquinaria',
    description:
      'Disponemos de maquinaria propia y de última tecnología para el desarrollo de obras industriales y civiles de cualquier magnitud.',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad Garantizada',
    description:
      'Ejecutamos cada proyecto en tiempo y forma, cumpliendo los más altos estándares de calidad en materiales y mano de obra.',
  },
];

const stats = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '200+', label: 'Proyectos completados' },
  { value: '50+', label: 'Clientes satisfechos' },
  { value: '3', label: 'Sectores atendidos' },
];

export default function AboutSection() {
  return (
    <section id='nosotros' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>

        {/* Header */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <span className='text-orange-500 font-semibold text-sm uppercase tracking-widest'>
            Quiénes Somos
          </span>
          <h2
            className='text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-6'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Soluciones integrales para la industria, el hogar y la construcción
          </h2>
          <p className='text-slate-600 text-lg leading-relaxed'>
            En <strong className='text-slate-800'>SIMCA Soluciones Industriales</strong>, nuestro objetivo
            es satisfacer las necesidades de nuestros clientes en sus obras, hogares y en la industria.
            Nuestro principal compromiso es la ejecución de nuestros trabajos en tiempo y forma con altos
            estándares de calidad en materiales y mano de obra.
          </p>
          <p className='text-slate-600 text-lg leading-relaxed mt-4'>
            Nuestra diversidad nos permite incursionar en los ámbitos industrial, laboral y residencial.
            Contamos con personal altamente calificado, así como equipos y maquinaria para el desarrollo
            de nuestras obras.
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='text-center p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100'
            >
              <p
                className='text-2xl sm:text-3xl font-bold text-orange-500 mb-1'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.value}
              </p>
              <p className='text-slate-600 text-xs sm:text-sm font-medium'>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className='grid md:grid-cols-3 gap-8'>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='p-5 sm:p-8 rounded-2xl border border-slate-100 bg-white hover:border-orange-200 hover:shadow-md transition-all duration-200 group text-center sm:text-left'
              >
                <div className='w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-200 mx-auto sm:mx-0'>
                  <Icon className='w-7 h-7 text-orange-500' />
                </div>
                <h3
                  className='text-xl font-semibold text-slate-800 mb-3'
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {pillar.title}
                </h3>
                <p className='text-slate-600 leading-relaxed'>{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Team */}
        <div className='mt-20 bg-slate-800 rounded-3xl p-8 sm:p-10 md:p-14 text-white'>
          <div className='flex items-center gap-3 mb-8 justify-center sm:justify-start'>
            <Award className='w-8 h-8 text-orange-400' />
            <h3
              className='text-2xl font-bold'
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nuestro Equipo Directivo
            </h3>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white/10 rounded-2xl p-4 sm:p-6 text-center sm:text-left'>
              <p className='text-orange-300 text-xs font-semibold uppercase tracking-wider mb-2'>
                Director General
              </p>
              <h4 className='text-xl font-bold mb-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ing. César Arzola Santillán
              </h4>
              <p className='text-slate-300 text-sm mb-3'>cesar.arzola@asing-industry.com</p>
              <p className='text-slate-300 text-sm'>WhatsApp: 442 748 3933</p>
            </div>
            <div className='bg-white/10 rounded-2xl p-4 sm:p-6 text-center sm:text-left'>
              <p className='text-orange-300 text-xs font-semibold uppercase tracking-wider mb-2'>
                Arquitectura
              </p>
              <h4 className='text-xl font-bold mb-1' style={{ fontFamily: 'Poppins, sans-serif' }}>
                Arq. José Luis Sánchez
              </h4>
              <p className='text-slate-300 text-sm mb-3'>luis.sanchez@asing-industry.com</p>
              <p className='text-slate-300 text-sm'>WhatsApp: 442 453 6795</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
