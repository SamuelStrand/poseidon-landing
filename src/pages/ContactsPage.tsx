import { Link } from 'react-router-dom'
import { contactLinks } from '../constants/siteContent'

export function ContactsPage() {
  const tel = contactLinks.phoneTel

  return (
    <div className="bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container pb-28 pt-12 text-on-primary md:pb-32 md:pt-16">
        <div className="bg-grid-white pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-secondary/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-secondary-fixed-dim">
            Связь с инженерами
          </span>
          <h1 className="mt-4 max-w-3xl font-headline text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
            Контакты
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-fixed-dim md:text-xl">
            Аварийная линия — круглосуточно. Проектный отдел и коммерческие запросы — в рабочие часы с быстрым ответом.
          </p>
        </div>
      </section>

      {/* Bento */}
      <section className="relative mx-auto max-w-7xl -mt-20 px-6 pb-20 md:-mt-24 md:pb-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Главная карточка — телефон и мессенджеры */}
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-8 text-on-primary shadow-2xl shadow-primary/20 md:p-10 lg:col-span-5 lg:min-h-[420px]">
            <div>
              <h2 className="font-headline text-2xl font-bold md:text-3xl">Свяжитесь с экспертом</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-80 md:text-base">
                Звонок, мессенджер или письмо — выберите удобный канал. Для срочных протечек укажите адрес в первом
                сообщении.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              <a
                href={`tel:${tel}`}
                className="group flex items-center gap-4 text-2xl font-bold tracking-tight transition-colors hover:text-secondary-fixed md:text-3xl"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-secondary">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </span>
                {contactLinks.phone}
              </a>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366]/20 px-4 py-4 font-bold backdrop-blur-sm transition hover:bg-[#25D366]/30"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    chat
                  </span>
                  WhatsApp
                </a>
                <a
                  href={contactLinks.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#0088cc]/20 px-4 py-4 font-bold backdrop-blur-sm transition hover:bg-[#0088cc]/30"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    send
                  </span>
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Карта + оверлей */}
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-surface-container-low shadow-xl lg:col-span-7 lg:min-h-[420px]">
            <div className="absolute inset-0 opacity-70 grayscale transition-all duration-700 hover:grayscale-0">
              <img src={contactLinks.mapImage} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="ghost-border absolute bottom-6 left-6 right-6 rounded-xl bg-surface-container-lowest/95 p-6 shadow-lg backdrop-blur-md md:left-auto md:right-6 md:max-w-md">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-on-secondary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary">Центральный офис</h3>
                  <p className="mt-1 text-sm text-on-surface-variant">{contactLinks.address}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-secondary">{contactLinks.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Нижний ряд карточек */}
          <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm lg:col-span-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high">
              <span className="material-symbols-outlined text-secondary">mail</span>
            </div>
            <p className="font-label text-xs font-bold uppercase tracking-widest text-outline">Email</p>
            <a
              href={`mailto:${contactLinks.email}`}
              className="mt-2 block font-headline text-lg font-bold text-primary transition hover:text-secondary md:text-xl"
            >
              {contactLinks.email}
            </a>
            <p className="mt-4 text-sm text-on-surface-variant">Для коммерческих предложений и смет — ответ в течение рабочего дня.</p>
          </div>

          <div className="rounded-2xl bg-surface-container-low p-8 lg:col-span-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-highest">
              <span className="material-symbols-outlined text-secondary">schedule</span>
            </div>
            <p className="font-label text-xs font-bold uppercase tracking-widest text-outline">Режим</p>
            <p className="mt-2 font-headline text-xl font-bold text-primary">Офис и линия заявок</p>
            <p className="mt-2 text-on-surface-variant">{contactLinks.hours}</p>
            <p className="mt-4 text-sm text-on-surface-variant">Аварийный выезд — по согласованию, приоритет ночным и праздничным сменам.</p>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary-fixed-dim/20 p-8 lg:col-span-4">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-on-secondary">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <p className="font-headline text-xl font-bold text-primary">Партнёрам и подрядчикам</p>
              <p className="mt-2 text-sm text-on-surface-variant">Тендеры, субподряд и совместные объекты.</p>
            </div>
            <Link
              to="/business-clients"
              className="mt-6 inline-flex items-center gap-2 font-bold text-secondary transition hover:gap-3"
            >
              Раздел для бизнеса
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Доп. полоса — быстрые действия */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/80 px-6 py-8 backdrop-blur-sm">
          <span className="w-full text-center font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant md:w-auto md:text-left">
            Быстрый выбор
          </span>
          <a
            href={`tel:${tel}`}
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-on-primary transition hover:bg-primary-container"
          >
            Позвонить сейчас
          </a>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-outline-variant/30 bg-white px-6 py-3 text-sm font-bold text-primary transition hover:shadow-md"
          >
            Написать в WhatsApp
          </a>
          <Link to="/services" className="rounded-full border border-outline-variant/30 px-6 py-3 text-sm font-bold text-primary transition hover:bg-surface-container-low">
            Смотреть услуги
          </Link>
        </div>
      </section>
    </div>
  )
}
