/**
 * title: 基本用法
 * desc: 调用 useUpdate 返回的 update 方法，强刷页面
 */
import React, { useCallback } from 'react';
import { Button } from 'antd';
import { useUpdate } from 'diy-hooks';

export default () => {
  const update = useUpdate();

  const handleUpdate = useCallback(() => {
    update();
  }, []);

  return (
    <div>
      <div>当前时间：{Date.now()}</div>
      <Button type="primary" onClick={handleUpdate}>
        强制重新渲染
      </Button>
    </div>
  );
};
