import { Link, NavLink, useLocation } from "react-router";

const mac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="site-header">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        <Link to="/" className="flex items-baseline gap-3 min-w-0">
          <span className="display text-[26px] leading-none">源集</span>
          <span className="text-xs text-[var(--color-mute)] hidden sm:inline truncate">开源 UI，带来源</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-3 py-1.5 text-sm text-[var(--color-mute)] hover:text-[var(--color-ink)] hover:border-[rgba(244,239,230,0.22)]"
            onClick={() => window.dispatchEvent(new Event("yuanji-search"))}
          >
            搜索
            <kbd className="kbd">{mac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
          <nav className="flex items-center gap-1 text-sm">
            <NavLink
              to="/"
              end
              className={() =>
                `px-3 py-1.5 rounded-full ${
                  pathname === "/" ? "text-[var(--color-ink)] bg-white/5" : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              目录
            </NavLink>
            <NavLink
              to="/licenses"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full ${
                  isActive ? "text-[var(--color-ink)] bg-white/5" : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              来源与协议
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
