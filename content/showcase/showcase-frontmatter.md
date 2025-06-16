---
{"publish":true,"aliases":"元数据 页面配置","title":"Frontmatter 与目录展示","description":"这是一个用于演示 Frontmatter 字段和目录生成功能的页面。","enableToc":true,"tags":["showcase","frontmatter","toc"],"cssclasses":""}
---


这个页面旨在展示 `frontmatter`（文件头部的元数据）的强大功能以及它如何与页面的其他部分（如目录）互动。

## Frontmatter

`frontmatter` 是文件顶部的 YAML 或 TOML 块，用于配置页面级别的设置。

本页的 `frontmatter` 如下：
```yaml
---
title: "Frontmatter 与目录展示"
description: "这是一个用于演示 Frontmatter 字段和目录生成功能的页面。"
tags:
  - showcase
  - frontmatter
  - toc
aliases: [元数据, 页面配置]
draft: false
enableToc: true
---
```

- `title`: 设置页面的主标题。
- `description`: 页面的简短描述，常用于搜索引擎优化（SEO）和链接预览。
- `tags`: 为页面添加标签，便于分类和在 [[docs/features/folder and tag listings\|标签列表页]] 中查找。
- `aliases`: 页面的别名。您可以使用 `[[元数据]]` 来链接到这个页面。
- `draft`: 如果设为 `true`，此页面将不会被发布。
- `enableToc`: 如果设为 `true`，页面的右侧（默认布局）会显示目录。

## 目录 (Table of Contents)

目录是根据页面中的标题（H1, H2, H3...）自动生成的。它能帮助读者快速了解页面结构并跳转到感兴趣的部分。

只要本页的 `enableToc` 设置为 `true`，您就应该能在此页面的右侧看到一个包含以下所有标题的目录。

> [!tip] 禁用目录
> 如果你想在某个特定页面禁用目录，只需在 `frontmatter` 中设置 `enableToc: false` 即可。

### 第一级标题

这是内容的第一部分。

#### 1.1 第二级标题

我们可以继续深入。

##### 1.1.1 第三级标题

目录默认会展示到这一层级。

###### 1.1.1.1 第四级标题

更深层级的标题通常不会出现在目录中，但这取决于您的配置。

#### 1.2 第二级标题

这是另一个二级标题。

### 第二级标题

这是另一个主要部分，用于填充目录。

#### 2.1 第二级标题

...

#### 2.2 第二级标题

...

---
返回 [[showcase/showcase-index\|功能展示首页]] 