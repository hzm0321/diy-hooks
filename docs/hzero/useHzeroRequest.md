---
title: useHzeroRequest
group:
  title: Hzero
---

# useHzeroRequest

使用 hooks 方式进行 hzero 接口请求。

## 使用示例

### 基本用法

<code src="../../src/hooks/src/useHzeroRequest/demo/base" />

<code src="../../src/hooks/src/useHzeroRequest/demo/params" />

如果需要 `useHzeroRequest` 自动帮你监听参数变化,第一个参数以数组形式传入。数组的第一个参数是 queryApi, 第二个参数开始是需要传进 queryApi 的参数。  
内部会以这种形式 `[queryApi, ...params]`, 收集参数

### 手动请求

<code src="../../src/hooks/src/useHzeroRequest/demo/manual" />

### 组件或页面卸载时取消请求

组件或页面发生卸载或跳转的时候, 可通过调用 cancelRequest 取消正在发送中的请求。

<code src="../../src/hooks/src/useHzeroRequest/demo/cancel" />

### 依赖变化自动重新请求

#### 依赖 params 传参

基本用法的第二个案例就介绍了监听 `params` 参数的案例。使用的时候注意一点, 在传了 `refreshDeps` 参数后, `params` 不再监听变化后自动请求。  
`请求逻辑由 refreshDeps 的逻辑决定`。

#### 依赖 refreshDeps

<code src="../../src/hooks/src/useHzeroRequest/demo/refreshDeps" />

如果以`高阶函数`的形式传入 `queryApi`, 由于请求参数包装在返回的函数内部,形成了闭包。导致 `useHzeroRequest` 的内部拿不到请求的 `params`, 因此 `curParam` 会返回空值

#### refreshDeps 监听了 params (不推荐)

<code src="../../src/hooks/src/useHzeroRequest/demo/refreshDepsAndParams" />

不推荐数组传参形式与 refreshDeps 参数混用,以免产生歧义。

- 如果需要监听传参变化触发接口请求, 使用数组传参形式
- 如果需要依赖其他外部变量触发接口请求, 使用高阶函数传参形式

### 并行请求

当并行请求的数量不变时，就不需要额外努力来使用并行请求。只需要将任意数量的 `useHzeroRequest` 并排使用！

<code src="../../src/hooks/src/useHzeroRequest/demo/baseParallel" />

[comment]: <> (<code src="../../src/hooks/src/useHzeroRequest/demo/manageParallel" />)

### 串行请求

依赖(或串行)请求依赖于先前的查询在执行之前完成。要实现这一点，只需使用启用 `ready` 选项告诉查询何时可以运行即可

<code src="../../src/hooks/src/useHzeroRequest/demo/bunch" />

## 参数

| 参数     | 说明               | 类型      | 默认值 |
| -------- | ------------------ | --------- | ------ |
| queryApi | Promise 形式的接口 | `Promise` | -      |
| options  | 接口参数配置项     | `Options` | -      |

### Options 类型

| 参数      | 说明               | 类型                                    | 默认值 |
| --------- | ------------------ | --------------------------------------- | ------ |
| onSuccess | 接口成功请求的回调 | `(data: any, params: any[]) => void`    | -      |
| onError   | 接口失败请求的回调 | `(error: Error, params: any[]) => void` | -      |
| enabled   | 是否挂载时自动请求 | `boolean`                               | `true` |

## 返回值

| 参数      | 说明                                                                                                                       | 类型                          | 默认值      |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| data      | 接口请求的返回值                                                                                                           | `any`                         | `undefined` |
| status    | 返回当前接口处于的状态(`idle`、`success`、`loading`、`error`)                                                              | `REQUEST_STATUS`              | `undefined` |
| isLoading | 请求是否处于加载中状态                                                                                                     | `boolean`                     | `false`     |
| isError   | 请求是否发生错误                                                                                                           | `boolean`                     | `false`     |
| isSuccess | 请求是否成功                                                                                                               | `boolean`                     | `false`     |
| isIdle    | 请求是否处于空闲状态 (当 `enabled` 为 `false` 的时候且 `data` 没有数据,则返回 `true`)                                      | `boolean`                     | `false`     |
| reRequest | 手动触发请求执行，参数会传递给接口<br/>(`如果传递了参数(包括null)会覆盖params, 如果不传递参数会复用上一次的 params 参数 `) | `(...args: any[]) => Promise` |             |

## Hooks 化理念

在自定义 hooks 设计模式中, 任何与`状态和依赖`变更有关的逻辑都可以设计为一个 hook。  
因此所有的接口请求应当都是以一个自定义 hook 的形式体现在业务逻辑中。

<code src="../../src/hooks/src/useHzeroRequest/demo/useMyRequest" />
