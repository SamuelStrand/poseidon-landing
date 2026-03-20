import * as React from 'react'

const CASE_PROJECTS = [
  {
    title: 'Резиденция «Аквамарин»',
    description: 'Полная замена узлов распределения воды с использованием медных трубопроводов.',
    duration: '14 дней',
    year: '2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkbKSdhFZGsJcKpYoZgWcL4moSbjlBPD7KmAZZ3xXVM6L2rwV7R5DZ8I0P4eWEtfa6cM2XeBl3uR7RESjaSQOSGqFZBzE92x3FhNBGfgch9V0rGwJGI_v4-K7fkhhl8VUn9sn_1YR8SFpq6jPMkVRL1mL14lvgSF5sqZP-ufqHRV4rie7zcMe1rPuVTKTxYzUrWSe9tBXqHq6rqT2npmXSQncd547JLAHx721UWbrn2LVmOYT4RdV5PEcZheQ3bEcRpATeZ8Wm9r3T',
  },
  {
    title: 'Бизнес-центр «Поток»',
    description: 'Монтаж системы автоматического пожаротушения и насосной станции.',
    duration: '45 дней',
    year: '2023',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_pfzZqhjq-VYcUwvtzVZW9LJ8MV6vF1xwAZXll6rMFyZzHGRAGQpPK4m8JYgHHszi3Uyl4MpcUiobjRqd2EjhULjd_Z7VkmXdMcYS91giFwI7Zlkza0pA3uCqTPNh16Y2b9JQZ9ylZXDR601kRIsTOx4Odd3oGDOjRo-ZX28MNJvOVQBgqUWGp6vC2aAvhlVoljXiQVMdUQql90sZlxtB8RmtXmy4SbYpgQMsG5cfqCJemOd-SQBG0CK5cygVzcrc-KH7AjNmev6K',
  },
  {
    title: 'Лофт на набережной',
    description: 'Дизайнерская инсталляция скрытых систем слива и теплых полов.',
    duration: '7 дней',
    year: '2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCegTwbVP9WraV1M3XeTOQ0s3rYTL9_ab52LVGV6mxr0W-3UkEfpun9snRAA-ejrzfkHHgGNaRASWhZhMhGJn482M-T4917PYdRD2mOgaHWAdtiB9-lGEr0jG9IHydqJWI7K4maUwv7Kbc4G1t7ZlG3pspWtap89NX-Mt6DU90xMKxbhDCYqsm2JYw_wRkj_EjrDzpwVT6Mad99G3vLSTU9qLXTPuVblRTPWm__YddPR5hkFXVfB4iW368a4XX48LpyWT76zqZiuc3x',
  },
] as const

const BEFORE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBq3BvLDmfsLdoXFi-w32mECp4JCFFS4dDt8u9Ik93yUdR-lPhCP3BpLk_NZqsydPTBG0jKxPRawezfTrLZOqw1fK0mIKKjUw9pV_DrzeKJseWyPU1BPE5q5EKSuQ-94-123uY8Rm2blcv288vaov2a_MlJ1G2TRudVak6zjqwQHDXOZTKKwuRO00eudDFEdgOlNsd6GcPdGgsF6aqsKxbLnyzmQT8x_5IdwTOZ1pIsQ4RH3AnA8yReDT84YeoBU1vATnFJoHf4MtW8'
const AFTER_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD5vdpwEFv8FCxJ8l0BqBiQwPbFaluZDLxFtcW9asM8gHDDS5fkOE8FxBm4-OFr0Nkpbdf6iVh_bvBwT1HkVWY_WcIyxjbBE7LUBs7agbrHK6dLcI_rm6jzJ5n_pB5HwwxD2S1437DcmbrogafokYKe3qItnSAPSqXGURmll86CmU4IzA9MpRL3S5I3EmaDE1yyX0Y_OvchVA2Okxl6IohaxeiRyYdCt3jJNThG8_m6lLFDkmjbgoT0erGu72okDMKnkwyq8Pz8Rd13'

export function CasesPage() {
  const carouselRef = React.useRef<HTMLDivElement | null>(null)
  const sliderRef = React.useRef<HTMLDivElement | null>(null)
  const beforeImgRef = React.useRef<HTMLImageElement | null>(null)
  const dividerRef = React.useRef<HTMLDivElement | null>(null)
  const knobRef = React.useRef<HTMLDivElement | null>(null)
  const splitRef = React.useRef(50)
  const draggingRef = React.useRef(false)
  const activePointerId = React.useRef<number | null>(null)
  const [splitPct, setSplitPct] = React.useState(50)

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const step = 500 + 24
    carouselRef.current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' })
  }

  /** Обновление без setState — плавное перетаскивание без лагов от ре-рендеров */
  const applySplitVisual = React.useCallback((pct: number) => {
    const clamped = Math.min(100, Math.max(0, pct))
    splitRef.current = clamped
    const before = beforeImgRef.current
    const line = dividerRef.current
    const knob = knobRef.current
    if (before) {
      before.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`
    }
    if (line) {
      line.style.left = `${clamped}%`
      line.style.transform = 'translateX(-50%)'
    }
    if (knob) {
      knob.style.left = `${clamped}%`
      knob.style.transform = 'translateX(-50%) translateY(-50%)'
    }
  }, [])

  const updateSplitFromClientX = React.useCallback(
    (clientX: number) => {
      const el = sliderRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.width <= 0) return
      const x = clientX - rect.left
      const pct = (x / rect.width) * 100
      applySplitVisual(pct)
    },
    [applySplitVisual],
  )

  React.useLayoutEffect(() => {
    applySplitVisual(50)
  }, [applySplitVisual])

  const endDrag = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return
      draggingRef.current = false
      activePointerId.current = null
      try {
        sliderRef.current?.releasePointerCapture(e.pointerId)
      } catch {
        /* ignore */
      }
      setSplitPct(splitRef.current)
    },
    [],
  )

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return
    e.preventDefault()
    draggingRef.current = true
    activePointerId.current = e.pointerId
    sliderRef.current?.setPointerCapture(e.pointerId)
    updateSplitFromClientX(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || e.pointerId !== activePointerId.current) return
    e.preventDefault()
    updateSplitFromClientX(e.clientX)
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    endDrag(e)
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 block font-label text-sm font-bold uppercase tracking-widest text-secondary">
              Галерея мастерства
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-primary md:text-7xl">
              Инженерные <br /> решения в деталях.
            </h1>
          </div>
          <div className="flex w-full flex-col gap-6 md:w-auto md:flex-row md:items-end md:justify-end">
            <p className="max-w-sm text-lg leading-relaxed text-on-surface-variant md:mb-2">
              От экстренного ремонта до проектирования сложных систем водоснабжения в частных резиденциях.
            </p>
            <div className="flex shrink-0 gap-4">
              <button
                type="button"
                aria-label="Предыдущий кейс"
                onClick={() => scrollCarousel('left')}
                className="flex h-12 w-12 items-center justify-center rounded-md border border-outline-variant/40 text-primary transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                type="button"
                aria-label="Следующий кейс"
                onClick={() => scrollCarousel('right')}
                className="flex h-12 w-12 items-center justify-center rounded-md border border-outline-variant/40 text-primary transition-colors hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
          >
            {CASE_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="min-w-[320px] snap-start rounded-xl bg-surface-container-lowest p-4 shadow-sm md:min-w-[500px]"
              >
                <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg bg-surface-container md:aspect-video">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                </div>
                <div className="px-2">
                  <h3 className="mb-2 font-headline text-2xl font-bold text-primary">{project.title}</h3>
                  <p className="mb-4 font-body text-on-surface-variant">{project.description}</p>
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-secondary">
                    Срок: {project.duration} <span className="mx-2 opacity-30">|</span> {project.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight text-primary">До и После</h2>
            <p className="text-on-surface-variant">
              Наглядный результат нашей работы: от протекающих труб до инженерного совершенства.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div
              ref={sliderRef}
              role="slider"
              tabIndex={0}
              aria-valuenow={Math.round(splitPct)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Сравнение до и после"
              className="relative aspect-square cursor-ew-resize select-none overflow-hidden rounded-2xl bg-surface-container-highest shadow-2xl touch-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                  e.preventDefault()
                  const delta = e.key === 'ArrowLeft' ? -5 : 5
                  const next = Math.min(100, Math.max(0, splitRef.current + delta))
                  applySplitVisual(next)
                  setSplitPct(next)
                }
              }}
            >
              <img src={AFTER_IMAGE} alt="После: новая система" className="absolute inset-0 h-full w-full object-cover" />
              <img
                ref={beforeImgRef}
                src={BEFORE_IMAGE}
                alt="До: старые трубы"
                className="absolute inset-0 h-full w-full object-cover will-change-[clip-path]"
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              />
              <div
                ref={dividerRef}
                className="pointer-events-none absolute inset-y-0 w-1 bg-white shadow-lg"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
              />
              <div
                ref={knobRef}
                className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
                style={{ left: '50%', transform: 'translateX(-50%) translateY(-50%)' }}
              >
                <span className="material-symbols-outlined scale-125 text-primary">unfold_more</span>
              </div>
              <div className="pointer-events-none absolute left-4 top-4 rounded bg-primary/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                До
              </div>
              <div className="pointer-events-none absolute right-4 top-4 rounded bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                После
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-surface-container-lowest p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-error-container">
                    <span className="material-symbols-outlined text-on-error-container">warning</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold text-primary">Проблема</h4>
                </div>
                <p className="leading-relaxed text-on-surface-variant">
                  Устаревшие чугунные коммуникации в доме 1978 года постройки. Частые протечки, низкое давление и
                  неприятный запах. Риск затопления соседей составлял 90%.
                </p>
              </div>
              <div className="rounded-2xl bg-surface-container-lowest p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container/20">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold text-primary">Результат</h4>
                </div>
                <p className="leading-relaxed text-on-surface-variant">
                  Полная замена стояков на полипропилен, установка системы защиты от протечек Neptun, монтаж фильтров
                  тонкой очистки и коллекторной группы.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="tel:+79990000000"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-primary py-5 font-headline text-lg font-bold text-on-primary transition-colors hover:bg-primary-container"
                >
                  <span className="material-symbols-outlined">chat_bubble</span>
                  Обсудить похожий проект
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="relative inline-block">
          <div className="absolute -left-12 -top-12 text-primary opacity-10">
            <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              water_drop
            </span>
          </div>
          <h2 className="relative z-10 mb-8 font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Готовы к обновлению?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-8 py-4 transition-all hover:shadow-lg active:scale-95"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
              </div>
              <span className="font-bold text-slate-900">WhatsApp</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-8 py-4 transition-all hover:shadow-lg active:scale-95"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0088CC] text-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  send
                </span>
              </div>
              <span className="font-bold text-slate-900">Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
