export enum REQUEST_STATUS {
  IDLE = 'idle',
  SUCCESS = 'success',
  LOADING = 'loading',
  ERROR = 'error',
}

export type RequestStateType = {
  isIdle: boolean;
  isSuccess: boolean;
  status: REQUEST_STATUS;
};

export enum REQUEST_ACTION {
  FETCH_REQUEST, // 发起请求
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_UPDATE,
  FETCH_IDLE,
}

export const initialState: RequestStateType = {
  isIdle: false,
  isSuccess: false,
  status: REQUEST_STATUS.LOADING,
};

export function requestReducer(state, action): RequestStateType {
  switch (action.type) {
    case REQUEST_ACTION.FETCH_IDLE: {
      const _state = { ...state };
      const { isIdle } = action;
      if (isIdle) {
        _state.status = REQUEST_STATUS.IDLE;
      }
      _state.isIdle = !!isIdle;
      return _state;
    }
    case REQUEST_ACTION.FETCH_REQUEST: {
      const _state = { ...state };
      _state.status = REQUEST_STATUS.LOADING;
      return _state;
    }
    case REQUEST_ACTION.FETCH_FAIL: {
      const _state = { ...state };
      _state.status = REQUEST_STATUS.ERROR;
      return _state;
    }
    case REQUEST_ACTION.FETCH_SUCCESS: {
      const _state = { ...state };
      _state.isSuccess = true;
      _state.status = REQUEST_STATUS.SUCCESS;
      return _state;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
