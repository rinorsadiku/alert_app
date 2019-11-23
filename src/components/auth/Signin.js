import React from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '../../actions';

import AuthContainer from './AuthContainer';
import FormField from './FormField';

class Signin extends React.Component {
	onFormSubmit = formValues => {
		this.props.signin(formValues, () => {
			this.props.history.push('/');
		});
	};

	render() {
		return (
			<AuthContainer image={'auth__img--1'}>
				<div className="sign">
					<h2 className="sign__title">Sign in</h2>

					<form
						onSubmit={this.props.handleSubmit(this.onFormSubmit)}
						className="form"
					>
						<div className="form__group">
							<label className="form__label">Email</label>
							<Field
								className="form__input"
								placeholder="Your Email"
								type="text"
								name="email"
								component={FormField}
							/>
						</div>

						<div className="form__group">
							<label className="form__label">Password</label>
							<Field
								className="form__input"
								type="password"
								name="password"
								component={FormField}
							/>
						</div>

						<div className="error">{this.props.errorMessage}</div>

						<div className="form__group">
							<button className="btn--form">Sign in</button>
						</div>
					</form>

					<Link to="/signup" className="btn--link">
						Create new account
					</Link>
				</div>
			</AuthContainer>
		);
	}
}

const validate = values => {
	const errors = {};
	const fields = ['email', 'password'];

	fields.forEach(field => {
		const fieldCapitalized = field.charAt(0).toUpperCase() + field.slice(1);

		if (!values[field]) {
			errors[field] = `${fieldCapitalized} is required`;
		}
	});

	return errors;
};

const mapStateToProps = state => {
	return { errorMessage: state.auth.errorMessage };
};

const form = reduxForm({
	form: 'signinForm',
	validate
})(withRouter(Signin));

export default connect(mapStateToProps, actions)(form);
