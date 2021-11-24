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
    }, 1000);
  });
}

export default () => {
  const { data, error, loading } = useHzeroRequest(getUsername);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {data}</div>;
};
