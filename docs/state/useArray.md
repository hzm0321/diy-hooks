---
title: useArray
group:
  title: 状态
  order: 2
---

# useArray

用于管理`数组`的 hook。

## 使用示例

<code src="../../src/hooks/src/useArray/demo/base" />

## API

```ts
const [array, { set, reset, push, updateAt, insertAt, removeAt, clear }] = useArray(initialValue: []);
```

### 参数

| 参数         | 说明           | 类型    | 默认值 |
| ------------ | -------------- | ------- | ------ |
| initialValue | 初始化数组数据 | `array` | `[]`   |

### 返回值

| 参数    | 说明           | 类型           | 默认值 |
| ------- | -------------- | -------------- | ------ |
| array   | 数组数据       | `array`        | -      |
| actions | 操作数组的方法 | `ArrayActions` | -      |

### actions

| 参数     | 说明                           | 类型                                     | 默认值 |
| -------- | ------------------------------ | ---------------------------------------- | ------ |
| set      | 设置数组                       | `T \| (prevState: T) => T \| () => T`    | -      |
| reset    | 重置数组到初始化值             | `() => void`                             | -      |
| push     | 添加一或多组数据到数组结尾     | `(...items: T[]) => void`                | -      |
| updateAt | 更新该索引位置数据             | ` (index: number, item: T) => void`      | -      |
| insertAt | 在该索引位置后插入一或多组数据 | ` (index: number, ...item: T[]) => void` | -      |
| removeAt | 删除该索引位置数据             | ` (index: number) => void`               | -      |
| clear    | 清除数组                       | ` () => void`                            | -      |
