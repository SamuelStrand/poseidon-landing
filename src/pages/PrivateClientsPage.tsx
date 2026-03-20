import { Link } from 'react-router-dom'

export function PrivateClientsPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-semibold text-secondary">
              Для частных клиентов
            </span>
            <h1 className="mb-6 font-headline text-5xl font-extrabold tracking-tighter text-primary md:text-6xl">
              Домашние инженерные системы
              <br />
              премиум-класса
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Проектируем и внедряем водоснабжение, отопление и защиту от протечек для квартир, домов и резиденций.
              Фокус на тишине, эстетике и надежности системы на годы вперед.
            </p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgQlcYKYa30sBG_oEg6QA7FgUfjijRb2uMIi7DZ-u0VsSmTFfzRW2uof8fXw8ZmROmDs6q80hj-dlg86cbjeK6nJatSx8qRr60MMV0ltAfA_3uhBiOQudypgLNFwkvEBF6PYvZDy9pS7OfbvLIqocmpbdI58ULhdQ8oF_RDj4DVNQgaAlLbOiJwn5YAQaBujoycPnFqhJt-CJoTyRskaf0OTRkVt0APliY9BbvRZMc0-UtMKG856MDuRNFB-lbjFJC2Z8g7DcIxdBr"
            alt="Private clients solutions"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Монтаж и замена', 'Сантехника, коллекторы, стояки, теплые полы и узлы ввода.'],
            ['Умный контроль', 'Датчики протечки, удаленный мониторинг и автоматическое перекрытие воды.'],
            ['Сервис 24/7', 'Плановое обслуживание и аварийный выезд в кратчайшие сроки.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-xl bg-surface-container-low p-8">
              <h2 className="mb-3 font-headline text-2xl font-bold text-primary">{title}</h2>
              <p className="text-on-surface-variant">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="tel:+79990000000" className="rounded-md bg-primary px-8 py-4 font-bold text-on-primary">
            Позвонить инженеру
          </a>
          <Link to="/cases" className="rounded-md bg-surface-container-low px-8 py-4 font-bold text-primary">
            Смотреть кейсы
          </Link>
        </div>
      </div>
    </section>
  )
}
