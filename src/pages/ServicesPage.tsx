import * as React from 'react'
import { Link } from 'react-router-dom'
import { companyServiceCategories } from '../constants/companyContent'

type ServiceItem = {
  icon: string
  title: string
  description: string
  bullets?: string[]
  variant: 'default' | 'emergency'
  ctaLabel: string
}

const PRIVATE_SERVICES: ServiceItem[] = [
  {
    icon: 'warning',
    title: 'Аварийный выезд',
    description: 'Срочный выезд мастера для устранения аварийных ситуаций и восстановительных работ.',
    bullets: ['Прорыв трубы', 'Ремонт сантехники', 'Устранение аварий', 'Замена сантехники'],
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'heat_pump',
    title: 'Монтаж отопления',
    description: 'Проектирование и монтаж систем отопления для квартир, домов и коттеджей.',
    bullets: ['Проектирование', 'Промывка отопления', 'Монтаж отопления', 'Установка радиаторов'],
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'plumbing',
    title: 'Монтаж канализации',
    description:
      'Бытовая и дренажная канализация: стояки, разводка под оборудование и монтаж трасс по проекту.',
    bullets: ['Канализация дома', 'Замена канализации', 'Прочистка канализации', 'Автономная канализация'],
    variant: 'emergency',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'bathroom',
    title: 'Установка сантехники',
    description:
      'Установка и замена сантехнических приборов и комплектующих с аккуратной подводкой и проверкой герметичности.',
    bullets: ['Установка унитаза', 'Установка смесителя', 'Установка счётчиков', 'Установка раковины/мойки'],
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'speed',
    title: 'Устранение засоров',
    description:
      'Оперативная прочистка и восстановление проходимости: от локальных засоров до сложных участков трассы.',
    bullets: ['Чистка ванны', 'Чистка унитаза', 'Чистка труб', 'Чистка раковины и мойки'],
    variant: 'default',
    ctaLabel: 'Связаться',
  },
  {
    icon: 'speed',
    title: 'Установка счётчиков',
    description: 'Подбор и установка приборов учёта воды с корректной обвязкой и проверкой.',
    bullets: ['Вихревые', 'Тахометрические', 'Ультразвуковые', 'Электромагнитные'],
    variant: 'default',
    ctaLabel: 'Связаться',
  },
]

const BUSINESS_SERVICES: ServiceItem[] = [
  {
    icon: companyServiceCategories[0]?.icon ?? 'heat_pump',
    title: companyServiceCategories[0]?.title ?? 'Монтаж отопления и котельных',
    description: 'Проектирование, монтаж и подбор оборудования для котельных и систем отопления на объектах.',
    bullets: companyServiceCategories[0]?.bullets ?? [],
    variant: 'default',
    ctaLabel: 'Обсудить объект',
  },
  {
    icon: companyServiceCategories[1]?.icon ?? 'water_drop',
    title: companyServiceCategories[1]?.title ?? 'Водопровод (ХВС) и сантехника',
    description: 'Прокладка трубопроводов, монтаж приборов и узлов водоснабжения для коммерческих объектов.',
    bullets: companyServiceCategories[1]?.bullets ?? [],
    variant: 'default',
    ctaLabel: 'Обсудить объект',
  },
  {
    icon: companyServiceCategories[2]?.icon ?? 'plumbing',
    title: companyServiceCategories[2]?.title ?? 'Монтаж канализации',
    description: 'Монтаж бытовой и дренажной канализации: стояки, разводка и трассы под оборудование.',
    bullets: companyServiceCategories[2]?.bullets ?? [],
    variant: 'default',
    ctaLabel: 'Обсудить объект',
  },
  {
    icon: companyServiceCategories[3]?.icon ?? 'local_fire_department',
    title: companyServiceCategories[3]?.title ?? 'Пожарный трубопровод',
    description: 'АПТ, спринклерные узлы, пожарные шкафы и трассировка систем по требованиям объекта.',
    bullets: companyServiceCategories[3]?.bullets ?? [],
    variant: 'default',
    ctaLabel: 'Обсудить объект',
  },
  {
    icon: 'local_fire_department',
    title: 'Системы для объектов и поддержка',
    description:
      'Фанкойлы, тепловые завесы, «вулканы», котельные и регламентные работы — под задачу и специфику объекта.',
    bullets: ['Фанкойлы', 'Тепловые завесы', 'Котельные (сборка/демонтаж/монтаж)', 'Подбор оборудования'],
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
              className="service-card-hover group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all duration-500 hover:bg-primary-container"
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
              </div>

              <div className="hover-content mt-4">
                <p className="mb-8 font-body leading-relaxed text-on-surface-variant group-hover:text-slate-300">
                  {item.description}
                </p>
                {item.bullets?.length ? (
                  <ul className="mb-8 space-y-2 text-sm text-on-surface-variant group-hover:text-slate-300">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <a
                  href="tel:+7 747 863 1598"
                  className={`flex w-full items-center justify-center gap-2 rounded-md py-4 font-bold ${
                    item.variant === 'emergency'
                      ? 'bg-error text-white hover:bg-error/90'
                      : 'bg-secondary text-on-secondary hover:bg-secondary-container'
                  }`}
                >
                  {item.ctaLabel}
                  <span className="material-symbols-outlined text-lg">
                    {item.variant === 'emergency' ? 'arrow_forward' : 'arrow_forward'}
                  </span>
                </a>
              </div>

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
              href="tel:+7 747 863 1598"
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
