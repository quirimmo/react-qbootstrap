import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeRouter from '../routes/home.router';

class AppRoutes extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<BrowserRouter basename="/">
				<Switch>
					<Route exact={true} path="/" component={HomeRouter} />
					<Redirect from="*" to="/" />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default AppRoutes;
