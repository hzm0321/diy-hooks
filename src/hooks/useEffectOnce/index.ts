import useMount from '@/hooks/useMount';
import useUnmount from '@/hooks/useUnmount';

const useEffectOnce = (mountFn: () => void, unMountFn: () => void) => {
  useUnmount(unMountFn);
  useMount(mountFn);
};

export default useEffectOnce;
