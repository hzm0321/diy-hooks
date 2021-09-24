import { isFunction } from 'lodash';

// state 方法类型初始化
export type StateInitialSetter<T> = () => T;
// state 初始值设置类型
export type StateInitialAction<T> = T | StateInitialSetter<T>;
// setState 类型
export type StateSetter<T> = ((prevState: T) => T) | (() => T);
// setState 设置类型
export type StateSetAction<T> = T | StateSetter<T>;
export type StateResolvable<T> = T | StateInitialSetter<T> | StateSetter<T>;

export function resolveState<T, S extends T>(
  nextState: StateResolvable<T>,
  currentState?: S,
) {
  if (isFunction(nextState)) {
    return nextState.length
      ? (nextState as Function)(currentState)
      : (nextState as Function)();
  }
  return nextState;
}
