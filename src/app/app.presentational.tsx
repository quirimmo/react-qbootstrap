import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './../../assets/styles/main.scss';
import { Container } from 'reactstrap';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeRoute from '../routes/home.route';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<BrowserRouter basename="/">
				<Container fluid={true}>
					<Switch>
						<Route exact={true} path="/" component={HomeRoute} />
						<Redirect from="*" to="/" />
					</Switch>
				</Container>
			</BrowserRouter>
		);
	}
}

export default App;
