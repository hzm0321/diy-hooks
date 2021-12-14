/**
 * title: 依赖用法三
 * desc: 如果 `refreshDeps` 和 `params` 同时存在 refreshDeps 触发的刷新拿到的始终是旧值,即便是把 params 传入 refreshDeps 也是一样
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
    [getUsername, count],
    {
      refreshDeps: [update, count],
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
