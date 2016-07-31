import { takeEvery, delay } from 'redux-saga';
import { call, fork, take } from 'redux-saga/effects';
import { ON_DEVICE_READY } from './constants';

function* scream(action) {
  yield call(delay, 3000);
  console.log(action);
  console.log('aieeeeee!');
}

function* handleRequestSaga() {
  console.log('handleRequestUserStart');
  yield* takeEvery('SAGA_TAKE', scream);
}

// ON_DEVICE_READYを受け取ったら一度だけ起動して後続の初期化処理を開始する
function* handleDeviceReadySaga() {
  console.log('handleDeviceReadySagaStart');
  yield take(ON_DEVICE_READY);
  // webSQLならcordovaでdivicereadyイベントが発火する前でもDB定義を開始できるが、原則browserでの確認もcordova browserを使用する想定
  console.log("start dbsetup in handleDeviceReadySaga");
  persistence.store.websql.config(
    persistence,
    'testdb',
    'テスト用のDBをセットアップします',
    5 * 1024 * 1024
  );
  persistence.schemaSync();
}

export default function* rootSaga() {
  console.log('rootSagaStart');
  yield fork(handleRequestSaga);
  yield fork(handleDeviceReadySaga);
}
