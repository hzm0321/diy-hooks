import {
  DependencyList,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import useUpdateEffect from '../useUpdateEffect';
import useRequest from '@ahooksjs/use-request';
import { isArray, isEmpty, isEqual, isFunction } from 'lodash';
import { OptionsWithFormat } from '@ahooksjs/use-request/lib/types';
import { initialState, requestReducer, REQUEST_ACTION } from './requestReducer';

type OptionsType = {
  enabled?: boolean;
  params?: any[];
  refreshDeps?: DependencyList;
  paramsDeps?: DependencyList;
  ready?: boolean;
};

const useHzeroRequest = (firstParam, options?: OptionsType) => {
  let queryApi: () => any = () => {};
  let params: any[] = [];
  if (isArray(firstParam) && firstParam.every((v) => isArray(v))) {
    // TODO 并行请求
  } else if (isArray(firstParam)) {
    // 监听参数
    queryApi = firstParam[0];
    params = firstParam.slice(1);
  } else if (isFunction(firstParam)) {
    // 高阶函数传参
    queryApi = firstParam;
  }

  const {
    enabled = true,
    refreshDeps,
    paramsDeps,
    ready = true,
    ...extraOptions
  } = options ?? {};

  // 请求配置项
  const requestOptions: any = useMemo(() => {
    // 默认配置项
    const defaultOptions = {
      manual: false,
    };
    // 需要转化的配置项
    const formatOptions = () => {
      return {
        manual: ready ? !enabled : true,
        defaultParams: params,
        refreshDeps,
        ready,
      };
    };
    return {
      ...defaultOptions,
      ...formatOptions(),
      ...extraOptions,
    };
  }, [options]);

  // 补充的状态及逻辑
  const [extraState, dispatch] = useReducer(requestReducer, initialState);
  // useRequest 的状态及逻辑
  const {
    data,
    loading,
    error,
    run,
    cancel,
    refresh,
    params: curParams,
  } = useRequest(queryApi, requestOptions);

  /**
   * 手动发起请求
   */
  const reRequest = useCallback(
    (...rest) => {
      if (!rest) {
        return refresh();
      }
      // @ts-ignore
      return run(...rest);
    },
    [run, refresh],
  );

  /**
   * 取消当前请求
   */
  const cancelRequest = useCallback(() => {
    return cancel();
  }, [cancel]);

  // 监听 idle 状态变化
  useEffect(() => {
    if (!enabled && !data) {
      dispatch({ type: REQUEST_ACTION.FETCH_IDLE, isIdle: true });
    }
    if (extraState.isIdle && data) {
      dispatch({ type: REQUEST_ACTION.FETCH_IDLE, isIdle: false });
    }
  }, [enabled, data]);

  // 监听状态变化,更新 status
  useEffect(() => {
    if (data !== undefined && !loading && !error) {
      dispatch({ type: REQUEST_ACTION.FETCH_SUCCESS });
    } else if (loading) {
      dispatch({ type: REQUEST_ACTION.FETCH_REQUEST });
    } else if (error) {
      dispatch({ type: REQUEST_ACTION.FETCH_FAIL });
    } else if (extraState.isIdle) {
      dispatch({ type: REQUEST_ACTION.FETCH_IDLE, isIdle: true });
    }
  }, [loading, error, dispatch, extraState.isIdle]);

  // 监听 params 变化
  useUpdateEffect(() => {
    // 如果不传 refreshDeps,监听 params 变化,刷新
    if (!refreshDeps && !isEqual(curParams, params) && ready) {
      reRequest(...params);
    }
  }, [curParams, params, refreshDeps, reRequest, ready]);

  return {
    isLoading: loading,
    isError: error,
    curParams,
    reRequest,
    cancelRequest,
    data,
    ...extraState,
  };
};

export default useHzeroRequest;
