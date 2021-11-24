---
title: useDataSet
group:
  title: C7N UI
---

# useDataSet

初始化 `DataSet`，避免 `DataSet` 实例被重复生成。

## 使用示例

<code src="../../src/hooks/src/useDataSet/demo/base" />

<code src="../../src/hooks/src/useDataSet/demo/cache" />

## API

```ts
const dataSet = useDataSet(dataSetFactory: () => DataSet, deps?: DependencyList, cacheKey?: string );
```

### 参数

| 参数             | 说明                    | 类型             | 默认值 |
| ---------------- | ----------------------- | ---------------- | ------ |
| dataSetFactory   | 生成 DataSet 实例       | `() => DataSet`  | -      |
| deps（可选）     | hook 更新所需要的依赖项 | `DependencyList` | -      |
| cacheKey（可选） | 缓存的 key 值           | `string`         | -      |

### 返回值

| 参数    | 说明         | 类型      | 默认值 |
| ------- | ------------ | --------- | ------ |
| dataSet | DataSet 实例 | `DataSet` | -      |
