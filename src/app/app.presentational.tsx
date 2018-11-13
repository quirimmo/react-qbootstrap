import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './../../../assets/styles/main.scss';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { isLoading: false, isError: false };
	}

	public render() {
		return <div>APPLICATION</div>;
	}
}

export default App;
