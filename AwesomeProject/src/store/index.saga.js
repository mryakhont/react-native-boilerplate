import { all } from 'redux-saga/effects';
import login from 'Store/login/saga';

export default function* rootSaga(getState) {
  yield all([login()]);
}
