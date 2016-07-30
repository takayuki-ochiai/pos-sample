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

document.addEventListener('deviceready', () => {
  console.log('deviceready');
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
}, false);
