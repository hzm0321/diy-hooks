import { act, renderHook } from '@testing-library/react-hooks';
import useUpdate from '../index';

describe('useUpdate', () => {
  it('返回一个方法', () => {
    const { result } = renderHook(() => useUpdate());
    expect(typeof result.current).toBe('function');
  });

  it('每次调用会刷新函数组件', () => {
    let count = 0;
    const { result } = renderHook(() => {
      count++;
      return useUpdate();
    });
    expect(count).toBe(1);
    act(() => result.current());
    expect(count).toBe(2);
  });

  it('每次调用返回的是相同的方法', () => {
    const { result, rerender } = renderHook(() => useUpdate());
    const preFn = result.current;
    rerender();
    const curFn = result.current;
    expect(curFn).toEqual(preFn);
  });
});
