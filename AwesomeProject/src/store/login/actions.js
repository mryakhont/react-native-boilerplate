export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILED = 'AUTHENTICATE_USER_FAILED';

export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';

export const authenticateUser = ({ email, password }) => ({
  type: AUTHENTICATE_USER,
  payload: { email, password },
});

export const authenticateUserSuccess = (result) => ({
  type: AUTHENTICATE_USER_SUCCESS,
  payload: result,
});

export const authenticateUserFailed = (error) => ({
  type: AUTHENTICATE_USER_FAILED,
  payload: error,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const logOutSuccess = (result) => ({
  type: LOG_OUT_SUCCESS,
  payload: result,
});

export const logOutFailed = (error) => ({
  type: LOG_OUT_FAILED,
  payload: error,
});
