import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

// Redux 用ライブラリ
import { Provider } from 'react-redux';

// ルーティング用ライブラリ
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Material UI 用ライブラリ
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { grey50, redA200 } from 'material-ui/styles/colors';

import LayoutCtrl from './containers/LayoutCtrl';
import Root from './containers/Root';
import configureStore from './store';

import { deviceReady } from './actions';

const storeObject = configureStore();
const store = storeObject.store;

// Material UIを使用する場合、ReactがV1.0になるまでは必要らしい
injectTapEventPlugin();

const Layout = props => (
  <LayoutCtrl {...props} />
);

// immutable.jsとreact-router-reduxを併用する場合はselectLocationStateオプションに下記をセットする必要がある
// redux-immutableを使っていないのでstate.get('routing')ではない
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: state => state.routing.toJS(),
});


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey50,
    accent1Color: redA200,
  },
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Root} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
storeObject.startSaga();
// webSQLならcordovareadyしなくても使える
persistence.store.websql.config(
  persistence,
  'testdb',
  'テスト用のDBをセットアップします',
  5 * 1024 * 1024
);

const Category = persistence.define('Category', {
  name: 'TEXT',
  metaData: 'JSON',
});

persistence.schemaSync();

const allCategory = Category.all().list(categories => {
  categories.forEach(category => {
    persistence.remove(category);
    persistence.flush();
  });
});

// console.log(allCategory);

// インデックスをつける
// Category.index('name', { unique: true });
// Category.index(['name', 'metaData'], {unique:true});
// 新規登録
// const newcategory1 = new Category({ name: "My category2" });
// newcategory1.metaData = { rating: 6 };
// persistence.add(newcategory1);
// const newcategory2 = new Category({ name: "My category1" });
// newcategory2.metaData = { rating: 5 };
// persistence.add(newcategory2);
// persistence.flush();
// 条件付きで取得
// Category.findBy(persistence, null, 'name', 'My category6 update!!!', category => {
//   console.log(category);
//   // 更新したいときはEntityの値を書き換えてflushすればよい
//   console.log('update!');
//   // category.name = 'My category6 update!!!';
//   // persistence.flush();
//   // 削除する
//   persistence.remove(category);
//   persistence.flush();
// });

document.addEventListener('deviceready', () => {
  console.log('deviceready');
  store.dispatch(deviceReady());
}, false);
