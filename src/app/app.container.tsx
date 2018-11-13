import { connect } from 'react-redux';
import App from './app.presentational';

const mapStateToProps = (state: any, ownProps: any) => ({});

const mapDispatchToProps: any = (dispatch: any) => ({});

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;
