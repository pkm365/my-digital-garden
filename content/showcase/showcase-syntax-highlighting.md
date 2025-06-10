---
title: "语法高亮展示"
tags:
  - showcase
---

Quartz 支持在构建时进行服务端语法高亮，这意味着它对访问者非常友好，加载速度快，且无需客户端 JavaScript。

它使用了与 VS Code 相同的语法解析器，可以提供精准的高亮。

## 语言支持

支持多种语言，只需在代码块起始位置指定语言即可。

### TypeScript
````typescript
export function trimPathSuffix(fp: string): string {
  fp = clientSideSlug(fp)
  let [cleanPath, anchor] = fp.split("#", 2)
  anchor = anchor === undefined ? "" : "#" + anchor

  return cleanPath + anchor
}
````

### Python
````python
def hello_world():
    """Prints 'Hello, World!' to the console."""
    print("Hello, World!")

hello_world()
````

### SCSS
````scss
.flex-component {
  display: block; // or any other display type
}
````

## 高级功能

### 代码块标题
可以为代码块添加标题。
````js title="quartz/path.ts"
export function trimPathSuffix(fp: string): string {
  fp = clientSideSlug(fp)
  let [cleanPath, anchor] = fp.split("#", 2)
  anchor = anchor === undefined ? "" : "#" + anchor

  return cleanPath + anchor
}
````

### 行高亮
使用 `{}` 来指定需要高亮的行号。
````js {2-3,6}
export function trimPathSuffix(fp: string): string {
  fp = clientSideSlug(fp)
  let [cleanPath, anchor] = fp.split("#", 2)
  anchor = anchor === undefined ? "" : "#" + anchor

  return cleanPath + anchor
}
````

### 单词高亮
使用 `/.../` 来高亮特定单词或正则表达式匹配的文本。
````js /useState/
const [age, setAge] = useState(50)
const [name, setName] = useState("Taylor")
````

### 行内高亮
通过在行内代码后附加 `{:lang}` 来实现。

这是一个 JavaScript 数组 `[1, 2, 3]{:js}`。

### 自定义起始行号
使用 `showLineNumbers{number}` 来指定行号的起始数字。

````ts showLineNumbers{20}
export function trimPathSuffix(fp: string): string {
  fp = clientSideSlug(fp)
  let [cleanPath, anchor] = fp.split("#", 2)
  anchor = anchor === undefined ? "" : "#" + anchor

  return cleanPath + anchor
}
````
---
返回 [[showcase/showcase-index|功能展示首页]] 