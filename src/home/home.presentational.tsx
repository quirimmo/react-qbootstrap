import * as React from 'react';

/**
 * Home Presentational component which is rendered by the Home Route Component when displaying the Home Route
 */
class Home extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return <div>I am the home main page presentational component</div>;
	}
}

export default Home;
