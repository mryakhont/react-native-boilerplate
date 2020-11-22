import { setAuthenticationToken } from 'Store/local.store';
import * as actions from 'Store/login/actions';

const INIT_STATE = {
  error: '',
  authenticated: false,
};

export default (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case actions.AUTHENTICATE_USER:
      return { ...state };

    case actions.AUTHENTICATE_USER_SUCCESS:
      setAuthenticationToken(action.payload.access_token);
      return { ...state, authenticated: true };

    case actions.AUTHENTICATE_USER_FAILED:
      return { ...state };

    default:
      return state;
  }
};
