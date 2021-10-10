/**
 * title: 自动更新用法
 * desc: 定时自动刷新诗词
 */
import React, { useState, useRef } from 'react';
import { Button, Tag, Tooltip, InputNumber, message } from 'antd';
import { useTodayPoetry } from 'diy-hooks';
import styles from './base.less';

const defaultValue = 10000;

export default () => {
  const [intervalTime, setIntervalTime] = useState(defaultValue);
  const { content, tags, origin, loading, update } =
    useTodayPoetry(intervalTime);

  const inputNumberRef = useRef(defaultValue);

  const renderTooltip = (
    <div className={styles.tooltip}>
      <strong>{origin.title}</strong>
      <div>
        [{origin.dynasty}] {origin.author}
      </div>
      <div>
        {origin.content?.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );

  const onInputNumberChange = (value) => {
    inputNumberRef.current = value;
  };

  const handleSubmit = () => {
    setIntervalTime(inputNumberRef.current);
    message.success('提交成功');
  };

  return (
    <div>
      <Tooltip title={renderTooltip} color="blue" placement="right">
        <span>
          <h2>{content}</h2>
        </span>
      </Tooltip>
      {tags.map((tag) => (
        <Tag color="blue">{tag}</Tag>
      ))}
      <div className={styles.operation}>
        <Button
          type="primary"
          ghost
          loading={loading}
          shape="round"
          onClick={update}
        >
          换一句
        </Button>
      </div>
      <div className={styles.inputNumber}>
        自动更新时长（单位/毫秒）：
        <InputNumber
          style={{ width: '300px' }}
          defaultValue={defaultValue}
          placeholder="请输入自动更新的时间"
          min={0}
          step={500}
          onChange={onInputNumberChange}
        />
        <Button
          type="primary"
          style={{ marginLeft: '8px' }}
          onClick={handleSubmit}
        >
          提交
        </Button>
      </div>
    </div>
  );
};
