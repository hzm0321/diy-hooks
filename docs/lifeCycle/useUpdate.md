---
title: useUpdate
group:
  title: 生命周期
---

# useUpdate

强制组件重新渲染。

## 使用示例

<code src="../../src/hooks/src/useUpdate/demo/base" />

## API

```ts
const update = useUpdate();
```

### 返回值

| 参数   | 说明                 | 类型         | 默认值 |
| ------ | -------------------- | ------------ | ------ |
| update | 执行该方法，强刷页面 | `() => void` | -      |
