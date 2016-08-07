import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { List } from 'immutable';
import { DB_ACTIONS } from './constants';
import Category from '../../entities/category';

const selectDb = (query) => (
  new Promise((resolve) => {
    query.list(entities => resolve(entities));
  })
);

const runSelectDb = function* runSelectDb(action) {
  console.log('selectDbData start');
  const entities = yield call(selectDb, action.query);
  console.log('call finish');
  let recordClass;
  // TODO: action.query._entityNameでテーブル名を取ってきているが、privateメソッドに無理やりアクセスして取ってくるしか方法が思いつかない
  switch (action.query._entityName) {
    case 'Category': {
      recordClass = Category;
      break;
    }
    default: {
      throw new Error('entity名が取得できませんでした。');
    }
  }
  const records = List(entities.map(entity => (recordClass.fromJS(entity))));

  yield put({
    // TODO ここのアクション発行の切り分けもしないといけない
    type: 'SET_CATEGORY_TABLE_RECORDS',
    payload: {
      list: records,
    },
  });
};

export const handleSelectDbSaga = function* handleSelectDbSaga() {
  console.log('handleFetchDbStart');
  yield* takeEvery(DB_ACTIONS.SELECT, runSelectDb);
};

const insertDb = entity => (
  new Promise(resolve => {
    console.log(entity);
    persistence.add(entity);
    persistence.flush((tx, err) => {
      if (!err) {
        resolve({
          result: true,
          error: null,
        });
      } else {
        resolve({
          result: false,
          error: err,
        });
      }
    });
  })
);

const runInsertDb = function* runInsertDb(action) {
  const entity = action.record.createEntity();
  const { result, error } = yield call(insertDb, entity);
  if (result && !error) {
    // TODO: ここら辺の実装意見下さい！！！！
    // TODO: ADD_RECORDみたいな全reducerで共通のアクションを発行して、reducerないで自分が追加するべきRecordだったら追加する仕組みにするべきか
    // TODO: あるいはrunInsertDb内部でどのreducerに追加するべきか判定して別々のアクション(ADD_CATEGORYみたいなやつ)を発行するべきか
    yield put(action.record.addSelf());
  } else {
    console.log(error);
    throw new Error(`データベースへの新規登録に失敗しました！${error.message}`);
  }
};

export const handleInsertDbSaga = function* handleInsertDbSaga() {
  console.log('handleInsertDbSagaStart');
  yield* takeEvery(DB_ACTIONS.INSERT, runInsertDb);
};
