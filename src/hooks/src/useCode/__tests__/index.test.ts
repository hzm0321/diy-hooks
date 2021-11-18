import { renderHook } from '@testing-library/react-hooks';
import useCode from '../index';

const mockData = [
  {
    value: 'H',
    meaning: '哈哈哈',
    orderSeq: 0,
  },
  {
    value: 'Z',
    meaning: '滋滋滋',
    orderSeq: 1,
  },
  {
    value: 'M',
    meaning: '喵喵喵',
    orderSeq: 2,
  },
];

const query = jest.fn().mockReturnValue(Promise.resolve(mockData));

describe('useCode', () => {
  it('错误的 code 值', () => {
    renderHook(() => useCode('', query));
    expect(query).not.toHaveBeenCalled();
  });

  it('正常调用获取到 code 对应的值集', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCode('hello1', query, false),
    );
    expect(result.current).toEqual([]);
    await waitForNextUpdate();
    expect(result.current).toEqual(mockData);
  });

  it('测试缓存值集', async () => {
    const firstHook = renderHook(() => useCode('hello2', query, true));
    await firstHook.waitForNextUpdate();
    expect(query).toBeCalledTimes(1);

    const secondHook = renderHook(() => useCode('hello2', query, true));
    expect(secondHook.result.current).toEqual(mockData);
    expect(query).toBeCalledTimes(1); // query 没有被再次调用,说明起到了缓存的作用
  });

  it('测试不缓存值集', async () => {
    const firstHook = renderHook(() => useCode('hello3', query));
    expect(firstHook.result.current).toEqual([]);
    await firstHook.waitForNextUpdate();
    expect(query).toBeCalledTimes(1);

    const secondHook = renderHook(() => useCode('hello3', query));
    expect(secondHook.result.current).toEqual([]);
    await secondHook.waitForNextUpdate();
    expect(secondHook.result.current).toEqual(mockData);
    expect(query).toBeCalledTimes(2);
  });
});
