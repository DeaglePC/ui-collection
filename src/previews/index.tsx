import { useEffect, useState, type ReactElement } from "react";

type PreviewFn = () => ReactElement;
type PreviewMapRecord = Record<string, PreviewFn>;

const groups: Record<string, () => Promise<PreviewMapRecord>> = {
  mekai: () => import("./mekai").then((mod) => mod.mekaiPreviews),
  voiceorbs: () => import("./voiceorbs").then((mod) => mod.voiceorbsPreviews),
  libraries: () => import("./libraries").then((mod) => mod.librariesPreviews),
  crucible: () => import("./crucible").then((mod) => mod.cruciblePreviews),
};

function groupOf(id: string) {
  const key = id.split("-")[0];
  return key in groups ? key : "";
}

export function PreviewMap({ id }: { id: string; interactive: boolean }) {
  const [Comp, setComp] = useState<PreviewFn | null>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    let cancel = false;
    const group = groupOf(id);
    setComp(null);
    setMissing(false);
    if (!group) {
      setMissing(true);
      return;
    }
    groups[group]().then((map) => {
      if (cancel) return;
      const next = map[id];
      if (!next) setMissing(true);
      else setComp(() => next);
    });
    return () => {
      cancel = true;
    };
  }, [id]);

  if (missing) {
    return <div className="h-full grid place-items-center text-xs text-[#8f877c]">没有这项的预览（{id}）</div>;
  }
  if (!Comp) {
    return <div className="h-full grid place-items-center text-xs text-[#8f877c]">载入预览…</div>;
  }
  return <Comp />;
}
