import * as React from 'react'
import { Link } from 'react-router-dom'

type ServiceItem = {
  icon: string
  title: string
  description: string
  variant: 'default' | 'emergency'
  ctaLabel: string
  image?: string
  tall?: boolean
}

const PRIVATE_SERVICES: ServiceItem[] = [
  {
    icon: 'water_drop',
    title: 'Водоподготовка и фильтрация',
    description:
      'Индивидуальное проектирование систем очистки воды. Удаление примесей, умягчение и минерализация для вашего здоровья.',
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'heat_pump',
    title: 'Инженерные сети отопления',
    description:
      'Установка котлов, тёплых полов и радиаторных систем. Гарантируем энергоэффективность и идеальный микроклимат.',
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'plumbing',
    title: 'Аварийная служба 24/7',
    description:
      'Моментальное реагирование на протечки и поломки. Команда прибудет в течение 60 минут в любую точку города.',
    variant: 'emergency',
    ctaLabel: 'Вызвать мастера',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCye_Cb0lzFKKuz14hf_CtVjNHSt1z0evsQrKfH-1l9qAi5Lj5M_JsatJdWvVx3F2P3WG_GrPsWIJHv_jshCTMN0QhGV75apcQL2HZQovhJBkKpDjTb12NLn2wgH5AdclSFh9cgMWacxzXi1dhfvBMUm7tGma4z8AZK2Y6RSXeanM-KaAzV2lWNihO4UPDApmURmN_G9V6NaEQ8pPp0OqqRWe683-XMw2DdqmXSooy6yA83we-frgHeRlu4E1c1mHvW1e-YaGDhQf7U',
    tall: true,
  },
  {
    icon: 'smart_toy',
    title: 'Умный дом: водоснабжение',
    description:
      'Интеграция датчиков протечки, автоматических перекрывателей и удалённого мониторинга расхода воды в ваш смартфон.',
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'construction',
    title: 'Сервисное обслуживание',
    description:
      'Регулярная диагностика и чистка систем. Продлеваем срок службы оборудования и снижаем риск внеплановых поломок.',
    variant: 'default',
    ctaLabel: 'Связаться',
  },
]

const BUSINESS_SERVICES: ServiceItem[] = [
  {
    icon: 'apartment',
    title: 'Проектирование для ЖК и БЦ',
    description:
      'Гидравлические расчёты, спецификации, узлы ввода и согласование с генподрядчиком. Работаем в формате EPC и по этапам.',
    variant: 'default',
    ctaLabel: 'Запросить КП',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Монтаж инженерных систем',
    description:
      'Коллекторные узлы, насосные станции, пожаротушение и водоподготовка на объектах повышенной сложности.',
    variant: 'default',
    ctaLabel: 'Обсудить объект',
  },
  {
    icon: 'engineering',
    title: 'Техническое обслуживание',
    description:
      'Регламентные обходы, журналы, SLA и дежурные бригады. Минимизируем простои критичной инфраструктуры.',
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'analytics',
    title: 'Аудит и модернизация',
    description:
      'Обследование изношенных сетей, энергоаудит насосного оборудования, дорожная карта замены без остановки бизнеса.',
    variant: 'default',
    ctaLabel: 'Заказать аудит',
  },
  {
    icon: 'local_fire_department',
    title: 'Критичные системы',
    description:
      'Пожарные насосные, резервирование водоснабжения, узлы учёта и диспетчеризация — с полным пакетом исполнительной документации.',
    variant: 'default',
    ctaLabel: 'Связаться',
  },
]

export function ServicesPage() {
  const [segment, setSegment] = React.useState<'private' | 'business'>('private')
  const services = segment === 'private' ? PRIVATE_SERVICES : BUSINESS_SERVICES

  return (
    <div className="bg-surface">
      <section className="relative overflow-hidden border-b border-transparent">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-secondary-fixed-dim/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 md:pt-12">
          <p className="mb-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">Услуги</p>
          <h1 className="mb-6 max-w-4xl font-headline text-5xl font-extrabold tracking-tighter text-primary md:text-7xl">
            Инженерные решения
            <br />
            высшего разряда.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
            Мы проектируем и обслуживаем системы водоснабжения, которые работают как швейцарские часы. От частных
            резиденций до крупных промышленных объектов.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-12 flex justify-center md:mb-16">
          <div
            className="inline-flex rounded-xl bg-surface-container-high p-1.5 shadow-inner"
            role="tablist"
            aria-label="Тип клиента"
          >
            <button
              type="button"
              role="tab"
              aria-selected={segment === 'private'}
              onClick={() => setSegment('private')}
              className={`rounded-lg px-6 py-3 font-headline text-sm font-bold transition-all md:px-8 ${
                segment === 'private'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Частные клиенты
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={segment === 'business'}
              onClick={() => setSegment('business')}
              className={`rounded-lg px-6 py-3 font-headline text-sm font-bold transition-all md:px-8 ${
                segment === 'business'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Бизнес
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className={`service-card-hover group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all duration-500 hover:bg-primary-container ${
                item.tall ? 'md:row-span-2' : ''
              }`}
            >
              <div className="static-content">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-highest transition-colors duration-500 group-hover:bg-secondary">
                  <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-on-secondary">
                    {item.icon}
                  </span>
                </div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-primary transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h2>
                {item.variant === 'emergency' ? (
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-error">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-error" />
                    Live Now
                  </div>
                ) : null}
              </div>

              <div className="hover-content mt-4">
                <p className="mb-8 font-body leading-relaxed text-on-surface-variant group-hover:text-slate-300">
                  {item.description}
                </p>
                <a
                  href="tel:+79990000000"
                  className={`flex w-full items-center justify-center gap-2 rounded-md py-4 font-bold ${
                    item.variant === 'emergency'
                      ? 'bg-error text-white hover:bg-error/90'
                      : 'bg-secondary text-on-secondary hover:bg-secondary-container'
                  }`}
                >
                  {item.ctaLabel}
                  <span className="material-symbols-outlined text-lg">
                    {item.variant === 'emergency' ? 'emergency_home' : 'arrow_forward'}
                  </span>
                </a>
              </div>

              {item.image ? (
                <div className="mt-8 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt=""
                    className="h-48 w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              ) : null}

              <span className="material-symbols-outlined pointer-events-none absolute bottom-4 right-4 text-4xl text-outline-variant opacity-10">
                architecture
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-container px-8 py-10 text-center md:flex-row md:text-left">
          <div>
            <h3 className="mb-2 font-headline text-2xl font-bold text-white">Нужен индивидуальный расчёт?</h3>
            <p className="max-w-xl text-primary-fixed-dim">
              Опишите задачу — инженер свяжется в течение 15 минут и предложит оптимальную схему работ.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <a
              href="tel:+79990000000"
              className="rounded-md bg-secondary px-8 py-4 font-bold text-white shadow-lg shadow-secondary/25 transition hover:bg-secondary-container"
            >
              Позвонить
            </a>
            <Link
              to="/contacts"
              className="rounded-md bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Контакты
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
