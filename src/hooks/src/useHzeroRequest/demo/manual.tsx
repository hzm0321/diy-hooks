/**
 * title: 手动请求
 * desc: 通过 `enabled` 属性, 选择是否自动请求
 */
import React from 'react';
import { Button } from 'antd';
import { useHzeroRequest } from 'diy-hooks';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 3000);
  });
}

export default () => {
  const { data, isIdle, status, isError, isLoading, reRequest } =
    useHzeroRequest(getUsername, { enabled: false });

  if (isIdle) {
    return (
      <div>
        {status}...
        <Button loading={isLoading} type="primary" onClick={reRequest}>
          send
        </Button>
      </div>
    );
  }
  if (isError) {
    return <div>failed to load</div>;
  }
  return (
    <div>
      Username: {data} {status}
    </div>
  );
};
