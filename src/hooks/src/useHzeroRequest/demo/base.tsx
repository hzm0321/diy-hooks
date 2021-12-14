/**
 * title: 基本用法
 * desc: 普通请求 (默认自动发起请求)
 */
import React from 'react';
import { useHzeroRequest } from 'diy-hooks';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1111');
    }, 3000);
  });
}

export default () => {
  const { data, isError, isLoading, status } = useHzeroRequest(getUsername);

  if (isError) {
    return <div>{status} to load</div>;
  }
  if (isLoading) {
    return <div>{status}...</div>;
  }
  return (
    <div>
      Username: {data} Status: {status}
    </div>
  );
};
