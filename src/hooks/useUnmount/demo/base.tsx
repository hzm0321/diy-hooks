/**
 * title: 基本用法
 * desc: 卸载阶段会根据依赖`更新`方法，保证卸载方法`作用域最新`
 */
import React, { useState, useCallback } from 'react';
import { Button, notification } from 'antd';
import useUnmount from '../index';

const UnmountComponent = () => {
  const [count, setCount] = useState(0);

  const fn = useCallback(() => {
    // 卸载时打印最新的 count
    notification.success({ message: count });
  }, [count]);

  useUnmount(fn);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>更新数字 {count}</Button>
      新组件挂载了
    </div>
  );
};


export default () => {
  const [isMount, setIsMount] = useState(false);

  const handleClick = useCallback(() => {
    setIsMount(v => !v);
  }, [isMount]);

  return (
    <div>
      <Button type='primary' onClick={handleClick}>
        点击{isMount ? '卸载' : '挂载'} mount 组件
      </Button>
      {isMount && <UnmountComponent />}
    </div>
  );
};


