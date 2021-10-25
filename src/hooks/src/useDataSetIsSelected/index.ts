import { useState } from 'react';
import { DataSet } from 'choerodon-ui/pro';
import useDataSetEvents from '../useDataSetEvents';

const useDataSetIsSelected = (dataSet: DataSet): boolean => {
  const [isSelected, setIsSelected] = useState(false);

  useDataSetEvents(
    dataSet,
    ['batchSelect', 'batchUnSelect'],
    ({ dataSet: ds }) => {
      setIsSelected(ds.selected.length > 0);
    },
  );

  return isSelected;
};

export default useDataSetIsSelected;
