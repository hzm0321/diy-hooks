import useMount from '../useMount';
import useUnmount from '../useUnmount';
import { isFunction } from 'lodash';

const useEffectOnce = (mountFn?: () => void, unMountFn?: () => void) => {
  if (isFunction(mountFn)) {
    useMount(mountFn);
  }

  if (isFunction(unMountFn)) {
    useUnmount(unMountFn);
  }
};

export default useEffectOnce;
