'use client';

import { useState, useEffect } from 'react';
import { Factory, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

function navigateTo(href: string) {
  window.dispatchEvent(new CustomEvent('expandHero'));
  setTimeout(() => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 80);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/60'
          : 'bg-black/30 backdrop-blur-sm border border-white/20'
      }`}
    >
      <nav className='flex items-center justify-between px-6 py-3'>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='flex items-center gap-2 cursor-pointer group'
        >
          <div className='w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-200'>
            <Factory className='w-5 h-5 text-white' />
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-200 ${
              scrolled ? 'text-slate-800' : 'text-white'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            SIMCA
          </span>
        </button>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => navigateTo(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-500 cursor-pointer bg-transparent border-none ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => navigateTo('#contacto')}
          className='hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer border-none'
        >
          Cotizar Ahora
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
            scrolled ? 'text-slate-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label='Menú'
        >
          {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden border-t border-gray-200/30 bg-white/95 backdrop-blur-md rounded-b-2xl px-6 py-4'>
          <ul className='flex flex-col gap-3'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => { navigateTo(link.href); setIsOpen(false); }}
                  className='w-full text-left text-slate-700 font-medium text-sm py-2 hover:text-orange-500 transition-colors duration-200 cursor-pointer bg-transparent border-none'
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => { navigateTo('#contacto'); setIsOpen(false); }}
                className='w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center transition-colors duration-200 cursor-pointer mt-2 border-none'
              >
                Cotizar Ahora
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
