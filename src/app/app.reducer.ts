/**
 * Fake reducer for bootstrapping redux. It provides just a title with no actions to change it, simply a default value.
 * Feel fry to remove this reducer when adding your own reducers.
 */
const title = (state: string = 'react qbootstrap', action: any): string => {
	switch (action.type) {
		default:
			return state;
	}
};

export default title;
