export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-slate-200/50 bg-white/80 px-4 py-3 backdrop-blur-2xl md:hidden">
      {['WhatsApp', 'Telegram', 'Позвонить', 'Меню'].map((item) => (
        <a
          key={item}
          href="#"
          aria-label={item}
          className="text-[10px] font-medium text-slate-500 transition active:scale-90"
        >
          {item}
        </a>
      ))}
    </nav>
  )
}
