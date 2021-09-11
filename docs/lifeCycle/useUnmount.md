---
title: useUnmount
---

# useUnmount

在组件卸载阶段执行。

## 使用示例

### 基本用法

<code src="../../src/hooks/useUnmount/demo/base" />

## API

```ts
useUnmount(fn: () => void );
```

### 参数

| 参数 | 说明               | 类型         | 默认值 |
|------|--------------------|--------------|--------|
| fn   | mount 时执行的函数 | `() => void` | -      |
