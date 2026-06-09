'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <div id='inicio'>
      <ScrollExpandMedia
        mediaType='image'
        mediaSrc='/images/hero-bg.png'
        bgImageSrc='/images/hero-bg.png'
        title='SIMCA Soluciones'
        date='Ingeniería & Arquitectura'
        scrollToExpand='Desliza para explorar'
        textBlend={false}
      >
        <HeroContent />
      </ScrollExpandMedia>
    </div>
  );
}

function HeroContent() {
  return (
    <div className='max-w-4xl mx-auto text-center py-16'>
      <div className='inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6'>
        <span className='w-2 h-2 bg-orange-500 rounded-full inline-block' />
        Soluciones Industriales en México
      </div>

      <h2
        className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight'
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Calidad, precisión y experiencia en cada proyecto
      </h2>

      <p className='text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed'>
        En SIMCA nos especializamos en servicios industriales, obra civil y mantenimiento con
        los más altos estándares de calidad. Personal altamente calificado y maquinaria de vanguardia
        a tu servicio.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='#servicios'
          className='inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer text-base'
        >
          Ver Servicios
          <ChevronDown className='w-4 h-4' />
        </a>
        <a
          href='#contacto'
          className='inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-slate-800 border border-gray-200 font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer text-base'
        >
          Solicitar Cotización
        </a>
      </div>
    </div>
  );
}
