import * as React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import AppContainer from './app.container';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
let component: any;

describe('App Container Component', () => {
	beforeEach(() => {
		component = shallow(<AppContainer store={store} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});
});
