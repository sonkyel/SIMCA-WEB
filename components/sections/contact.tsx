'use client';

import { Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  {
    name: 'Ing. César Arzola Santillán',
    role: 'Director General',
    email: 'cesar.arzola@asing-industry.com',
    phone: '442 748 3933',
    whatsapp: '524427483933',
  },
  {
    name: 'Arq. José Luis Sánchez',
    role: 'Arquitectura',
    email: 'luis.sanchez@asing-industry.com',
    phone: '442 453 6795',
    whatsapp: '524424536795',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hola SIMCA, mi nombre es ${form.name} de ${form.company}.\n\n${form.message}\n\nContacto: ${form.email} / ${form.phone}`
    );
    window.open(`https://wa.me/524427483933?text=${whatsappMsg}`, '_blank');
    setSent(true);
  };

  return (
    <section id='contacto' className='py-24 bg-slate-800'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>

        {/* Header */}
        <div className='max-w-2xl mx-auto text-center mb-16'>
          <span className='text-orange-400 font-semibold text-sm uppercase tracking-widest'>
            Contáctanos
          </span>
          <h2
            className='text-3xl md:text-4xl font-bold text-white mt-3 mb-4'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Hablemos de tu proyecto
          </h2>
          <p className='text-slate-300 text-lg'>
            Solicita una cotización sin costo. Nuestro equipo te responderá en menos de 24 horas.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>

          {/* Contact info */}
          <div>
            <div className='flex items-center gap-3 mb-8'>
              <MapPin className='w-5 h-5 text-orange-400' />
              <span className='text-slate-300'>Querétaro, México</span>
            </div>

            {contacts.map((contact) => (
              <div
                key={contact.name}
                className='bg-white/5 border border-white/10 rounded-2xl p-6 mb-5'
              >
                <p className='text-orange-300 text-xs font-semibold uppercase tracking-wider mb-1'>
                  {contact.role}
                </p>
                <h4 className='text-white font-semibold text-lg mb-3' style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {contact.name}
                </h4>
                <div className='space-y-2'>
                  <a
                    href={`mailto:${contact.email}`}
                    className='flex items-center gap-2 text-slate-300 text-sm hover:text-orange-300 transition-colors duration-200 cursor-pointer'
                  >
                    <Mail className='w-4 h-4 flex-shrink-0' />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:+52${contact.phone.replace(/\s/g, '')}`}
                    className='flex items-center gap-2 text-slate-300 text-sm hover:text-orange-300 transition-colors duration-200 cursor-pointer'
                  >
                    <Phone className='w-4 h-4 flex-shrink-0' />
                    {contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl mt-3 transition-colors duration-200 cursor-pointer'
                  >
                    <MessageCircle className='w-4 h-4' />
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-8'>
            {sent ? (
              <div className='flex flex-col items-center justify-center h-full text-center py-12'>
                <div className='w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4'>
                  <MessageCircle className='w-8 h-8 text-green-400' />
                </div>
                <h3 className='text-white font-bold text-xl mb-2' style={{ fontFamily: 'Poppins, sans-serif' }}>
                  ¡Mensaje enviado!
                </h3>
                <p className='text-slate-300'>Se abrió WhatsApp con tu mensaje. Nos pondremos en contacto pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-5'>
                <h3 className='text-white font-semibold text-lg mb-5' style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Solicitar cotización
                </h3>

                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='name' className='block text-slate-300 text-sm font-medium mb-1.5'>
                      Nombre *
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder='Tu nombre'
                      className='w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-orange-400 transition-colors duration-200'
                    />
                  </div>
                  <div>
                    <label htmlFor='company' className='block text-slate-300 text-sm font-medium mb-1.5'>
                      Empresa
                    </label>
                    <input
                      id='company'
                      name='company'
                      type='text'
                      value={form.company}
                      onChange={handleChange}
                      placeholder='Tu empresa'
                      className='w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-orange-400 transition-colors duration-200'
                    />
                  </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='email' className='block text-slate-300 text-sm font-medium mb-1.5'>
                      Email *
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder='tu@email.com'
                      className='w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-orange-400 transition-colors duration-200'
                    />
                  </div>
                  <div>
                    <label htmlFor='phone' className='block text-slate-300 text-sm font-medium mb-1.5'>
                      Teléfono
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      type='tel'
                      value={form.phone}
                      onChange={handleChange}
                      placeholder='442 000 0000'
                      className='w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-orange-400 transition-colors duration-200'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-slate-300 text-sm font-medium mb-1.5'>
                    Describe tu proyecto *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder='¿Qué servicio necesitas? Cuéntanos brevemente tu proyecto...'
                    className='w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-orange-400 transition-colors duration-200 resize-none'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-colors duration-200 cursor-pointer text-base'
                >
                  <Send className='w-4 h-4' />
                  Enviar por WhatsApp
                </button>

                <p className='text-slate-400 text-xs text-center'>
                  Al enviar, se abrirá WhatsApp con tu mensaje. También puedes escribirnos directamente.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
