/* @flow */
import { takeEvery, delay, take } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';
import { ON_DEVICE_READY } from './constants';

function* scream(action) {
  yield call(delay, 3000);
  console.log(action);
  console.log('aieeeeee!');
}

function* handleRequestSaga(): Generator<any, any, any> {
  console.log('handleRequestUserStart');
  yield* takeEvery('SAGA_TAKE', scream);
}

// ON_DEVICE_READYを受け取ったら一度だけ起動して後続の初期化処理を開始する
function* handleDeviceReadySaga(): Generator<any, any, any> {
  yield take(ON_DEVICE_READY);
}

export default function* rootSaga(): Generator<any, any, any> {
  console.log('rootSagaStart');
  yield fork(handleRequestSaga);
  yield fork(handleDeviceReadySaga);
}
