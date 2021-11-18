import { DataSet } from 'choerodon-ui/pro';
import { act, renderHook } from '@testing-library/react-hooks';
import useDataSetEvents from '../index';
import useDataSet from '../../useDataSet';

const fn = jest.fn().mockReturnValue(new DataSet());

describe('useDataSetEvents', () => {
  it('监听单个事件(load)', () => {
    let count = 0;
    const { result } = renderHook(() => {
      const ds = useDataSet(fn);
      useDataSetEvents(ds, 'load', () => {
        count++;
      });
      return ds;
    });

    act(() => {
      result.current.loadData([{}]);
    });

    expect(count).toBe(1);
  });

  it('监听多个事件(load、select)', () => {
    let count = 0;
    const { result } = renderHook(() => {
      const ds = useDataSet(fn);
      useDataSetEvents(ds, ['load', 'select'], () => {
        count++;
      });
      return ds;
    });

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(1);

    act(() => {
      result.current.select(0);
    });
    expect(count).toBe(2);
  });

  it('传入once选项,仅触发一次(load)', () => {
    let count = 0;
    const { result } = renderHook(() => {
      const ds = useDataSet(fn);
      useDataSetEvents(
        ds,
        'load',
        () => {
          count++;
        },
        { once: true },
      );
      return ds;
    });

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(1);
  });

  it('卸载后删除监听(load)', () => {
    let count = 0;
    const { result, unmount } = renderHook(() => {
      const ds = useDataSet(fn);
      useDataSetEvents(ds, 'load', () => {
        count++;
      });
      return ds;
    });

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(1);
    unmount();

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(1);
  });

  it('卸载后批量删除监听(load、select)', () => {
    let count = 0;
    const { result, unmount } = renderHook(() => {
      const ds = useDataSet(fn);
      useDataSetEvents(ds, ['load', 'select'], () => {
        count++;
      });
      return ds;
    });

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(1);

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(2);
    unmount();

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(2);

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(2);
  });

  it('更新依赖', () => {
    let count = 0;
    const handler = (step) => () => {
      count += step;
    };

    const { result, rerender } = renderHook(
      ({ handler }) => {
        const ds = useDataSet(fn);
        useDataSetEvents(ds, 'load', handler);
        return ds;
      },
      {
        initialProps: { handler: handler(1) },
      },
    );

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(1);

    rerender({ handler: handler(2) });

    act(() => {
      result.current.loadData([{}]);
    });
    expect(count).toBe(3);
  });
});
