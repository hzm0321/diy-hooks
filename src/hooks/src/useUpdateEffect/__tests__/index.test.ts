import { renderHook } from '@testing-library/react-hooks';
import useUpdateEffect from '../index';

const fn = jest.fn();

describe('useUpdateEffect', () => {
  it('挂载阶段不调用方法', () => {
    renderHook(() => useUpdateEffect(fn));
    expect(fn).toBeCalledTimes(0);
  });

  it('更新阶段调用方法', () => {
    const { rerender } = renderHook(() => useUpdateEffect(fn));
    expect(fn).toBeCalledTimes(0);
    rerender();
    expect(fn).toBeCalledTimes(1);
  });

  it('卸载阶段调用卸载的方法', () => {
    const returnFn = jest.fn();
    const effect = returnFn.mockRejectedValue(returnFn);
    const { unmount, rerender } = renderHook(() => useUpdateEffect(effect));
    expect(returnFn).toBeCalledTimes(0);
    expect(effect).toBeCalledTimes(0);
    rerender();
    expect(effect).toBeCalledTimes(1);
    expect(returnFn).toBeCalledTimes(1);
    unmount();
    expect(returnFn).toBeCalledTimes(1);
  });

  it('挂载阶段不调用,依赖更新调用方法', () => {
    const { rerender } = renderHook(
      ({ count }) => {
        return useUpdateEffect(fn, [count]);
      },
      {
        initialProps: { count: 0 },
      },
    );
    expect(fn).toBeCalledTimes(0);
    rerender({ count: 1 });
    expect(fn).toBeCalledTimes(1);
  });
});
