import useMount from '../useMount';
import useUnmount from '../useUnmount';

const useEffectOnce = (mountFn: () => void, unMountFn: () => void) => {
  useUnmount(unMountFn);
  useMount(mountFn);
};

export default useEffectOnce;
