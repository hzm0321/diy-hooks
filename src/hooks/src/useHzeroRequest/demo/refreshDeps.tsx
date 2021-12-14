/**
 * title: 依赖用法二
 * desc: 使用 Options 中 `refreshDeps` 参数依赖需要监听的状态。`注 refreshDeps 变化时会使用上一轮传进去的 params 重新执行一次请求`
 */
import React, { useCallback, useEffect, useState } from 'react';
import { useHzeroRequest } from 'diy-hooks';
import { Button } from 'antd';

function getUsername(id): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 3000);
  });
}

export default () => {
  const [update, setUpdate] = useState({});
  const [count, setCount] = useState(0);
  const { data, isError, isLoading, status, curParams } = useHzeroRequest(
    () => getUsername(count),
    {
      refreshDeps: [update],
    },
  );

  const handleChangeRefreshDeps = useCallback(() => {
    setUpdate({});
  }, []);

  const handleChangeCount = useCallback(() => {
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
      请求返回的 count: {data}
      <br />
      当前 count: {count}
      <div>
        <Button type="primary" onClick={handleChangeRefreshDeps}>
          changeRefreshDeps
        </Button>
        <Button
          type="primary"
          onClick={handleChangeCount}
          style={{ marginLeft: 10 }}
        >
          changeCount
        </Button>
      </div>
      <div>当前请求的 curParams: {JSON.stringify(curParams)}</div>
    </div>
  );
};
