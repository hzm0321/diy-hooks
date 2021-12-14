/**
 * title: 带参用法
 * desc: 带参请求 (默认自动发起请求)
 */
import React, { useCallback, useState } from 'react';
import { useHzeroRequest } from 'diy-hooks';
import { Button } from 'antd';

function getUsername(id): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 1000);
  });
}

export default () => {
  const [count, setCount] = useState(0);
  const { data, isError, isLoading, status, curParams } = useHzeroRequest([
    getUsername,
    count,
  ]);

  const handleChange = useCallback(() => {
    setCount((v) => v + 1);
  }, []);

  if (isError) {
    return <div>{status} to load</div>;
  }
  if (isLoading) {
    return <div>{status}...</div>;
  }
  return (
    <div>
      Username: {data} Status: {status}
      <div>
        <Button type="primary" onClick={handleChange}>
          change
        </Button>
      </div>
      <div>当前请求的 curParams: {JSON.stringify(curParams)}</div>
    </div>
  );
};
