import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

/** Vite's preload helper keeps `import.meta.url` even after inlining. Classic scripts cannot parse it. */
function stripImportMetaUrl(): Plugin {
  return {
    name: "strip-import-meta-url",
    renderChunk(code) {
      if (!code.includes("import.meta")) return null;
      return { code: code.replace(/(?<![\w$.])import\.meta\.url/g, '""'), map: null };
    },
  };
}

/** Classic deferred script so the offline bundle can run from file://. */
function plainScriptForFileProtocol(): Plugin {
  return {
    name: "plain-script-for-file-protocol",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (ctx.server) return html;
        html = html.replace(
          /<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g,
          '<script defer src="$1"></script>',
        );
        html = html.replace(/<link rel="stylesheet" crossorigin href="/g, '<link rel="stylesheet" href="');
        html = html.replace(/<link rel="modulepreload"[^>]*>/g, "");
        return html;
      },
    },
  };
}

/**
 * GitHub Pages loads the code-split module graph.
 * file:// swaps in the single classic bundle and its stylesheet. No fetch either way
 * for the offline build; payloads are already inside app.file.js.
 */
function pagesBootstrap(): Plugin {
  return {
    name: "pages-bootstrap",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (ctx.server) return html;
        html = html.replace(/<script type="module"[^>]*src="[^"]+"[^>]*><\/script>/g, "");
        html = html.replace(/<link rel="modulepreload"[^>]*>/g, "");
        html = html.replace(/<link rel="stylesheet" crossorigin href="\.\/assets\//g, '<link rel="stylesheet" href="./assets/');
        const boot = `<script>
(function () {
  var file = location.protocol === "file:";
  if (file) {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href") || "";
      if (href.indexOf("./assets/") === 0 && href.slice(-4) === ".css") {
        links[i].setAttribute("href", "./assets/style.file.css");
      }
    }
  }
  var s = document.createElement("script");
  if (file) {
    s.defer = true;
    s.src = "./assets/app.file.js";
  } else {
    s.type = "module";
    s.src = "./assets/app.js";
  }
  document.head.appendChild(s);
})();
</script>`;
        return html.replace("</body>", `${boot}\n  </body>`);
      },
    },
  };
}

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig(({ mode }) => {
  const file = mode === "file";
  return {
    base: "./",
    plugins: [
      react(),
      tailwindcss(),
      ...(file ? [plainScriptForFileProtocol(), stripImportMetaUrl()] : [pagesBootstrap()]),
    ],
    resolve: {
      alias: [
        ...(file
          ? [
              {
                find: "@/data/load-source",
                replacement: fileURLToPath(new URL("./src/data/load-source.file.ts", import.meta.url)),
              },
            ]
          : []),
        { find: "@", replacement: srcDir },
      ],
    },
    server: { host: "127.0.0.1", port: 5173 },
    preview: { host: "127.0.0.1", port: 4173 },
    build: {
      outDir: file ? "dist-file" : "dist",
      emptyOutDir: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1600,
      cssCodeSplit: !file,
      modulePreload: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: file,
          entryFileNames: file ? "assets/app.file.js" : "assets/app.js",
          chunkFileNames: "assets/chunks/[name]-[hash].js",
          assetFileNames: "assets/[name][extname]",
        },
      },
    },
  };
});
