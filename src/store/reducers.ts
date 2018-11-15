import { combineReducers } from 'redux';
import title from '../app/app.reducer';

/**
 * All the reducers of your application.
 * At the moment using just the fake title reducer to make redux works.
 * Feel free to remove this reducer when you are adding your own ones.
 */
const reducers = combineReducers({ title });

export default reducers;
