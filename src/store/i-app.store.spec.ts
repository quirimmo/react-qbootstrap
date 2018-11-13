import IAppStore from './i-app.store';

const title: string = 'react qbootstrap';

const storeState: IAppStore = {
	title
};

describe('AppStore', () => {
	it('should be defined', () => {
		expect(storeState).toBeDefined();
	});

	it('should set the properties', () => {
		expect(storeState.title).toEqual(title);
	});
});
