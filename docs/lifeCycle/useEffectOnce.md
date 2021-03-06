---
title: useEffectOnce
group:
  title: 生命周期
---

# useEffectOnce

在组件的挂载和卸载阶段只执行一次。

## 使用示例

<code src="../../src/hooks/src/useEffectOnce/demo/base" />

## API

```ts
useEffectOnce(mountFn？: () => void, unMountFn？:() => void);
```

### 参数

| 参数              | 说明                 | 类型         | 默认值 |
| ----------------- | -------------------- | ------------ | ------ |
| mountFn（可选）   | mount 时执行的函数   | `() => void` | -      |
| unMountFn（可选） | unmount 时执行的函数 | `() => void` | -      |
