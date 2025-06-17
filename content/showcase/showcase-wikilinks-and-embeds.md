---
{"publish":true,"title":"双向链接与内容嵌入展示","tags":["showcase"],"cssclasses":""}
---



双向链接（Wikilinks）是 Quartz 的核心功能之一，它使得在页面之间创建连接变得异常简单和直观。

## Wikilink 语法

### 基本链接
你可以轻松链接到站点的任何其他页面。
- 这是一个指向 [[showcase/showcase-index\|功能展示首页]] 的链接。
- 这是一个指向 [[showcase/showcase-callouts\|卡片展示页面]] 的链接。

### 自定义链接文本
你可以为链接指定不同的显示文本。
- 这是一个带有自定义文本的链接：[[showcase/showcase-syntax-highlighting\|查看语法高亮示例]]。

### 指向标题（锚点）
你可以直接链接到另一个页面的特定标题。
- 链接到语法高亮页面的特定部分：[[showcase/showcase-syntax-highlighting#行高亮]]

## 内容嵌入 (Transclusion)

内容嵌入允许你将其他页面的部分或全部内容直接显示在当前页面。

### 嵌入整个页面
下面是 `[[showcase/showcase-callouts]]` 页面的完整内容嵌入：



本文档展示了 Quartz 支持的各种 Callout（标注卡片）样式。这些样式与 Obsidian 兼容。

## 用法

基础语法如下：
```markdown
> [!info] 标题
> 这是卡片内容！
```

## 卡片类型展示

> [!info]
> 这是一个信息卡片。 aliases: "info"

> [!question]+ 这是一个可折叠的提问卡片
>
> > [!todo]- 是的，卡片可以嵌套，并且可以默认折叠
> >
> > > [!example] 甚至可以多层嵌套！

> [!note]
> 这是一个笔记卡片。aliases: "note"

> [!abstract]
> 这是一个摘要卡片。aliases: "abstract", "summary", "tldr"

> [!todo]
> 这是一个待办事项卡片。aliases: "todo"

> [!tip]
> 这是一个提示卡片。aliases: "tip", "hint", "important"

> [!success]
> 这是一个成功卡片。aliases: "success", "check", "done"

> [!question]
> 这是一个问题卡片。aliases: "question", "help", "faq"

> [!warning]
> 这是一个警告卡片。aliases: "warning", "attention", "caution"

> [!failure]
> 这是一个失败卡片。aliases: "failure", "missing", "fail"

> [!danger]
> 这是一个危险卡片。aliases: "danger", "error"

> [!bug]
> 这是一个 Bug 卡片。aliases: "bug"

> [!example]
> 这是一个示例卡片。aliases: "example"

> [!quote]
> 这是一个引用卡片。aliases: "quote", "cite"

## 自定义卡片

你也可以创建自定义类型的卡片，具体方法请参考 [[docs/features/callouts\|Callouts]] 文档。

---
返回 [[showcase/showcase-index\|功能展示首页]] 

### 嵌入特定标题下的内容
你也可以只嵌入某个特定标题下的内容。下面是 `[[showcase/showcase-callouts]]` 页面中 "卡片类型展示" 标题下的内容：

## 用法

基础语法如下：
```markdown
> [!info] 标题
> 这是卡片内容！
```


### 图片嵌入
图片嵌入的语法与页面嵌入类似。如果你在 `content` 文件夹中有名为 `my-image.png` 的图片，你可以这样嵌入它：
```markdown
![[my-image.png]]
```
你甚至可以指定图片的显示尺寸：
```markdown
![[my-image.png|100x150]]
```

---
返回 [[showcase/showcase-index\|功能展示首页]] 