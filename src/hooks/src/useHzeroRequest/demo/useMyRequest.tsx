/**
 * title: 请求 自定义 hooks 化
 * desc: 封装一个请求的自定义 hooks
 */
import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import { useHzeroRequest } from 'diy-hooks';

// 把接口请求定义成一个 hooks
const useGetUsername = (name) => {
  function getUsername(name): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(name);
      }, 3000);
    });
  }

  return useHzeroRequest(() => getUsername(name), {
    refreshDeps: [name],
  });
};

export default () => {
  const [name, setName] = useState('hello');
  const { data, isError, isLoading } = useGetUsername(name);

  const handleChange = useCallback(() => {
    setName('hello world');
  }, []);

  if (isError) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      Username: {data}
      <Button type="primary" onClick={handleChange}>
        change
      </Button>
    </div>
  );
};
