import { renderHook } from '@testing-library/react-hooks';
import useEffectOnce from '../index';

const mountFn = jest.fn();
const unMountFn = jest.fn();

describe('useEffectOnce', () => {
  it('挂载阶段调用一次', () => {
    renderHook(() => useEffectOnce(mountFn, unMountFn));
    expect(mountFn).toBeCalledTimes(1);
    expect(unMountFn).toBeCalledTimes(0);
  });

  it('卸载阶段调用一次', () => {
    const { unmount } = renderHook(() => useEffectOnce(mountFn, unMountFn));
    unmount();
    expect(mountFn).toBeCalledTimes(1);
    expect(unMountFn).toBeCalledTimes(1);
  });

  it('重新渲染阶段不会被调用', () => {
    const { rerender } = renderHook(() => useEffectOnce(mountFn, unMountFn));
    expect(mountFn).toBeCalledTimes(1);
    expect(unMountFn).toBeCalledTimes(0);
    rerender();
    expect(mountFn).toBeCalledTimes(1);
    expect(unMountFn).toBeCalledTimes(0);
  });

  it('卸载时函数引用是新的', () => {
    const newUnmountFn = jest.fn();
    const { rerender, unmount } = renderHook(
      ({ unMountFn }) => useEffectOnce(mountFn, unMountFn),
      {
        initialProps: { unMountFn },
      },
    );
    rerender({ unMountFn: newUnmountFn });
    unmount();
    expect(unMountFn).toBeCalledTimes(0);
    expect(newUnmountFn).toBeCalledTimes(1);
  });

  it('mount 传入非函数参数,不会被执行', () => {
    const { result } = renderHook(() => useEffectOnce(undefined, unMountFn));
    expect(result.error).toEqual(Error('mount need to receive a function'));
  });

  it('unMount 传入非函数参数,不会被执行', () => {
    const { result } = renderHook(() => useEffectOnce(mountFn, undefined));
    expect(result.error).toEqual(Error('unMount need to receive a function'));
  });
});
