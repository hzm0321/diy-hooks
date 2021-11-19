/**
 * title: 父级依赖
 * desc: 深度比较父级依赖项
 */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Button, message } from 'antd';
import { useDeepEffect } from 'diy-hooks';

const Children = ({ deps, onChange, update }) => {
  const [_, setMyUpdate] = useState(update);
  useEffect(() => {
    setMyUpdate(update);
  }, [update]);
  console.log(deps);

  useDeepEffect(() => {
    message.success('执行了');
  }, [deps]);

  return (
    <div>
      <Button type="primary" onClick={onChange}>
        更新
      </Button>
    </div>
  );
};

export default () => {
  const [update, setUpdate] = useState({});

  const depsRef = useRef<string[]>([]);

  const handleUpdate = useCallback(() => {
    setUpdate({});
    depsRef.current?.push('name');
  }, []);

  return (
    <Children update={update} deps={depsRef.current} onChange={handleUpdate} />
  );
};
