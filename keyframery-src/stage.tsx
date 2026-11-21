import { Component, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./stage.css";

const loaders = import.meta.glob("./mounts/*.tsx");

class Boundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return <p className="stage-error" data-keyframery="error">这个组件没有跑起来：{this.state.error.message}</p>;
    }
    return this.props.children;
  }
}

function Missing({ name }: { name: string }) {
  return <p className="stage-error" data-keyframery="error">没有找到「{name}」的预览。</p>;
}

async function boot() {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  const name = new URLSearchParams(location.search).get("name") || "";
  const load = loaders[`./mounts/${name}.tsx`];
  if (!name || !load) {
    createRoot(rootEl).render(<Missing name={name || "未命名"} />);
    return;
  }
  try {
    const mod = (await load()) as { default: () => ReactNode };
    const Mount = mod.default;
    createRoot(rootEl).render(
      <Boundary>
        <div data-keyframery="ok" style={{ minHeight: "100%" }}><Mount /></div>
      </Boundary>,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "未知错误";
    createRoot(rootEl).render(<p className="stage-error" data-keyframery="error">这个组件没有跑起来：{message}</p>);
  }
}

void boot();
