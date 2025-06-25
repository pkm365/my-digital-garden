---
{"publish":true,"title":"how Softmax function is used","cssclasses":""}
---

Softmax 函数将注意力分数归一化为一个概率分布：

softmax(xi​)=∑j​exj​exi​​

在[[🪄AI漫谈/注意力机制在 Transformer 模型中是如何运作的？\|注意力机制]]，它将原始的相似度分数（来自查询-键的点积）转换为权重，从而突出相关的词元。这确保了模型能聚焦于输入中上下文重要的部分。
![image.png](https://wifi-1308568485.cos.ap-nanjing.myqcloud.com/picture/202506191729407.png)
