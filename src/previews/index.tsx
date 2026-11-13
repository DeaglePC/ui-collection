import type { ReactElement } from "react";
import { mekaiPreviews } from "./mekai";
import { voiceorbsPreviews } from "./voiceorbs";
import { librariesPreviews } from "./libraries";
import { cruciblePreviews } from "./crucible";

const all: Record<string, () => ReactElement> = {
  ...mekaiPreviews,
  ...voiceorbsPreviews,
  ...librariesPreviews,
  ...cruciblePreviews,
};

export function PreviewMap({ id, interactive }: { id: string; interactive: boolean }) {
  const C = all[id];
  if (!C) {
    return (
      <div className="h-full grid place-items-center text-xs text-[#8f877c]">
        没有这项的预览（{id}）
      </div>
    );
  }
  void interactive;
  return <C />;
}
