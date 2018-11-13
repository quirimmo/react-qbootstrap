import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './app.presentational';

let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

describe('App Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<App />);
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should be defined', () => {
		expect(component).toBeDefined();
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});
