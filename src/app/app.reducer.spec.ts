import title from './app.reducer';

const initialState: string = 'react qbootstrap';
const NOT_EXISTENT_ACTION = {
	type: 'NOT_EXISTENT'
};

describe('title', () => {
	it('should be defined', () => {
		expect(title).toBeDefined();
		expect(typeof title).toEqual('function');
	});

	it('should return the initial state if the action not exist', () => {
		expect(title(initialState, NOT_EXISTENT_ACTION)).toEqual(initialState);
	});
});
