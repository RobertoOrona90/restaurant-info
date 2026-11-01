const links = [
  { href: "/#inicio", label: "Inicio", icon: "🏠" },
  { href: "/#menu", label: "Menú", icon: "📖" },
  { href: "/#info", label: "Info", icon: "📍" },
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-20 mx-auto w-fit rounded-full bg-dark px-2 py-2 shadow-xl">
      <ul className="flex gap-1">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <span aria-hidden>{l.icon}</span>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
