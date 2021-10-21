import { DependencyList, EffectCallback, useEffect, useRef } from 'react';
import isEqual from 'react-fast-compare';

const useDeepEffect = (effect: EffectCallback, deps: DependencyList) => {
  const ref = useRef<DependencyList | undefined>(undefined);

  if (!ref.current || !isEqual(deps, ref.current)) {
    ref.current = deps;
  }

  useEffect(effect, ref.current);
};

export default useDeepEffect;
