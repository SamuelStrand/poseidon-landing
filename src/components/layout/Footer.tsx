import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa'
import { contactLinks } from '../../constants/siteContent'

export function Footer() {
  return (
    <footer className="w-full bg-slate-100 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 text-sm leading-relaxed md:flex-row">
        
        <div className="space-y-4">
          <div className="text-lg font-bold uppercase tracking-widest text-slate-900">Poseidon Standard</div>
          <p className="max-w-xs text-slate-500">
            © 2026 Poseidon Standard. Инженерные решения высшего разряда.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          
          <a
            className="flex items-center gap-2 text-slate-500 transition hover:text-blue-600"
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-base" />
            WhatsApp
          </a>

          <a
            className="flex items-center gap-2 text-slate-500 transition hover:text-blue-600"
            href={contactLinks.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-base" />
            Instagram
          </a>

          <a
            className="flex items-center gap-2 text-slate-500 transition hover:text-blue-600"
            href={`tel:${contactLinks.phoneTel}`}
          >
            <FaPhone className="text-base" />
            Позвонить
          </a>

          <a
            className="text-slate-500 transition hover:text-blue-600"
            href="#"
          >
            Политика конфиденциальности
          </a>

        </div>
      </div>
    </footer>
  )
}
