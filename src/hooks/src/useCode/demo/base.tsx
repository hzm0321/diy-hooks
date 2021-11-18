/**
 * title: 基本用法
 * desc: useCode 会把首次请求的 code 存起来，遇到相同的 code 请求直接从缓存里取
 */
import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { useCode } from 'diy-hooks';

type LovCodeType = {
  value: string;
  meaning: string;
  orderSeq: number;
};

const TempData: LovCodeType[] = [
  {
    value: 'H',
    meaning: '哈哈哈',
    orderSeq: 0,
  },
  {
    value: 'Z',
    meaning: '滋滋滋',
    orderSeq: 1,
  },
  {
    value: 'M',
    meaning: '喵喵喵',
    orderSeq: 2,
  },
];

const QueryComponent = () => {
  const queryCodeDemo = (code: string) => {
    return new Promise((resolve) => {
      if (code === 'HZM') {
        setTimeout(() => {
          resolve(TempData);
        }, 3000);
      }
    });
  };

  const CodeData = useCode('HZM', queryCodeDemo, true);
  return <Spin spinning={CodeData.length < 1}>{JSON.stringify(CodeData)}</Spin>;
};

export default () => {
  const [count, setCount] = useState(0);

  const handleAddCode = () => {
    setCount((v) => v + 1);
  };

  return (
    <div>
      {new Array(count).fill(1).map((_, index) => (
        <QueryComponent key={index} />
      ))}
      <div>
        <Button type="primary" onClick={handleAddCode}>
          请求一次值集
        </Button>
      </div>
    </div>
  );
};
