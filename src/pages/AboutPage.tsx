export function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="mb-8 font-headline text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl">
              The Poseidon <br /> Standard.
            </h1>
            <p className="mb-12 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Мы переосмысливаем инженерные системы, превращая обслуживание воды в искусство технологической
              точности. Опыт, надежность и бескомпромиссное качество в каждой детали.
            </p>
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col">
                <span className="font-headline text-4xl font-black text-secondary">12+</span>
                <span className="font-label text-sm uppercase tracking-widest text-outline">Лет опыта</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-4xl font-black text-secondary">2.5k</span>
                <span className="font-label text-sm uppercase tracking-widest text-outline">Объектов</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-4xl font-black text-secondary">24/7</span>
                <span className="font-label text-sm uppercase tracking-widest text-outline">Поддержка</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-secondary-fixed-dim opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-xl shadow-2xl lg:rotate-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZhICYcNw_AGUlYbEsY_be9NQueaANxTaQqoQqz64d3K8C7WwC0xqprefJaTDWVtJbI0twyiEhqjUZ9zInZaSwmzZe6e4kTMET-Bs4ZN0-ecaxwOtHKtcdxINieOOk7MvjflXFk2oG3JeyAWgIJzSX2BW2spqj41v1TsDjzhp_dEkWw4KhxsuGXxmMd_rifsDEorhg3kmQ-1FiRk5tIbEascFIxI05l3COJfISqkZBTY9oV25TunUOST7T5LFUd84d2RDs-IhCU3w7"
                alt="Modern Engineering"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
            Алгоритм совершенства
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              ['01', 'contact_phone', 'Contacted', 'Мгновенный отклик. Мы принимаем вашу заявку и назначаем инженера в течение 15 минут.'],
              ['02', 'forum', 'Discussed', 'Профессиональный аудит. Разрабатываем точное техническое решение под ваш бюджет.'],
              ['03', 'task_alt', 'Done', 'Безупречный результат. Сдача объекта с гарантией качества и полной документацией.'],
            ].map(([num, icon, title, text]) => (
              <div key={num} className="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-10 ghost-border">
                <span className="absolute right-6 top-4 font-headline text-6xl font-black text-surface-container opacity-50 transition-colors duration-500 group-hover:text-secondary">
                  {num}
                </span>
                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container">
                    <span className="material-symbols-outlined text-on-secondary">{icon}</span>
                  </div>
                  <h3 className="mb-4 font-headline text-xl font-bold">{title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="flex min-h-[320px] flex-col justify-between rounded-xl bg-primary p-10 text-on-primary">
              <div>
                <h2 className="mb-4 font-headline text-3xl font-bold">Свяжитесь с экспертом</h2>
                <p className="mb-8 opacity-70">
                  Мы на связи круглосуточно для решения экстренных задач и планового проектирования.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a className="flex items-center gap-4 text-2xl font-bold transition-colors hover:text-secondary-fixed" href="tel:+79990000000">
                  <span className="material-symbols-outlined">call</span>
                  +7 (999) 000-00-00
                </a>
                <div className="flex gap-4">
                  <a className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-surface-container-highest/20 p-4 transition-all hover:bg-surface-container-highest/30" href="#">WhatsApp</a>
                  <a className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-surface-container-highest/20 p-4 transition-all hover:bg-surface-container-highest/30" href="#">Telegram</a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden rounded-xl bg-surface-container-low md:col-span-7">
            <div className="absolute inset-0 opacity-60 grayscale transition-all duration-700 hover:grayscale-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWNg8OA2yKZeKmddUUmfz6TbYQMA_eGayb7SaT9fuMeRyuDkInJCJIarVKRzHIMGTKr7aKg3Tf3TRSxfpgdKAjPQCAUuqcqGGrKTuYAkCjZs9JopNshMw_NcldXauLunrguGjOaBiI4tlQstBHEtx94q0uxw34gBrgHx4UHVpf9k7Al9aQfaBUYPFCHF6CeTsdJCt-Lvnm0qlvhPqI4j_0CkO4qfmGA5_ZILkyF6EPSqegd5vSzdz8V6u4oi76aMqQGcJRlpwm6w6"
                alt="Map Location"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ghost-border absolute bottom-6 left-6 right-6 rounded-lg bg-surface-container-lowest/90 p-6 backdrop-blur-md">
              <h4 className="font-headline font-bold">Центральный офис</h4>
              <p className="text-sm text-on-surface-variant">Москва, ул. Инженерная, д. 42, БЦ «Поток»</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
