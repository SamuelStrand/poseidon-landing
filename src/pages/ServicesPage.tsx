export function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-6 font-headline text-5xl font-extrabold tracking-tighter text-primary md:text-7xl">
        Инженерные решения
        <br />
        высшего разряда.
      </h1>
      <p className="mb-16 max-w-2xl text-xl text-on-surface-variant">
        Мы проектируем и обслуживаем системы водоснабжения, которые работают как швейцарские часы.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          ['water_drop', 'Водоподготовка и фильтрация'],
          ['heat_pump', 'Инженерные сети отопления'],
          ['plumbing', 'Аварийная служба 24/7'],
          ['smart_toy', 'Умный Дом: Водоснабжение'],
          ['construction', 'Сервисное обслуживание'],
        ].map(([icon, title], i) => (
          <article
            key={title}
            className={`group relative min-h-[360px] overflow-hidden rounded-xl bg-surface-container-low p-8 transition-all duration-500 hover:bg-primary-container ${
              i === 2 ? 'md:row-span-2' : ''
            }`}
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-highest transition-colors duration-500 group-hover:bg-secondary">
              <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-on-secondary">{icon}</span>
            </div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-primary transition-colors duration-500 group-hover:text-white">
              {title}
            </h2>
            {i === 2 ? (
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCye_Cb0lzFKKuz14hf_CtVjNHSt1z0evsQrKfH-1l9qAi5Lj5M_JsatJdWvVx3F2P3WG_GrPsWIJHv_jshCTMN0QhGV75apcQL2HZQovhJBkKpDjTb12NLn2wgH5AdclSFh9cgMWacxzXi1dhfvBMUm7tGma4z8AZK2Y6RSXeanM-KaAzV2lWNihO4UPDApmURmN_G9V6NaEQ8pPp0OqqRWe683-XMw2DdqmXSooy6yA83we-frgHeRlu4E1c1mHvW1e-YaGDhQf7U"
                alt="Technical repair professional"
                className="mt-8 h-48 w-full rounded-lg object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
