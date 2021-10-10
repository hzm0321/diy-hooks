---
title: useUpdateEffect
group:
  title: 生命周期
---

# useUpdateEffect

依赖`更新`才会执行 `effect`。

## 使用示例

<code src="../../src/hooks/src/useUpdateEffect/demo/base" />

## API

```ts
useUpdateEffect(effect: EffectCallback, deps?: DependencyList);
```

### 参数

| 参数         | 说明                    | 类型             | 默认值 |
| ------------ | ----------------------- | ---------------- | ------ |
| effect       | useEffect 接收的 effect | `EffectCallback` | -      |
| deps（可选） | hook 更新所需要的依赖项 | `DependencyList` | -      |
