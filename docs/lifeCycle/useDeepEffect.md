---
title: useDeepEffect
group:
  title: 生命周期
---

# useDeepEffect

修改自 useEffect ，`深度`比较其依赖项。

## 使用示例

<code src="../../src/hooks/src/useDeepEffect/demo/base" />

<code src="../../src/hooks/src/useDeepEffect/demo/props" />

## API

```ts
useDeepEffect(effect: EffectCallback, deps: DependencyList);
```

### 参数

| 参数   | 说明                    | 类型             | 默认值 |
| ------ | ----------------------- | ---------------- | ------ |
| effect | useEffect 接收的 effect | `EffectCallback` | -      |
| deps   | hook 更新所需要的依赖项 | `DependencyList` | -      |
