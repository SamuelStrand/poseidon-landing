import { Link } from 'react-router-dom'

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

      <section id="contacts" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-primary-container px-8 py-12 text-center text-on-primary md:px-16 md:py-16">
          <div className="bg-grid-white pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Нужны контакты и карта?</h2>
            <p className="mt-4 text-primary-fixed-dim">
              Вся информация для связи, мессенджеры и адрес офиса — на отдельной странице.
            </p>
            <Link
              to="/contacts"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-8 py-4 font-headline font-bold text-white shadow-lg shadow-secondary/30 transition hover:bg-secondary-container"
            >
              Перейти в контакты
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
