/**
 * title: 基本并行请求
 * desc: 多个 useHzeroRequest 组成基础的并行请求
 */
import React, { useState } from 'react';
import { useHzeroRequest } from 'diy-hooks';
import { Button } from 'antd';

function getUsername(time): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1111');
    }, time);
  });
}

export default () => {
  const [show, setShow] = useState(false);

  if (show) {
    return <Component />;
  }
  return (
    <div>
      <Button type="primary" onClick={() => setShow(true)}>
        加载组件
      </Button>
    </div>
  );
};

function Component() {
  const firstResult = useHzeroRequest([getUsername, 1000]);
  const secondResult = useHzeroRequest([getUsername, 1000]);
  const thirdResult = useHzeroRequest([getUsername, 1000]);

  return (
    <div>
      <div>
        {' '}
        firstResult: {firstResult.data} Status: {firstResult.status}
      </div>
      <div>
        {' '}
        secondResult: {secondResult.data} Status: {secondResult.status}
      </div>
      <div>
        {' '}
        thirdResult: {thirdResult.data} Status: {thirdResult.status}
      </div>
    </div>
  );
}
