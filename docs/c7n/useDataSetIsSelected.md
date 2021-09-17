---
title: useDataSetIsSelected
group:
  title: C7N UI
---

# useDataSetIsSelected

`DataSet` 中是否选中了数据。

## 使用示例

<code src="../../src/hooks/src/useDataSetIsSelected/demo/base" />

## API

```ts
const isSelected = useDataSetIsSelected(dataSet: DataSet);
```

### 参数

| 参数    | 说明         | 类型      | 默认值 |
| ------- | ------------ | --------- | ------ |
| dataSet | DataSet 实例 | `DataSet` | -      |

### 返回值

| 参数       | 说明             | 类型      | 默认值  |
| ---------- | ---------------- | --------- | ------- |
| isSelected | 是否有数据被选中 | `boolean` | `false` |
