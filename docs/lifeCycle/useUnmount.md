---
title: useUnmount
group:
  title: 生命周期
---

# useUnmount

在组件卸载阶段执行。

## 使用示例

<code src="../../src/hooks/src/useUnmount/demo/base" />

## API

```ts
useUnmount(fn: () => void );
```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | unmount 时执行的函数 | `() => void` | -      |
