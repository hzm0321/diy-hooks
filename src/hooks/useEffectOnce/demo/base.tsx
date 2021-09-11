import React, { useCallback, useState } from 'react';
import { Button, notification } from 'antd';
import useEffectOnce from '../index';

const Component = () => {
  useEffectOnce(() => {
    notification.success({ message: '挂载了' });
    return () => {
      notification.error({ message: '卸载了' });
    };
  });
  return null;
};

export default () => {
  const [isMount, setIsMount] = useState(false);

  const handleClick = useCallback(() => {
    setIsMount(v => !v)
  }, [isMount])

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        点击{isMount ? '卸载' : '挂载'}组件
      </Button>
      {isMount && <Component />}
    </div>
  )
}


