---
title: "Mermaid 图表展示"
tags:
  - showcase
---

Quartz 支持 [Mermaid](https://mermaid.js.org/)，让你可以用文本在 Markdown 中创建各种图表和可视化内容。

## 语法

要创建一个图表，只需使用 `mermaid` 语言的代码块即可。

### 序列图 (Sequence Diagram)

````mermaid
sequenceDiagram
    participant Alice
    participant John
    Alice->>+John: John，你好，最近怎么样？
    Alice->>+John: John，能听到我说话吗？
    John-->>-Alice: Hi Alice，我能听到！
    John-->>-Alice: 我感觉很棒！
````

### 流程图 (Flowchart)

````mermaid
graph TD
    A[开始] --> B(处理中);
    B --> C{决策};
    C -->|条件1| D[结果一];
    C -->|条件2| E[结果二];
    D --> F[结束];
    E --> F[结束];
````

### 饼图 (Pie Chart)

````mermaid
pie
    title 编程语言分布
    "JavaScript" : 45
    "Python" : 25
    "Java" : 15
    "Others" : 15
````

---
返回 [[showcase/showcase-index|功能展示首页]] 