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

function* runSelectDb(action) {
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
    type: 'SET_CATEGORY_TABLE_RECORDS',
    payload: {
      list: records,
    },
  });
}

export const handleSelectDbSaga = function* handleSelectDbSaga() {
  console.log('handleFetchDbStart');
  console.log(DB_ACTIONS);
  yield* takeEvery(DB_ACTIONS.SELECT, runSelectDb);
};
