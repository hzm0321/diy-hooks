import { renderHook } from '@testing-library/react-hooks';
import useDeepEffect from '../index';

const fn = jest.fn();

describe('useDeepEffect', () => {
  it('测试依赖引用地址不一样,内容一样,不刷新', () => {
    const depsA = { name: 'hello' };
    const depsB = { name: 'hello' };
    expect(depsA).not.toBe(depsB);
    const { rerender } = renderHook(({ deps }) => useDeepEffect(fn, deps), {
      initialProps: {
        deps: [depsA],
      },
    });
    expect(fn).toBeCalledTimes(1);
    rerender({ deps: [depsB] });
    expect(fn).toBeCalledTimes(1);
  });

  it('测试依赖引用地址一样,内容不一样,刷新', () => {
    const depsA = { name: 'hello' };

    const { rerender } = renderHook(({ deps }) => useDeepEffect(fn, deps), {
      initialProps: {
        deps: [depsA],
      },
    });

    expect(fn).toBeCalledTimes(1);
    const depsB = depsA;
    depsB.name = 'world';
    expect(depsA).toBe(depsB);
    rerender({ deps: [depsB] });
    expect(fn).toBeCalledTimes(2);
  });

  it('测试依赖引用地址不一样,内容不一样,刷新', () => {
    const depsA = { name: 'hello' };

    const { rerender } = renderHook(({ deps }) => useDeepEffect(fn, deps), {
      initialProps: {
        deps: [depsA],
      },
    });

    expect(fn).toBeCalledTimes(1);
    const depsB = { name: 'world' };
    expect(depsA).not.toBe(depsB);
    expect(depsA).not.toEqual(depsB);
    rerender({ deps: [depsB] });
    expect(fn).toBeCalledTimes(2);
  });
});
