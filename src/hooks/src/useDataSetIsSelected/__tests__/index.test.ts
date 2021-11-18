import { DataSet } from 'choerodon-ui/pro';
import { act, renderHook } from '@testing-library/react-hooks';
import useDataSetIsSelected from '../index';
import useDataSet from '../../useDataSet';

const fn = jest.fn().mockReturnValue(
  new DataSet({
    data: [{ key: 1 }],
  }),
);

describe('useDataSetIsSelected', () => {
  it('判断是否选中', () => {
    const { rerender, result } = renderHook(() => {
      const ds = useDataSet(fn);
      return {
        dataSet: ds,
        isSelected: useDataSetIsSelected(ds),
      };
    });
    expect(result.current.isSelected).toBe(false);

    act(() => {
      result.current.dataSet.select(0);
    });
    expect(result.current.isSelected).toBe(true);

    act(() => {
      result.current.dataSet.unSelect(0);
    });
    expect(result.current.isSelected).toBe(false);
  });
});
