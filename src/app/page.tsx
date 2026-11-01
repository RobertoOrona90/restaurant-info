import Image from "next/image";
import { BottomNav } from "@/components/BottomNav";
import { PopularCard } from "@/components/DishCard";
import { MenuExplorer } from "@/components/MenuExplorer";
import { dishes, restaurant } from "@/data/menu";

export default function Home() {
  const popular = dishes.filter((d) => d.popular);

  return (
    <>
      <main className="mx-auto max-w-5xl px-4 pb-32 pt-6">
        <header id="inicio" className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted">📍 {restaurant.address.split(",").slice(-2).join(",").trim()}</p>
            <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">
              {restaurant.name}
            </h1>
            <p className="text-sm text-muted">{restaurant.tagline}</p>
          </div>
          <a
            href={`tel:${restaurant.phone.replace(/\D/g, "")}`}
            className="grid h-12 w-12 place-items-center rounded-full bg-surface text-xl shadow-sm ring-1 ring-black/5"
            aria-label="Llamar al restaurante"
          >
            📞
          </a>
        </header>

        <section className="relative mt-6 overflow-hidden rounded-3xl bg-dark text-white">
          <div className="relative z-10 max-w-[60%] p-6 sm:p-8">
            <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide">
              Promoción
            </span>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{restaurant.promo.title}</h2>
            <p className="mt-2 text-sm text-white/80">{restaurant.promo.text}</p>
            <a
              href="#menu"
              className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-dark transition hover:bg-brand-soft"
            >
              Ver menú
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2">
            <Image
              src={restaurant.promo.image}
              alt={restaurant.promo.title}
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-extrabold">Los más populares 🔥</h2>
          </div>
          <div className="no-scrollbar -mx-4 mt-4 flex gap-4 overflow-x-auto px-4 pb-2">
            {popular.map((dish) => (
              <PopularCard key={dish.slug} dish={dish} />
            ))}
          </div>
        </section>

        <div className="mt-8">
          <MenuExplorer />
        </div>

        <section id="info" className="mt-12 scroll-mt-4">
          <h2 className="text-xl font-extrabold">Visítanos</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="relative h-56 overflow-hidden rounded-3xl md:h-full">
              <Image
                src={restaurant.coverImage}
                alt={`Interior de ${restaurant.name}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-black/5">
              <div>
                <h3 className="font-bold">🕒 Horario</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {restaurant.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span className="text-muted">{h.days}</span>
                      <span className="font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold">📍 Dirección</h3>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-muted underline-offset-2 hover:underline"
                >
                  {restaurant.address}
                </a>
              </div>
              <div>
                <h3 className="font-bold">📞 Contacto</h3>
                <p className="mt-1 text-sm text-muted">
                  {restaurant.phone} · {restaurant.email}
                </p>
              </div>
              <a
                href={`tel:${restaurant.phone.replace(/\D/g, "")}`}
                className="block rounded-full bg-brand py-3 text-center font-bold text-white shadow-md shadow-brand/30 transition hover:brightness-110"
              >
                Llama y reserva tu mesa
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-xs text-muted">
          © {new Date().getFullYear()} {restaurant.name}. Precios sujetos a cambio.
        </footer>
      </main>
      <BottomNav />
    </>
  );
}
