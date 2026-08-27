# Raythor Web

这是未来公司官网、产品介绍、支持与隐私政策页面的统一前端仓库。

当前已实现的首个正式页面是 PongTrace 隐私政策。网站使用 Astro 构建为纯静态文件，并通过 GitHub Pages 发布。

## 本地开发

```bash
npm install
npm run dev
```

## 验证

```bash
npm test
```

`npm test` 会检查 Astro/TypeScript、完成生产构建，并确认 7 个语言入口、规范链接、语言链接、关键隐私事实、社交分享图和站点地图均存在。

## 内容边界

- `src/data/privacy/`：各 App 的多语言隐私政策正文
- `src/pages/privacy/`：正式隐私页面路由
- `src/pages/company/`：预留公司页面
- `src/pages/products/`：预留产品页面
- `src/pages/support/`：预留支持页面

## 发布

推送到 `main` 后，`.github/workflows/deploy.yml` 会构建并部署 GitHub Pages。首次使用时需要在仓库的 **Settings → Pages → Source** 中选择 **GitHub Actions**。

正式入口：`https://raythor2023.github.io/web-server/privacy/pongtrace/`
