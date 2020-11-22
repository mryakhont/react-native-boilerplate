import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { post } from 'Runtime/request/applicationRequest';
import * as actions from 'Store/login/actions';

export function* watchLoginUser() {
  yield takeLatest(actions.AUTHENTICATE_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async ({ email, password }) =>
  await post('api/users/authenticate', { email: email, password: password })
    .then((result) => put(actions.authenticateUserSuccess(result)))
    .catch((error) => put(actions.authenticateUserFailed(error)));

function* loginWithEmailPassword({ payload }) {
  try {
    const result = yield call(loginWithEmailPasswordAsync, payload);
    yield result;
  } catch (error) {
    yield put(actions.authenticateUserFailed(error));
  }
}

export default function* rootSaga(getState) {
  yield all([fork(watchLoginUser)]);
}
