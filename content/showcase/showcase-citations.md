---
{"publish":true,"title":"引文 (Citations) 展示","tags":["showcase"],"cssclasses":""}
---


Quartz 支持通过 BibTeX 文件来管理和插入学术引文。

> [!warning] 提示
> 此功能由 [[docs/plugins/Citations\|Citations]] 插件提供，**默认可能未开启**。如果此页面中的引文没有正确渲染，请确保您已在 `quartz.config.ts` 中启用了该插件。

## 引文用法

在您的 `content` 目录下需要有一个 `bibliography.bib` 文件（我们已经为您创建了一个）。然后，您可以在文本中使用 `[@key]` 的语法来插入引文。

例如，关于最近一篇关于大型语言模型可解释性的论文 [@templeton2024scaling]，它讨论了从 Claude 3 Sonnet 中提取可解释特征的方法。

同样，经典的 "Attention is All You Need" 论文 [@vaswani2017attention] 是现代变换器架构的基础。

我们也可以引用书籍，比如 [@tolkien1954lord]。

您可以一次性引用多个来源，例如 [@templeton2024scaling; @vaswani2017attention]。

## 参考文献列表

默认情况下，所有被引用的文献列表会自动出现在页面的末尾。如下所示：

[^ref]

---
返回 [[showcase/showcase-index\|功能展示首页]] 