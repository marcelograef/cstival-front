import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { Reducer, combineReducers } from 'redux';

import auth from '@store/branches/auth/reducer';
import table from '@store/branches/table/reducer';

export default (history: History<any>): Reducer =>
	combineReducers({
		auth,
		table,
		router: connectRouter(history)
	});
