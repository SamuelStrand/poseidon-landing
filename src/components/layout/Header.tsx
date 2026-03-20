import { NavLink } from 'react-router-dom'
import { contactLinks, navItems } from '../../constants/siteContent'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-none bg-slate-50/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-headline text-xl font-black uppercase tracking-widest text-slate-900">
          Poseidon
        </NavLink>

        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to + item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-slate-900 pb-1 font-headline font-bold tracking-tighter text-slate-900'
                  : 'font-headline font-bold tracking-tighter text-slate-500 transition hover:text-slate-700'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <a className="font-bold text-slate-900" href={`tel:${contactLinks.phone.replace(/\D/g, '')}`}>
            {contactLinks.phone}
          </a>
          <a href={contactLinks.whatsapp} className="rounded-md bg-primary px-6 py-2 font-bold text-on-primary">
            Связаться
          </a>
        </div>
      </nav>
    </header>
  )
}
