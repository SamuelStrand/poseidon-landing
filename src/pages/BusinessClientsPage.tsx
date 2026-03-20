import { Link } from 'react-router-dom'

export function BusinessClientsPage() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-secondary-fixed-dim">
              Для бизнеса
            </span>
            <h1 className="mb-6 font-headline text-5xl font-extrabold tracking-tighter md:text-6xl">
              Инженерные решения
              <br />
              для объектов и девелоперов
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-primary-fixed-dim">
              Берем на себя полный цикл: аудит, проектирование, монтаж, пусконаладка и сервис. Работаем с ЖК,
              бизнес-центрами, гостиницами и коммерческими объектами.
            </p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX8PgKgcFk3czkgsUg5hFRgC1JBSxq6ZO2cgkxzLXwgQ26pe1vzKSZmSTEafncCXD97Yjyal06b10FdzuAqJigYmVavwwZtrtm4EdgOhvr-uQosBzuOxC_1L_KkWfwXz_Pv_qQoSKwlM7OhrE4qqZ9srhOsMm57rYwa6NonvWCh5PaogcGM62L2nuoe9Lu2Y_xlpF8GGO-VjQG0GEX36mfFJvomcsujW79F6JIUqkH7p-BrBpdKhPrIN-42ojTfNbeEKfR0QhsyQpL"
            alt="Business clients solutions"
            className="h-[420px] w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Проектирование', 'ТЗ, гидравлические расчеты, BIM-совместимые схемы и сметы.'],
            ['Реализация', 'Контроль сроков, технадзор, интеграция с подрядчиками и сдача под ключ.'],
            ['Обслуживание', 'SLA-модели, регламентный сервис и экстренная поддержка 24/7.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-xl bg-white/5 p-8 backdrop-blur-sm">
              <h2 className="mb-3 font-headline text-2xl font-bold">{title}</h2>
              <p className="text-primary-fixed-dim">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="tel:+79990000000" className="rounded-md bg-secondary px-8 py-4 font-bold text-white">
            Обсудить проект
          </a>
          <Link to="/cases" className="rounded-md bg-white/10 px-8 py-4 font-bold text-white">
            Реализованные объекты
          </Link>
        </div>
      </div>
    </section>
  )
}
