export function RapidContactDock() {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden flex-col gap-4 md:flex">
      {['WhatsApp', 'Telegram'].map((label) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="group flex items-center rounded-full bg-white p-4 shadow-xl transition-all duration-300 hover:pr-8"
        >
          <div className="h-8 w-8 rounded-full bg-secondary" />
          <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap font-bold text-primary transition-all duration-300 group-hover:ml-3 group-hover:max-w-xs">
            {label}
          </span>
        </a>
      ))}
    </div>
  )
}
