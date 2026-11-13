import { Route, Routes } from "react-router";
import { Header } from "@/components/Header";
import { Home } from "@/pages/Home";
import { ItemPage } from "@/pages/ItemPage";
import { LicensesPage } from "@/pages/LicensesPage";

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/licenses" element={<LicensesPage />} />
        </Routes>
      </main>
      <footer className="border-t border-[var(--color-line)] px-6 py-8 text-sm text-[var(--color-mute)]">
        <div className="mx-auto max-w-6xl flex flex-wrap gap-x-8 gap-y-2 justify-between">
          <p>源集只收录许可明确的开源或可再分发部分，并在每条下注明来源与协议。付费内容没有收入。</p>
          <p>第三方代码版权归原作者，见「来源与协议」。</p>
        </div>
      </footer>
    </div>
  );
}
