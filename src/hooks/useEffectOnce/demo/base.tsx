import React, { useCallback, useState } from 'react';
import { Button, notification } from 'antd';
import useEffectOnce from '../index';

const Component = () => {
  const [count, setCount] = useState(0);
  useEffectOnce(() => {
    notification.success({ message: '挂载了' });
  }, () => {
    notification.error({ message: '卸载了' + count });
  });
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
        点击{isMount ? '卸载' : '挂载'}组件
      </Button>
      {isMount && <Component />}
    </div>
  );
}


