import { DataSet } from 'choerodon-ui/pro';
import { renderHook } from '@testing-library/react-hooks';
import useDataSet from '../index';

const fn = jest.fn().mockReturnValue(new DataSet());

describe('useDataSet', () => {
  it('默认仅调用一次', () => {
    const { rerender } = renderHook(() => useDataSet(fn));
    expect(fn).toBeCalledTimes(1);
    rerender();
    expect(fn).toBeCalledTimes(1);
  });

  it('测试依赖更新', () => {
    const { rerender } = renderHook(({ count }) => useDataSet(fn, [count]), {
      initialProps: {
        count: 0,
      },
    });
    expect(fn).toBeCalledTimes(1);
    rerender({ count: 1 });
    expect(fn).toBeCalledTimes(2);
  });

  it('测试传入 key 缓存 DataSet', () => {
    const cacheKey = 'diy-hooks';
    const firstDs = renderHook(() => useDataSet(fn, [], cacheKey));
    expect(fn).toBeCalledTimes(1);
    const secondDs = renderHook(() => useDataSet(fn, [], cacheKey));
    expect(fn).toBeCalledTimes(1);
    expect(firstDs.result.current).toBe(secondDs.result.current);
  });
});
