import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { contactLinks } from '../../constants/siteContent'

export function RapidContactDock() {
  const links = [
    {
      label: 'WhatsApp',
      href: contactLinks.whatsapp,
      icon: <FaWhatsapp className="h-8 w-8 text-green-500" />,
    },
    {
      label: 'Instagram',
      href: contactLinks.instagram,
      icon: <FaInstagram className="h-8 w-8 text-pink-500" />,
    },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden flex-col gap-4 md:flex">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="group flex items-center rounded-full bg-white p-4 shadow-xl transition-all duration-300 hover:pr-8"
        >
          {item.icon}
          <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap font-bold text-primary transition-all duration-300 group-hover:ml-3 group-hover:max-w-xs">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  )
}