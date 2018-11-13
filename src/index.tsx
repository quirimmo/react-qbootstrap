import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import history from './main-history';
import reducers from './reducers';
import AppContainer from './app/app.container';
import HTTPProxyService from './services/http-proxy.service';

// to supply the missing of __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__() properties
// for not having a static type error
declare var window: any;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

const MainApp = ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<AppContainer />
		</Router>
	</Provider>,
	document.getElementById('app') as HTMLElement
);

export default MainApp;
