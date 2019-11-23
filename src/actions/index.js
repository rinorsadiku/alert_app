import { AUTH_USER, AUTH_ERR, FETCH_USER, FETCH_ALERTS } from './types';
import axios from 'axios';

export const fetchAlerts = () => async dispatch => {
	try {
		const token = localStorage.getItem('token');
		const response = await axios.get(
			'https://alert-api.ornio.xyz/api/alerts',
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		dispatch({ type: FETCH_ALERTS, payload: response.data });
	} catch (err) {
		console.log(err);
	}
};

export const fetchUser = () => async dispatch => {
	try {
		const token = localStorage.getItem('token');
		console.log(token);
		const response = await axios.get(
			'https://alert-api.ornio.xyz/api/users/me',
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		dispatch({ type: FETCH_USER, payload: response.data });
	} catch (err) {
		console.log(err);
	}
};

export const signup = (formProps, callback) => async dispatch => {
	try {
		await axios.post('https://alert-api.ornio.xyz/api/users', formProps);

		// Redirect the user
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERR, payload: 'Email is already in use' });
	}
};

export const signout = () => {
	localStorage.removeItem('token');

	return {
		type: AUTH_USER,
		payload: ''
	};
};

export const signin = (formProps, callback) => async dispatch => {
	try {
		console.log(formProps);
		const response = await axios.post(
			'https://alert-api.ornio.xyz/api/auth/login',
			formProps
		);

		dispatch({ type: AUTH_USER, payload: response.data.token });

		localStorage.setItem('token', response.data.token);

		callback();
	} catch (e) {
		dispatch({
			type: AUTH_ERR,
			payload: "The email given doesn't match the password"
		});
	}
};
