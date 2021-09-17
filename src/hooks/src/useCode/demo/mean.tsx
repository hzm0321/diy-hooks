/**
 * title: 与取值方法结合
 * desc: useCode 结合 getCodeMeaning 方法展示值集
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

  const CodeData = useCode('HZM', queryCodeDemo);
  return (
    <Spin spinning={CodeData.length < 1}>
      <div>H:{getCodeMeaning('H', CodeData)}</div>
      <div>Z:{getCodeMeaning('Z', CodeData)}</div>
      <div>M:{getCodeMeaning('M', CodeData)}</div>
    </Spin>
  );
};

export function getCodeMeaning(value: string, code: any[] = []) {
  let result;
  if (value && code.length > 0) {
    const codeList = code.filter((n) => n.value === value);
    if (codeList) {
      result = codeList[0].meaning;
    }
  }
  return result;
}

export default () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      {isShow && <QueryComponent />}
      <div>
        <Button type="primary" onClick={() => setIsShow((v) => !v)}>
          请求含值集组件
        </Button>
      </div>
    </div>
  );
};
