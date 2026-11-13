import { Link, NavLink, useLocation } from "react-router";

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-paper)_86%,transparent)] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-3 min-w-0">
          <span className="display text-[22px] leading-none tracking-tight">源集</span>
          <span className="text-xs text-[var(--color-mute)] hidden sm:inline truncate">
            开源 UI 集合
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md ${
                isActive && pathname === "/"
                  ? "text-[var(--color-ink)]"
                  : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
              }`
            }
            end
          >
            目录
          </NavLink>
          <NavLink
            to="/licenses"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md ${
                isActive
                  ? "text-[var(--color-ink)]"
                  : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
              }`
            }
          >
            来源与协议
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
