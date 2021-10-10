---
title: useDataSetEvents
group:
  title: C7N UI
---

# useDataSetEvents

批量监听 `DataSet Events` 的 hook。  
可以被监听的 [DataSet Events 列表](https://open-hand.gitee.io/choerodon-ui/zh/procmp/dataset/dataset#dataset-events)

## 使用示例

<code src="../../src/hooks/src/useDataSetEvents/demo/base" />

<code src="../../src/hooks/src/useDataSetEvents/demo/once" />

## API

```ts
useDataSetEvents(
  dataSet: DataSet,
  eventNames: string | string[],
  handler: CallableFunction,
  options?: Options,
)
```

### 参数

| 参数            | 说明         | 类型                 | 默认值 |
| --------------- | ------------ | -------------------- | ------ |
| dataSet         | DataSet 实例 | `DataSet`            | -      |
| eventNames      | 事件名称     | `string \| string[]` | -      |
| handler         | 处理函数     | `CallableFunction`   | -      |
| options（可选） | 选项         | `Options`            | -      |

### Options

| 参数    | 说明                                                                                              | 类型      | 默认值  |
| ------- | ------------------------------------------------------------------------------------------------- | --------- | ------- |
| once    | 可选项，`handler` 在添加之后最多只调用`一次`。如果是 `true`，`handler` 会在其被调用之后自动移除。 | `boolean` | `false` |
| capture | 可选项，`handler` 会在该 DataSet 类型的事件捕获阶段传播到该 `EventTarget` 时触发。                | `boolean` | `false` |
| passive | 可选项，设置为 `true` 时，表示 `handler` 永远不会调用 `preventDefault()` 。                       | `boolean` | `false` |
