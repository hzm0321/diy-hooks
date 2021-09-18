<div align="center">
<h1>diy-hooks</h1>
   <a href="https://www.npmjs.com/package/diy-hooks">
      <img src="https://img.shields.io/npm/v/diy-hooks.svg" alt="npm package" />
   </a>
   <a href="https://www.npmjs.com/package/react-use">
      <img src="https://img.shields.io/npm/dm/diy-hooks.svg" alt="npm downloads" />
   </a>
   <a href="https://www.npmjs.com/package/react-use">
      <img src="https://img.shields.io/bundlephobia/min/diy-hooks.svg" alt="npm downloads" />
   </a>
   <a href="https://github.com/hzm0321/diy-hooks">
      <img src="https://img.shields.io/github/stars/hzm0321/diy-hooks?style=social" alt="npm downloads" />
   </a>
</div>

## 介绍

`diy-hooks` 库主要收录了平时业务开发中常用的自定义 React Hooks， 并且还包含 Hzero、C7N UI 项目使用的 hooks。

## 安装依赖

```shell
$ yarn add diy-hooks
# or
$ npm install diy-hooks
```

## 简单使用

```ts
import React from 'react';
import { useMount } from 'diy-hooks';

export default () => {
  useMount(() => {
    console.log('挂载了');
  });

  return <div>挂载</div>;
};
```

## 支持 TypeScript

`diy-hooks`库导出了类型声明文件，可在 TS 项目中直接使用。

## 按需加载

`diy-hooks` 默认支持基于 ES module 的 tree shaking。  
直接写成 `import { useToggle } from 'ahooks'` 就有按需加载效果。

## 文档阅读说明

项目的文档库基于 [dumi](https://d.umijs.org/zh-CN) 搭建，并通过 [Github Pages](https://pages.github.com/) 部署在 [https://hzm0321.github.io/diy-hooks/](https://hzm0321.github.io/diy-hooks/) 。  
可根据 hooks 类型分组，阅读此文档。每个分组都有一篇`简介`说明该分组下说包含的 hooks 概要，可据此查找对应 hook。
如有疑问，请联系作者。  
QQ：**934585316**  
微信：**hzm0321hzm**

## 国内镜像

如果文档页面访问过慢，可以访问国内镜像站点[http://hzm0321.gitee.io/diy-hooks/](http://hzm0321.gitee.io/diy-hooks/)
