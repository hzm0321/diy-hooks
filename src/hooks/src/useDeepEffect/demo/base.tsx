/**
 * title: 基本用法
 * desc: 深度比较依赖项
 */
import React, { useState, useCallback } from 'react';
import { Button, message } from 'antd';
import { useDeepEffect } from 'diy-hooks';

export default () => {
  const [update, setUpdate] = useState({ name: 'hzm' });

  useDeepEffect(() => {
    message.success('首次挂载阶段执行了');
  }, [update]);

  const handleUpdate = useCallback(() => {
    setUpdate({ name: 'hzm' });
  }, []);

  return (
    <div>
      <Button type="primary" onClick={handleUpdate}>
        更新
      </Button>
    </div>
  );
};
