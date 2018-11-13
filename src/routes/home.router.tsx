import * as React from 'react';
import HomeContainer from '../home/home.container';
import { withRouter } from 'react-router';

export class HomeRouter extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		console.log('home route component props:', this.props);
	}

	public render() {
		return <HomeContainer />;
	}
}

export default withRouter(HomeRouter);
