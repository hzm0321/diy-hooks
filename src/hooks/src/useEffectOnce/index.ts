import useMount from '../useMount';
import useUnmount from '../useUnmount';
import { isFunction } from 'lodash';

const useEffectOnce = (mountFn?: () => void, unMountFn?: () => void) => {
  if (isFunction(mountFn)) {
    useMount(mountFn);
  } else {
    throw Error('mount need to receive a function');
  }

  if (isFunction(unMountFn)) {
    useUnmount(unMountFn);
  } else {
    throw Error('unMount need to receive a function');
  }
};

export default useEffectOnce;
