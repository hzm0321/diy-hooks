import React, { createContext, useContext, useReducer } from 'react';

/**
 *  store 和 dispatch 上下文分离
 * @param reducer
 * @param initialValue
 * @constructor
 */

export const makeStore = (reducer, initialValue) => {
  const storeContext = createContext(initialValue);
  const dispatchContext = createContext(() => {});
  const StoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialValue);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useStore() {
    return useContext(storeContext);
  }

  function useDispatch() {
    return useContext(dispatchContext);
  }

  return [StoreProvider, useStore, useDispatch];
};
