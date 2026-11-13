# 源集 · 开源 UI 集合

把许可明确、可以再分发的开源 UI 收在一起：分好类、能搜索，每条都注明来源和协议。界面是中文。

线上地址：<https://deaglepc.github.io/ui-collection/>

第三方代码版权归原作者。完整说明见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) 和 [LICENSES/](./LICENSES/)。

## 本地运行

需要 Node.js 22。

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # 生成 dist/
npm run preview  # 预览构建结果，http://127.0.0.1:4173
```

构建完成后，也可以直接双击根目录的「打开我.html」，或打开 `dist/index.html`。站点使用相对路径（Vite `base: './'`）和 Hash 路由，因此放在 GitHub Pages 的 `/ui-collection/` 子路径下也能正常打开。

## 部署

推送到 `main` 后，GitHub Actions 会执行 `npm ci` 和 `npm run build`，并把 `dist/` 发布到 `gh-pages` 分支（含空的 `.nojekyll`）。

Pages 需要在仓库设置里打开：**Settings → Pages → Build and deployment → Source: Deploy from a branch**，Branch 选 **gh-pages**，目录选 **/ (root)**。

## 收录原则

- 只复制有明确开源许可（MIT 等）的源码，并保留版权与许可声明。
- 付费 / Pro 内容不收录，也不绕过登录或付费墙。
- 许可不清楚、或条款禁止再分发的，只做「仅链接，未确认可再分发」卡片，不复制代码、提示词或截图。
- 宁可少收，不硬凑。大仓库（例如 Lucian 的 400 个元素）是精选，不是整库搬迁。

## 目录结构

- `src/data/items.json` — 全部条目（名称、来源、许可、分类、源码、提示词）
- `src/data/sources.json` — 每个来源站的许可、收录与排除说明
- `src/vendor/` — 用于站内预览的第三方源码副本（带许可证头）
- `public/previews/` — 可独立运行的 HTML 预览（Lucian、Radiant、Foundry44、Cue Kit）
- `LICENSES/` — 各来源的许可全文
- `screenshots/` — 首页、搜索结果、条目详情的截图

新增条目：在 `scripts/lib/build_all.py` 里按同样规则加入，再运行 `python3 scripts/lib/build_all.py` 重新生成数据；或直接编辑 `src/data/items.json`。

## 截图

见 `screenshots/`。
