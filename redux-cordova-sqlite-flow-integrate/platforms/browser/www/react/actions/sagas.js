import { takeEvery, delay } from 'redux-saga';
import { call, fork, take, put } from 'redux-saga/effects';
import { ON_DEVICE_READY, FETCH_DB_DATA } from './constants';

import { List } from 'immutable';
// import Todo from './entities/Todo';
import Category from '../../entities/category';
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
  persistence.store.websql.config(
    persistence,
    'testdb',
    'テスト用のDBをセットアップします',
    5 * 1024 * 1024
  );
  persistence.schemaSync();
  console.log('start fetch db data');
  // DBのデータを取得してreducerにセットする処理を発行
  yield put({ type: FETCH_DB_DATA });
}

function* fetchDbData() {
  console.log('fetchDbData start');
  const list = yield call(() => {
    return new Promise(resolve => {
      let categoryList = List([]);
      CagegoryDbEntity.all().list(categories => {
        categories.forEach(category => {
          const categoryRecord = Category.fromJS({
            name: category.name,
            metaData: category.metaData,
          });
          categoryList = categoryList.push(categoryRecord);
        });
        resolve(categoryList);
      });
    });
  });
  console.log('call finish');
  console.log(list.size);
  yield put({
    type: 'SET_CATEGORY_TABLE_RECORDS',
    payload: {
      list,
    },
  });
}

function* handleFetchDbSaga() {
  console.log('handleFetchDbStart');
  yield* takeEvery(FETCH_DB_DATA, fetchDbData);
}

export default function* rootSaga() {
  console.log('rootSagaStart');
  yield fork(handleRequestSaga);
  yield fork(handleDeviceReadySaga);
  yield fork(handleFetchDbSaga);
}
