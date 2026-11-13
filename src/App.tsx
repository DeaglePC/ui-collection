import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { Header } from "@/components/Header";
import { Home } from "@/pages/Home";

const ItemPage = lazy(() => import("@/pages/ItemPage"));
const LicensesPage = lazy(() => import("@/pages/LicensesPage"));

function Hotkeys() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const focusSearch = () => {
      const open = () => {
        const input = document.getElementById("catalog-search");
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.select();
        }
      };
      if (location.pathname !== "/") navigate("/");
      window.setTimeout(open, 30);
    };
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        focusSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("yuanji-search", focusSearch);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("yuanji-search", focusSearch);
    };
  }, [location.pathname, navigate]);
  return null;
}

export default function App() {
  return (
    <div className="relative min-h-full flex flex-col">
      <div className="ambient" aria-hidden="true">
        <span className="ambient-blob ambient-blob-a" />
        <span className="ambient-blob ambient-blob-b" />
        <span className="ambient-blob ambient-blob-c" />
        <span className="ambient-noise" />
      </div>
      <Hotkeys />
      <Header />
      <main className="relative flex-1">
        <Suspense fallback={<div className="grid place-items-center py-24 text-sm text-[var(--color-mute)]">载入页面…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/licenses" element={<LicensesPage />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="relative border-t border-[var(--color-line)] px-4 sm:px-6 py-8 text-sm text-[var(--color-mute)]">
        <div className="mx-auto max-w-6xl flex flex-wrap gap-x-8 gap-y-2 justify-between">
          <p>源集只收录许可明确的开源或可再分发部分，并在每条下注明来源与协议。付费内容没有收入。</p>
          <p>第三方代码版权归原作者，见「来源与协议」。</p>
        </div>
      </footer>
    </div>
  );
}
