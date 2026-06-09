import { Factory } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-slate-900 border-t border-white/5 py-10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center'>
              <Factory className='w-5 h-5 text-white' />
            </div>
            <div>
              <p className='text-white font-bold text-sm' style={{ fontFamily: 'Poppins, sans-serif' }}>
                SIMCA Soluciones Industriales
              </p>
              <p className='text-slate-400 text-xs'>Ingeniería & Arquitectura</p>
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-6 text-sm'>
            {['Nosotros', 'Servicios', 'Proyectos', 'Contacto'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className='text-slate-400 hover:text-orange-400 transition-colors duration-200 cursor-pointer'
              >
                {link}
              </a>
            ))}
          </div>

          <p className='text-slate-500 text-xs text-center md:text-right'>
            © {new Date().getFullYear()} SIMCA Soluciones Industriales. <br className='md:hidden' />
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
