import { useCallback, useEffect, useRef } from 'react';
import { DataSet } from 'choerodon-ui/pro';
import { isArray, isString } from 'lodash';

const useDataSetEvents = (
  dataSet: DataSet,
  eventNames: string | string[],
  handler: CallableFunction,
  options?: AddEventListenerOptions,
) => {
  const handlerRef = useRef<Function>();
  handlerRef.current = handler;

  const eventListener = (event: string) => {
    return handlerRef.current && handlerRef.current(event);
  };

  const handleEventListener = useCallback(
    (isAdd: boolean) => {
      const listener = (eventName: string) => {
        if (isAdd) {
          dataSet.addEventListener(eventName, eventListener, {
            capture: options?.capture,
            once: options?.once,
            passive: options?.passive,
          });
        } else {
          dataSet.removeEventListener(eventName, eventListener, {
            capture: options?.capture,
          });
        }
      };
      if (isArray(eventNames)) {
        eventNames.forEach((eventName) => {
          listener(eventName);
        });
      } else if (isString(eventNames)) {
        listener(eventNames);
      }
    },
    [dataSet, handler],
  );

  useEffect(() => {
    handleEventListener(true);
    return () => {
      handleEventListener(false);
    };
  }, [eventNames, options?.capture, options?.once, options?.passive]);
};

export default useDataSetEvents;
