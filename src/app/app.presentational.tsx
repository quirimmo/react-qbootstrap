import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './../../assets/styles/main.scss';
import { Container } from 'reactstrap';
import AppRoutes from './../routes/app.routes';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<Container fluid={true}>
				<AppRoutes />
			</Container>
		);
	}
}

export default App;
