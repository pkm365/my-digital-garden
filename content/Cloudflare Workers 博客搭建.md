---
title: "Cloudflare Workers 博客搭建"
date: "2025-06-08"
tags: ["Cloudflare", "博客", "部署"]
---

今天成功搭建了基于 [[Cloudflare Workers]] 的博客系统。

## 技术栈

- **后端**：Cloudflare Workers + Hono 框架
- **内容**：Markdown 文件 + Gray Matter (frontmatter 解析)
- **部署**：通过 Wrangler CLI 自动化部署

## 遇到的问题

### import.meta.glob 错误
最初使用 `import.meta.glob` 来动态导入 Markdown 文件，但在 Workers 环境中报错：
```
TypeError: (intermediate value).glob is not a function
```

**解决方案**：
- 创建构建脚本 `generate-posts.js`
- 在构建时将所有文章预处理成 `posts-data.ts`
- Worker 直接导入静态数据，避免运行时文件系统操作

### 登录问题
`wrangler login` 在复杂网络环境下容易失败。

**解决方案**：
- 使用 [[API Token]] 方式认证
- 设置环境变量：`$env:CLOUDFLARE_API_TOKEN = "token"`

## 架构设计

这次的经验让我思考[[静态站点生成]]与[[边缘计算]]的结合。Cloudflare Workers 提供了一个有趣的中间地带：

- 比纯静态站点更灵活
- 比传统服务器更轻量
- 全球边缘部署，访问速度快

## 后续计划

1. 增强功能：搜索、标签、RSS
2. 数据层：考虑集成 [[Cloudflare D1]] 数据库
3. 知识花园：搭建这个 [[Quartz]] 项目作为个人wiki

---

相关链接：
- [[数字花园]]：下一步要搭建的项目
<<<<<<< HEAD
- [[知识管理系统]]：整体的信息架构思考 
=======
- [[知识管理系统]]：整体的信息架构思考
>>>>>>> d6a9d90e1273898889d8a2ffce6b723e23d69e33
