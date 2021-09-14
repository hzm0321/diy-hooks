import { useMemo } from 'react';
import { DataSet } from 'choerodon-ui/pro';

type DataSetFactory = () => DataSet;

const cachedDataSet = new Map();

const useDataSet = (
  dataSetFactory: DataSetFactory,
  cacheKey?: string,
): DataSet => {
  return useMemo<DataSet>(() => {
    if (cacheKey) {
      let cacheDS = cachedDataSet.get(cacheKey);
      if (!cacheDS) {
        cacheDS = dataSetFactory();
        cachedDataSet.set(cacheKey, cacheDS);
      }
      return cacheDS;
    }
    return dataSetFactory();
  }, []);
};

export default useDataSet;
