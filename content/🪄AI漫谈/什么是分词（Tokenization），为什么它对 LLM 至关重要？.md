---
{"publish":true,"title":"why tokenization so important","cssclasses":""}
---

Tokenization involves breaking down text into smaller units, or tokens, such as words, subwords, or characters. For example, "artificial" might be split into "art," "ific," and "ial." This process is vital because LLMs process numerical representations of tokens, not raw text. Tokenization enables models to handle diverse languages, manage rare or unknown words, and optimize vocabulary size, enhancing computational efficiency and model performance.

分词（Tokenization）是指将文本分解成更小的单元，即 **“词元”（token）**，例如单词、子词或字符。例如，“artificial” 可能会被分解为 “art”、“ific” 和 “ial”。这个过程至关重要，**因为 LLM 处理的是词元的数字表示**，而不是原始文本。分词使模型能够处理多种语言、管理罕见或未知词汇，并优化词汇表大小，从而提高计算效率和模型性能。
![image.png](https://wifi-1308568485.cos.ap-nanjing.myqcloud.com/picture/202506191249343.png)

>[!readaloud]
>LLM 并不直接理解“语言”，而是先将句子切分为词元（Tokens），再将每个词元映射为一个数字 ID 或向量，最后由模型处理这些数字来理解上下文与生成内容。

## 360

- [[各种模态的分词有啥区别，实现方式都是一样的嘛？]]
