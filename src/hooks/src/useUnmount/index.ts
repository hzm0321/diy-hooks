import { useEffect, useRef } from 'react';

const useUnmount = (fn: () => void) => {
  const fnRef = useRef(fn);
  // 如果 fn 的依赖更新了，就要更新卸载要执行的方法
  fnRef.current = fn;

  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
};

export default useUnmount;
