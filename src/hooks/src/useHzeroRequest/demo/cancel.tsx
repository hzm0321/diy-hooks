/**
 * title: 组件或页面卸载时取消请求
 * desc: 使用返回的 `cancelRequest` 方法可取消正在进行中的请求
 */
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useHzeroRequest } from 'diy-hooks';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1111');
    }, 3000);
  });
}

export default () => {
  const { status, isIdle, isError, isLoading, reRequest, cancelRequest } =
    useHzeroRequest(getUsername, { enabled: false });
  const [isShow, setIsShow] = useState(true);

  if (isIdle) {
    return (
      <div>
        {status}...
        <Button loading={isLoading} type="primary" onClick={reRequest}>
          send
        </Button>
        <Button type="primary" ghost onClick={cancelRequest}>
          cancelRequest
        </Button>
      </div>
    );
  }
  if (isError) {
    return <div>failed to load</div>;
  }
  return <div>{isShow ? <MountComponent onShow={setIsShow} /> : '父组件'}</div>;
};

function MountComponent({ onShow }) {
  const { isError, isLoading, cancelRequest } = useHzeroRequest(getUsername);
  useEffect(() => {
    return () => {
      // 卸载的时候取消请求
      cancelRequest();
    };
  }, []);

  if (isLoading) {
    return (
      <div>
        子组件 loading...
        <Button type="primary" ghost onClick={() => onShow(false)}>
          unMount
        </Button>
      </div>
    );
  }
  if (isError) {
    return <div>failed to load</div>;
  }
  return <div>success</div>;
}
