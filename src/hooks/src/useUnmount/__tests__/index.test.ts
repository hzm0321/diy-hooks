import { renderHook } from '@testing-library/react-hooks';
import useUnmount from '../index';

const fn = jest.fn();

describe('useUnmount', () => {
  it('挂载阶段不调用', () => {
    renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);
  });

  it('重新渲染阶段不会被调用', () => {
    const { rerender } = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);
    rerender();
    expect(fn).toBeCalledTimes(0);
  });

  it('卸载阶段被调用一次', () => {
    const { unmount } = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);
    unmount();
    expect(fn).toBeCalledTimes(1);
  });

  it('卸载时函数引用是新的', () => {
    const newFn = jest.fn();
    const { rerender, unmount } = renderHook(({ fn }) => useUnmount(fn), {
      initialProps: { fn },
    });
    rerender({ fn: newFn });
    unmount();
    expect(fn).toBeCalledTimes(0);
    expect(newFn).toBeCalledTimes(1);
  });
});
