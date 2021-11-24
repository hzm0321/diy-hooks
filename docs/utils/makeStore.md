---
title: makeStore
group:
  title: 工具方法
---

# makeStore

用于产生全局或局部状态管理的 Hooks 。

## 代码设计

`makeStore` 的源码如下：

```tsx | pure
import React, { createContext, useContext, useReducer } from 'react';

/**
 *  store 和 dispatch 上下文分离
 * @param reducer
 * @param initialValue
 * @constructor
 */

export const makeStore = (reducer, initialValue) => {
  const storeContext = createContext(initialValue);
  const dispatchContext = createContext(() => {});
  const StoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialValue);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useStore() {
    return useContext(storeContext);
  }

  function useDispatch() {
    return useContext(dispatchContext);
  }

  return [StoreProvider, useStore, useDispatch];
};
```

封装了 makeStore 方法，把 store 和 dispatch 这两个内容通过构建`多层 context` 暴露出去。使得在 `StoreProvider` 包裹下的任意层级，可以通过调用 `useStore`
或 `useDispatch` 这两个 hooks 进行获取或修改数据状态。

## 使用示例

```tsx
import React from 'react';
import { makeStore } from 'diy-hooks';
import { Button } from 'antd';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        name: action.name,
      };
  }
};

const [MyProvider, useMyStore, useMyDispatch] = makeStore(reducer, {
  name: 'hello world',
});

export default () => {
  return (
    <MyProvider>
      <Content />
      <Change />
    </MyProvider>
  );
};

function Content() {
  const store = useMyStore();
  return <div>{store.name}</div>;
}

function Change() {
  const dispatch = useMyDispatch();
  return (
    <Button
      type="primary"
      onClick={() => dispatch({ type: 'change', name: 'diy-hooks' })}
    >
      change
    </Button>
  );
}
```
