/**
 * title: 基本用法
 * desc: 仅在依赖更新时才会执行 effect
 */
import React, { useState } from 'react';
import { Button } from 'antd';

import useUpdateEffect from '../index';

export default () => {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);

  useUpdateEffect(() => {
    setSecond(v => v + 1);
  }, [count]);

  return (
    <div>
      <div>第一个计数：{count}</div>
      <div>依赖与第一个更新的计数：{second}</div>
      <Button type='primary' onClick={() => setCount(count + 1)}>更新数字 </Button>
    </div>
  )
}
