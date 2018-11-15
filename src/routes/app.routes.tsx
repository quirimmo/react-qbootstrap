import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeRouter from '../routes/home.router';

/**
 * App Routes Component included by the App Presentational Component.
 * It defines all the routes of the application and any other feature related to the routes, like the redirect component.
 * Add here your new Routes or any other redirect rule and so on.
 * This component should contain all the route features of the global app.
 * @class AppRoutes
 * @extends {React.Component<any, any>}
 */
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
