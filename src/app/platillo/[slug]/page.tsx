import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DishCard } from "@/components/DishCard";
import { dishes, formatPrice, getCategory, getDish, restaurant } from "@/data/menu";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return dishes.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dish = getDish((await params).slug);
  return dish
    ? { title: `${dish.name} | ${restaurant.name}`, description: dish.description }
    : {};
}

export default async function DishPage({ params }: Props) {
  const dish = getDish((await params).slug);
  if (!dish) notFound();

  const category = getCategory(dish.category);
  const related = dishes
    .filter((d) => d.category === dish.category && d.slug !== dish.slug)
    .slice(0, 4);

  const stats = [
    { label: "Calificación", value: `⭐ ${dish.rating.toFixed(1)}` },
    { label: "Preparación", value: `⏱ ${dish.prepTime} min` },
    { label: "Calorías", value: `🔥 ${dish.calories}` },
  ];

  return (
    <main className="mx-auto max-w-5xl pb-16 md:px-4 md:pt-6">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div className="relative aspect-square overflow-hidden md:rounded-3xl">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <Link
            href="/#menu"
            className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-lg shadow backdrop-blur"
            aria-label="Volver al menú"
          >
            ←
          </Link>
        </div>

        <div className="relative -mt-8 rounded-t-[2rem] bg-background px-5 pt-6 md:mt-0 md:rounded-none md:px-0 md:pt-0">
          {category && (
            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
              {category.emoji} {category.name}
            </span>
          )}
          <div className="mt-3 flex items-start justify-between gap-4">
            <h1 className="text-3xl font-extrabold leading-tight">{dish.name}</h1>
            <span className="text-2xl font-extrabold text-brand">{formatPrice(dish.price)}</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
            {dish.vegetarian && (
              <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">🌱 Vegetariano</span>
            )}
            {dish.spicy && (
              <span className="rounded-full bg-red-100 px-2 py-1 text-red-700">🌶️ Picante</span>
            )}
            {dish.popular && (
              <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">🔥 Popular</span>
            )}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-surface p-3 text-center shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-bold">{s.value}</p>
                <p className="mt-0.5 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-6 font-bold">Descripción</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">{dish.description}</p>

          <h2 className="mt-6 font-bold">Ingredientes</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {dish.ingredients.map((i) => (
              <li key={i} className="rounded-full bg-surface px-3 py-1.5 text-sm ring-1 ring-black/5">
                {i}
              </li>
            ))}
          </ul>

          <a
            href={`tel:${restaurant.phone.replace(/\D/g, "")}`}
            className="mt-8 block rounded-full bg-dark py-4 text-center font-bold text-white transition hover:bg-brand"
          >
            📞 Llama para ordenar
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12 px-5 md:px-0">
          <h2 className="text-xl font-extrabold">También te puede gustar</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((d) => (
              <DishCard key={d.slug} dish={d} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
