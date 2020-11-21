import * as actions from 'Store/login/actions';

const INIT_STATE = {
  error: '',
};

export default (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case actions.AUTHENTICATE_USER:
      return { ...state };

    case actions.AUTHENTICATE_USER_SUCCESS:
      return { ...state, isAuthenticated: true };

    case actions.AUTHENTICATE_USER_FAILED:
      return { ...state };

    default:
      return state;
  }
};
