import { useEffect, EffectCallback, DependencyList, useRef } from 'react';

const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isUpdate = useRef(false);

  useEffect(() => {
    if (!isUpdate.current) {
      isUpdate.current = true;
    } else {
      effect();
    }
  }, deps);
};

export default useUpdateEffect;
