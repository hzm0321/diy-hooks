---
title: useCode
group:
  title: Hzero
---

# useCode

获取 Hzero 值集。

`注：项目上使用建议对接口请求部分二次封装 useCode`

## 使用示例

<code src="../../src/hooks/src/useCode/demo/base" />

<code src="../../src/hooks/src/useCode/demo/mean" />

## API

```ts
const CodeList = useCode(code: string, queryCode: (arg0: string) => any), refresh = false );
```

### 参数

| 参数      | 说明                   | 类型                    | 默认值  |
| --------- | ---------------------- | ----------------------- | ------- |
| code      | 值集编码               | `string`                | -       |
| queryCode | 查询值集的接口请求方法 | `(arg0: string) => any` | -       |
| refresh   | 是否走缓存             | `boolean`               | `false` |

### 返回值

| 参数     | 说明     | 类型    | 默认值 |
| -------- | -------- | ------- | ------ |
| CodeList | 值集列表 | `array` | `[]`   |
