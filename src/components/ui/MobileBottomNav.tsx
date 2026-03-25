import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa'
import { HiOutlineMenu } from 'react-icons/hi'
import { contactLinks, navItems } from '../../constants/siteContent'

export function MobileBottomNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      <div
        className={`fixed bottom-0 left-0 z-50 w-full rounded-t-2xl bg-white p-6 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mb-4 h-1 w-12 mx-auto rounded-full bg-slate-300" />

        <div className="flex flex-col gap-4 text-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to

            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-xl py-3 font-bold transition ${
                  isActive
                    ? 'bg-slate-100 text-primary'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-slate-200/50 bg-white/90 px-4 py-2 backdrop-blur-2xl md:hidden">
        
        <a
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-xs text-slate-600 active:scale-90"
        >
          <FaWhatsapp className="text-xl text-[#25D366]" />
          WhatsApp
        </a>

        <a
          href={contactLinks.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-xs text-slate-600 active:scale-90"
        >
          <FaInstagram className="text-xl text-[#E1306C]" />
          Instagram
        </a>

        <a
          href={`tel:${contactLinks.phoneTel}`}
          className="flex flex-col items-center text-xs text-slate-600 active:scale-90"
        >
          <FaPhone className="text-xl text-slate-800" />
          Позвонить
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center text-xs text-slate-600 active:scale-90"
        >
          <HiOutlineMenu className="text-xl text-slate-800" />
          Меню
        </button>
      </nav>
    </>
  )
}
