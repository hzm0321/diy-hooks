/**
 * title: 管理并行请求
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
  const { data, status } = useHzeroRequest(
    [
      [getUsername, 1000],
      [getUsername, 2000],
    ],
    {
      fetchKey: (id) => id,
    },
  );

  console.log(data);

  return (
    <div>
      <div> {data} </div>
      <div> {status} </div>
    </div>
  );
}
