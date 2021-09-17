import { useEffect, useState } from 'react';
import { DataSet } from 'choerodon-ui/pro';
import { autorun } from 'mobx';

const useDataSetIsSelected = (dataSet: DataSet): boolean => {
  const isSelectedFun = (): boolean => {
    return dataSet.selected.length > 0;
  };
  const [isSelected, setIsSelected] = useState(isSelectedFun());
  useEffect(() => {
    const disposer = autorun(() => {
      setIsSelected(isSelectedFun());
    });
    return disposer;
  }, []);
  return isSelected;
};

export default useDataSetIsSelected;
