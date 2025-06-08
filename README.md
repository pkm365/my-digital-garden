<<<<<<< HEAD
# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
=======
# 我的数字花园 🌱

基于 [Quartz](https://quartz.jzhao.xyz/) 构建的个人数字花园，用于知识管理和思维网络的可视化展示。

## ✨ 特性

- 🔗 **双向链接**：文章之间自动建立关联关系
- 🌐 **知识图谱**：可视化展示知识网络结构
- 🔍 **全文搜索**：快速查找相关内容
- 📱 **响应式设计**：支持各种设备访问
- ⚡ **快速加载**：静态站点生成，访问速度极快

## 🚀 本地开发

1. 克隆仓库
```bash
git clone https://github.com/pkm365/my-digital-garden.git
cd my-digital-garden
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run serve
```

4. 打开浏览器访问 `http://localhost:8080`

## 📝 内容管理

- 所有文章存放在 `content/` 目录下
- 使用 Markdown 格式编写
- 支持 frontmatter 元数据
- 使用 `[[文章标题]]` 语法创建双向链接

## 🌐 部署

本项目自动部署到 Cloudflare Pages，每次提交到 main 分支都会触发自动构建和部署。

- **构建命令**: `npm run build`
- **输出目录**: `public`

## 📁 项目结构

```
my-digital-garden/
├── content/           # Markdown 内容文件
├── quartz/           # Quartz 核心文件
├── public/           # 生成的静态文件
├── package.json      # 项目配置
└── README.md         # 项目说明
```

## 🛠️ 技术栈

- **静态站点生成器**: [Quartz v4](https://quartz.jzhao.xyz/)
- **内容格式**: Markdown + frontmatter
- **托管平台**: Cloudflare Pages
- **开发语言**: TypeScript + React (Preact)

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

💡 这是一个活跃的知识花园，内容会持续更新和完善。
>>>>>>> d6a9d90e1273898889d8a2ffce6b723e23d69e33
