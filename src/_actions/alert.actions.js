import { alertConstants } from '../_constants';
// this file is for alerts messsgaes in case of sucess, error and clear 

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

const initialState = null

export function Page1Reducer (state = initialState, action) {
  switch (action.type) {
    case 'PAGE1_RESET_PAGE': {
      state = initialState
      break
    }

    // ...
  }
}
