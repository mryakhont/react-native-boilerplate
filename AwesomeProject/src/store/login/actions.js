export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILED = 'AUTHENTICATE_USER_FAILED';

export const authenticateUser = ({ email, password }) => ({
  type: AUTHENTICATE_USER,
  payload: { email: email, password: password },
});

export const authenticateUserSuccess = (result) => ({
  type: AUTHENTICATE_USER_SUCCESS,
  payload: result,
});

export const authenticateUserFailed = (error) => ({
  type: AUTHENTICATE_USER_FAILED,
  payload: error,
});
