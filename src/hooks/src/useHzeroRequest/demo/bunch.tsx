/**
 * title: 串行请求
 * desc: 依赖 `enable` 实现串行
 */
import React, { useState } from 'react';
import { useHzeroRequest } from 'diy-hooks';
import { Button } from 'antd';

function getUserId(id): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 2000);
  });
}

function getUsername(id): Promise<string> {
  const map = {
    '1': 'hello',
    '2': 'world',
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('请求成功了一次');
      resolve(`${id} 的名字是 ${map[id]}`);
    }, 3000);
  });
}

export default () => {
  const [userId, setUserId] = useState('1');
  const userIdResult = useHzeroRequest([getUserId, userId]);
  const userNameResult = useHzeroRequest([getUsername, userIdResult.data], {
    ready: !!userIdResult.data,
  });

  if (userIdResult.isLoading || userNameResult.isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      Username: {userNameResult.data} Status: {userNameResult.status}
      <div>
        <Button type="primary" onClick={() => setUserId('2')}>
          changeId
        </Button>
      </div>
    </div>
  );
};
