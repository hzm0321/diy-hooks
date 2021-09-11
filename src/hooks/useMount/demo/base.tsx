import React, { useState, useCallback } from 'react';
import { Button, notification } from 'antd';
import useMount from '../index';

const MountComponent = () => {
  useMount(() => {
    notification.success({ message: 'mount 阶段被执行了' })
  })
  return <div>新组件挂载了</div>
}

export default () => {
  const [isMount, setIsMount] = useState(false);

  const handleClick = useCallback(() => {
    setIsMount(v => !v)
  }, [isMount])

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        点击{isMount ? '卸载' : '挂载'} mount 组件
      </Button>
      {isMount && <MountComponent />}
    </div>
  )
};


