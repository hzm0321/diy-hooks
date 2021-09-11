---
title: useEffectOnce
---

#  useEffectOnce

在组件的挂载和卸载阶段只执行一次。

## 使用示例

### 基本用法

<code src="../../src/hooks/useEffectOnce/demo/base" />

## API

```ts
useEffectOnce(effect: EffectCallback);
```

### 参数

| 参数 | 说明               | 类型         | 默认值 |
|------|--------------------|--------------|--------|
| effect   | useEffect 执行的函数 | `EffectCallback` | -      |
