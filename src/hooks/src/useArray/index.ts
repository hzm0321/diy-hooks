import { useEffect, useMemo, useRef } from 'react';

import {
  StateInitialAction,
  StateSetAction,
  resolveState,
} from '../utils/state';
import useUpdate from '../useUpdate';

interface ArrayActions<T> {
  set: (newArray: StateSetAction<T[]>) => void;
  reset: () => void;
  push: (...items: T[]) => void;
  updateAt: (index: number, item: T) => void;
  insertAt: (index: number, ...item: T[]) => void;
  removeAt: (index: number) => void;
  clear: () => void;
}

const useArray = <T>(initialValue: T[] = []) => {
  const array = useRef(resolveState(initialValue));
  const update = useUpdate();

  const actions = useMemo<ArrayActions<T>>(() => {
    const action: ArrayActions<T> = {
      set(newArray) {
        array.current = resolveState(newArray, array.current);
        update();
      },
      reset() {
        action.set(resolveState(initialValue).slice());
      },
      push(...item) {
        if (item.length > 0) {
          action.set((cur) => cur.concat(item));
        }
      },
      updateAt(index, item) {
        action.set((cur) => {
          const arr = [...cur];
          arr[index] = item;
          return arr;
        });
      },
      insertAt(index, ...item) {
        action.set((cur) => {
          const arr = [...cur];
          arr.splice(index, 0, ...item);
          return arr;
        });
      },
      removeAt(index) {
        action.set((cur) => {
          const arr = [...cur];
          arr.splice(index, 1);
          return arr;
        });
      },
      clear() {
        action.set([]);
      },
    };

    return action;
  }, []);

  return [array.current, actions];
};

export default useArray;
