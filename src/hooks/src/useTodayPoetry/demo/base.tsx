/**
 * title: 基本用法
 * desc: 获取一次诗词
 */
import React, { useState, useCallback } from 'react';
import { Button, Tag, Tooltip } from 'antd';
import { useTodayPoetry } from 'diy-hooks';
import styles from './base.less';

export default () => {
  const { content, tags, origin, loading, update } = useTodayPoetry();

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

  return (
    <div>
      <Tooltip title={renderTooltip} color="blue">
        <span>
          <h3>{content}</h3>
        </span>
      </Tooltip>
      {tags.map((tag) => (
        <Tag color="blue">{tag}</Tag>
      ))}
      <div>
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
    </div>
  );
};
