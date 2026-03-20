export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[870px] items-center overflow-hidden bg-primary-container text-on-primary">
        <div className="bg-grid-white pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20">
          <div className="h-full w-full bg-gradient-to-l from-secondary to-transparent" />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/20 px-3 py-1 text-sm font-medium tracking-wide text-secondary-fixed-dim">
              <span className="mr-2 h-2 w-2 rounded-full bg-secondary" />
              Инженерный стандарт качества
            </div>
            <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tighter text-white md:text-7xl">
              Сантехнические решения для дома и бизнеса
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-primary-fixed-dim md:text-xl">
              Проектирование и монтаж систем водоснабжения любой сложности с гарантией 10 лет. От элитных апартаментов
              до промышленных объектов.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="tel:+79990000000"
                className="flex items-center justify-center gap-2 rounded-md bg-secondary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-secondary-container"
              >
                <span className="material-symbols-outlined">phone</span>
                Позвонить
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-md bg-surface-container-lowest px-8 py-4 text-lg font-bold text-primary transition-all duration-300 hover:bg-surface-bright"
              >
                <span className="material-symbols-outlined">chat</span>
                Написать
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 aspect-square rounded-full bg-slate-800/40 blur-3xl" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx7AEumGHrWZ3wVmGgfvAALOiZSrMyHdAj1nmRtlTN_KjyHaY9XwltqbN5OOChh9lxtWPifyBgYPopWv9OUwzgX_ad5Z4IxNx-jkU3E_zP9aQ1EUk6kkpbobO0Acs5HAHczKJlA9SiXPLUI2g_52wOJPgRPCVeNxueVgASaQ37WhjvrcKLkv0shl5AzwD6TFOjBT0oYXzy_0briGKKD-M5Kdt7kyhThQOuJh5XuSrb82uRuckJHTwJYTIMTYdQ8SzlHPAo5GS5LfQ1"
              alt="Modern piping system"
              className="relative z-10 h-auto w-full rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 z-20 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6 text-primary shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <span className="material-symbols-outlined text-secondary">verified_user</span>
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-secondary">ISO 9001</div>
                  <div className="text-xs text-on-surface-variant">Сертифицировано в РК</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {[
            ['15+', 'Лет опыта'],
            ['3000+', 'Объектов'],
            ['12', 'Инженеров'],
            ['24/7', 'Поддержка'],
          ].map(([num, label], i) => (
            <div key={num} className={`text-center ${i > 0 ? 'border-l border-outline-variant/30' : ''}`}>
              <div className="font-headline text-4xl font-extrabold text-primary md:text-5xl">{num}</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest p-12 shadow-sm transition-all duration-500 hover:-translate-y-2">
              <div className="absolute right-0 top-0 p-8 opacity-10 transition-transform duration-700 group-hover:scale-110">
                <span className="material-symbols-outlined text-9xl text-primary">home</span>
              </div>
              <h3 className="mb-6 font-headline text-3xl font-extrabold text-primary">Для частных клиентов</h3>
              <ul className="space-y-4 text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>Монтаж систем
                  отопления
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>Установка премиум
                  сантехники
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>Водоподготовка и
                  фильтрация
                </li>
              </ul>
              <button className="mt-8 flex items-center gap-2 font-bold text-secondary transition-all group-hover:gap-4">
                Узнать больше
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </article>
            <article className="group relative overflow-hidden rounded-2xl bg-primary p-12 shadow-sm transition-all duration-500 hover:-translate-y-2">
              <div className="absolute right-0 top-0 p-8 opacity-20 transition-transform duration-700 group-hover:scale-110">
                <span className="material-symbols-outlined text-9xl text-white">apartment</span>
              </div>
              <h3 className="mb-6 font-headline text-3xl font-extrabold text-white">Для бизнеса</h3>
              <ul className="space-y-4 text-primary-fixed-dim">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-secondary-fixed-dim">check_circle</span>
                  Проектирование для ЖК
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-secondary-fixed-dim">check_circle</span>
                  Техническое обслуживание
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-secondary-fixed-dim">check_circle</span>Аудит
                  инженерных систем
                </li>
              </ul>
              <button className="mt-8 flex items-center gap-2 font-bold text-white transition-all group-hover:gap-4">
                Узнать больше
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight text-primary">
              Превосходство в каждой детали
            </h2>
            <p className="text-on-surface-variant">
              Мы создаем инженерные системы, которые работают незаметно и безотказно, позволяя вам сосредоточиться на
              жизни и бизнесе.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              [
                'engineering',
                'Экспертиза',
                'Наши инженеры проходят регулярную сертификацию у ведущих европейских производителей оборудования.',
              ],
              [
                'security',
                'Надежность',
                'Двойной контроль качества на каждом этапе монтажа и обязательные гидравлические испытания систем.',
              ],
              [
                'bolt',
                'Скорость',
                'Собственный склад комплектующих позволяет начинать работы в течение 24 часов после согласования.',
              ],
            ].map(([icon, title, text]) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-high">
                  <span className="material-symbols-outlined text-3xl text-secondary">{icon}</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-primary">{title}</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-primary py-24 text-white">
        <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between px-6">
          <div>
            <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight">Наши проекты</h2>
            <p className="text-primary-fixed-dim">Галерея реализованных объектов премиум-класса</p>
          </div>
          <div className="flex gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-md border border-white/20 transition-colors hover:bg-white/10">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-md border border-white/20 transition-colors hover:bg-white/10">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-8">
          {[
            [
              'Жилой комплекс',
              'Пентхаус на Остоженке',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDgQlcYKYa30sBG_oEg6QA7FgUfjijRb2uMIi7DZ-u0VsSmTFfzRW2uof8fXw8ZmROmDs6q80hj-dlg86cbjeK6nJatSx8qRr60MMV0ltAfA_3uhBiOQudypgLNFwkvEBF6PYvZDy9pS7OfbvLIqocmpbdI58ULhdQ8oF_RDj4DVNQgaAlLbOiJwn5YAQaBujoycPnFqhJt-CJoTyRskaf0OTRkVt0APliY9BbvRZMc0-UtMKG856MDuRNFB-lbjFJC2Z8g7DcIxdBr',
            ],
            [
              'Бизнес-центр',
              'БЦ "Метрополис"',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAX8PgKgcFk3czkgsUg5hFRgC1JBSxq6ZO2cgkxzLXwgQ26pe1vzKSZmSTEafncCXD97Yjyal06b10FdzuAqJigYmVavwwZtrtm4EdgOhvr-uQosBzuOxC_1L_KkWfwXz_Pv_qQoSKwlM7OhrE4qqZ9srhOsMm57rYwa6NonvWCh5PaogcGM62L2nuoe9Lu2Y_xlpF8GGO-VjQG0GEX36mfFJvomcsujW79F6JIUqkH7p-BrBpdKhPrIN-42ojTfNbeEKfR0QhsyQpL',
            ],
            [
              'Загородный дом',
              'Вилла в Барвихе',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA89G7TiCkLpSDyVGtyQfcgNs_v8te3ecMDDMaB2P3kXpje6VwXGpqojw28cVeoFPcNkZI6HI5m5a06hdxy31BSz-xofRoUP1gNx5jb53Sm3x5_oqc-TQJL64fMR29VODgo5TLOZXTr285x5RcoudnEbq0MZHplHhgcNM1cZzVRs7ErOchMawWGy3CZB5Eqd5Grj5fZ1xQdcdl-k79_j_wwh6BXEoCzjtqMTK3B3IBVvPXIOuHre8L-R3r18L5VDP2w2RjySOAUx_tF',
            ],
          ].map(([kind, title, image]) => (
            <div key={title} className="w-80 flex-none md:w-[450px]">
              <div className="group relative cursor-pointer overflow-hidden rounded-xl">
                <img src={image} alt={title} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-8">
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary-fixed-dim">{kind}</span>
                  <h4 className="text-xl font-bold">{title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="mb-12 text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">Нам доверяют</h3>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale md:gap-24">
            <div className="h-8 w-32 rounded bg-slate-400" />
            <div className="h-8 w-40 rounded bg-slate-400" />
            <div className="h-8 w-28 rounded bg-slate-400" />
            <div className="h-8 w-36 rounded bg-slate-400" />
            <div className="h-8 w-32 rounded bg-slate-400" />
          </div>
        </div>
      </section>
    </>
  )
}
