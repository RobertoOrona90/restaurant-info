"use client";

import { useMemo, useState } from "react";
import { categories, dishes } from "@/data/menu";
import { DishCard } from "./DishCard";

export function MenuExplorer() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dishes.filter(
      (d) =>
        (active === "all" || d.category === active) &&
        (!q || d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)),
    );
  }, [active, query]);

  return (
    <section id="menu" className="scroll-mt-4">
      <label className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-sm ring-1 ring-black/5 focus-within:ring-brand">
        <span aria-hidden>🔍</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca tu platillo favorito..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </label>

      <div className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === c.id
                ? "bg-brand text-white shadow-md shadow-brand/30"
                : "bg-surface text-foreground ring-1 ring-black/5 hover:bg-brand-soft"
            }`}
          >
            <span aria-hidden>{c.emoji}</span>
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-baseline justify-between">
        <h2 className="text-xl font-extrabold">Nuestro menú</h2>
        <span className="text-sm text-muted">{filtered.length} platillos</span>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((dish) => (
            <DishCard key={dish.slug} dish={dish} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-muted">No encontramos platillos con esa búsqueda.</p>
      )}
    </section>
  );
}
