---
title: useTodayPoetry
group:
  title: 业务场景
---

# useTodayPoetry

根据时间、地点、天气、事件智能推荐一句诗词。  
`注：频繁调用接口会导致诗词推荐质量下降。`

## 使用示例

<code src="../../src/hooks/src/useTodayPoetry/demo/base" />

<code src="../../src/hooks/src/useTodayPoetry/demo/interval" />

## API

```ts
const { content, tags, origin, loading, update, allData } = useTodayPoetry();
```

### 参数

| 参数               | 说明                            | 类型     | 默认值 |
| ------------------ | ------------------------------- | -------- | ------ |
| intervalTime(可选) | 定时更新的间隔时长（单位/毫秒） | `number` | -      |

### 返回值

| 参数    | 说明                   | 类型         | 默认值  |
| ------- | ---------------------- | ------------ | ------- |
| content | 当前推荐的一句诗词     | `string`     | -       |
| tags    | 当前推荐的诗词的标签   | `string[]`   | `[]`    |
| origin  | 当前推荐的诗词的原诗词 | `any`        | `{}`    |
| loading | 获取诗词的状态         | `boolean`    | `false` |
| update  | 更新诗词               | `() => void` | -       |
| allData | 获取到的全部数据       | `any`        | -       |
