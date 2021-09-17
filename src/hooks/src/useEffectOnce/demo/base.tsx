/**
 * title: 基本用法
 * desc: 挂载阶段执行一次方法，卸载阶段会根据依赖`更新`方法，保证卸载方法`作用域最新`
 */
import React, { useCallback, useState } from 'react';
import { Button, notification } from 'antd';
import { useEffectOnce } from 'diy-hooks';

const Component = () => {
  const [count, setCount] = useState(0);
  useEffectOnce(
    () => {
      notification.success({ message: '挂载了' });
    },
    () => {
      notification.error({ message: '卸载了' + count });
    },
  );
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
    setIsMount((v) => !v);
  }, [isMount]);

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        点击{isMount ? '卸载' : '挂载'}组件
      </Button>
      {isMount && <Component />}
    </div>
  );
};
