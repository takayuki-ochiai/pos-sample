import { takeEvery, delay } from 'redux-saga';
import { call, fork, take, put } from 'redux-saga/effects';
import { ON_DEVICE_READY } from './constants';
import { handleSelectDbSaga, handleInsertDbSaga } from './dbSaga';
import { selectDb } from './dbActions';

// import Todo from './entities/Todo';
import { CagegoryDbEntity } from '../../initializer/dbEntities';

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
  console.log('platform is ' + device.platform);

  if (device.platform === 'iOS') {
    persistence.store.cordovasql.config(
      persistence,
      'eltex.regi',
      '0.0.1',                // DB version
      'testdb',          // DB display name
      5 * 1024 * 1024,        // DB size (WebSQL fallback only)
      0,                      // SQLitePlugin Background processing disabled
      2 // Library/LocalDatabaseにdbファイルを作成。iTunesやiCloudにはバックアップさせたくないため
    );
  } else { // cordova browserでエミュレートしてるときはdevice.platformは "browser"
    persistence.store.websql.config(
      persistence,
      'testdb',
      'テスト用のDBをセットアップします',
      5 * 1024 * 1024
    );
  }
  persistence.schemaSync();
  console.log('start fetch db data');
  // DBのデータを取得してreducerにセットする処理を発行
  const query = CagegoryDbEntity.all();
  yield put(selectDb(query));
}

export default function* rootSaga() {
  console.log('rootSagaStart');
  yield fork(handleRequestSaga);
  yield fork(handleDeviceReadySaga);
  yield fork(handleSelectDbSaga);
  yield fork(handleInsertDbSaga);
}
