import Image from "next/image";
import Link from "next/link";
import { Dish, formatPrice } from "@/data/menu";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <Link
      href={`/platillo/${dish.slug}`}
      className="group flex flex-col rounded-3xl bg-surface p-3 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold backdrop-blur">
          ⭐ {dish.rating.toFixed(1)}
        </span>
      </div>
      <div className="mt-3 flex flex-1 flex-col px-1">
        <h3 className="font-bold leading-tight">{dish.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted">{dish.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-extrabold text-brand">{formatPrice(dish.price)}</span>
          <span className="text-xs text-muted">⏱ {dish.prepTime} min</span>
        </div>
      </div>
    </Link>
  );
}

export function PopularCard({ dish }: { dish: Dish }) {
  return (
    <Link
      href={`/platillo/${dish.slug}`}
      className="group relative block h-56 w-44 shrink-0 overflow-hidden rounded-3xl"
    >
      <Image
        src={dish.image}
        alt={dish.name}
        fill
        sizes="176px"
        className="object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
        <p className="font-bold leading-tight">{dish.name}</p>
        <div className="mt-1 flex items-center justify-between text-sm">
          <span className="font-extrabold">{formatPrice(dish.price)}</span>
          <span>⭐ {dish.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}
