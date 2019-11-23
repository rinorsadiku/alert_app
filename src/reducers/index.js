import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import alertsReducer from './alertsReducer';
import userReducer from './userReducer';

export default combineReducers({
	auth: authReducer,
	alerts: alertsReducer,
	form: formReducer,
	user: userReducer
});
