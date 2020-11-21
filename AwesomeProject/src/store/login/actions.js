export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILED = 'AUTHENTICATE_USER_FAILED';

export const authenticateUser = ({ email, password, navigation }) => ({
  type: AUTHENTICATE_USER,
  payload: { email, password, navigation },
});

export const authenticateUserSuccess = ({ result, navigation }) => ({
  type: AUTHENTICATE_USER_SUCCESS,
  payload: { result, navigation },
});

export const authenticateUserFailed = (error) => ({
  type: AUTHENTICATE_USER_FAILED,
  payload: error,
});
