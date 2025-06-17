---
{"publish":true,"title":"卡片 (Callouts) 展示","tags":["showcase"],"cssclasses":""}
---



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