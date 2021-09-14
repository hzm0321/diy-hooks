---
title: useUpdateEffect
---

# useUpdateEffect

依赖`更新`才会执行 `effect`。

## 使用示例

<code src="../../src/hooks/useUpdateEffect/demo/base" />

## API

```ts
useUpdateEffect(effect: EffectCallback, deps?: DependencyList);
```

### 返回值

| 参数   | 说明                    | 类型             | 默认值 |
| ------ | ----------------------- | ---------------- | ------ |
| effect | useEffect 接收的 effect | `EffectCallback` | -      |
| deps   | hook 更新所需要的依赖项 | `DependencyList` | -      |
