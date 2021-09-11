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


