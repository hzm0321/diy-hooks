/**
 * title: 基本用法
 * desc: 操作数组
 */
import React, { useCallback } from 'react';
import { List, Radio } from 'antd';
import { useArray } from 'diy-hooks';

const options = [
  { label: 'set', value: 'set' },
  { label: 'reset', value: 'reset' },
  { label: 'push', value: 'push' },
  { label: 'updateAt', value: 'updateAt' },
  { label: 'insertAt', value: 'insertAt' },
  { label: 'removeAt', value: 'removeAt' },
  { label: 'clear', value: 'clear' },
];

export default () => {
  const [list, { set, reset, push, updateAt, insertAt, removeAt, clear }] =
    useArray(['ddd', 'iii', 'yyy']);

  const handleArrayOperation = useCallback((e) => {
    const { value } = e.target;
    switch (value) {
      case 'set':
        set(['hhh', 'zzz', 'mmm']);
        break;
      case 'reset':
        reset();
        break;
      case 'push':
        push('hhh');
        break;
      case 'updateAt':
        updateAt(1, 'ddd');
        break;
      case 'insertAt':
        insertAt(1, 'ddd');
        break;
      case 'removeAt':
        removeAt(1);
        break;
      case 'clear':
        clear();
        break;
      default:
        break;
    }
  }, []);

  return (
    <div>
      <div>
        <Radio.Group
          onChange={handleArrayOperation}
          optionType="button"
          buttonStyle="solid"
          options={options}
        />
      </div>
      <br />
      <List
        header={<div>数据列表</div>}
        bordered
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            {item}
            <div />
          </List.Item>
        )}
      />
    </div>
  );
};
