import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import type { Plugin } from "vite";

/** Load the bundle as a classic deferred script so file:// works in Chrome
 *  (ES modules fetched from file:// are blocked by CORS). */
function plainScriptForFileProtocol(): Plugin {
  return {
    name: "plain-script-for-file-protocol",
    enforce: "post",
    transformIndexHtml(html) {
      html = html.replace(
        /<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g,
        '<script defer src="$1"></script>',
      );
      html = html.replace(/<link rel="stylesheet" crossorigin href="/g, '<link rel="stylesheet" href="');
      html = html.replace(/<link rel="modulepreload"[^>]*>/g, "");
      return html;
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), plainScriptForFileProtocol()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: { host: "127.0.0.1", port: 5173 },
  preview: { host: "127.0.0.1", port: 4173 },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 4000,
    cssCodeSplit: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
