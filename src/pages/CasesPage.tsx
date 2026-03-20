export function CasesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="mb-4 block font-label text-sm font-bold uppercase tracking-widest text-secondary">
            Галерея мастерства
          </span>
          <h1 className="font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-primary md:text-7xl">
            Инженерные <br /> решения в деталях.
          </h1>
        </div>
        <p className="max-w-sm text-lg leading-relaxed text-on-surface-variant">
          От экстренного ремонта до проектирования сложных систем водоснабжения в частных резиденциях.
        </p>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8">
        {[
          [
            'Резиденция «Аквамарин»',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDkbKSdhFZGsJcKpYoZgWcL4moSbjlBPD7KmAZZ3xXVM6L2rwV7R5DZ8I0P4eWEtfa6cM2XeBl3uR7RESjaSQOSGqFZBzE92x3FhNBGfgch9V0rGwJGI_v4-K7fkhhl8VUn9sn_1YR8SFpq6jPMkVRL1mL14lvgSF5sqZP-ufqHRV4rie7zcMe1rPuVTKTxYzUrWSe9tBXqHq6rqT2npmXSQncd547JLAHx721UWbrn2LVmOYT4RdV5PEcZheQ3bEcRpATeZ8Wm9r3T',
          ],
          [
            'Бизнес-центр «Поток»',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB_pfzZqhjq-VYcUwvtzVZW9LJ8MV6vF1xwAZXll6rMFyZzHGRAGQpPK4m8JYgHHszi3Uyl4MpcUiobjRqd2EjhULjd_Z7VkmXdMcYS91giFwI7Zlkza0pA3uCqTPNh16Y2b9JQZ9ylZXDR601kRIsTOx4Odd3oGDOjRo-ZX28MNJvOVQBgqUWGp6vC2aAvhlVoljXiQVMdUQql90sZlxtB8RmtXmy4SbYpgQMsG5cfqCJemOd-SQBG0CK5cygVzcrc-KH7AjNmev6K',
          ],
          [
            'Лофт на набережной',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCegTwbVP9WraV1M3XeTOQ0s3rYTL9_ab52LVGV6mxr0W-3UkEfpun9snRAA-ejrzfkHHgGNaRASWhZhMhGJn482M-T4917PYdRD2mOgaHWAdtiB9-lGEr0jG9IHydqJWI7K4maUwv7Kbc4G1t7ZlG3pspWtap89NX-Mt6DU90xMKxbhDCYqsm2JYw_wRkj_EjrDzpwVT6Mad99G3vLSTU9qLXTPuVblRTPWm__YddPR5hkFXVfB4iW368a4XX48LpyWT76zqZiuc3x',
          ],
        ].map(([title, image]) => (
          <article key={title} className="min-w-[320px] snap-start rounded-xl bg-surface-container-lowest p-4 shadow-sm md:min-w-[500px]">
            <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg bg-surface-container md:aspect-video">
              <img src={image} alt={title} className="h-full w-full object-cover" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-primary">{title}</h2>
          </article>
        ))}
      </div>
    </section>
  )
}
